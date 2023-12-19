import Image from "next/image";
import React from "react";
import oilGasImg from "../../../../public/industries/industries-oil-gas-img.png";
import oilGasgIcon from "../../../../public/industries/industries-oil-gas-icon.svg";
import IndOilGas from "./IndOilGasProvide";

const OilGas = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image src={oilGasImg} alt="Building Image" className="w-full" />
          <div className="flex lg:items-center items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
              With <span className="font-semibold">cyber attacks</span> on the
              rise, oil & gas companies need to have{" "}
              <span className="font-semibold">layered security controls </span>
              in place to defend against or identify an attack in seconds.
            </p>
          </div>
          <div className="flex lg:items-center items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
              It is imperative for those with{" "}
              <span className="font-semibold">
                BES (Bulk Electric Systems) and ICS (Information Control
                Systems)
              </span>{" "}
              to have the most current patches applied and monitored{" "}
              <span className="font-semibold">24x7x365.</span>
            </p>
          </div>
          <div className="flex lg:items-center items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
              No organization is immune to{" "}
              <span className="font-semibold">cyber attacks</span>, but a
              proactive strategy can make your{" "}
              <span className="font-semibold">
                OT & IT networks more &apos;&apos;cyber-resilient&apos;&apos;
              </span>{" "}
              to attacks and bad actors.
            </p>
          </div>
          <div className="flex lg:items-center items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
              In the oil and gas industry, attacks leading to{" "}
              <span className="font-semibold">
                Industrial Control Systems failure
              </span>{" "}
              can be catastrophic on multiple levels.
            </p>
          </div>
          <div className="flex lg:items-center items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
              InfoSight&apos;s{" "}
              <span className="font-semibold">
                Vulnerability Assessment and 24x7x365 threat monitoring
              </span>{" "}
              can reduce the risk of a successful cyber attack. We can assist
              your organization by creating the most effective incident response
              and recover plans for your environment.
            </p>
          </div>
        </div>
        <div className=" py-5 lg:py-10">
          <h1 className="lg:text-lg text-[#222222] font-semibold">
            Client&apos;s Success Stories
          </h1>
          <p className="text-gray-900 text-sm lg:text-base py-1">
            Check out some of our Financial Client Success Stories for real life
            examples on how InfoSight provides solutions for maximum financial
            security.
          </p>
          <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
            <div className="p-5 border border-gray-300 rounded-lg w-max">
              <Image
                src={oilGasgIcon}
                alt="Industries client card Icon"
                className=""
              />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                Oil & Gas
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#C99612] text-xs font-semibold bg-[#FCF7EA] px-2 py-1 rounded">
                Oil & Gas
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
      <IndOilGas />
    </div>
  );
};

export default OilGas;
