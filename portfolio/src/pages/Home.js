import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <>
      <GlobalStyles />
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h1>Benvenuto al mio Portfolio</h1>
        <p>Esplora i miei progetti e scopri di più su di me!</p>
        <HeroSection />
      </div>
    </>
  );
}

export default Home;
