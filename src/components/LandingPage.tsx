// frontend/src/components/LandingPage.tsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function LandingPage({ onStart }: { onStart: () => void }) {
    return (
        <div className="min-h-screen flex flex-col font-sans">

            {/* HERO SECTION */}
            <div className="relative h-[65vh] w-full bg-gray-900 overflow-hidden">
                {/* Background Image Placeholder - Replace 'src' with your actual image later */}
                <img
                    src="/api/placeholder/1200/800"
                    alt="Modern Living Room"
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a12]" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6 tracking-tight leading-tight"
                    >
                        Redesign Your <br /> Room in Seconds
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-gray-200 mb-10 font-light max-w-lg"
                    >
                        Real-time style tuning powered by Generative AI
                    </motion.p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onStart}
                        className="bg-black text-white border border-gray-700 px-10 py-4 rounded-lg text-lg font-medium shadow-2xl hover:bg-gray-900 transition-all"
                    >
                        Start Visualizing
                    </motion.button>
                </div>
            </div>

            {/* FEATURES SECTION (Dark Background from your image) */}
            <div className="flex-grow bg-[#0a0a12] text-white py-16 px-6 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">

                    {/* Feature 1 */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-serif">Contextual Tuning</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Fine-tune lighting and intensity to match your exact mood.
                        </p>
                    </div>

                    {/* Feature 2 */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-serif">Furniture Protection</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Keep your actual furniture, change the vibe instantly.
                        </p>
                    </div>

                    {/* Feature 3 */}
                    <div className="space-y-3">
                        <h3 className="text-2xl font-serif">AI Reasoning</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Understand why the design works with instant explanations.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}