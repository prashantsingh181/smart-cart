/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ['selector', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        "primary-text": "var(--primary-text)",
        "rating-background": "rgb(var(--rating-background), 0.5)",
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        "tertiary-background": "var(--tertiary-background)",
        "theme-color": "var(--theme-color)",
        "secondary-text": "var(--secondary-text)",
        "border-color": "var(--border-color)",
        "button-text-color": "var(--button-text-color)",
        "shadow-color": "var(--shadow-color)",
      },
      fontFamily: {
        roboto: [
          "Roboto",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Liberation Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        cardo: ["Cardo", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "hero-background": "linear-gradient(135deg, var(--gradient-color-1) 0%, var(--gradient-color-2) 50%, var(--gradient-color-3) 100%)",
      },
      keyframes: {
        floatDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        moveForever: {
          "0%": { transform: "translate(-90px, 0%)" },
          "100%": { transform: "translate(85px, 0%)" },
        },
      },
      animation: {
        floatDown: "floatDown 0.5s ease-out",
        moveForever: "moveForever ease-linear infinite"
      },
    },
  },
  plugins: [],
};
