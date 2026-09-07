from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase

from app.core.config import settings

# Async Engine 생성
engine = create_async_engine(
    settings.DATABASE_URL,
    echo=False,        # SQL 로그 출력 (디버그 시 True로 변경)
    pool_pre_ping=True,
    pool_size=10,
    max_overflow=20,
)

# Session Factory
AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autocommit=False,
    autoflush=False,
)


class Base(DeclarativeBase):
    """모든 SQLAlchemy 모델의 기반 클래스"""
    pass


async def get_db() -> AsyncSession:
    """FastAPI Dependency: DB 세션을 주입하고, 요청이 끝나면 자동으로 닫음"""
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()
