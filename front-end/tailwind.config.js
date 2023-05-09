/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          soft: "#183B56",
          hard: "#0D2436",
        },
      },
    },
    fontFamily: {
      Ubuntu: ["Ubuntu", "sans-serif"],
      babylonica: ["Babylonica", "cursive"],
      "fira-sans": ["Fira Sans", "sans-serif"],
      heading: ["Play", "sans-serif"],
    },
  },
  plugins: [],
};
