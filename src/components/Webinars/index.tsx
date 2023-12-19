"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import WebinarHeroSection from "./Sub/WebinarHeroSection";
import WebDemand from "./Sub/WebDemand";
import FollowUsCard from "./Sub/FollowUsCard";

const Webinars = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Webinars";
  }, []);

  return (
    <div>
      <NavBar />
      <WebinarHeroSection />
      <p className="p-5 lg:px-20">Here will be path</p>
      <WebDemand />
      <FollowUsCard />
      <div className="lg:py-10">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Webinars;
