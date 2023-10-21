const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      borderRadius: {
        "1/2": "50%",
      },

      boxShadow: {
        blur: {
          1: "20px 200px 240px rgba(0, 0, 0, 0.1)",
          2: "0px 160px 160px rgba(0, 0, 0, 0.1)",
          3: "0px -280px 220px rgba(0, 0, 0, 0.1)",
        },

        draggableItem:
          "0 4px 12px rgba(0 0 0 / 3%),0 30px 80px rgba(0 0 0 / 10%), inset 0 1px 0 0 var(--category-item-inset-shadow,transparent)",
      },

      colors: {
        accent: {
          beige: { 100: "#7f6f63" },
          blue: {
            100: "#00c4ff",
            200: "#0092ff",
            300: "#0065b4",
          },
          teal: { 100: "#00bcae" },
          green: { 100: "#00bc65" },
          grey: { 100: "#9195a4" },
          pink: {
            100: "#ff62e8",
            200: "#cf0092",
          },
          purple: {
            100: "#883fff",
            200: "#4843ff",
          },
          red: {
            50: "#ff5d4a",
            100: "#ff0030",
            200: "#bd0000",
          },
          yellow: {
            100: "#fff1a5",
            200: "#e3bb00",
          },
        },

        background: {
          light: "#eceeef",
          dark: "#232529",
        },

        sideBar: {
          light: "#fefefecc",
          dark: "#292c32",

          item: {
            light: "#f5f7fa",
          },
        },
      },

      gap: {
        ".75": "0.1875rem",
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
