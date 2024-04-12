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
    },
  },
  plugins: [],
};
