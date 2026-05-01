import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // すこやかブランドカラー（RiRus風パステル）
        green: {
          light: "#E8F5EE",
          DEFAULT: "#5BAD7F",
          dark: "#3D8A60",
        },
        orange: {
          light: "#FEF3E7",
          DEFAULT: "#F5A64A",
          dark: "#D4832A",
        },
        blue: {
          light: "#E7F5F8",
          DEFAULT: "#59B8C7",
          dark: "#3A96A8",
        },
        pink: {
          light: "#FEF0F3",
          DEFAULT: "#F27E91",
          dark: "#D05A71",
        },
        purple: {
          light: "#F2EDFA",
          DEFAULT: "#9B7FCC",
          dark: "#7A5EAA",
        },
        brown: {
          DEFAULT: "#3D3732",
          light: "#6B5F58",
        },
      },
      fontFamily: {
        sans: [
          '"Noto Sans JP"',
          '"Hiragino Sans"',
          '"Hiragino Kaku Gothic ProN"',
          '"Yu Gothic"',
          "sans-serif",
        ],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
