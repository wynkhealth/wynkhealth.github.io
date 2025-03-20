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
        "wynk-green-light": "#60c164",
        "wynk-green-dark": "#45a049",
        white: "#ffffff",
      },
      fontFamily: {
        sans: ["Quicksand", "sans-serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#374151",
            a: {
              color: "#4CAF50",
              "&:hover": {
                color: "#45a049",
              },
            },
            h1: {
              color: "#111827",
            },
            h2: {
              color: "#111827",
            },
            h3: {
              color: "#111827",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
