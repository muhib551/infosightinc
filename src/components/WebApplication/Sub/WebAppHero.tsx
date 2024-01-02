import Image from "next/image";
import React from "react";
import heroImg from "../../../../public/services-solutions/Vulnerability & CybersSecurity Assessments.png";

const WebAppHero = () => {
  return (
    <div className="relative">
      <Image src={heroImg} alt="Hero image" className="w-full" />
      <div className="text-white bg-[#1E3A52] lg:bg-transparent px-5 py-5 lg:py-0 lg:p-0 lg:absolute lg:top-[35%] lg:left-[6.5%]">
        <h1 className="lg:text-[60px] text-2xl font-extrabold lg:w-8/12 leading-tight">
          Web Application Assessments
        </h1>
      </div>
    </div>
  );
};

export default WebAppHero;