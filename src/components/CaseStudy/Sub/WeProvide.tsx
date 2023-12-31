import Image from "next/image";
import React from "react";
import serviceIcon1 from "../../../../public/homepage/service-icon1.svg";
import serviceIcon2 from "../../../../public/homepage/service-icon2.svg";
import serviceIcon3 from "../../../../public/homepage/service-icon3.svg";
import serviceIcon4 from "../../../../public/homepage/service-icon4.svg";
import serviceIcon5 from "../../../../public/homepage/service-icon5.svg";
import serviceIcon6 from "../../../../public/homepage/service-icon6.svg";
import { title } from "process";

const WEPROVIDE_DATA = [
  {
    img: serviceIcon1,
    title: "Managed Network & Cloud Support Services",
  },
  {
    img: serviceIcon2,
    title: "Penetration Testing Services",
  },
  {
    img: serviceIcon3,
    title: "Managed Security Services",
  },
  {
    img: serviceIcon4,
    title: "BCP/DR Planning",
  },
  {
    img: serviceIcon5,
    title: "Managed EDR",
  },
  {
    img: serviceIcon6,
    title: "Industrial Control & IoT Assessments",
  },
];

const WeProvide = () => {
  return (
    <div className="bg-[#3B719F] p-5 lg:p-20">
      <h1 className="text-2xl text-white lg:text-4xl font-semibold">
        We Provide
      </h1>
      <div className="grid lg:grid-cols-3 gap-3 lg:gap-10 mt-8">
        {WEPROVIDE_DATA.map(({ img, title }, i) => {
          return (
            <div
              className="flex items-start flex-col gap-4 px-8 py-5 bg-white rounded-md cursor-pointer hover:bg-gray-200"
              key={title + i}
            >
              <Image src={img} alt="" className="w-14 " />
              <h1 className="mb-2 font-semibold">{title}</h1>
            </div>
          );
        })}

        {/* <div className="flex items-start flex-col gap-4 px-8 py-5 bg-white rounded-md cursor-pointer hover:bg-gray-200">
          <Image src={serviceIcon3} alt="Service icon" className="w-14 " />
          <h1 className="mb-2 font-semibold">
            Managed Network & Cloud Support Services
          </h1>
        </div>
        <div className="flex items-start flex-col gap-4 px-8 py-5 bg-white rounded-md cursor-pointer hover:bg-gray-200">
          <Image src={serviceIcon2} alt="Service icon" className="w-14 " />
          <h1 className="mb-2 font-semibold">Penetration Testing Services</h1>
        </div>
        <div className="flex items-start flex-col gap-4 px-8 py-5 bg-white rounded-md cursor-pointer hover:bg-gray-200">
          <Image src={serviceIcon1} alt="Service icon" className="w-14 " />
          <h1 className="mb-2 font-semibold">Managed Security Services</h1>
        </div>
        <div className="flex items-start flex-col gap-4 px-8 py-5 bg-white rounded-md cursor-pointer hover:bg-gray-200">
          <Image src={serviceIcon4} alt="Service icon" className="w-14 " />
          <h1 className="mb-2 font-semibold">BCP/DR Planning</h1>
        </div>
        <div className="flex items-start flex-col gap-4 px-8 py-5 bg-white rounded-md cursor-pointer hover:bg-gray-200">
          <Image src={serviceIcon5} alt="Service icon" className="w-14 " />
          <h1 className="mb-2 font-semibold">Managed EDR</h1>
        </div>
        <div className="flex items-start flex-col gap-4 px-8 py-5 bg-white rounded-md cursor-pointer hover:bg-gray-200">
          <Image src={serviceIcon6} alt="Service icon" className="w-14 " />
          <h1 className="mb-2 font-semibold">
            Industrial Control & IoT Assessments
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default WeProvide;
