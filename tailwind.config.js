/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "rgb(240, 240, 232)"
      },
    },
  },
  plugins: [],
  darkMode: "selector",
}

