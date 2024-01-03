"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import CultureSection from "./Sub/CultureSection";
import PositionCard from "./Sub/PositionCard";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import CareerHero from "./Sub/CareerHero";
import CareerCard from "./Sub/CareerCard";

const Career = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Career";
  }, []);

  return (
    <div>
      <NavBar />
      <CareerHero />
      <p className="p-5 lg:px-20">Home / About Us / Careers</p>
      <CultureSection />
      <CareerCard />
      <PositionCard />
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Career;
