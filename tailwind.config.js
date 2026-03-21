/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_posts/**/*.{html,md}",
    "./*.html",
    "./*.md",
  ],
  theme: {
    extend: {
      colors: {
        "wynk-navy": "#293345",
        "wynk-blue": "#323f5f",
        "wynk-blue-dark": "#3f4e74",
        "wynk-cyan": "#7deefe",
        "wynk-light": "#f3f6f7",
        "wynk-gray": "#59667b",
        "wynk-label": "#00bfda",
        // Legacy
        "wynk-green": "#4CAF50",
      },
      fontFamily: {
        sans: ["Cabin", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
