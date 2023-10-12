/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: "#EBECEF",
        accent: {
          blue: "#20438d",
          green: "#567b5c",
          grey: "#a9a9a9",
          purple: "#6c1ed4",
          red: "#FF0000",
          yellow: "#ecbc00",
        },
      },
    },
  },
  plugins: [],
};
