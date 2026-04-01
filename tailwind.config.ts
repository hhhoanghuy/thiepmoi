import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            animation: {
                'border-spin': 'border-spin 4s linear infinite',
            },
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            fontFamily: {
                'geist-mono': ['var(--font-geist-mono)'],
            },
        },
    },
    darkMode: "class",
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [nextui(), require('tailwindcss-motion'),
    ]
} satisfies Config;
