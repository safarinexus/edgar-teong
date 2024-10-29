/** @type {import('tailwindcss').Config} */
export default { 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: "#964B00",
      },
      animation: {
        waveLoad: '1s wave 0.3s ease-in-out 1',
        wave:'1s wave ease-in-out 1', 
        hoverDiagonal: 'diagonalMove 0.4s ease-in-out forwards',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },   
          '20%': { transform: 'rotate(-25deg) translateX(-20px)' },  
          '40%': { transform: 'rotate(25deg)' },   
          '60%': { transform: 'rotate(-15deg) translateX(-20px)' },    
          '80%': { transform: 'rotate(15deg)' }, 
        },
        diagonalMove: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '100%': { transform: 'translateX(5px) translateY(-5px)' },
        },
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'underline': '0 2px 0 0 black;',
        'underline-dark': '0 2px 0 0 white;',
      }
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
  variants: {
    extend: {
      borderColor: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      boxShadow: ['hover', 'focus'],
    },
  },
  plugins: [],
  darkMode: "selector",
}