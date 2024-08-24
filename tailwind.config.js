/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "var(--primary-text)",
        "rating-background": "var(--rating-background)",
        "primary-background": "var(--primary-background)",
        "theme-color": "var(--theme-color)",
        "secondary-text": "var(--secondary-text)",
        "border-color": "var(--border-color)",
        "button-text-color": "var(--button-text-color)",
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
      keyframes: {
        floatDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        floatDown: "floatDown 0.5s ease-out",
      },
    },
  },
  plugins: [],
};
