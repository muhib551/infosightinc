import Image from "next/image";
import React from "react";
import DDIcon from "../../../../public/DDIcon.svg";
import AllCSCard from "./AllCSCard";

const AllCaseStudies = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex flex-col lg:flex-row justify-between gap-2 mb-8">
        <h1 className="text-2xl lg:text-4xl font-extrabold ">
          All Case Studies
        </h1>
        <button className="flex items-center gap-2 px-5 py-2 w-max rounded-lg shadow-md shadow-gray-300">
          Select Industry{" "}
          <span>
            <Image src={DDIcon} alt="" />
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
