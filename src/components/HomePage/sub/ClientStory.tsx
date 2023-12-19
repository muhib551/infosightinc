import Image from "next/image";
import React from "react";
import walletIcon from "../../../../public/casestudy/walle-icon.svg";

const ClientStory = ({
  heading,
  text,
}: {
  heading?: string;
  text?: string;
}) => {
  return (
    <div className=" py-5 lg:py-10">
      <h1 className="lg:text-lg text-[#222222] font-semibold">{heading}</h1>
      <p className="text-gray-900 text-sm lg:text-base py-1">{text}</p>
      <div className="flex flex-col lg:flex-row gap-5 py-5 lg:py-10">
        <div className="p-5 border border-gray-300 rounded-lg w-max">
          <Image src={walletIcon} alt="All Case Studies Icon" className="" />
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
          <Image src={walletIcon} alt="All Case Studies Icon" className="" />
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
          <Image src={walletIcon} alt="All Case Studies Icon" className="" />
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
  );
};

export default ClientStory;
