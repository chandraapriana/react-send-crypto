/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "390px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1441px",
      "2xl": "1980px",
    },
    extend: {
      animation: {
        float: "float 1s ease-in-out infinite",
      },
      fontFamily: {
        syncopate: ["Syncopate", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translatey(0px)" },
          "50%": { transform: "translatey(-20px)" },
        },
      },
      scale: {
        "-1": "-1",
      },
    },
  },
};
