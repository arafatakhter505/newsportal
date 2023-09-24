import React from "react";
import HeroBanner from "./HeroBanner";
import HeroHeadLine from "./HeroHeadLine";

const Hero = () => {
  return (
    <section className="lg:flex gap-8">
      <div className="lg:w-3/5">
        <HeroBanner />
      </div>
      <div className="lg:w-2/5 lg:mt-0 mt-8">
        <HeroHeadLine />
      </div>
    </section>
  );
};

export default Hero;
