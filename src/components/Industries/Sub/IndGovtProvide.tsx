import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const IndGovtProvide = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          For Government Agencies We Provide
        </h1>
        <p className="text-white lg:text-lg py-5 font-semibold">
          We are here to protect sensitive data from malware and provide you
          with services such as
        </p>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">SIEM Solutions</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">Penetration Testing</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              cybersecurity Awareness Training
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">IT Audits</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">Cyber Risk Assessments</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">Data Loss Prevention</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Regulatory Compliance Reviews
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              24x7x365 Managed Security and Monitoring
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Cloud Migration and Management
            </p>
          </div>
        </div>
        <p className="text-white lg:text-lg py-5 font-semibold">
          Our highly educated and trained staff are registered on a number of
          governments purchasing vehicles such as
        </p>
        <div className="grid lg:grid-cols-4 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              The My Florida Marketplace
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">The Florida Bid System</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">WebProcure</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">WEBS/ WSCA</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">TIPS</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">USAC</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">SCEIS</p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">AEPA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndGovtProvide;
