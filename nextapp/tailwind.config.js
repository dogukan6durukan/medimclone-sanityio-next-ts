/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        yellow : "#FFC017",
        darkGrey : "#757575",
        lightGrey : "#f2f2f2",
        mediumgreen : "#1A8917"
      }
    },
  },
  plugins: [],
}
