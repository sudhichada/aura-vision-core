export interface VisualizationParams {
    image_url: string;
    lighting_val: number;
    intensity_val: number;
    warmth_val: number;
    style_prompt?: string;
    explain_mode?: boolean;
}

export interface VisualizationResponse {
    generated_image_url: string;
    prompt_used: string;
    parameters: {
        lighting: number;
        intensity: number;
        warmth: number;
    };
    explanation?: string;
}

const API_BASE_URL = "http://localhost:8000/api/v1";

export async function generateRoomStyle(params: VisualizationParams): Promise<VisualizationResponse> {
    const response = await fetch(`${API_BASE_URL}/visualizations/generate`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
    });

    if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
    }

    return response.json();
}
