import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        masjid: {
          50: "#EAF3EF",
          100: "#CFE4DA",
          200: "#9FC9B5",
          300: "#6FAD8F",
          400: "#3F926A",
          500: "#0B4D3C",
          600: "#093F31",
          700: "#073226",
          800: "#05241B",
          900: "#031A13",
          950: "#02120D",
        },
        gold: {
          50: "#FBF6E9",
          100: "#F3E5BE",
          200: "#E9D294",
          300: "#DEBE6C",
          400: "#D2AC52",
          500: "#C9A24B",
          600: "#A9843A",
          700: "#87682C",
          800: "#654C20",
          900: "#463414",
        },
        ivory: "#FAF7F0",
        parchment: "#F3EEE0",
      },
      fontFamily: {
        display: ["var(--font-amiri)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "star-pattern": "url('/patterns/star.svg')",
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slower": "spin 90s linear infinite",
        float: "float 6s ease-in-out infinite",
        "fade-up": "fadeUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
