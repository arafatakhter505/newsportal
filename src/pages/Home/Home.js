import React from "react";
import Hero from "./Hero";
import TopTechCrunch from "./TopTechCrunch";
import WallStreetJournal from "./WallStreetJournal ";

const Home = () => {
  return (
    <main className="max-w-screen-xl mx-auto py-12 px-5 min-h-screen">
      <Hero />
      <div className="md:flex gap-8">
        <TopTechCrunch />
        <WallStreetJournal />
      </div>
    </main>
  );
};

export default Home;
