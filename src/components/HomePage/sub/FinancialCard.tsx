import Image from "next/image";
import React from "react";
import financialImg from "../../../../public/industries/industries-financial-img.png";
import ClientStory from "./ClientStory";

const FinancialCard = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex flex-col gap-3">
        <Image
          src={financialImg}
          alt="Financial Card Image"
          className="w-full"
        />
        <div className="flex lg:items-center items-start">
          <span className="pr-2">&bull;</span>
          <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
            InfoSight provides solutions for{" "}
            <span className="font-semibold">financial industries</span> to
            improve overall{" "}
            <span className="font-semibold">
              compliance, security and financial infrastructure.
            </span>
          </p>
        </div>
        <div className="flex lg:items-center items-start">
          <span className="pr-2">&bull;</span>
          <p className="text-[#222222] py-1 px-2 text-sm lg:text-base">
            InfoSight provides{" "}
            <span className="font-semibold">
              24x7x365 Managed Security and Advisory Services
            </span>{" "}
            that test and monitor your network's infrastructure; keeping you{" "}
            <span className="font-semibold">secure</span> from any breaches that
            could occur.
          </p>
        </div>
      </div>
      <div>
        <ClientStory
          heading="Client's Success Stories"
          text="Check out some of our Financial Client Success Stories for real life
        examples on how InfoSight provides solutions for maximum financial
        security."
        />
      </div>
    </div>
  );
};

export default FinancialCard;
