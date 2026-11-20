from fastapi import APIRouter

from app.schemas.chat import ChatLinkSchema, ChatRequest, ChatResponse

router = APIRouter()


@router.post("", response_model=ChatResponse)
async def chat_with_portfolio_ai(payload: ChatRequest) -> ChatResponse:
    """포트폴리오 AI 챗봇 응답 엔드포인트"""
    q = payload.message.lower()

    if any(k in q for k in ["스택", "기술", "skill", "stack", "rag", "fastapi"]):
        return ChatResponse(
            reply=(
                "Java/Spring Boot 백엔드 경험과 함께 Python/FastAPI, RAG 파이프라인, "
                "PostgreSQL/MySQL, Docker 기반 풀스택 아키텍처를 설계하고 구현합니다."
            ),
            links=[
                ChatLinkSchema(label="이력서 및 기술 스택 보기", href="/resume"),
                ChatLinkSchema(label="전체 프로젝트 목록", href="/project/list"),
            ],
        )

    if any(k in q for k in ["트러블", "문제", "어려웠", "해결", "동시성"]):
        return ChatResponse(
            reply="실무 및 프로젝트에서 해결한 트러블슈팅 사례는 이력서 타임라인과 각 프로젝트 상세 페이지에서 확인하실 수 있습니다.",
            links=[
                ChatLinkSchema(label="트러블슈팅 상세 보기", href="/resume/history#troubleshooting"),
                ChatLinkSchema(label="프로젝트 목록 보기", href="/project/list"),
            ],
        )

    if any(k in q for k in ["이력", "경력", "resume", "커리어", "연락"]):
        return ChatResponse(
            reply="이력서 요약 페이지와 상세 경력 타임라인에서 경력, 기술 스택, 교육사항을 확인하실 수 있습니다.",
            links=[
                ChatLinkSchema(label="이력서 요약 (/resume)", href="/resume"),
                ChatLinkSchema(label="상세 경력 타임라인 (/resume/history)", href="/resume/history"),
            ],
        )

    return ChatResponse(
        reply=(
            "안녕하세요! 포트폴리오 AI 어시스턴트입니다. "
            "기술 스택, 대표 프로젝트, 트러블슈팅 경험, 경력에 대해 물어보세요!"
        ),
        links=[
            ChatLinkSchema(label="핵심 프로젝트 보기", href="/project/list"),
            ChatLinkSchema(label="이력서 확인하기", href="/resume"),
        ],
    )
