"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import AboutUsHero from "./Sub/AboutUsHero";
import CultureSection from "./Sub/CultureSection";
import AboutUsCard from "./Sub/AboutUsCard";
import PositionCard from "./Sub/PositionCard";
import FutureBlackButtons from "../Elements/FutureBlackButtons";

const AboutUs = () => {
  React.useEffect(() => {
    document.title = "InfoSight | About Us";
  }, []);

  return (
    <div>
      <NavBar />
      <AboutUsHero />
      <p className="p-5 lg:px-20">Here will be path</p>
      <CultureSection />
      <AboutUsCard />
      <PositionCard />
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default AboutUs;
