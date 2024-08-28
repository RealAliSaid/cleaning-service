import React from "react";
import HeroSection from "./components/HeroSection";
import OurServices from "./components/OurServices";
import WhyUs from "./components/WhyUs";
import OurProjects from "./components/OurProjects";

const Home = () => {
  return (
    <>
      <HeroSection />
      <OurServices />
      <WhyUs />
      <OurProjects />
    </>
  );
};

export default Home;
