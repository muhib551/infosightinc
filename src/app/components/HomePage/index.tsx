import React from "react";
import "@/app/components/HomePage/sub/style.css";
import { useState } from "react";
import HeroSection from "./sub/HeroSection";
import NavBar from "../Elements/NavBar";
import Latest from "./sub/Latest";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <NavBar />
      <HeroSection />
      <Latest />
    </>
  );
};

export default HomePage;
