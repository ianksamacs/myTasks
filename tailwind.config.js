/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'zinc-800': '#303030',
        'slate-400': '#A18CD1',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
