const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}

