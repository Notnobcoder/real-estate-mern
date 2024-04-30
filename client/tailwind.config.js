/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue
      }
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        "2xl": "15rem",
      },
      center: true,
    },
  },
  plugins: [],
};
