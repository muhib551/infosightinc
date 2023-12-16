import React from "react";
import "@/app/components/HomePage/sub/style.css";
import { useState } from "react";
import HeroSection from "./sub/HeroSection";
import NavBar from "../Elements/NavBar";
import Latest from "./sub/Latest";
import AboutUs from "./sub/AboutUs";
import OurServices from "./sub/OurServices";
import IndustryServices from "./sub/IndustryServices";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar />
      <HeroSection />
      <Latest />
      <AboutUs />
      <OurServices />
      <IndustryServices />
    </>
  );
};

export default HomePage;
