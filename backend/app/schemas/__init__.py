"""
Pydantic 스키마 정의 폴더

Request/Response 모델을 여기에 정의합니다.

예시:
    from pydantic import BaseModel

    class UserCreate(BaseModel):
        email: str
        password: str

    class UserResponse(BaseModel):
        id: int
        email: str

        model_config = ConfigDict(from_attributes=True)
"""
