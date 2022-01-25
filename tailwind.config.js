module.exports = {
  purge: ["./src/**/**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'mint-green': {
          '50': '#f8fffa', 
          '100': '#f0fff5', 
          '200': '#daffe6', 
          '300': '#c3ffd6', 
          '400': '#97feb8', 
          '500': '#6afe99', 
          '600': '#5fe58a', 
          '700': '#50bf73', 
          '800': '#40985c', 
          '900': '#347c4b'
        },
        'main-black': {
          '500': '#11111a',
        }
      },
      fontFamily: {
        'Avenir': ['Avenir'],
        'Pangram-regular': ['pangram-regular'],
        'Pangram-Bold': ['pangram-ebold'],
        'Pangram-black': ['pangram-black'],
        'Pangram-light': ['pangram-light'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
