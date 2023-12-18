"use client";
import React from "react";
import { useState } from "react";
import HeroSection from "./sub/HeroSection";
import NavBar from "../Elements/NavBar";
import Latest from "./sub/Latest";
import OurServices from "./sub/OurServices";
import IndustryServices from "./sub/IndustryServices";
import Footer from "../Elements/Footer";
import FutureOrangeButtons from "../Elements/FutureOrangButtons";
import TesimonialsComp from "./sub/TesimonialComp";
import WeAre from "./sub/WeAre";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.title = "InfoSight | Home Page";
  }, []);

  return (
    <>
      <NavBar />
      <HeroSection />
      <Latest />
      <WeAre />
      <OurServices />
      <IndustryServices />
      <TesimonialsComp />
      <FutureOrangeButtons />
      <Footer />
    </>
  );
};

export default HomePage;
