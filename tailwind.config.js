/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
    },
  },
  plugins: [
    import('tailwindcss-rtl'),
    import('@tailwindcss/line-clamp')
  ],
  corePlugins: {
    textAlign: false, // Disable default textAlign utilities
  },
  variants: {
    extend: {
      textAlign: ['rtl'], // Enable RTL variants for textAlign
    },
  }
}