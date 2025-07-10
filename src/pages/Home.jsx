import React from "react";
import HeroSection from "@components/HeroSection";
import VehicleList from "@components/VehicleList";
import ContacnUs from "@components/ContacnUs";
import Section_2 from "@components/Section_2";
import CarBrandsSlick from "@components/CarBrandsSlick";
import RelaxingExperienceHero from "@components/RelaxingExperienceHero";
import OurStatic from "@components/OurStatic";
function Home() {
  return (
    <div>
      <section>
        <HeroSection />
      </section>
      <section>
        <Section_2 />
      </section>
      <section className="w-full bg-white">
        <RelaxingExperienceHero />
      </section>
      <section className="w-full bg-white">
        <CarBrandsSlick />
      </section>
      <section className="min-h-screen bg-white">
        <VehicleList />
      </section>
      <section  >
        <OurStatic />
      </section>
      <section className="bg-white w-full">
        <ContacnUs />
      </section>
    </div>
  );
}

export default Home;
