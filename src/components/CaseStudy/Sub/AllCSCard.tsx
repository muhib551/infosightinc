import Image from "next/image";
import React from "react";
import walletIcon from "../../../../public/casestudy/walle-icon.svg";
import flashIcon from "../../../../public/casestudy/flash-icon.svg";
import dropIcon from "../../../../public/casestudy/drop-icon.svg";
import judgeIcon from "../../../../public/casestudy/judge-icon.svg";

const AllCSCard = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-5 w-full">
      <div className="p-5 border border-gray-300 rounded-lg w-max">
        <Image src={walletIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium mt-10">
          South Georgia Bank
        </h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
          Financial
        </span>
        <div className="mt-10">
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
        <h1 className="text-xl text-gray-900 font-medium mt-10">
          Banco de Brasil
        </h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
          Financial
        </span>
        <div className="mt-10">
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
        <h1 className="text-xl text-gray-900 font-medium mt-10">FWCCU</h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
          Financial
        </span>
        <div className="mt-10">
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md mr-3">
            View PDF
          </button>
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
            Download PDF
          </button>
        </div>
      </div>
      <div className="p-5 border border-gray-300 rounded-lg w-max">
        <Image src={flashIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium mt-10">Prarieland</h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#274A68] text-xs font-semibold bg-[#E9F0F7] px-2 py-1 rounded">
          Energy & Electric
        </span>
        <div className="mt-10">
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md mr-3">
            View PDF
          </button>
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
            Download PDF
          </button>
        </div>
      </div>
      <div className="p-5 border border-gray-300 rounded-lg w-max">
        <Image src={flashIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium mt-10">Prarieland</h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#274A68] text-xs font-semibold bg-[#E9F0F7] px-2 py-1 rounded">
          Energy & Electric
        </span>
        <div className="mt-10">
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md mr-3">
            View PDF
          </button>
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
            Download PDF
          </button>
        </div>
      </div>
      <div className="p-5 border border-gray-300 rounded-lg w-max">
        <Image src={dropIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium mt-10">Greensboro</h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#364BBA] text-xs font-semibold bg-[#E9F0F7] px-2 py-1 rounded">
          Water & Wastewater
        </span>
        <div className="mt-10">
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md mr-3">
            View PDF
          </button>
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
            Download PDF
          </button>
        </div>
      </div>
      <div className="p-5 border border-gray-300 rounded-lg w-max">
        <Image src={judgeIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium mt-10">
          Quirch Foods
        </h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-gray-700 text-xs font-semibold bg-[#F2F2F2] px-2 py-1 rounded">
          Manufacturing
        </span>
        <div className="mt-10">
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md mr-3">
            View PDF
          </button>
          <button className="text-gray-700 border hover:bg-gray-100 border-gray-300 px-5 py-2 rounded-md">
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllCSCard;