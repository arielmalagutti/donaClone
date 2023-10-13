const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#EBECEF",
        accent: {
          blue: "#3583FF",
          green: "#567b5c",
          grey: "#a9a9a9",
          purple: "#6c1ed4",
          red: "#FF0000",
          yellow: "#ecbc00",
        },
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
