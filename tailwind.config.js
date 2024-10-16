/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: "rgb(240, 240, 232)", 
        purpley: "rgb(40, 23, 83)",
        brown: "#964B00",
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'underline': '0 2px 0 0 black;',
        'underline-dark': '0 2px 0 0 white;',
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
        wave: '1s wave 1.5s ease-in-out 1',
        indicateScroll: '1s indicateScroll 1.5s ease-out infinite',
        fadeIn: '0.5s fadeIn 1s ease-in forwards',
        textFadeIn: 'textFadeIn 1s ease-out forwards', 
        highlight: '0.2s highlight 1s ease-out forwards',
        gradient: 'gradient 6s ease infinite alternate',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },   
          '20%': { transform: 'rotate(-25deg) translateX(-20px)' },  
          '40%': { transform: 'rotate(25deg)' },   
          '60%': { transform: 'rotate(-15deg) translateX(-20px)' },    
          '80%': { transform: 'rotate(15deg)' }, 
        },
        indicateScroll: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(4px)' },
          '75%': { transform: 'translateY(-4px)'},
        },
        fadeIn: {
          '0%': { opacity: '0' }, 
          '100%': { opacity: '1' },
        },
        textFadeIn: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        highlight: {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        }, 
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
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