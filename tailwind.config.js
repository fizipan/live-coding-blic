/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
        serif: ["Orbitron", "sans-serif"],
      },
      colors: {
        "color-1": "#1A2C21",
        "color-2": "#34A753",
        "color-3": "#FD7B38",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
