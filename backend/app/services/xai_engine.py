from typing import Optional
# from vertexai.preview.generative_models import GenerativeModel, Part # Commented out until env is ready

class XAIEngine:
    def __init__(self, project_id: str = "aura-vision-project", location: str = "us-central1"):
        self.project_id = project_id
        self.location = location
        # vertexai.init(project=project_id, location=location)
        # self.model = GenerativeModel("gemini-1.5-flash-001")

    def explain_style_match(self, image_url: str, user_prompt: str) -> str:
        """
        Generates an explanation for why the image matches the user's prompt.
        """
        system_prompt = (
            f'You are an interior design expert. Look at this room image. '
            f'Explain to a non-technical user why this specific room style matches their request: "{user_prompt}". '
            f'Focus on lighting, furniture lines, and color palette. Keep it under 50 words.'
        )

        # Mocking the call for now
        # response = self.model.generate_content([Part.from_uri(image_url, mime_type="image/jpeg"), system_prompt])
        # return response.text
        
        # Mock Response based on prompt keywords
        explanation = "The room features "
        if "soft" in user_prompt.lower():
            explanation += "soft, ambient lighting that creates a cozy atmosphere. "
        elif "bright" in user_prompt.lower():
            explanation += "bright, natural light that opens up the space. "
            
        if "warm" in user_prompt.lower():
            explanation += "Warm wood tones and golden hues add comfort. "
        elif "cool" in user_prompt.lower():
            explanation += "Cool blues and crisp whites create a modern feel. "
            
        explanation += "Furniture lines are clean and balanced."
        
        return explanation
