// frontend/src/components/Dashboard.tsx
"use client";

import { useState, useCallback } from "react";
// If these imports fail, change them to: import ContextualTuner from "./ContextualTuner";
import ContextualTuner from "@/components/ContextualTuner";
import ExplanationCard from "@/components/ExplanationCard";
import { generateRoomStyle } from "@/lib/api";

export default function Dashboard() {
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [explanation, setExplanation] = useState<string>("");
    const [isProcessing, setIsProcessing] = useState(false);

    // Default placeholder image
    const defaultImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop";

    const handleUpdate = useCallback(async (params: { lighting: number; intensity: number; warmth: number }) => {
        setIsProcessing(true);
        setExplanation(""); // Clear previous explanation while loading
        try {
            const result = await generateRoomStyle({
                image_url: defaultImage, // Using a default image for now as per flow
                lighting_val: params.lighting,
                intensity_val: params.intensity,
                warmth_val: params.warmth,
                explain_mode: true, // Always request explanation for this prototype
            });
            setCurrentImage(result.generated_image_url);
            if (result.explanation) {
                setExplanation(result.explanation);
            }
        } catch (error) {
            console.error("Failed to generate style:", error);
        } finally {
            setIsProcessing(false);
        }
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-8 bg-neutral-900 text-white">
            <div className="z-10 w-full max-w-7xl items-center justify-between font-mono text-sm lg:flex">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    Aura Vision&nbsp;
                    <code className="font-mono font-bold">Prototype</code>
                </p>
            </div>

            <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-8 mt-8">
                {/* Visualization Area */}
                <div className="flex-1 relative aspect-video bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 shadow-2xl group">
                    {/* Base/Generated Image */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={currentImage || defaultImage}
                        alt="Room Visualization"
                        className="w-full h-full object-cover transition-opacity duration-500"
                        style={{ opacity: isProcessing ? 0.7 : 1 }}
                    />

                    {/* Overlay for processing state */}
                    {isProcessing && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
                            <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}

                    {/* Explanation Card Overlay */}
                    {!isProcessing && explanation && (
                        <ExplanationCard explanation={explanation} /> // Assuming this component expects { explanation: string }
                    )}
                </div>

                {/* Controls Area */}
                <div className="w-full lg:w-96 flex flex-col gap-6">
                    <ContextualTuner onUpdate={handleUpdate} isProcessing={isProcessing} />
                    {/* Note: I removed isProcessing prop here because ContextualTuner from Phase 1 might not accept it yet. 
              If your Tuner expects it, add it back: isProcessing={isProcessing} 
          */}

                    <div className="p-6 bg-neutral-800/50 rounded-2xl border border-neutral-700">
                        <h3 className="text-lg font-semibold mb-2 text-gray-200">Debug Info</h3>
                        <p className="text-xs text-gray-400">
                            Base Image: Unsplash Default<br />
                            Backend: http://localhost:8000<br />
                            Status: {isProcessing ? "Generating..." : "Ready"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}