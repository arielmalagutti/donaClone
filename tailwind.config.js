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
        actionsDropdown:
          "inset 0 0 1px 1px rgba(255 255 255 / 05%),0px 40px 3px 10px rgba(0 0 0 / 10%)",

        addTodoBar: "inset 0 0 0 1px #ffffff10, 0 30px 80px 0 #00000010",

        sidebar:
          "inset 0 0 0 1px #ffffff10,0 2px 8px 0 #00000010, 0 30px 70px 0 #00000010",

        draggableItem:
          "0 4px 12px rgba(0 0 0 / 3%),0 30px 80px rgba(0 0 0 / 10%), inset 0 1px 0 0 var(--category-item-inset-shadow,transparent)",
      },

      textColor: {
        sideBar: {
          itemLength: {
            dark: "#959ba3",
          },
        },

        shortcut: {},
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

        actionsDropdown: {
          light: "",
          dark: "#2b2e35cc",

          hover: {},
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
            dark: "#353941",
          },

          itemLength: {
            dark: "#4c5158",
          },

          todoList: {
            addTodoBar: {
              light: {},

              active: {
                dark: "#2f343d",
              },
            },
          },
        },

        addTodoBar: {
          dark: "#2a2e37cc",

          active: {
            dark: "#2f343d",
          },
        },

        todoItem: {
          dark: "#2f343d",
        },

        checkbox: {
          dark: "#494d55",
        },
      },

      gap: {
        ".75": "0.1875rem",
      },

      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      strokeWidth: {
        1.5: 1.5,
      },
    },
  },
  plugins: [],
};
