/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Arial", "Helvetica", "sans-serif"],
        sans: ["Inter", "Arial", "Helvetica", "sans-serif"]
      },
      letterSpacing: {
        editorial: "0.22em"
      }
    }
  },
  plugins: []
};