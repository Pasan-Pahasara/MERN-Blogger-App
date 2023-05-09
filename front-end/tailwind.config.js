/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Ubuntu': ["Ubuntu", "sans-serif"],
      'babylonica': ['Babylonica', 'cursive'],
      'fira-sans': ['Fira Sans', 'sans-serif'],
      'heading': ['Play', 'sans-serif']
    },
  },
  plugins: [],
}

