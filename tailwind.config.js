/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        sm: "0.8rem",
      },
      spacing: {
        30: "8rem",
        50: "12rem",
      },
    },
  },
  plugins: [],
};
