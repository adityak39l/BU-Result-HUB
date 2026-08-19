/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        sky: {
          300: '#93c5fd',
          400: '#68c2e3',
          500: '#68c2e3',
          600: '#0284c7',
        },
        navy: {
          800: '#0f172a',
          900: '#0b132b',
          950: '#060c1a',
        }
      }
    },
  },
  plugins: [],
}
