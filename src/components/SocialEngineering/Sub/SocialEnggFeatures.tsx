import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const SE_FEATURES_DATA = [
  "Email Phishing",
  "FTelephone Impersonation",
  "Trojan & Virus Testing",
  "Onsite Impersonation",
  "Website Subversion",
  "Camera Placement Testing",
  "Key Control Testing",
  "Clean Desktop Testing",
  "Suspicious Activity Testing",
  "Physical Penetration Testing",
  "Dumpster Diving & Shred Testing",
];

const SocialEngineeringFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Security Features
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-10">
          {SE_FEATURES_DATA.map((el, i) => {
            return (
              <div
                key={i}
                className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md"
              >
                <Image src={tickImg} alt="" className="" />
                <p className="text-white font-semibold">{el}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SocialEngineeringFeatures;