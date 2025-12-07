from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.style_engine import StyleEngine
from app.services.xai_engine import XAIEngine

router = APIRouter()
style_engine = StyleEngine()
xai_engine = XAIEngine()

class VisualizationRequest(BaseModel):
    image_url: str
    lighting_val: int
    intensity_val: int
    warmth_val: int
    style_prompt: str = "modern interior"
    explain_mode: bool = False

@router.post("/generate")
def generate_visualization(request: VisualizationRequest):
    try:
        # 1. Generate the image
        result = style_engine.generate_visualization(
            image_url=request.image_url,
            lighting_val=request.lighting_val,
            intensity_val=request.intensity_val,
            warmth_val=request.warmth_val,
            style_prompt=request.style_prompt
        )
        
        # 2. Explain the match if requested
        if request.explain_mode:
            explanation = xai_engine.explain_style_match(
                image_url=result["generated_image_url"],
                user_prompt=result["prompt_used"]
            )
            result["explanation"] = explanation
            
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
