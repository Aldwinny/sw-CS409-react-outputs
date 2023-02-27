/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...colors,
      salmon: { DEFAULT: "rgb(255, 106, 106)", dark: "rgb(255, 106, 106)" },
      mauve: "rgb(209, 181, 255)",
      blackTransparent: {
        lighter: "rgba(0, 0, 0, 0.6)",
        DEFAULT: "rgba(0, 0, 0, 0.8)",
      },
    },
    fontFamily: {
      silkscreen: ["Silkscreen", "Trebuchet MS", "Arial", "sans-serif"],
      display: ["Trebuchet MS", "Arial", "sans-serif"],
    },
    screens: {
      pc: "1021px",
      tablet: "731px",
      phone: "421px",
    },
    extend: {},
  },
  plugins: [],
};
