module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: "'Caveat', cursive"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
