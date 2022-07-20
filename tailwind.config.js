module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#FFF',
      background: '#012A35',
      accent: '#3ABCE4',
      button: {
        DEFAULT: '#01242E',
        hover: '#04313e',
        active: '#022b38'
      }
    },
    fill: (theme) => theme('colors'),
    fontFamily: {
      sans: ['DM Sans', 'sans'],
      serif: ['DM Serif display']
    },
    fontSize: () => {
      const fontSizes = {
        42: 42,
        40: 40,
        36: 36,
        32: 32,
        28: 28,
        24: 24,
        20: 20,
        DEFAULT: 16,
        12: 12,
        8: 8
      };

      for (let key in fontSizes)
        if (fontSizes.hasOwnProperty(key)) {
          fontSizes[key] /= 16;
          fontSizes[key] += 'rem';
        }

      return fontSizes;
    },
    spacing: {
      px: '1px',
      0: '0',
      4: '0.25rem',
      8: '0.5rem',
      12: '0.75rem',
      16: '1rem',
      20: '1.25rem',
      24: '1.5rem',
      32: '2rem',
      40: '2.5rem',
      48: '3rem',
      64: '4rem',
      80: '5rem'
    },
    borderRadius: (theme) => theme('spacing'),
    extend: {}
  },
  plugins: []
};
