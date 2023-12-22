"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import PCIDSSCard from "./Sub/PCIDSS";
import ComplianceHero from "./Sub/ComplianceHero";
import HIPAACard from "./Sub/HIPAACard";
import NERCCard from "./Sub/NERCCard";
import GLBACard from "./Sub/GLBACard";

const Compliance = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Compliance";
  }, []);

  return (
    <div>
      <NavBar />
      <ComplianceHero />
      <p className="p-5 lg:px-20">Here will be path</p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Explore our Different types of Compliances
      </h1>
      <div className="p-5 lg:px-20 lg:flex gap-2 grid grid-cols-2">
        <button className="px-2 py-1 border text-[#274A68] font-semibold bg-gray-100 hover:bg-gray-200 border-gray-300 rounded-md">
          PCI DSS
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          HIPAA
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          NERC -CIP
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          GLBA
        </button>
      </div>
      <PCIDSSCard />
      <HIPAACard />
      <NERCCard />
      <GLBACard />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Compliance;
