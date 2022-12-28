/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: '#F8F6F1',
      black: '#0D0D0C',
      white: '#FFF',
      blue: {
        light: '#E7F3FF',
        normal: '#0C88FA'
      }
    },
    fontSize: {
      'header-lg': [
        '39px',
        {
          lineHeight: '120%',
          fontWeight: '500'
        }
      ],
      'header-md': [
        '25px',
        {
          lineHeight: '120%',
          fontWeight: '500'
        }
      ],
      'header-sm': [
        '20px',
        {
          lineHeight: '120%',
          fontWeight: '500'
        }
      ],
      'title-lg': [
        '16px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
      'title-md': [
        '13px',
        {
          lineHeight: '140%',
          fontWeight: '500'
        }
      ],
      'body-xl': ['20px', '140%'],
      'body-lg': ['16px', '160%'],
      'body-md': ['13px', '140%'],
      'body-sm': ['10px', '120%'],
      base: ['16px', '160%']
    },
    extend: {}
  },
  plugins: []
};
