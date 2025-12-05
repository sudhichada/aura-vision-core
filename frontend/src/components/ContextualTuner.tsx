// frontend/src/components/ContextualTuner.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Helper: Debounce hook to prevent API flooding
// (As requested in your refinement step)
const useDebounce = (value: number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

interface TunerProps {
  onUpdate: (params: any) => void;
}

export default function ContextualTuner({ onUpdate }: TunerProps) {
  // State for the three specific sliders
  const [lighting, setLighting] = useState(50);
  const [intensity, setIntensity] = useState(30);
  const [warmth, setWarmth] = useState(50); // Color Temp
  const [explain, setExplain] = useState(false); // "Why this match?" toggle

  // Debounce values to 500ms
  const debouncedLighting = useDebounce(lighting, 500);
  const debouncedIntensity = useDebounce(intensity, 500);
  const debouncedWarmth = useDebounce(warmth, 500);

  // Effect: Emit changes only when values stabilize
  useEffect(() => {
    onUpdate({
      lighting: debouncedLighting,
      intensity: debouncedIntensity,
      warmth: debouncedWarmth,
      explain_mode: explain
    });
  }, [debouncedLighting, debouncedIntensity, debouncedWarmth, explain, onUpdate]);

  return (
    <div className="h-full bg-white p-8 border-l border-gray-100 flex flex-col gap-10 shadow-sm">
      {/* Header */}
      <div className="space-y-1">
        <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">Contextual Tuner</h2>
        <p className="text-sm text-gray-500 font-medium">Fine-tune your visualization style.</p>
      </div>

      {/* Sliders Area */}
      <div className="space-y-8">
        <SliderControl 
          label="Lighting Exposure" 
          value={lighting} 
          onChange={setLighting} 
          left="Soft" 
          right="Bright" 
        />
        <SliderControl 
          label="Style Intensity" 
          value={intensity} 
          onChange={setIntensity} 
          left="Subtle" 
          right="Maximalist" 
        />
        <SliderControl 
          label="Color Temperature" 
          value={warmth} 
          onChange={setWarmth} 
          left="Cool" 
          right="Warm" 
        />
      </div>

      {/* "Why This Match?" Toggle (XAI Feature) */}
      <div className="pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setExplain(!explain)}>
          <span className="text-sm font-semibold text-gray-700">Explain "Why this match?"</span>
          <div className={`w-12 h-7 flex items-center rounded-full p-1 transition-colors duration-300 ${explain ? 'bg-black' : 'bg-gray-200'}`}>
            <motion.div
              layout
              className="bg-white w-5 h-5 rounded-full shadow-md"
              animate={{ x: explain ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
        </div>
        {explain && (
            <p className="mt-2 text-xs text-gray-400">
                AI will generate a text explanation for every visual update.
            </p>
        )}
      </div>
    </div>
  );
}

// Sub-component for premium sliders
function SliderControl({ label, value, onChange, left, right }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between text-xs text-gray-400 font-bold uppercase tracking-widest">
        <span>{left}</span>
        <span>{right}</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1.5 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-black focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
      <div className="text-right text-xs font-mono text-gray-400">{label}: {value}%</div>
    </div>
  );
}
