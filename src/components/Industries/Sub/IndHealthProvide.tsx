import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const IndHealthProvide = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          For Healthcare Industry We Provide
        </h1>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Proactive HIPAA compliant IT services networks
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Multi-layered HIPAA compliant cybersecurity framework
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Ensure customers follow HITECH regulatory standards
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Provide support on various EHR systems
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Perform HIPAA Risk & Security Assessments
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Cloud Solutions & Office 365
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              24x7x365 Network & Security Monitoring
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndHealthProvide;
