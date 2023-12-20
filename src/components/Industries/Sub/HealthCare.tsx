import Image from "next/image";
import React from "react";
import healthImg from "../../../../public/industries/industries-healthcare-img.png";
import healthIcon from "../../../../public/industries/industries-healthcare-icon.svg";
import IndHealthProvide from "./IndHealthProvide";

const Healthcare = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image
            src={healthImg}
            alt="HealthCare Card Image"
            className="w-full"
          />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              Cyber attackers are smarter than ever and InfoSight understands{" "}
              <span className="font-semibold">
                protecting patient information from data loss and theft
              </span>{" "}
              is the crucial in the healthcare industry.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              <span className="font-semibold">
                Our HIPAA compliant, cybersecurity & compliance solutions{" "}
              </span>{" "}
              optimize how your network and mobile systems perform while
              ensuring patient information is safe and secure from the wrong
              hands.
            </p>
          </div>
        </div>
        <div className=" py-5 lg:py-10">
          <h1 className="lg:text-lg text-[#222222] font-semibold">
            Client&apos;s Success Stories
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Check out some of our Healthcare&apos;s Client Success Stories for
            real life examples on how InfoSight provides solutions for maximum
            financial security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <div className="p-5 border border-gray-300 rounded-lg w-max">
              <Image
                src={healthIcon}
                alt="All Case Studies Icon"
                className=""
              />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                Health Hospital
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#207E29] text-xs font-semibold bg-[#E5F7E7] px-2 py-1 rounded">
                Healthcare
              </span>
              <div className="lg:mt-10 mt-5">
                <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md mr-3">
                  View PDF
                </button>
                <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
                  Download PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <IndHealthProvide />
    </div>
  );
};

export default Healthcare;
