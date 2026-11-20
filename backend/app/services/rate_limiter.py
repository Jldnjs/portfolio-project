import time
from collections import defaultdict, deque


class InMemoryRateLimiter:
    """
    IP별 슬라이딩 윈도우 기반 분당 요청 수 제한기
    (단일 프로세스 기준 구현이며, 멀티 워커 확장 시 Redis 기반으로 대체 가능)
    """

    def __init__(self, max_requests: int = 15, window_seconds: int = 60) -> None:
        self.max_requests = max_requests
        self.window_seconds = window_seconds
        self._hits: dict[str, deque[float]] = defaultdict(deque)

    def is_allowed(self, key: str) -> bool:
        now = time.monotonic()
        bucket = self._hits[key]

        # 윈도우 만료 타임스탬프 제거
        while bucket and now - bucket[0] > self.window_seconds:
            bucket.popleft()

        if len(bucket) >= self.max_requests:
            return False

        if not bucket and key in self._hits:
            # 비어 있는 버킷 정리 후 새 타임스탬프 기록
            self._hits[key] = deque([now])
            return True

        bucket.append(now)
        return True
