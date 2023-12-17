import React from "react";
import NavBar from "../Elements/NavBar";
import CSHeroSection from "./Sub/CSHeroSection";
import AllCaseStudies from "./Sub/AllCaseStudies";
import WeProvide from "./Sub/WeProvide";
import InfoSight from "./Sub/InfoSight";
import Future from "../HomePage/sub/Future";
import CaseStudyFuture from "./Sub/CaseStudyFuture";
import Footer from "../Elements/Footer";

const CaseStudy = () => {
  return (
    <div>
      <NavBar />
      <CSHeroSection />
      <p className="mt-5 p-5 lg:px-20">Here will the path</p>
      <AllCaseStudies />
      <WeProvide />
      <InfoSight />
      <CaseStudyFuture />
      <Footer />
    </div>
  );
};

export default CaseStudy;
