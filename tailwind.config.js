/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nm: {
          bg: '#e0e5ec',
          shadow: '#a3b1c6',
          light: '#ffffff',
          darkBg: '#2d3436',
          darkShadow: '#23292b',
          darkLight: '#373f41',
        }
      },
      boxShadow: {
        'nm-flat': '9px 9px 16px #a3b1c6, -9px -9px 16px #ffffff',
        'nm-inset': 'inset 9px 9px 16px #a3b1c6, inset -9px -9px 16px #ffffff',
        'nm-dark-flat': '9px 9px 16px #23292b, -9px -9px 16px #373f41',
        'nm-dark-inset': 'inset 9px 9px 16px #23292b, inset -9px -9px 16px #373f41',
      }
    },
  },
  plugins: [],
}
