"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import WhyHeroSection from "./Sub/WhyHeroSection";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";

const WhyUs = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Why Us";
  }, []);

  return (
    <div>
      <NavBar />
      <WhyHeroSection />
      <p className="p-5 lg:px-20">Home / About Us / Why InfoSight</p>
      <div className="lg:py-10">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default WhyUs;
