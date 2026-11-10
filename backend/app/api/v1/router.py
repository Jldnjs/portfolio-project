from fastapi import APIRouter

from app.api.v1.endpoints import chat, health

api_router = APIRouter()

# 엔드포인트 라우터 등록
api_router.include_router(health.router, prefix="/health", tags=["health"])
api_router.include_router(chat.router, prefix="/chat", tags=["chat"])

# 추후 라우터 추가 예시:
# from app.api.v1.endpoints import users, items
# api_router.include_router(users.router, prefix="/users", tags=["users"])
# api_router.include_router(items.router, prefix="/items", tags=["items"])
