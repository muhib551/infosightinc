import Image from "next/image";
import React from "react";
import featuredIcon1 from "../../../../public/casestudy/Featured-icon-1.svg";
import featuredIcon2 from "../../../../public/casestudy/Featured-icon-2.svg";
import featuredIcon3 from "../../../../public/casestudy/Featured-icon-3.svg";
import featuredIcon4 from "../../../../public/casestudy/Featured-icon-4.svg";
import featuredIcon5 from "../../../../public/casestudy/Featured-icon-5.svg";
import featuredIcon6 from "../../../../public/casestudy/Featured-icon-6.svg";

const InfoSight = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="text-2xl text-white lg:text-4xl font-semibold">
        Why InfoSight?
      </h1>
      <p>
        Powerful product which helps you grow engage, and retain make more
        clients. Trusted by over 4,000+ Clients.
      </p>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 mt-8">
        <div className="flex items-start flex-col gap-2 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300">
          <Image src={featuredIcon1} alt="Service icon" className="" />
          <h1 className=" lg:text-xl mt-5 font-semibold text-[#274A68]">
            Us Based SOC/NOC
          </h1>
          <p className="text-[#3B719F] text-sm lg:text-base">
            Our service allows systems and their staff to secure and build
            businesses with ease due their trust in Certified SOC/NOC from the
            top level of this country.
          </p>
        </div>
        <div className="flex items-start flex-col gap-2 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300">
          <Image src={featuredIcon2} alt="Service icon" className="" />
          <h1 className=" lg:text-xl mt-5 font-semibold text-[#274A68]">
            25+ Years Regulatory Compliance
          </h1>
          <p className="text-[#3B719F] text-sm lg:text-base">
            Our service allows systems and their staff to secure and build
            businesses with ease due to 25+ years of regulatory compliance
            experience.
          </p>
        </div>
        <div className="flex items-start flex-col gap-2 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300">
          <Image src={featuredIcon3} alt="Service icon" className="" />
          <h1 className=" lg:text-xl mt-5 font-semibold text-[#274A68]">
            Certified SOC/NOC
          </h1>
          <p className="text-[#3B719F] text-sm lg:text-base">
            Our service allows systems and their staff to secure and build
            businesses with ease due their trust in Certified SOC/NOC from the
            top level of this country.
          </p>
        </div>
        <div className="flex items-start flex-col gap-2 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300">
          <Image src={featuredIcon4} alt="Service icon" className="" />
          <h1 className=" lg:text-xl mt-5 font-semibold text-[#274A68]">
            MSSP Services
          </h1>
          <p className="text-[#3B719F] text-sm lg:text-base">
            Our service allows systems and their staff to secure and build
            businesses with ease due their trust in MSSP services from the top
            level of this country.
          </p>
        </div>
        <div className="flex items-start flex-col gap-2 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300">
          <Image src={featuredIcon5} alt="Service icon" className="" />
          <h1 className=" lg:text-xl mt-5 font-semibold text-[#274A68]">
            Cybersecurity Trainings
          </h1>
          <p className="text-[#3B719F] text-sm lg:text-base">
            Our service allows systems and their staff to secure and build
            businesses with ease as we provide cybersecurity trainings to the
            management and resources.
          </p>
        </div>
        <div className="flex items-start flex-col gap-2 px-8 py-5 bg-[#E9F0F7] rounded-md shadow-md shadow-gray-300">
          <Image src={featuredIcon6} alt="Service icon" className="" />
          <h1 className=" lg:text-xl mt-5 font-semibold text-[#274A68]">
            Flexible Pricing Models
          </h1>
          <p className="text-[#3B719F] text-sm lg:text-base">
            Our service allows systems and their staff to secure and build
            businesses with ease due flexible pricing models.
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSight;
