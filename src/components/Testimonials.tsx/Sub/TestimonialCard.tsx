import Image from "next/image";
import React from "react";
import ratingImg from "../../../../public/homepage/full-starts-img.svg";

const TestimonialCard = () => {
  return (
    <div>
      <div className="grid  gap-5 lg:gap-10 mt-5 lg:mt-10">
        <div className="bg-white shadow-md shadow-gray-300 p-5 rounded-xl">
          <p className="pb-6">
            The Infosight platform is accessible from anywhere and this has
            greatly simplified things for us. The Infosight platform is
            accessible from anywhere and this has greatly simplified things for
            us.
          </p>
          <Image src={ratingImg} alt="Rating" className="" />
          <p className="mt-2">Marie Ann</p>
          <p className="">IT Manager at T-Devs</p>
        </div>
        <div className="bg-white shadow-md shadow-gray-300 p-5 rounded-xl">
          <p className="pb-6">
            The Infosight platform is accessible from anywhere and this has
            greatly simplified things for us.
          </p>
          <Image src={ratingImg} alt="Rating" className="" />
          <p className="mt-2">Marie Ann</p>
          <p className="">IT Manager at T-Devs</p>
        </div>
        <div className="bg-white shadow-md shadow-gray-300 p-5 rounded-xl">
          <p className="pb-6">
            The Infosight platform is accessible from anywhere and this has
            greatly simplified things for us. The Infosight platform is
            accessible from anywhere and this has greatly simplified things for
            us.
          </p>
          <Image src={ratingImg} alt="Rating" className="" />
          <p className="mt-2">Marie Ann</p>
          <p className="">IT Manager at T-Devs</p>
        </div>
        <div className="bg-white shadow-md shadow-gray-300 p-5 rounded-xl">
          <p className="pb-6">
            The Infosight platform is accessible from anywhere and this has
            greatly simplified things for us. us.
          </p>
          <Image src={ratingImg} alt="Rating" className="" />
          <p className="mt-2">Marie Ann</p>
          <p className="">IT Manager at T-Devs</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
