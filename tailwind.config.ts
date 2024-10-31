import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'border': 'border-color, border-width, border-style',
        'shadow': 'box-shadow',
        'border-shadow': 'border-color, border-width, border-style, box-shadow' 
      },
      backgroundSize: {
        '300%': '300%',
      },
      boxShadow: {
        'underline': '0 2px 0 0 black;',
        'underline-dark': '0 2px 0 0 white;',
        'underline-hover': '0 2px 0 0 rgba(0, 0, 0, 0.3)',
        'underline-hover-dark': '0 2px 0 0 rgba(255, 255, 255, 0.3)',
        'custom': 'inset 0 -3px #0000000d, inset 0 0 0 2px #fff, inset 0 4px 2px #0000000f, inset 0 0 24px 4px #0000000a ,0 1px 3px #0000001f',
        'custom-dark': 'inset 0 -3px #ffffff1a, inset 0 0 0 2px #000, inset 0 3px 2px #ffffff2f, inset 0 0 24px 4px #ffffff1a, 0 1px 3px #ffffff3f'
      },
      animation: {
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
};
export default config;
