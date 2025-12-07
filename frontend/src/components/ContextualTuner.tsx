"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ContextualTunerProps {
    onUpdate: (params: { lighting: number; intensity: number; warmth: number }) => void;
    isProcessing: boolean;
}

export default function ContextualTuner({ onUpdate, isProcessing }: ContextualTunerProps) {
    const [lighting, setLighting] = useState(50);
    const [intensity, setIntensity] = useState(50);
    const [warmth, setWarmth] = useState(50);

    // Debounce effect
    useEffect(() => {
        const timer = setTimeout(() => {
            onUpdate({ lighting, intensity, warmth });
        }, 500); // 500ms debounce

        return () => clearTimeout(timer);
    }, [lighting, intensity, warmth, onUpdate]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl w-full max-w-md"
        >
            <h2 className="text-xl font-semibold mb-6 text-white">Contextual Tuner</h2>

            <div className="space-y-6">
                {/* Lighting Control */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-300">
                        <label>Lighting</label>
                        <span>{lighting}%</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={lighting}
                        onChange={(e) => setLighting(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        disabled={isProcessing}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Soft</span>
                        <span>Bright</span>
                    </div>
                </div>

                {/* Intensity Control */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-300">
                        <label>Style Intensity</label>
                        <span>{intensity}%</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={intensity}
                        onChange={(e) => setIntensity(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        disabled={isProcessing}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Subtle</span>
                        <span>Maximalist</span>
                    </div>
                </div>

                {/* Warmth Control */}
                <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-300">
                        <label>Warmth</label>
                        <span>{warmth}%</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value={warmth}
                        onChange={(e) => setWarmth(Number(e.target.value))}
                        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        disabled={isProcessing}
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                        <span>Cool</span>
                        <span>Warm</span>
                    </div>
                </div>
            </div>

            {isProcessing && (
                <div className="mt-4 text-center text-sm text-blue-400 animate-pulse">
                    Updating visualization...
                </div>
            )}
        </motion.div>
    );
}
