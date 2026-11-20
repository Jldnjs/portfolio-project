from typing import Optional

import httpx

_http_client: Optional[httpx.AsyncClient] = None


async def init_http_client() -> httpx.AsyncClient:
    """애플리케이션 시작 시 전역 싱글톤 httpx.AsyncClient를 생성합니다."""
    global _http_client
    if _http_client is None or _http_client.is_closed:
        _http_client = httpx.AsyncClient(
            timeout=httpx.Timeout(12.0, connect=5.0),
            limits=httpx.Limits(max_keepalive_connections=20, max_connections=50),
        )
    return _http_client


async def close_http_client() -> None:
    """애플리케이션 종료 시 싱글톤 httpx.AsyncClient 연결 풀을 정리합니다."""
    global _http_client
    if _http_client is not None and not _http_client.is_closed:
        await _http_client.aclose()
    _http_client = None


def get_http_client() -> httpx.AsyncClient:
    """현재 활성화된 싱글톤 httpx.AsyncClient를 반환합니다."""
    global _http_client
    if _http_client is None or _http_client.is_closed:
        _http_client = httpx.AsyncClient(
            timeout=httpx.Timeout(12.0, connect=5.0),
            limits=httpx.Limits(max_keepalive_connections=20, max_connections=50),
        )
    return _http_client

