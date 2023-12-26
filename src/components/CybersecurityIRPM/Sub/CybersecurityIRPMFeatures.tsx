import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const CybersecurityIRPMFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Services
        </h1>
        <div className="grid lg:grid-cols-2 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Understand your system and environment
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Identify the response procedures the CERT will take to
              investigate, contain, eradicate, and recover from a variety of
              different incidents
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Develop strategic communication procedures for cyber incidents.
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Define response procedures and responsibilities of the
              utility&apos;s legal team during cyber incident investigation and
              response.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CybersecurityIRPMFeatures;
