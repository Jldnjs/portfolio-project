import logging
import time
from functools import lru_cache
from pathlib import Path
from typing import Tuple

import httpx

from app.core.config import settings
from app.core.http_client import get_http_client
from app.schemas.chat import ChatLinkSchema

logger = logging.getLogger(__name__)

GEMINI_API_URL = (
    "https://generativelanguage.googleapis.com/v1beta/models/"
    "{model}:generateContent"
)


@lru_cache(maxsize=1)
def _load_portfolio_context() -> str:
    """포트폴리오 컨텍스트 문서를 1회 로드하여 캐싱합니다. 개인 파일이 없으면 example 템플릿으로 폴백합니다."""
    base_dir = Path(__file__).resolve().parents[2]
    primary_path = base_dir / settings.PORTFOLIO_CONTEXT_PATH
    fallback_path = base_dir / "app/data/portfolio_context.example.md"

    target = primary_path if primary_path.exists() else fallback_path
    if target.exists():
        return target.read_text(encoding="utf-8")
    return "포트폴리오 AI 어시스턴트입니다."


def _suggest_links(text: str) -> list[ChatLinkSchema]:
    """질문 및 답변 내용에 따라 관련 포트폴리오 페이지 링크를 추천합니다."""
    q = text.lower()
    links: list[ChatLinkSchema] = []

    if any(k in q for k in ["voc", "msa", "상담", "포트 충돌"]):
        links.append(ChatLinkSchema(label="VOC-OPS-MSA 상세", href="/project/voc-ops-msa"))
    if any(k in q for k in ["leo", "pllm", "사내", "인텐트", "오버헤드", "95%", "ko-sroberta"]):
        links.append(ChatLinkSchema(label="Leo-PLLM 상세", href="/project/leo-pllm"))
    if any(k in q for k in ["스쿨프렌즈", "school", "security", "감사 로그", "poi"]):
        links.append(ChatLinkSchema(label="스쿨프렌즈 상세", href="/project/school-friends"))
    if any(k in q for k in ["포트폴리오", "gemini", "폴백", "chat_logs"]):
        links.append(ChatLinkSchema(label="포트폴리오 플랫폼 아키텍처", href="/project/portfolio-ai-platform"))
    if any(k in q for k in ["트러블", "문제", "동시성", "톰캣", "tomcat", "장애"]):
        links.append(ChatLinkSchema(label="실무 트러블슈팅", href="/resume/history#troubleshooting"))
    if any(k in q for k in ["이력", "경력", "스택", "기술", "교육", "인싸이트"]):
        links.append(ChatLinkSchema(label="이력서 보기", href="/resume"))

    if not links:
        links = [
            ChatLinkSchema(label="핵심 프로젝트 보기", href="/project/list"),
            ChatLinkSchema(label="이력서 확인하기", href="/resume"),
        ]
    return links[:3]


def _build_fallback_reply(question: str) -> Tuple[str, list[ChatLinkSchema]]:
    """Gemini API 미설정·한도 초과(429)·장애 시 동작하는 무중단 로컬 키워드 폴백 응답"""
    q = question.lower()
    links = _suggest_links(question)

    if any(k in q for k in ["스택", "기술", "skill", "stack", "rag", "fastapi"]):
        return (
            "Java/Spring Boot 백엔드 경험 위에 Python/FastAPI(SSE 스트리밍), "
            "RAG 파이프라인(ChromaDB, Ollama, Gemini), PostgreSQL/MySQL, Docker 기반 "
            "AI 백엔드 아키텍처를 설계하고 구현합니다.",
            links,
        )

    if any(k in q for k in ["트러블", "문제", "어려웠", "해결", "동시성", "톰캣", "tomcat", "오버헤드"]):
        return (
            "실무 및 프로젝트에서 다양한 운영 장애를 해결했습니다. "
            "대표적으로 Tomcat maxParameterCount 튜닝(1,200개+ 파라미터 유실 해결), "
            "@Transactional + 원자적 UPDATE를 통한 동시성 제어, "
            "httpx.AsyncClient 싱글톤화로 연결 생성 오버헤드 95% 감소 경험이 있습니다.",
            links,
        )

    if any(k in q for k in ["이력", "경력", "인싸이트", "resume", "커리어"]):
        return (
            "이력서 요약 페이지와 상세 경력 타임라인에서 경력, 기술 스택, "
            "트러블슈팅 사례와 교육사항을 확인하실 수 있습니다.",
            links,
        )

    return (
        "안녕하세요! 포트폴리오 AI 어시스턴트입니다. "
        "기술 스택, 주요 프로젝트, 트러블슈팅 경험, 경력에 대해 궁금한 점을 물어보세요!",
        links,
    )


async def generate_portfolio_reply(question: str) -> Tuple[str, list[ChatLinkSchema], str, bool, int]:
    """
    Gemini API를 호출해 포트폴리오 기반 답변을 생성합니다.
    반환값: (reply, links, provider, is_fallback, latency_ms)
    """
    start = time.perf_counter()
    api_key = settings.GEMINI_API_KEY.strip()

    if not api_key:
        reply, links = _build_fallback_reply(question)
        latency_ms = int((time.perf_counter() - start) * 1000)
        return reply, links, "fallback", True, latency_ms

    context_text = _load_portfolio_context()
    system_instruction = (
        "당신은 지원자의 포트폴리오 웹사이트에 탑재된 친절하고 정확한 AI 어시스턴트입니다.\n"
        "아래 제공된 [포트폴리오 정보]에만 근거하여 한국어로 간결하고 명확하게 답변하세요.\n"
        "문서에 없는 내용은 절대 지어내지 말고, 모를 경우 이력서 페이지나 이메일 문의를 안내하세요.\n\n"
        f"[포트폴리오 정보]\n{context_text}"
    )

    url = GEMINI_API_URL.format(model=settings.GEMINI_MODEL)
    payload = {
        "system_instruction": {"parts": [{"text": system_instruction}]},
        "contents": [{"role": "user", "parts": [{"text": question}]}],
        "generationConfig": {
            "temperature": 0.3,
            "maxOutputTokens": 600,
        },
    }

    try:
        client = get_http_client()
        response = await client.post(
            url,
            headers={"x-goog-api-key": api_key},
            json=payload,
        )
        response.raise_for_status()
        data = response.json()

        candidates = data.get("candidates") or []
        parts = (candidates[0].get("content") or {}).get("parts") or []
        reply_text = "".join(p.get("text", "") for p in parts).strip()

        if not reply_text:
            raise ValueError("Empty response from Gemini API")

        latency_ms = int((time.perf_counter() - start) * 1000)
        links = _suggest_links(f"{question} {reply_text}")
        return reply_text, links, "gemini", False, latency_ms

    except (httpx.HTTPError, ValueError, KeyError, IndexError) as exc:
        logger.warning("Gemini API call failed, switching to fallback: %s", exc)
        reply, links = _build_fallback_reply(question)
        latency_ms = int((time.perf_counter() - start) * 1000)
        return reply, links, "fallback", True, latency_ms

