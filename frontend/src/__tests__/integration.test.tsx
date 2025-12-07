import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Home from '@/app/page'
import { generateRoomStyle } from '@/lib/api'

// Mock the API module
jest.mock('@/lib/api', () => ({
    generateRoomStyle: jest.fn(),
}))

describe('Trust Verification Loop', () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })

    it('displays explanation card after successful generation', async () => {
        // 1. Setup Mock
        const mockResponse = {
            generated_image_url: 'https://example.com/generated.jpg',
            prompt_used: 'test prompt',
            parameters: { lighting: 60, intensity: 50, warmth: 50 },
            explanation: 'The room features soft lighting and warm tones.',
        };
        (generateRoomStyle as jest.Mock).mockResolvedValue(mockResponse);

        // 2. Render Page
        render(<Home />)

        // 3. Simulate User Interaction (Adjust Lighting)
        const lightingSlider = screen.getByRole('slider', { name: /lighting/i }) // Note: We need to ensure aria-label is present or use other selector
        // Fallback if aria-label is missing in component (we should fix that, but for now let's find by input type)
        // Actually, let's assume we need to find it by the label text we rendered
        // "Lighting" text is in a div above the input. 
        // Let's use getByDisplayValue or similar if needed, but let's try to be specific.
        // In ContextualTuner, we have <label>Lighting</label> but it's not associated with input via ID.
        // Let's rely on the fact that there are 3 sliders. Lighting is the first one.
        const sliders = screen.getAllByRole('slider');
        const lightingInput = sliders[0];

        fireEvent.change(lightingInput, { target: { value: '60' } });

        // 4. Verify Loading State
        // The debounce is 500ms. We need to advance timers or wait.
        // Since we are in an integration test with real timers by default, we can wait.
        // However, for stability, let's wait for the loading spinner.

        // Wait for debounce to trigger
        await waitFor(() => {
            expect(generateRoomStyle).toHaveBeenCalled();
        }, { timeout: 1000 });

        // 5. Verify Explanation Card Appears
        await waitFor(() => {
            expect(screen.getByText('AI Insight')).toBeInTheDocument();
            expect(screen.getByText('The room features soft lighting and warm tones.')).toBeInTheDocument();
        });
    })
})
