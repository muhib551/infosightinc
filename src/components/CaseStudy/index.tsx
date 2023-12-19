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
    document.title = "InfoSight | Case Study";
  }, []);

  return (
    <div>
      <NavBar />
      <CSHeroSection />
      <p className="mt-5 p-5 lg:px-20">Here will the path</p>
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
