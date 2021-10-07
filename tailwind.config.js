module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: "'Chilanka', cursive",
        secondary: "'Satisfy', cursive",
        tertiary: "'Sunshiney', cursive",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
