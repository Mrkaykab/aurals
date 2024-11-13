/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'tyrian': '#3F043F',
        'alizarin': '#EF2020',
        'turquoise': '#03E5DF',
        'smoke': '#EDEDED',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};