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
      // adapt design size into responsive units
      // "c-" stands for custom
      skew: {
        'c-20': '20deg',
      },
      padding: {
        'c-72': '4.5rem',
      },
      height: {
        'c-53': '3.313rem',
        'c-450': '25rem',
        'c-665': '41.563rem',
        'c-700': '43.75rem',
        'c-750': '46.875rem',
        'c-800': '50rem',
      },
      maxWidth: {
        'c-1920': '1920px',
      },
      colors: {
        'c-dark': 'var(--c-dark)',
      },
    },
  },
  plugins: [],
};
