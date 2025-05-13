module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    textAlign: false, // Disable default textAlign utilities
  },
  variants: {
    extend: {
      textAlign: ['rtl'], // Enable RTL variants for textAlign
    },
  }
}