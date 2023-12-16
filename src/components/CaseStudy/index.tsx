import React from "react";
import NavBar from "../Elements/NavBar";
import CSHeroSection from "./Sub/CSHeroSection";
import AllCaseStudies from "./Sub/AllCaseStudies";

const CaseStudy = () => {
  return (
    <div>
      <NavBar />
      <CSHeroSection />
      <p className="mt-5 p-5 lg:px-20">Here will the path</p>
      <AllCaseStudies />
    </div>
  );
};

export default CaseStudy;
