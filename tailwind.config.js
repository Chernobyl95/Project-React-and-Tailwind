/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#5651e5',
        secondary: '#709dff',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },

      plugins: [],
    },
  },
};
