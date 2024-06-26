/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        gray: "#fafafa",
        white: "#ffffff",
        dark: "#1a1f24",
        accent: "#0ea2bd",
        darkGray: "#44505c",
        borderGray: "color-mix(in srgb, #fafafa, transparent 90%)",
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
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
      },
      animation: {
        floatDown: 'floatDown 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
