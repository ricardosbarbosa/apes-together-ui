const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 0px 0px 4px rgba(126, 74, 155, 0.12)',
      }
    },
    colors: {
      'purple-pleasure': '#7E4A9B',
      'purple-pleasure-dark': 'rgba(97, 43, 128, 1)',
      'creamy-coral': '#E2778A',
      'serengeti-green': '#78CB8F',
      'off-black': '#303030',
      'argent': '#888888',
      'palladium': '#B1B1B1',
      'kingly-cloud': '#DFDFDF',
      'bleached-silk': '#F2F2F2',
      'white': '#FFFFFF',
      ...colors
    },
  },
  plugins: [],
  
}
