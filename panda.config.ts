import {defineConfig} from "@pandacss/dev"
import colors from "./src/style/colors";

const colorFunc = (name: string) => ({
    50: {value: colors[name][name + "1"]},
    100: {value: colors[name][name + "2"]},
    200: {value: colors[name][name + "3"]},
    300: {value: colors[name][name + "4"]},
    400: {value: colors[name][name + "5"]},
    500: {value: colors[name][name + "6"]},
    600: {value: colors[name][name + "7"]},
    700: {value: colors[name][name + "8"]},
    800: {value: colors[name][name + "9"]},
    900: {value: colors[name][name + "10"]},
    950: {value: colors[name][name + "11"]},
})

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
            tokens: {
                colors: {
                    mauve: colorFunc("mauve"),
                    blackA: colorFunc("blackA"),
                    violet: colorFunc("violet"),
                    red: colorFunc("red"),
                    green: colorFunc("green"),
                    indigo: colorFunc("indigo"),
                    slate: colorFunc("slate"),
                }
            },
            keyframes: {
                slideUp: {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: 0},
                },
                slideDown: {
                    from: {height: 0},
                    to: {height: "var(--radix-accordion-content-height)"},
                }
            }
        }
    }
})