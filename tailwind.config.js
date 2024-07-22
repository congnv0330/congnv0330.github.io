const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JetBrains Mono Variable', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

