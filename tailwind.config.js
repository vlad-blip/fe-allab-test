/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    maxWidth: {
      '75v': '75vw',
      '95v': '95vw',
      'fit': 'fit-content',
    },
    extend: {
      gridTemplateColumns: {
        'detailed': '1fr minmax(37rem, .5fr)',
        'options': 'repeat(auto-fill, minmax(13rem, 1fr))',
        'options-xl': 'repeat(auto-fill, minmax(22rem, 1fr))',
      }
    },
    fontSize: {
      sm: '1.2rem',
      '2sm': '1.4rem',
      base: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '2.8rem',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        DEFAULT: '#384564',
        100: '#878D9D',
        200: '#38415dd1',
        300: '#55699E',
        400: '#2A3047',
        500: '#3A4562',
        600: '#70778B',
        700: '#3a456221',
        800: '#55699e4d',
        900: '#a1b1db4d',
      },
      white: {
        DEFAULT: '#FFFFFF',
        100: '#F2F4FA',
        200: '#E6E9F2',
        300: '#EFF0F5',
        400: '#E4E5EA',
        500: '#DEE3EF',
        600: '#ffffffab',
      },
      yellow: {
        DEFAULT: '#ffcf00',
        100: '#988b49',
        800: '#ffcf0026',
      }
    },
    boxShadow: {
      DEFAULT: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
      pagination: '2px 1px 7px rgba(0, 0, 0, 0.08), 0px 2px 1px -1px rgba(0, 0, 0, 0.04), 0px 1px 3px rgba(0, 0, 0, 0.12)',
    },
  plugins: [],
  }
}