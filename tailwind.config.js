import { transform } from 'framer-motion';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        bouncing:"bouncing 0.5s 0.5s ease-in-out infinite alternate"
      },
      keyframes:{
        bouncing:{
          '100%':{
           translate:'0 -10px'
          }
        }
      }
    },
  },
  plugins: [],
}

