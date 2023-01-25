/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      background: '#F8F6F1',
      black: '#0D0D0C',
      white: '#FFF',
      blue: {
        light: '#E7F3FF',
        normal: '#0C88FA'
      },
      grey: {
        1: '#575252'
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
    borderRadius: {
      DEFAULT: '4px',
      '8px': '8px'
    },
    extend: {}
  },
  plugins: []
};
