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
    document.title = "Webinars";
  }, []);

  return (
    <div>
      <NavBar />
      <WebinarHeroSection />
      <p className="p-5 lg:px-20">Home / Insights / Webinars</p>
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
