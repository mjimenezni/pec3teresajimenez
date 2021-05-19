const colors = require('tailwindcss/colors')
module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: colors.rose,
      gray: colors.gray,
      blue: {
        light: '#a8c1ea',
        DEFAULT: '#8498ba',
        dark: '#2d62bc',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#d29e99',
        dark: '#92504a',
      },
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', 'Roboto', 'Arial'],
      'serif': ['ui-serif', 'Georgia', 'Times New Roman'],
      'main': ['Roboto'],
      'tittle': ['Indie'],
      'nav': ['Indie']
     },
    extend: {},

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
