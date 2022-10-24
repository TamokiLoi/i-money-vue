/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,vue}"],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primary: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
        "dark-light": "#F8FAFB",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
