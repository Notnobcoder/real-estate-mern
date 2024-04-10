/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        "2xl": "15rem",
      },
      center: true,
    },
    extend: {},
  },
  plugins: [require("flowbite-react")],
};
