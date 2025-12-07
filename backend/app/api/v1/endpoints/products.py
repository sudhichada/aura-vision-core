from fastapi import APIRouter

router = APIRouter()

@router.get("/")
def read_products():
    return [{"product_id": "1", "sku": "CHAIR-001"}]
