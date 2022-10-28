/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}',
  'index.html'],
  theme: {
    extend: {
      colors: {
        primary: '#FFCE8A',
        secondary: '#F15E50',
        offwhite: '#FFFDFA',
        grayishblue: '#C5C6CE',
        darkgrayishblue: '#5D5F79',
        verydarkblue: '#00001A',
      },
      fontFamily: {
        fontone: ['Inter'],
      }
    },
  },
  plugins: [],
}
