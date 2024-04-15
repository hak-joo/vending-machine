// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        beige: '#fdf6da',
        lightBlue: '#AAC1F0',
        lightOrenge: '#D0B39B',
      },
      backgroundImage: {
        phone: "url('/src/assets/cellphone.png')",
      },
      keyframes: {
        blinking: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        },
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(-200px)',
          },
          '50%': {
            opacity: 0,
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        blinking: 'blinking 1s ease-in-out infinite',
        fade: 'fadeIn 1.5s ease-in-out',
      },
    },
  },
  plugins: [],
};
