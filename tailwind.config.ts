import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#8B5CF6",
          hover: "#7C3AED",
        },
        secondary: {
          DEFAULT: "#F97316",
          hover: "#EA580C",
        },
        text: {
          DEFAULT: "#333333",
          light: "#666666",
        },
        accent: {
          pink: "#FFC0CB",
          yellow: "#FEF7CD",
          green: "#F2FCE2",
          blue: "#D3E4FD",
        },
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
        heading: ["Fredoka One", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;