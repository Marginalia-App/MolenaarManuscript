import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: { "2xl": "1200px" },
    },
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        paper: {
          DEFAULT: "hsl(var(--paper))",
          dark: "hsl(var(--paper-dark))",
          aged: "hsl(var(--paper-aged))",
        },
        ink: {
          DEFAULT: "hsl(var(--ink))",
          soft: "hsl(var(--ink-soft))",
          faint: "hsl(var(--ink-faint))",
        },
        ochre: "hsl(var(--ochre))",
        wallpaper: "hsl(var(--wallpaper))",
        oxblood: "hsl(var(--oxblood))",
        border: "hsl(var(--border))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        serif: ["'EB Garamond'", "Georgia", "serif"],
        type: ["'Special Elite'", "'Courier New'", "monospace"],
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: "1" },
          "45%": { opacity: "0.86" },
          "50%": { opacity: "0.7" },
          "55%": { opacity: "0.92" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        flicker: "flicker 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        drift: "drift 9s ease-in-out infinite",
      },
      boxShadow: {
        page: "0 20px 60px -25px hsl(var(--ink) / 0.55)",
        inset: "inset 0 0 120px -30px hsl(var(--ink) / 0.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
