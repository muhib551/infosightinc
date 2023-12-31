import Image from "next/image";
import React from "react";
import walletIcon from "../../../../public/casestudy/walle-icon.svg";
import financialImg from "../../../../public/industries/industries-financial-img.png";
import IndFinancialPr from "./IndustryProvide";

const FINANCIAL_DATA = [
  {
    img: walletIcon,
    title: "South Georgia Bank",
    description: "Client success story",
    tag: "Financial",
  },
  {
    img: walletIcon,
    title: "Banco de Brasil",
    description: "Client success story",
    tag: "Financial",
  },
  {
    img: walletIcon,
    title: "FWCCU",
    description: "Client success story",
    tag: "Financial",
  },
];

const FinancialCard = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image
            src={financialImg}
            alt="Financial Card Image"
            className="w-full"
          />
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              InfoSight provides solutions for{" "}
              <span className="font-semibold">financial industries</span> to
              improve overall{" "}
              <span className="font-semibold">
                compliance, security and financial infrastructure.
              </span>
            </p>
          </div>
          <div className="flex items-start">
            <span className="pr-2">&bull;</span>
            <p className="text-[#222222] py-1 px-2 text-xs lg:text-base">
              InfoSight provides{" "}
              <span className="font-semibold">
                24x7x365 Managed Security and Advisory Services
              </span>{" "}
              that test and monitor your network's infrastructure; keeping you{" "}
              <span className="font-semibold">secure</span> from any breaches
              that could occur.
            </p>
          </div>
        </div>
        <div className="py-5 lg:py-10">
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
                src={walletIcon}
                alt="Industries client card Icon"
                className=""
              />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                South Georgia Bank
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
                Financial
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
            <div className="p-5 border border-gray-300 rounded-lg w-max">
              <Image
                src={walletIcon}
                alt="Industries client card Icon"
                className=""
              />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                Banco de Brasil
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
                Financial
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
            <div className="p-5 border border-gray-300 rounded-lg w-max">
              <Image
                src={walletIcon}
                alt="Industries client card Icon"
                className=""
              />
              <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
                FWCCU
              </h1>
              <p className="text-gray-500 mb-1">Client success story</p>
              <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
                Financial
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
      <IndFinancialPr />
    </div>
  );
};

export default FinancialCard;
