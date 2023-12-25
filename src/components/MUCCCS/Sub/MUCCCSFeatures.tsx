import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const MUCCCSFeatuers = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Features
        </h1>
        <div className="grid lg:grid-cols-3 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              24x7x365 UCC infrastructure monitoring covering IP Telephony,
              Messaging, Multi-media Video Conferencing, and Contact Center that
              leverages Artificial Intelligence (AI).
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              On-demand implementation of new technologies to remain agile
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Support for multi-vendor connectivity platforms, SOHO integration,
              and business analytics and reporting
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Multi-vendor case management
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              AWS Connect, AWS Chime, AWS Workspaces
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Technical Human Capital with multi-vendor experience to satisfy
              any level of network operations and management complexity
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              A flexible support and services model to complement any size
              in-house IT team
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Run/Playbook creation and maintenance
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[150px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">Shoretel/Mitel, Cisco</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MUCCCSFeatuers;
