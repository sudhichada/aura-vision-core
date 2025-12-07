from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_users():
    return [{"user_id": "1", "email": "demo@example.com"}]
