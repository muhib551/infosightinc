import Image from "next/image";
import React from "react";
import energyImg from "../../../../public/industries/industries-entertainment-img.png";
import entertainmentIcon from "../../../../public/industries/industries-entertainment-icon.svg";
import IndEntertProvide from "./IndWaterProvide";

const Entertainment = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image
            src={energyImg}
            alt="Entertainment Card Image"
            className="w-full"
          />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              High-profile cyber attacks on the entertainment industry have led
              to some{" "}
              <span className="font-semibold">
                very public and embarrassing data exposure.
              </span>
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              Entertainment-related organizations need to ensure they have the{" "}
              <span className="font-semibold">
                security controls, solutions, and monitoring{" "}
              </span>{" "}
              in place to prevent and detect cyber attacks.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              It is also of paramount importance that employees understand how
              to spot social engineering campaigns designed to compromise
              network credentials and gain unauthorized access. So having a{" "}
              <span className="font-semibold">
                security awareness training program
              </span>{" "}
              is key to success.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              No organization is immune to{" "}
              <span className="font-semibold">
                cyber attacks, but a proactive, all-encompassing strategy
              </span>{" "}
              can mitigate these cyber attacks, breaches and threats.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              <span className="font-semibold">
                InfoSight&apos;s Vulnerability Assessment and 24x7x365 threat
                monitoring
              </span>{" "}
              can reduce the risk of a successful cyber attack. We can assist
              your organization by creating the most effective incident response
              and recover plans for your environment.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              <span className="font-semibold">
                InfoSight&apos;s security strategies and services
              </span>{" "}
              can reduce the risk of compromised data from your information
              control systems. We provide your team with the most efficient
              incident response and recovery preparation and planning possible
              helping owners defend their{" "}
              <span className="font-semibold">critical infrastructures</span>{" "}
              from emerging cyber threats
            </p>
          </div>
        </div>
        <div className=" py-5 lg:py-10">
          <h1 className="lg:text-lg text-[#222222] font-semibold">
            Client&apos;s Success Stories
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Check out some of our Entertainment&apos;s Client Success Stories
            for real life examples on how InfoSight provides solutions for
            maximum financial security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <div className="p-5 border border-gray-300 rounded-lg w-max">
              <Image
                src={entertainmentIcon}
                alt="All Case Studies Icon"
                className=""
              />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                Entertainment
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#70028C] text-xs font-semibold bg-[#F9E8FD] px-2 py-1 rounded">
                Entertainment
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
      <IndEntertProvide />
    </div>
  );
};

export default Entertainment;
