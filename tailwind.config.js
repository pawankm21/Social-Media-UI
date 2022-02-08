module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "1/12": "8.33333333",
        "2/12": "16.66666667",
        "3/12": "25",
        "4/12": "33.33333333",
        "5/12": "41.66666667",
        "6/12": "50",
        "7/12": "58.33333333",
        "8/12": "66.66666667",
        "9/12": "75",
        "10/12": "83.33333333",
        "11/12": "91.66666667",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
