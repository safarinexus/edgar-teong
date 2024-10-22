/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'underline': '0 2px 0 0 black;',
        'underline-dark': '0 2px 0 0 white;',
        'custom': 'inset 0 -3px #0000000d, inset 0 0 0 2px #fff, inset 0 4px 2px #0000000f, inset 0 0 24px 4px #0000000a ,0 1px 3px #0000001f',
        'custom-dark': 'inset 0 -3px #ffffff1a, inset 0 0 0 2px #000, inset 0 4px 2px #ffffff2f, inset 0 0 24px 4px #ffffff1a, 0 1px 3px #ffffff3f'
      },
      fontFamily: {
        'articulat': ['"Articulat CF"', 'sans-serif'],
      },
      fontWeight: {
        'thin': 100,
        'extralight': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'heavy': 900,
      },
      animation: {
        wave: 'wave 1s ease-in-out 1',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },   
          '20%': { transform: 'rotate(-25deg) translateX(-20px)' },  
          '40%': { transform: 'rotate(25deg)' },   
          '60%': { transform: 'rotate(-15deg) translateX(-20px)' },    
          '80%': { transform: 'rotate(15deg)' }, 
        },
      },
    },
    screens: {
      'xs': '450px',
      // => @media (min-width: 450px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
  darkMode: "selector",
}