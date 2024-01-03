"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import CSHeroSection from "./Sub/CSHeroSection";
import AllCaseStudies from "./Sub/AllCaseStudies";
import WeProvide from "./Sub/WeProvide";
import InfoSight from "./Sub/InfoSight";
import Footer from "../Elements/Footer";
import FutureBlackButtons from "../Elements/FutureBlackButtons";

const CaseStudy = () => {
  React.useEffect(() => {
    document.title =
      "Infosight Case Studies Cybersecurity Solutions | InfoSight ";
  }, []);

  return (
    <div>
      <NavBar />
      <CSHeroSection />
      <p className="mt-5 p-5 lg:px-20">Home / Case Studies</p>
      <AllCaseStudies />
      <WeProvide />
      <div className="lg:py-10">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default CaseStudy;
