"""
SQLAlchemy 모델 정의 폴더

새 모델 추가 방법:
1. 이 폴더에 새 파일 생성 (예: user.py)
2. app.core.database.Base 를 상속받아 모델 작성
3. 이 __init__.py에서 import (Alembic이 인식할 수 있도록)

예시:
    from app.models.user import User
"""

# 모델 임포트 예시 (Alembic autogenerate가 감지하려면 반드시 import 필요)
# from app.models.user import User
