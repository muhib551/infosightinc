import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const ITGeneralControlFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          At InfoSight, Our experts:
        </h1>
        <div className="grid lg:grid-cols-2 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Review risk reviews for control requirements
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Review management's response to issues raised at, or since the
              last exam
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Review past reports for outstanding issues or previous problems.
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Interview management pre-examination information requests to
              identify changes to the technology infrastructure or new products
              and services that might increase the institution's risk.
            </p>
          </div>
        </div>
        <p className="text-white lg:text-xl lg:w-10/12 px-2 lg:px-0">
          <span className="text-[#EC6A30] hover:text-[#9e4c26] font-bold">
            <a href="#">CLICK HERE</a>
          </span>{" "}
          For more information on our objectives for IT Management, Outsourcing
          Technologies, Information Security and BCP/DRP.
        </p>
      </div>
    </div>
  );
};

export default ITGeneralControlFeatures;
