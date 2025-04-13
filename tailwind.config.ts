import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary": "var(--color-brand-primary)",
        "background-primary": "var(--color-bg-primary)",
        "background-secondary": "var(--color-bg-secondary)",
        "background-tertiary": "var(--color-bg-tertiary)",
        "highlight": "var(--color-highlight)",
        "content-primary": "var(--color-content-primary)",
        "content-secondary": "var(--color-content-secondary)",
        "content-light": "var(--color-content-light)",
        "overlay": "var(--color-overlay)"
      },
      fontFamily: {
        primary: ["var(--font-family-primary)"],
      },
      fontSize: {
        base: "var(--font-size-base)",
        small: "var(--font-size-small)",
        h1: "var(--font-size-h1)",
        h2: "var(--font-size-h2)",
        h3: "var(--font-size-h3)",
        h4: "var(--font-size-h4)",
      },
      borderRadius: {
        primary: "var(--border-radius-primary)",
      },
      boxShadow: {
        primary: "var(--box-shadow-primary)",
        secondary: "var(--box-shadow-secondary)"
      },
      spacing: {
        1: "var(--spacing-1)",
        2: "var(--spacing-2)",
        3: "var(--spacing-3)",
        4: "var(--spacing-4)",
        5: "var(--spacing-5)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(200px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-in-out",
        "fade-in-down": "fade-in-down 0.5s ease-in-out",
        "fade-in": "fade-in 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
