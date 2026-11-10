from pydantic import BaseModel, Field


class ChatLinkSchema(BaseModel):
    label: str
    href: str


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1, max_length=1000, description="사용자 질문 메시지")


class ChatResponse(BaseModel):
    reply: str
    links: list[ChatLinkSchema] = []
