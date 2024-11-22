/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6f61", // Colore principale
        secondary: "#6c63ff", // Colore secondario
        background: "#f5f5f5", // Sfondo chiaro
        darkBackground: "#333333", // Sfondo scuro
        darkPrimary: "#ff4500", // Colore principale scuro
        darkSecondary: "#ff6347", // Colore secondario scuro
      },
      fontFamily: {
        main: ["Arial", "sans-serif"], // Font principale
      },
    },
  },
  darkMode: "class", // Abilita il tema scuro tramite classi
  plugins: [],
};
