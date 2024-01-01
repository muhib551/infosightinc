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

const BTNS_TEXTS = [
  "Financial",
  "Energy & Electric",
  "Government",
  "Oil & Gas",
  "Manufacturing",
  "Water & Wastewater",
  "Entertainment",
  "Healthcare",
];

const COMPS = [
  FinancialCard,
  EnergyElectric,
  Government,
  OilGas,
  Manufacturing,
  Water,
  Entertainment,
  Healthcare,
];

const SELECTED_BTN_CLASS =
  "font-semibold bg-gray-100 hover:bg-gray-200 text-[#274A68]";

const Industries = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Industries";
  }, []);

  const [selected, setSelected] = React.useState(0);
  const SelectedComponent = COMPS[selected];

  return (
    <div>
      <NavBar />
      <IndustriesHero />
      <p className="p-5 lg:px-20">Here will be path</p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Explore our Industrial Coverage
      </h1>
      <div className="p-5 lg:px-20 lg:flex gap-2 grid grid-cols-2">
        {BTNS_TEXTS.map((btnText, i) => {
          return (
            <button
              key={"BTNS_TEXTS__" + i}
              className={
                "px-2 py-1 border text-gray-600 border-gray-300 rounded-md " +
                (selected === i ? SELECTED_BTN_CLASS : "")
              }
              onClick={() => {
                setSelected(i);
              }}
            >
              {btnText}
            </button>
          );
        })}
      </div>
      <SelectedComponent />
      <OurServices heading="What We also Provide" />
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Industries;
