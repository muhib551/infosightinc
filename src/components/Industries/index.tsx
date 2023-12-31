"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import IndustriesHero from "./Sub/IndustriesHero";
import OurServices from "../HomePage/sub/OurServices";
import FinancialCard from "./Sub/FinancialCard";
import EnergyElectric from "./Sub/EnergyElectric";
import Government from "./Sub/Govnment";
import OilGas from "./Sub/OilGas";
import Manufacturing from "./Sub/Manufacturing";
import Water from "./Sub/Water";
import Entertainment from "./Sub/Entertainment";
import Healthcare from "./Sub/HealthCare";

const Industries = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Industries";
  }, []);

  return (
    <div>
      <NavBar />
      <IndustriesHero />
      <p className="p-5 lg:px-20">Here will be path</p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Explore our Industrial Coverage
      </h1>
      <div className="p-5 lg:px-20 lg:flex gap-2 grid grid-cols-2">
        <button className="px-2 py-1 border text-[#274A68] font-semibold bg-gray-100 hover:bg-gray-200 border-gray-300 rounded-md">
          Financial
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          Energy & Electric
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          Government
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          Oil & Gas
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          Manufacturing
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          Water & Wastewater
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          Entertainment
        </button>
        <button className="px-2 py-1 border text-gray-600 hover:bg-gray-200 border-gray-300 rounded-md">
          Healthcare
        </button>
      </div>
      <FinancialCard />
      <EnergyElectric />
      <Government />
      <OilGas />
      <Manufacturing />
      <Water />
      <Entertainment />
      <Healthcare />
      <OurServices heading="What We also Provide" />
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Industries;
