"use client";
import React from "react";
import { useState } from "react";
import HeroSection from "./sub/HeroSection";
import NavBar from "../Elements/NavBar";
import Latest from "./sub/Latest";
import AboutUs from "./sub/AboutUs";
import OurServices from "./sub/OurServices";
import IndustryServices from "./sub/IndustryServices";
import Tesimonials from "./sub/Tesimonials";
import Footer from "../Elements/Footer";
import FutureOrangeButtons from "../Elements/FutureOrangButtons";

const HomePage = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <NavBar />
      <HeroSection />
      <Latest />
      <AboutUs />
      <OurServices />
      <IndustryServices />
      <Tesimonials />
      <FutureOrangeButtons />
      <Footer />
    </>
  );
};

export default HomePage;
