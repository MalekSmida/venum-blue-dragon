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
        'c-5': '5px',
        'c-63': '3.938rem',
        'c-72': '4.5rem',
      },
      height: {
        'c-53': '3.313rem',
        'c-91': '91px',
        'c-450': '25rem',
        'c-575': '575px',
        'c-665': '41.563rem',
        'c-700': '43.75rem',
        'c-750': '46.875rem',
        'c-800': '50rem',
        'c-850': '849px',
      },
      maxWidth: {
        'c-1920': '1920px',
      },
      colors: {
        'c-dark': 'var(--c-dark)',
      },
      fontSize: {
        'c-16': [
          '16px',
          {
            lineHeight: '24px',
            fontWeight: '400',
          },
        ],
        'c-18': [
          '18px',
          {
            lineHeight: '28px',
            fontWeight: '400',
          },
        ],
        'c-30': [
          '30px',
          {
            lineHeight: '36px',
            fontWeight: '400',
          },
        ],
        xl: [
          '1.375rem', // 22px on a root font-size of 16px
          {
            lineHeight: '1.75rem',
            fontWeight: '400',
          },
        ],
        '2xl': [
          '1.5rem', // 24 px
          {
            lineHeight: '2rem',
            fontWeight: '400',
          },
        ],
        '4xl': [
          '2.188rem', // 35px
          {
            lineHeight: '2.25rem',
            fontWeight: '400',
          },
        ],
        '5xl': [
          '2.813rem', // 45px
          {
            lineHeight: '2.5rem',
            fontWeight: '700',
          },
        ],
      },
      spacing: {
        arrow: 'calc((100% - 2.75rem) /2 )', // so that arrows in swipe component are centered
      },
    },
  },
  plugins: [],
};
