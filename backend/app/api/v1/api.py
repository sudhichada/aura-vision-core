from fastapi import APIRouter
from app.api.v1.endpoints import users, products, visualizations, explanations

api_router = APIRouter()

api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(products.router, prefix="/products", tags=["products"])
api_router.include_router(visualizations.router, prefix="/visualizations", tags=["visualizations"])
api_router.include_router(explanations.router, prefix="/explanations", tags=["explanations"])
