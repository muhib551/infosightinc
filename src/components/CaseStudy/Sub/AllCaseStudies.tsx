import Image from "next/image";
import React from "react";
import DDIcon from "../../../../public/DDIcon.svg";
import AllCSCard from "./AllCSCard";

const AllCaseStudies = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex items-center justify-between gap-2 mb-8">
        <h1 className="text-xl lg:text-4xl font-extrabold ">
          All Case Studies
        </h1>
        <button className="flex items-center text-xs lg:text-base gap-2 px-2 lg:px-5 py-2 rounded-md border border-gray-300 shadow-md shadow-gray-300 hover:bg-gray-100">
          Select Industry{" "}
          <span>
            <Image
              src={DDIcon}
              alt="Dropdown icon"
              className="lg:w-full w-3/4"
            />
          </span>
        </button>
      </div>
      <div className="">
        <AllCSCard />
      </div>
    </div>
  );
};

export default AllCaseStudies;
