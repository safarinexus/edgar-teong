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
        'underline-hover': '0 2px 0 0 rgba(0, 0, 0, 0.3)',
        'custom': 
          'inset 0 -3px rgba(0, 0, 0, 0.05),' + //bottom inner shadow 
          'inset 0 0 0 2px rgba(255, 255, 255, 1),' + //border
          'inset 0 4px 2px rgba(0, 0, 0, 0.06),' +  //top inner shadow 
          'inset 0 0 24px 4px rgba(0, 0, 0, 0.04),' +  //inner all shadow 
          '0 1px 3px rgba(0, 0, 0, 0.12)' //outer all shadow
        ,
      },
      animation: {
        wave:'1s wave ease-in-out 1', 
        hoverDiagonal: 'diagonalMove 0.4s ease-in-out forwards',
        hoverRight: 'moveRight 0.4s ease-out forwards',
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
        moveRight: {
          '0%': { transform: 'translateX(0px)' },
          '100%': { transform: 'translateX(5px)' },
        }
      },
      colors: {
        'react': '#4bc8dd', 
        'typescript': '#3277c6',
        'nodejs': '#52a14d',
        'spring': '#6cb336',
        'postgresql': '#376690',
        'mongodb': '#00ee65',
        'tailwindcss': '#00b9ff',
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
  variants: {
    extend: {
      borderColor: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      boxShadow: ['hover', 'focus'],
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
  darkMode: "selector",
};
export default config;
