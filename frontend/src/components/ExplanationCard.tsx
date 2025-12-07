"use client";

import { motion } from "framer-motion";

interface ExplanationCardProps {
    explanation: string;
}

export default function ExplanationCard({ explanation }: ExplanationCardProps) {
    if (!explanation) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute bottom-6 left-6 right-6 p-6 rounded-xl bg-black/40 backdrop-blur-md border border-white/10 shadow-lg text-white"
        >
            <div className="flex items-start gap-3">
                <div className="mt-1 w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-1">
                        AI Insight
                    </h4>
                    <p className="text-sm leading-relaxed text-gray-100">
                        {explanation}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
