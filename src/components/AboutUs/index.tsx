"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import AboutUsCard from "./Sub/AboutUsCard";
import WeProvide from "../CaseStudy/Sub/WeProvide";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";

const AboutUs = () => {
  React.useEffect(() => {
    document.title = "InfoSight | About Us";
  }, []);

  return (
    <div>
      <NavBar />
      <p className="p-5 lg:px-20">Home / About Us / Careers</p>
      <h1 className="p-5 lg:px-20 text-xl lg:text-4xl font-extrabold ">
        About Us
      </h1>
      <AboutUsCard />
      <WeProvide />
      <div className="lg:py-10">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default AboutUs;
