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

const COMP_BTNS_TEXTS = ["PCI DSS", "HIPAA", "NERC -CIP", "GLBA"];

const COMPLIANCE_COMPS = [PCIDSSCard, HIPAACard, NERCCard, GLBACard];

const SELECTED_BTN_CLASS =
  "font-semibold bg-gray-100 hover:bg-gray-200 text-[#274A68]";

const Compliance = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Compliance";
  }, []);

  const [selected, setSelected] = React.useState(0);
  const SelectedComponent = COMPLIANCE_COMPS[selected];

  return (
    <div>
      <NavBar />
      <ComplianceHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Compliance
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Explore our Different types of Compliances
      </h1>
      <div className="p-5 lg:px-20 lg:flex gap-2 grid grid-cols-2">
        {COMP_BTNS_TEXTS.map((btnText, i) => {
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
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Compliance;
