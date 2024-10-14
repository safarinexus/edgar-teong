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
        domine: ['Domine', 'serif'],
      },
      animation: {
        breathing: 'breathing 3s ease-in-out infinite',
        wave: '1s wave 1.5s ease-in-out 1',
        updown: '1s updown 1.5s ease-out infinite',
        fadeIn: '0.5s fadeIn 1s ease-in forwards',
      },
      keyframes: {
        breathing: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },   
          '20%': { transform: 'rotate(-25deg) translateX(-20px)' },  
          '40%': { transform: 'rotate(25deg)' },   
          '60%': { transform: 'rotate(-15deg) translateX(-20px)' },    
          '80%': { transform: 'rotate(15deg)' }, 
        },
        updown: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(4px)' },
          '75%': { transform: 'translateY(-4px)'},
        },
        fadeIn: {
          '0%': { opacity: '0' }, 
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  darkMode: "selector",
}