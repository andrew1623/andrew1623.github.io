/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.css", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
