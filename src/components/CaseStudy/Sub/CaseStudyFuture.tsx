import Button from "@/components/Elements/Button";
import getBaseWebpackConfig from "next/dist/build/webpack-config";
import React from "react";

const CaseStudyFuture = () => {
  return (
    <div className="bg-[#3B719F] py-10 px-8 lg:p-20">
      <div className="flex flex-col lg:flex-row">
        <div className="text-white">
          <h1 className="text-2xl lg:text-4xl font-semibold pr-10 lg:pr-0">
            The Future is Secure with Us
          </h1>
          <p className="text-sm lg:text-lg mt-8 lg:w-full">
            Secure your business by taking the first step today 4,000+ startups
            already securing their business
          </p>
        </div>
        <div className="flex justify-between gap-5 mt-8 lg:mt-0 items-center lg:justify-end w-full">
          <Button
            text="Get Details"
            style={{
              color: "black",
              backgroundColor: "white",
              padding: "10px 25px",
              borderRadius: "10px",
            }}
          />
          <Button
            text="Contact Us"
            style={{
              color: "white",
              backgroundColor: "black",
              padding: "10px 25px",
              borderRadius: "10px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudyFuture;
