import Image from "next/image";
import React from "react";
import ratingImg from "../../../../public/homepage/full-starts-img.svg";
import chevronRightIcon from "../../../../public/homepage/right-chevron-black-icon.svg";
import chevronLeftIcon from "../../../../public/homepage/left-chevron-black-icon.svg";
import Button from "@/components/Elements/Button";

const TESINOMIALS_DATA = [
  {
    description:
      "The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
    rating: ratingImg,
    user: "Marie Ann",
    designation: "IT Manager at T-Devs",
  },
  {
    description:
      "The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
    rating: ratingImg,
    user: "Marie Ann",
    designation: "IT Manager at T-Devs",
  },
  {
    description:
      "The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
    rating: ratingImg,
    user: "Marie Ann",
    designation: "IT Manager at T-Devs",
  },
];

const TesimonialsComp = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className=" text-2xl lg:text-4xl font-semibold">
        Infosights Testimonials
      </h1>
      <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 mt-5 lg:mt-10">
        {TESINOMIALS_DATA.map(
          ({ description, rating, user, designation }, i) => {
            return (
              <div
                key={i}
                className="bg-white shadow-md shadow-gray-300 p-5 rounded-xl"
              >
                <p className="pb-6">{description}</p>
                <Image src={rating} alt="Rating" className="" />
                <p className="mt-2">{user}</p>
                <p className="">{designation}</p>
              </div>
            );
          }
        )}
        {/* <div className="bg-white shadow-md shadow-gray-300 p-5 rounded-xl">
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
            greatly simplified things for us.
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
        </div> */}
      </div>
      <div className="lg:flex items-center justify-center mt-16 gap-10 hidden">
        <Image
          src={chevronLeftIcon}
          alt="Chevron Icon"
          className="cursor-pointer hover:scale-110 transition-all"
        />
        <Image
          src={chevronRightIcon}
          alt="Chevron Icon"
          className="cursor-pointer hover:scale-110 transition-all"
        />
      </div>
      <div className="block lg:hidden mt-10 text-center">
        <Button text="Load More" style={{ backgroundColor: "black" }} />
      </div>
    </div>
  );
};

export default TesimonialsComp;
