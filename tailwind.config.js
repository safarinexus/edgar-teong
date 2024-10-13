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
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        domine: ['Domine', 'serif'],
      },
      animation: {
        breathing: 'breathing 3s ease-in-out infinite',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
}

