import Image from "next/image";
import React from "react";
import walletIcon from "../../../../public/casestudy/walle-icon.svg";
import flashIcon from "../../../../public/casestudy/flash-icon.svg";
import dropIcon from "../../../../public/casestudy/drop-icon.svg";
import judgeIcon from "../../../../public/casestudy/judge-icon.svg";

const ALLCARDS_DATA = [
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
  {
    img: flashIcon,
    title: "Prarieland",
    description: "Client success story",
    tag: "Energy & Electric",
  },
  {
    img: flashIcon,
    title: "Prarieland",
    description: "Client success story",
    tag: "Energy & Electric",
  },
  {
    img: dropIcon,
    title: "Greensboro",
    description: "Client success story",
    tag: "Water & Wastewater",
  },
  {
    img: judgeIcon,
    title: " Quirch Foods",
    description: "Client success story",
    tag: "Manufacturing",
  },
];

const AllCSCard = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-5">
      {/* {ALLCARDS_DATA.map(({ img, title, description, tag }, i) => {
        return (
          <div
            className="p-5 border border-gray-300 rounded-lg w-max"
            key={title + i}
          >
            <Image src={img} alt="" className="" />
            <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
              {title}
            </h1>
            <p className="text-gray-500 mb-1">{description}</p>
            <span className="text-[#C94B12] text-xs font-semibold bg-[#FDEEE8] px-2 py-1 rounded">
              {tag}
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
        );
      })} */}

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
      <div className="p-5 border border-gray-300 rounded-lg w-max">
        <Image src={flashIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
          Prarieland
        </h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#274A68] text-xs font-semibold bg-[#E9F0F7] px-2 py-1 rounded">
          Energy & Electric
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
        <Image src={flashIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
          Prarieland
        </h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-[#274A68] text-xs font-semibold bg-[#E9F0F7] px-2 py-1 rounded">
          Energy & Electric
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
      <div className="p-5 border border-gray-300 rounded-lg w-max">
        <Image src={judgeIcon} alt="All Case Studies Icon" className="" />
        <h1 className="text-xl text-gray-900 font-medium lg:mt-10 mt-5">
          Quirch Foods
        </h1>
        <p className="text-gray-500 mb-1">Client success story</p>
        <span className="text-gray-700 text-xs font-semibold bg-[#F2F2F2] px-2 py-1 rounded">
          Manufacturing
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
  );
};

export default AllCSCard;
