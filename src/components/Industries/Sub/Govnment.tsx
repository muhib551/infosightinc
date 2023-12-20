import Image from "next/image";
import React from "react";
import buildingImg from "../../../../public/industries/industries-government-img.png";
import buildingIcon from "../../../../public/industries/industries-government-icon.svg";
import IndGovtProvide from "./IndGovtProvide";

const Government = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image src={buildingImg} alt="Building Image" className="w-full" />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              InfoSight understands that{" "}
              <span className="font-semibold">Government agencies</span> are
              increasingly targeted every day, and that{" "}
              <span className="font-semibold">cybersecurity</span>
              is one of the biggest challenges Government agencies seem to face.
            </p>
          </div>
        </div>
        <div className=" py-5 lg:py-10">
          <h1 className="lg:text-lg text-[#222222] font-semibold">
            Client&apos;s Success Stories
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Check out some of our Energy & Electric Client Success Stories for
            real life examples on how InfoSight provides solutions for maximum
            energy & electric security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <div className="p-5 border border-gray-300 rounded-lg w-max">
              <Image
                src={buildingIcon}
                alt="Industries client card Icon"
                className=""
              />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                South Georgia Bank
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#1D70B8] text-xs font-semibold bg-[#E9F2FB] px-2 py-1 rounded">
                Government
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
      <IndGovtProvide />
    </div>
  );
};

export default Government;
