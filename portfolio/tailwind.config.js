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
        // Tema Retro
        retroBackground: "#d9d0c7",
        retroPrimary: "#ff8a65",
        retroSecondary: "#72b3ff",
        // Tema Metro
        metroBackground: "#292929",
        metroPrimary: "#7bdcb5",
        metroSecondary: "#6b91c1",
      },
      fontFamily: {
        main: ["Arial", "sans-serif"],
      },
    },
  },
  darkMode: "class", // Impostazione per la modalità scura
  variants: {
    extend: {
      scale: ["hover"],
      boxShadow: ["hover"],
    },
  },
  plugins: [],
};
