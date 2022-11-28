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
      height: {
        450: '25rem',
        665: '41.563rem',
        700: '43.75rem',
        750: '46.875rem',
        800: '50rem',
      },
      maxWidth: {
        1920: '1920px',
      },
      colors: {
        'dark-custom': 'var(--dark-custom)',
      },
    },
  },
  plugins: [],
};
