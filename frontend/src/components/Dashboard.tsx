"use client";

import React, { useState } from 'react';

export default function Dashboard() {
    // State for interactivity
    const [lighting, setLighting] = useState(35);
    const [intensity, setIntensity] = useState(60);
    const [temp, setTemp] = useState(75);
    const [explainMode, setExplainMode] = useState(true);

    return (
        <>
            {/* Load Material Symbols for Icons */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />

            {/* Custom Styles for Scrollbar hiding */}
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

            <div className="bg-[#f6f7f8] dark:bg-[#101922] font-sans min-h-screen text-zinc-900 dark:text-white">
                <div className="relative flex min-h-screen w-full flex-col">

                    {/* HEADER */}
                    <div className="sticky top-0 z-10 flex h-16 shrink-0 items-center border-b border-white/10 bg-[#f6f7f8] px-4 dark:bg-[#101922]">
                        <button className="flex size-10 shrink-0 items-center justify-center rounded-full text-zinc-700 dark:text-zinc-300 hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                            <span className="material-symbols-outlined text-2xl">arrow_back</span>
                        </button>
                        <h1 className="flex-1 text-center text-lg font-bold text-zinc-900 dark:text-white">Room Visualizer</h1>
                        <div className="size-10 shrink-0"></div>
                    </div>

                    <main className="flex flex-1 flex-col p-4 max-w-2xl mx-auto w-full">
                        <div className="flex flex-1 flex-col gap-4">

                            {/* UPLOAD AREA */}
                            <div className="flex flex-col items-center justify-center gap-6 rounded-xl border-2 border-dashed border-zinc-300 p-8 text-center dark:border-zinc-700 bg-white/50 dark:bg-white/5">
                                <span className="material-symbols-outlined text-5xl text-zinc-400 dark:text-zinc-500">add_photo_alternate</span>
                                <div className="flex flex-col items-center gap-1">
                                    <p className="text-lg font-bold text-zinc-900 dark:text-white">Upload Your Room Photo</p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Tap to upload or drag & drop</p>
                                </div>
                                <button className="flex h-10 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#137fec] px-6 text-sm font-bold text-white transition-opacity duration-300 hover:opacity-80 active:opacity-60">
                                    <span className="truncate">Upload Photo</span>
                                </button>
                            </div>

                            {/* DESIGN CONTROLS (CONTEXTUAL TUNER) */}
                            <div className="flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white/50 p-5 dark:border-zinc-800 dark:bg-zinc-800/20 shadow-sm">
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Design Controls</h3>

                                {/* Lighting Slider */}
                                <div className="flex w-full flex-col gap-2">
                                    <div className="flex w-full items-center justify-between">
                                        <label className="text-base font-medium text-zinc-900 dark:text-white" htmlFor="lighting-slider">Lighting</label>
                                    </div>
                                    <div className="flex h-4 w-full items-center gap-4">
                                        <span className="text-xs text-zinc-500 dark:text-zinc-400">Soft</span>
                                        <input
                                            id="lighting-slider"
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={lighting}
                                            onChange={(e) => setLighting(Number(e.target.value))}
                                            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-zinc-200 dark:bg-zinc-700 accent-[#137fec]"
                                        />
                                        <span className="text-xs text-zinc-500 dark:text-zinc-400">Bright</span>
                                    </div>
                                </div>

                                {/* Style Slider */}
                                <div className="flex w-full flex-col gap-2">
                                    <div className="flex w-full items-center justify-between">
                                        <label className="text-base font-medium text-zinc-900 dark:text-white" htmlFor="style-slider">Style Intensity</label>
                                    </div>
                                    <div className="flex h-4 w-full items-center gap-4">
                                        <span className="text-xs text-zinc-500 dark:text-zinc-400">Subtle</span>
                                        <input
                                            id="style-slider"
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={intensity}
                                            onChange={(e) => setIntensity(Number(e.target.value))}
                                            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-zinc-200 dark:bg-zinc-700 accent-[#137fec]"
                                        />
                                        <span className="text-xs text-zinc-500 dark:text-zinc-400">Max</span>
                                    </div>
                                </div>

                                {/* Temp Slider */}
                                <div className="flex w-full flex-col gap-2">
                                    <div className="flex w-full items-center justify-between">
                                        <label className="text-base font-medium text-zinc-900 dark:text-white" htmlFor="color-temp-slider">Color Temp</label>
                                    </div>
                                    <div className="flex h-4 w-full items-center gap-4">
                                        <span className="text-xs text-zinc-500 dark:text-zinc-400">Warm</span>
                                        <input
                                            id="color-temp-slider"
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={temp}
                                            onChange={(e) => setTemp(Number(e.target.value))}
                                            className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-zinc-200 dark:bg-zinc-700 accent-[#137fec]"
                                        />
                                        <span className="text-xs text-zinc-500 dark:text-zinc-400">Cool</span>
                                    </div>
                                </div>

                                <div className="my-2 border-t border-zinc-200 dark:border-zinc-700"></div>

                                {/* Explain Toggle */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between cursor-pointer" onClick={() => setExplainMode(!explainMode)}>
                                        <label className="text-base font-medium text-zinc-900 dark:text-white cursor-pointer">Why this match?</label>
                                        <button
                                            role="switch"
                                            aria-checked={explainMode}
                                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${explainMode ? 'bg-[#137fec]' : 'bg-zinc-700'}`}
                                        >
                                            <span
                                                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${explainMode ? 'translate-x-5' : 'translate-x-0'}`}
                                            ></span>
                                        </button>
                                    </div>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">Get AI insights on the design choices.</p>
                                </div>

                                <button className="mt-4 flex h-12 w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-[#137fec] px-4 text-base font-bold text-white hover:bg-blue-600 transition-colors shadow-lg">
                                    <span className="truncate">Apply Changes</span>
                                </button>
                            </div>

                            {/* FURNITURE CATALOG */}
                            <div className="flex flex-col gap-4 pt-2">
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Furniture Catalog</h3>
                                <div className="no-scrollbar -mx-4 flex gap-4 overflow-x-auto px-4 pb-4">

                                    {/* Item 1 */}
                                    <div className="flex w-40 shrink-0 flex-col gap-2 group cursor-pointer">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-transparent group-hover:border-[#137fec] transition-all">
                                            <img alt="Minimalist Oak Chair" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1000&auto=format&fit=crop" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Minimalist Chair</h4>
                                            <p className="text-xs text-zinc-600 dark:text-zinc-400">$250</p>
                                        </div>
                                        <button className="flex h-9 w-full items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">Add to Scene</button>
                                    </div>

                                    {/* Item 2 */}
                                    <div className="flex w-40 shrink-0 flex-col gap-2 group cursor-pointer">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-transparent group-hover:border-[#137fec] transition-all">
                                            <img alt="Modern Wooden Table" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=1000&auto=format&fit=crop" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Modern Table</h4>
                                            <p className="text-xs text-zinc-600 dark:text-zinc-400">$600</p>
                                        </div>
                                        <button className="flex h-9 w-full items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">Add to Scene</button>
                                    </div>

                                    {/* Item 3 */}
                                    <div className="flex w-40 shrink-0 flex-col gap-2 group cursor-pointer">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-transparent group-hover:border-[#137fec] transition-all">
                                            <img alt="Scandinavian Sofa" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1000&auto=format&fit=crop" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Scandinavian Sofa</h4>
                                            <p className="text-xs text-zinc-600 dark:text-zinc-400">$1200</p>
                                        </div>
                                        <button className="flex h-9 w-full items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">Add to Scene</button>
                                    </div>

                                    {/* Item 4 */}
                                    <div className="flex w-40 shrink-0 flex-col gap-2 group cursor-pointer">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-2 border-transparent group-hover:border-[#137fec] transition-all">
                                            <img alt="Pendant Lamp" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=1000&auto=format&fit=crop" />
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Pendant Lamp</h4>
                                            <p className="text-xs text-zinc-600 dark:text-zinc-400">$150</p>
                                        </div>
                                        <button className="flex h-9 w-full items-center justify-center rounded-lg bg-zinc-100 text-sm font-bold text-zinc-900 transition-colors hover:bg-zinc-200 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700">Add to Scene</button>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}