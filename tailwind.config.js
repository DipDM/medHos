/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/*.{vue ,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

