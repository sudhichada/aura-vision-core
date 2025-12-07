"use client";

import React from 'react';

interface LandingPageProps {
    onStart: () => void;
}

export default function LandingPage({ onStart }: LandingPageProps) {
    return (
        <>
            <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            {/* Main Container */}
            <div className="relative flex min-h-screen w-full flex-col font-sans bg-[#101922] overflow-x-hidden text-white">

                {/* HERO SECTION */}
                <div className="relative w-full h-[85vh]">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?q=80&w=2670&auto=format&fit=crop")' }}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#101922] via-[#101922]/40 to-transparent" />

                    {/* Hero Content */}
                    <div className="absolute bottom-0 left-0 w-full p-6 pb-12 flex flex-col gap-6 z-10">
                        <div className="space-y-2">
                            <h1 className="text-5xl font-display font-medium leading-tight tracking-tight">
                                Redesign Your <br /> Room in Seconds
                            </h1>
                            <p className="text-gray-300 text-lg font-light">
                                Real-time style tuning powered by Generative AI
                            </p>
                        </div>

                        <button
                            onClick={onStart}
                            className="w-full h-14 bg-white text-black rounded-full font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            Start Visualizing
                        </button>
                    </div>
                </div>

                {/* FEATURES GRID */}
                <div className="bg-[#101922] w-full px-6 py-12">
                    <div className="grid grid-cols-1 gap-10">
                        <div className="space-y-2">
                            <h3 className="text-2xl font-display text-white">Contextual Tuning</h3>
                            <p className="text-gray-400 font-light">Fine-tune lighting, warmth, and style intensity instantly.</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-display text-white">Furniture Protection</h3>
                            <p className="text-gray-400 font-light">Keep your actual furniture, change the vibe.</p>
                        </div>
                    </div>
                </div>

                {/* CATALOG SECTION */}
                <div className="bg-[#101922] pb-20 px-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-display">Trending Furniture</h3>
                        <span className="text-sm text-gray-500">View All</span>
                    </div>

                    {/* Carousel */}
                    <div className="flex overflow-x-auto space-x-5 no-scrollbar pb-4">
                        {[
                            { name: "Eames Lounge", price: "$6,495", img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=600" },
                            { name: "Cloud Sofa", price: "$4,200", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=600" },
                            { name: "Noguchi Table", price: "$2,195", img: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=600" },
                        ].map((item, i) => (
                            <div key={i} className="flex-shrink-0 w-48 flex flex-col gap-3 group">
                                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-gray-800">
                                    <img src={item.img} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" alt={item.name} />
                                    {/* 'Add' Button Overlay */}
                                    <button className="absolute bottom-3 right-3 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold shadow-lg">
                                        +
                                    </button>
                                </div>
                                <div>
                                    <h4 className="font-display text-base text-white">{item.name}</h4>
                                    <p className="text-xs text-gray-500">{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}