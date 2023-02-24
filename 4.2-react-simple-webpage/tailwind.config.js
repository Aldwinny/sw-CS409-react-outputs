/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      salmon: { normal: "rgb(255, 106, 106)", dark: "rgb(255, 106, 106)" },
      mauve: "rgb(209, 181, 255)",
      blackTransparent: "rgba(0, 0, 0, 0.8)",
    },
    fontFamily: {
      silkscreen: ["Silkscreen", "Trebuchet MS", "Arial", "sans-serif"],
      display: ["Trebuchet MS", "Arial", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
