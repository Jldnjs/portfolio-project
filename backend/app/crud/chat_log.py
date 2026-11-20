from sqlalchemy.ext.asyncio import AsyncSession

from app.models.chat_log import ChatLog


async def create_chat_log(
    db: AsyncSession,
    *,
    client_ip: str,
    question: str,
    reply: str,
    provider: str,
    is_fallback: bool,
    latency_ms: int,
) -> ChatLog:
    """챗봇 질문·응답 이력을 DB에 저장합니다."""
    log = ChatLog(
        client_ip=client_ip,
        question=question,
        reply=reply,
        provider=provider,
        is_fallback=is_fallback,
        latency_ms=latency_ms,
    )
    db.add(log)
    await db.flush()
    return log

