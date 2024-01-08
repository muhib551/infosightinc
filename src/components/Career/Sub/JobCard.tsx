import Button from "@/components/Elements/Button";
import Link from "next/link";
import React from "react";

interface Prop {
  title: string;
  description: string;
  tag: string;
}

const JobCard = ({ title, description, tag }: Prop) => {
  return (
    <div className="py-5 ">
      <div className="flex flex-col lg:flex-row border border-gray-300 p-5 rounded-xl">
        <div className="flex flex-col gap-1 items-center w-full lg:items-start">
          <h1 className="text-xl font-semibold">{title}</h1>
          <p className="text-gray-500">{description}</p>
          <p className="text-[#274A68] text-[10px] bg-[#E9F0F7] px-2 py-1 rounded-md w-max">
            {tag}
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-5 mt-8 lg:mt-0 items-center lg:justify-end w-full">
          <Button
            text="Get Details"
            style={{
              color: "black",
              backgroundColor: "white",
              border: "1px solid #d8d8d8",
              padding: "10px 25px",
              borderRadius: "10px",
            }}
          />
          <Link href={"contact"}>
            <Button
              text="Contact Us"
              style={{
                color: "white",
                backgroundColor: "black",
                padding: "10px 25px",
                borderRadius: "10px",
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
