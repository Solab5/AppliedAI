/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'roboto-flex': ['Roboto Flex', 'sans-serif'],
        'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
      },
      colors: {
        'brand': {
          'orange': '#FBB24B',
          'blue': '#9CD6DC',
          'brown': '#483627',
        }
      }
    },
  },
  plugins: [],
};