/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        accent: {
          DEFAULT: '#17bed2',
          dark:    '#0fa3b5',
        },
      },
    },
  },
  plugins: [],
}
