"use client";
import React from "react";
import Button from "../Elements/Button";
import TestimonialCard from "./Sub/TestimonialCard";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import TestHeroSection from "./Sub/TestHeroSection";

const Testimonials = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Testimonials";
  }, []);

  return (
    <div>
      <NavBar />
      <TestHeroSection />
      <p className="p-5 lg:px-20">Home / About Us / Testimonials</p>
      <div className="p-5 lg:px-20">
        <h1 className=" text-2xl lg:text-4xl font-semibold">
          Infosights Testimonials
        </h1>
        <TestimonialCard />
        <div className="my-10 text-center">
          <Button text="Load More" style={{ backgroundColor: "black" }} />
        </div>
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Testimonials;
