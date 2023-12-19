import React from "react";
import AllCSCard from "./AllCSCard";
import ButtonGrp from "@/components/Elements/ButtonGrp";

const AllCaseStudies = () => {
  return (
    <div className="p-5 lg:px-20">
      <div className="flex items-center justify-between gap-2 mb-8">
        <h1 className="text-xl lg:text-4xl font-extrabold ">
          All Case Studies
        </h1>
        <ButtonGrp text="Select Industry" />
      </div>
      <div className="">
        <AllCSCard />
      </div>
    </div>
  );
};

export default AllCaseStudies;
