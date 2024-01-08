import Image from "next/image";
import React from "react";
import buildingImg from "../../../../public/industries/industries-government-img.png";
import buildingIcon from "../../../../public/industries/industries-government-icon.svg";
import IndGovtProvide from "./IndGovtProvide";
import { CardProps } from "@/components/Elements/Card";
import Cards from "@/components/Elements/Cards";

const GOVT_CARDS_DATA: CardProps[] = [
  {
    imgType: "GOVT",
    title: "South Georgia Bank",
    description: "Client success story",
    tag: "Government",
    link: "https://www.infosightinc.com/pdf/InfoSight%20-%20South%20GA%20Bank%20Client%20Success%20Story.pdf",
  },
];

const Government = () => {
  return (
    <div>
      <div className="p-5 lg:px-20">
        <div className="flex flex-col gap-3">
          <Image src={buildingImg} alt="" className="w-full" />
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
            <Cards cardsData={GOVT_CARDS_DATA} />
          </div>
        </div>
      </div>
      <IndGovtProvide />
    </div>
  );
};

export default Government;
