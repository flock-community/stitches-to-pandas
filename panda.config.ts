import { defineConfig } from "@pandacss/dev"
export default defineConfig({
    // Whether to use css reset
    preflight: true,
    // Where to look for your css declarations
    include: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./pages/**/*.{js,jsx,ts,tsx}",
        "./stories/**/*.{js,jsx,ts,tsx}",
    ],
    // Files to exclude
    exclude: [],
    // The output directory for your css system
    outdir: "styled-system",
    jsxFramework: "react",
    theme: {
        extend: {
            keyframes: {
                slideUp: {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: 0 },
                },
                slideDown: {
                    from: { height: 0 },
                    to: { height: "var(--radix-accordion-content-height)" },
                }
            }
        }
    }
})