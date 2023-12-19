import React from "react";
import DDIcon from "../../../public/DDIcon.svg";
import Image from "next/image";

const ButtonGrp = ({ text }: { text?: string }) => {
  return (
    <div>
      <button className="flex items-center text-xs lg:text-base gap-2 px-2 lg:px-5 py-2 rounded-md border border-gray-300 shadow-md shadow-gray-300 hover:bg-gray-100">
        {text}
        <span>
          <Image src={DDIcon} alt="Dropdown icon" className="lg:w-full w-3/4" />
        </span>
      </button>
    </div>
  );
};

export default ButtonGrp;
