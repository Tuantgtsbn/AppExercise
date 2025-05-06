/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './global.css'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // Định nghĩa font mặc định
        sans: ['Poppins-Regular'],
        // Các biến thể khác
        'poppins-medium': ['Poppins-Medium'],
        'poppins-semibold': ['Poppins-SemiBold'],
        'poppins-bold': ['Poppins-Bold']
      },
      colors: {
        brand: '#92A3FD',
        black: '#000',
        secondary: 'linear-gradient(180deg, #C58BF2 0%, #EEA4CE 100%)'
      }
    }
  },
  plugins: []
};
