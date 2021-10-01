module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       'body': ['"Lexend"', 'sans-serif'],
    },

    // colors: {
    //   weta: {
    //     light: '#71808E',
    //     DEFAULT: '#34495E'
    //   }
    // },

    extend: {
      colors: {
        'weta': '#34495E',
      },
      textColor: {
        'primary': '#34495E',
        'secondary': '#2C3E50',
        'danger': '#e3342f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
