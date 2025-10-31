/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.html"
  ],
  theme: {
    extend: {
      maxWidth: {
        '1212': '1212px',
      },
      fontFamily: {
        'sans': ['Nunito Sans', 'sans-serif'],
        'next': ['NEXT ART', 'sans-serif'],
      },
      colors: {
        'green': '#1A3E3E',
        'white': '#FDFDFD',
        'black': '#18121E',
        'yellow': '#F2BE22',
        "border": "#E1E3E4",
        "background": "#F3F5F4"
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'semibold': '600',
        'bold': '700',
        'heavy': '900',
      },
    },
  },
  plugins: [],
}

