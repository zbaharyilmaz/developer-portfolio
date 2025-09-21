import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        custom: {
          dune: {
            dark: "#0d1117",
            gold: "#d4af37",
            sand: "#f4e4bc",
            brown: "#8b4513",
          },
          green: {
            900: "#064e3b",
            800: "#065f46",
            700: "#047857",
            600: "#059669",
          },
        },
      },
      fontFamily: {
        sans: ["Single Day", "cursive"],
        mono: ["Single Day", "cursive"],
        display: ["Single Day", "cursive"],
      },
      animation: {
        gradient: "gradient 3s ease infinite",
        "pulse-slow": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        loading: "loading 1.5s infinite",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        loading: {
          "0%": { left: "-100%" },
          "100%": { left: "100%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
