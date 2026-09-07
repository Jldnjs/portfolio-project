# Portfolio Project

FastAPI + PostgreSQL + Next.js 풀스택 프로젝트 (Docker Compose 기반)

## 기술 스택

| 레이어 | 기술 |
|--------|------|
| 백엔드 | FastAPI, SQLAlchemy 2.0 (async), Alembic, Pydantic v2 |
| 데이터베이스 | PostgreSQL 16 |
| 프론트엔드 | Next.js 15 (App Router), TypeScript, Tailwind CSS |
| 인프라 | Docker, Docker Compose |

## 프로젝트 구조

```
portfolio-project/
├── backend/                  # FastAPI 앱
│   ├── app/
│   │   ├── main.py           # FastAPI 진입점
│   │   ├── core/
│   │   │   ├── config.py     # 환경변수 설정
│   │   │   └── database.py   # SQLAlchemy 비동기 DB 연결
│   │   ├── models/           # SQLAlchemy 모델
│   │   ├── schemas/          # Pydantic 스키마
│   │   ├── api/v1/           # API 라우터 & 엔드포인트
│   │   └── crud/             # DB CRUD 로직
│   ├── alembic/              # DB 마이그레이션
│   ├── alembic.ini
│   ├── requirements.txt
│   └── Dockerfile
├── frontend/                 # Next.js 앱
│   ├── src/app/
│   ├── Dockerfile
│   └── ...
├── docker-compose.yml        # 개발 환경
├── docker-compose.prod.yml   # 프로덕션 오버라이드
├── .env                      # 환경변수 (git 제외)
└── .env.example              # 환경변수 예시
```

## 시작하기

### 1. 환경변수 설정

```bash
# .env.example을 복사해서 수정
cp .env.example .env
# .env 파일에서 비밀번호, SECRET_KEY 등 변경
```

### 2. 개발 서버 실행

```bash
docker compose up --build
```

서비스별 접속 주소:
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:8000
- **Swagger UI**: http://localhost:8000/api/v1/docs
- **ReDoc**: http://localhost:8000/api/v1/redoc
- **Health Check**: http://localhost:8000/health

### 3. DB 마이그레이션

```bash
# 새 마이그레이션 파일 생성 (모델 변경 후)
docker compose exec backend alembic revision --autogenerate -m "설명"

# 마이그레이션 적용
docker compose exec backend alembic upgrade head

# 마이그레이션 롤백
docker compose exec backend alembic downgrade -1
```

### 4. 백엔드 컨테이너 접속

```bash
docker compose exec backend bash
```

## 프로덕션 배포

```bash
# 프로덕션 모드로 실행 (prod 오버라이드 적용)
docker compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```

## 새 API 엔드포인트 추가하는 방법

1. `backend/app/models/`에 SQLAlchemy 모델 추가
2. `backend/app/schemas/`에 Pydantic 스키마 추가
3. `backend/app/crud/`에 CRUD 함수 추가
4. `backend/app/api/v1/endpoints/`에 라우터 파일 추가
5. `backend/app/api/v1/router.py`에 라우터 등록
6. `alembic revision --autogenerate`로 마이그레이션 생성