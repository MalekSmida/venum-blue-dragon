/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        445: '27.813rem', // eq to 445px
        895: '55.938rem',
      },
      height: {
        665: '41.563rem',
        800: '50rem',
      },
      maxWidth: {
        1920: '1920px',
      },
    },
  },
  plugins: [],
};
