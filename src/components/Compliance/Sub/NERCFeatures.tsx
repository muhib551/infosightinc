import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const NERC_FEATURES_DATA = [
  {
    img: tickImg,
    title: [
      "Meeting CIP regulatory compliance requirements",
      "Assessing your current cybersecurity posture",
      "Managing, protecting & securing your BES Cyber Assets and Confidential Customer Data",
      "Penetration testing of your SCADA and corporate networks",
      "Building security & compliance reports in language your C-Suite and board will understand",
    ],
  },
];

const NERCFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          We Assist In
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Meeting CIP regulatory compliance requirements
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Assessing your current cybersecurity posture
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Managing, protecting & securing your BES Cyber Assets and
              Confidential Customer Data
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Penetration testing of your SCADA and corporate networks
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Building security & compliance reports in language your C-Suite
              and board will understand
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NERCFeatures;
