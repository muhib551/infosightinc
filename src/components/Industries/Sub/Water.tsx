import Image from "next/image";
import React from "react";
import energyImg from "../../../../public/industries/industries-water-img.png";
import dropIcon from "../../../../public/casestudy/drop-icon.svg";
import IndWaterProvide from "./IndWaterProvide";

const Water = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image
            src={energyImg}
            alt="Water and Wastewater Card Image"
            className="w-full"
          />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              With cyber attacks on the rise, water and wastewater cooperatives
              need to have the{" "}
              <span className="font-semibold">layered security controls</span>{" "}
              in place to defend against or identify an attack in seconds.
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              It is imperative for those{" "}
              <span className="font-semibold">
                {" "}
                ICS (Information Control Systems)
              </span>{" "}
              to have the most current patches applied and monitored
              <span className="font-semibold">24x7x365.</span>
              No organization is immune to cyber attacks, but a proactive
              strategy can make your{" "}
              <span className="font-semibold">
                OT & IT Networks more &apos;&apos;cyber-resilient&apos;&apos;{" "}
              </span>{" "}
              to attacks and bad actors.
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
            Check out some of our Water & Wastewater&apos;s Client Success
            Stories for real life examples on how InfoSight provides solutions
            for maximum financial security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <div className="p-5 border border-gray-300 rounded-lg w-max">
              <Image src={dropIcon} alt="All Case Studies Icon" className="" />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                Greensboro
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#364BBA] text-xs font-semibold bg-[#E9F0F7] px-2 py-1 rounded">
                Water & Wastewater
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
      <IndWaterProvide />
    </div>
  );
};

export default Water;
