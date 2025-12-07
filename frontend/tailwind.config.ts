// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        // Ensure these paths match your folder structure exactly
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        // Add this just in case your structure is nested
        "./frontend/src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#137fec",
                "background-light": "#f6f7f8",
                "background-dark": "#101922",
            },
            fontFamily: {
                // This connects to the variables in layout.tsx
                display: ["var(--font-newsreader)", "serif"],
                sans: ["var(--font-inter)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;