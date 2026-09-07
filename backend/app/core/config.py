from typing import List

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        # Docker Compose가 env_file로 환경변수를 주입하므로 env_file 설정 불필요
        # 로컬 직접 실행 시에는 .env 파일을 직접 export 하거나 아래 주석 해제
        # env_file=".env",
        env_file_encoding="utf-8",
        case_sensitive=True,
    )

    # ── 프로젝트 정보 ──────────────────────────
    PROJECT_NAME: str = "Portfolio API"
    VERSION: str = "0.1.0"
    DESCRIPTION: str = "FastAPI + PostgreSQL + Next.js 포트폴리오 백엔드"
    API_V1_STR: str = "/api/v1"

    # ── 데이터베이스 ───────────────────────────
    DATABASE_URL: str

    # ── JWT 인증 ───────────────────────────────
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    # ── CORS ──────────────────────────────────────────
    # pydantic-settings v2에서 List[str] 환경변수는 JSON 형식이어야 해서
    # str로 받아 property에서 분리합니다 (예: "http://a,http://b")
    BACKEND_CORS_ORIGINS: str = "http://localhost:3000"

    @property
    def cors_origins(self) -> List[str]:
        return [o.strip() for o in self.BACKEND_CORS_ORIGINS.split(",") if o.strip()]


settings = Settings()
