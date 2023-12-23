"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import PlanningHero from "./Sub/PlanningHero";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import PlanningFeatures from "./Sub/PlanningFeatures";
import TextPictorialCard from "../Elements/TextPictorialCard";

const PlanningDisaster = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Planning & Disaster";
  }, []);

  return (
    <div>
      <NavBar />
      <PlanningHero />
      <p className="p-5 lg:px-20">Here will be path</p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-60 justify-between">
            <p className=" text-justify">
              InfoSight&apos;s Certified Business Continuity Planners
              (CBCP&apos;s) utilize years of experience in Business Continuity
              Planning and Disaster Recovery experience to develop a specific
              plan for your organization that ensures you can continue
              operations before, during and after adverse events.
            </p>
            <div className="flex gap-5 items-center lg:w-1/2 cursor-pointer">
              <Image src={documentIcon} alt="Document icon" />
              <p className=" text-[#8C340D] font-semibold">Download Overview</p>
            </div>
          </div>
        </div>
      </div>
      <TextPictorialCard />
      <PlanningFeatures />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default PlanningDisaster;
