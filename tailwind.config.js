/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
          transformStyle: "preserve-3d",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".perspective": {
          perspective: "1000px",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".card-back": {
          transform: "rotateY(180deg)",
        },
      }
      addUtilities(newUtilities)
    })
  ]
}
