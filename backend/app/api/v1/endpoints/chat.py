import logging

from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.database import get_db
from app.crud.chat_log import create_chat_log
from app.schemas.chat import ChatRequest, ChatResponse
from app.services.llm_service import generate_portfolio_reply
from app.services.rate_limiter import InMemoryRateLimiter

logger = logging.getLogger(__name__)

router = APIRouter()
rate_limiter = InMemoryRateLimiter(
    max_requests=settings.CHAT_RATE_LIMIT_PER_MINUTE,
    window_seconds=60,
)


@router.post("", response_model=ChatResponse)
async def chat_with_portfolio_ai(
    request: Request,
    payload: ChatRequest,
    db: AsyncSession = Depends(get_db),
) -> ChatResponse:
    """
    포트폴리오 AI 챗봇 응답 엔드포인트
    - IP 기반 분당 Rate Limit 적용
    - 전역 싱글톤 httpx.AsyncClient로 Gemini API 호출 (장애/한도 초과 시 로컬 폴백)
    - 질문/응답/지연시간/폴백 여부를 PostgreSQL(chat_logs)에 기록
    """
    client_ip = request.client.host if request.client else "unknown"
    if not rate_limiter.is_allowed(client_ip):
        raise HTTPException(
            status_code=status.HTTP_429_TOO_MANY_REQUESTS,
            detail="잠시 후 다시 질문해 주세요. (요청 한도 초과)",
        )

    reply, links, provider, is_fallback, latency_ms = await generate_portfolio_reply(
        payload.message
    )

    # DB 로깅 실패가 사용자 챗봇 응답을 중단시키지 않도록 방어
    try:
        await create_chat_log(
            db,
            client_ip=client_ip,
            question=payload.message,
            reply=reply,
            provider=provider,
            is_fallback=is_fallback,
            latency_ms=latency_ms,
        )
    except Exception as exc:
        logger.warning("Failed to persist chat log to DB: %s", exc)

    return ChatResponse(
        reply=reply,
        links=links,
        provider=provider,
        is_fallback=is_fallback,
        latency_ms=latency_ms,
    )
