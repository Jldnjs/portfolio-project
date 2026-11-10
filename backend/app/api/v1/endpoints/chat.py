from fastapi import APIRouter

from app.schemas.chat import ChatLinkSchema, ChatRequest, ChatResponse

router = APIRouter()


@router.post("", response_model=ChatResponse)
async def chat_with_portfolio_ai(payload: ChatRequest) -> ChatResponse:
    """포트폴리오 AI 챗봇 응답 엔드포인트"""
    q = payload.message.lower()

    if any(k in q for k in ["스택", "기술", "skill", "stack"]):
        return ChatResponse(
            reply=(
                "프론트엔드는 Next.js(App Router), React, TypeScript, Tailwind CSS를 사용하며, "
                "백엔드는 FastAPI, SQLAlchemy 2.0(Async), PostgreSQL, Docker Compose 기반 풀스택 아키텍처를 다룹니다."
            ),
            links=[
                ChatLinkSchema(label="이력서 및 기술 스택 보기", href="/resume"),
                ChatLinkSchema(label="전체 프로젝트 목록", href="/project/list"),
            ],
        )

    if any(k in q for k in ["트러블", "문제", "어려웠", "해결"]):
        return ChatResponse(
            reply=(
                "주요 트러블슈팅 사례로는:\n"
                "1) 말랑말랑 챗봇: 긴 대화에서 감정 맥락이 유실되는 문제를 최근 대화 요약 메모리 + 감정 태그 동적 프롬프트 주입으로 해결\n"
                "2) 하트 트래커: 월간 캘린더 다중 SVG 애니메이션 프레임 저하를 GPU 가속 속성 최적화로 60fps 확보"
            ),
            links=[
                ChatLinkSchema(label="말랑말랑 챗봇 상세 보기", href="/project/project1"),
                ChatLinkSchema(label="하트 트래커 상세 보기", href="/project/project2"),
            ],
        )

    if any(k in q for k in ["이력", "경력", "resume", "커리어", "연락"]):
        return ChatResponse(
            reply="이력서 요약 페이지와 상세 경력 타임라인에서 학력, 경력, 주요 성과를 확인하실 수 있습니다.",
            links=[
                ChatLinkSchema(label="이력서 요약 (/resume)", href="/resume"),
                ChatLinkSchema(label="상세 경력 타임라인 (/resume/history)", href="/resume/history"),
            ],
        )

    return ChatResponse(
        reply=(
            "안녕하세요! 포트폴리오 AI 어시스턴트입니다. "
            "기술 스택, 토이 프로젝트 소개, 트러블슈팅 경험, 경력/이력서 중 궁금한 주제를 물어보세요!"
        ),
        links=[
            ChatLinkSchema(label="토이 프로젝트 목록 보기", href="/project/list"),
            ChatLinkSchema(label="이력서 확인하기", href="/resume"),
        ],
    )
