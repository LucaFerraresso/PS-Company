import HeroSection from "../components/sections/HeroSection";

function Home() {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold">Benvenuto al mio Portfolio</h1>
      <p className="mt-4 text-xl">
        Esplora i miei progetti e scopri di più su di me!
      </p>

      <HeroSection />
    </div>
  );
}

export default Home;
