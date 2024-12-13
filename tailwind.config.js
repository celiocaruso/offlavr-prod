/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        'sf-pro': ['SF Pro Display', 'sans-serif'],
      },
      colors: {
        text: '#1d2d3e',
        primary: '#1A7CE5',
        'secondary-bg': '#f3f3f3',
        'gray-2': '#D9D9D9',
        'gray-3': '#A4A2A2',
        error: '#CC1717',
        success: '#3EB655',
        warning: '#F9CF58',
      },
      height: {
        'input': '40px',
      }
    },
  },
  plugins: [],
}