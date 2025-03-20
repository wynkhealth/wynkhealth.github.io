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
        "wynk-green": "#4CAF50",
        "wynk-green-dark": "#45a049",
      },
    },
  },
  plugins: [],
};
