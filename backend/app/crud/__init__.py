"""
CRUD (Create, Read, Update, Delete) 로직 폴더

SQLAlchemy 비동기 세션을 사용한 DB 조작 함수를 여기에 정의합니다.

예시:
    from sqlalchemy.ext.asyncio import AsyncSession
    from sqlalchemy import select
    from app.models.user import User

    async def get_user(db: AsyncSession, user_id: int) -> User | None:
        result = await db.execute(select(User).where(User.id == user_id))
        return result.scalar_one_or_none()

    async def create_user(db: AsyncSession, email: str, hashed_password: str) -> User:
        user = User(email=email, hashed_password=hashed_password)
        db.add(user)
        await db.flush()
        return user
"""
