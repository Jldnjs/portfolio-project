from fastapi import APIRouter
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import Depends

from app.core.database import get_db

router = APIRouter()


@router.get("")
async def health_check(db: AsyncSession = Depends(get_db)):
    """DB 연결 포함 헬스체크"""
    await db.execute(text("SELECT 1"))
    return {"status": "ok", "database": "connected"}
