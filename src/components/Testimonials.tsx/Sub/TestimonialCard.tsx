import Image from "next/image";
import React from "react";
import ratingImg from "../../../../public/homepage/full-starts-img.svg";

const TESINOMIALS_DATA = [
  {
    description:
      "The Infosight platform is accessible from anywhere and this has greatly simplified things for us. The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
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
      "The Infosight platform is accessible from anywhere and this has greatly simplified things for us. The Infosight platform is accessible from anywhere and this has greatly simplified things for us.",
    rating: ratingImg,
    user: "Marie Ann",
    designation: "IT Manager at T-Devs",
  },
  {
    description:
      "The Infosight platform is accessible from anywhere and this has greatly simplified things for us. us.",
    rating: ratingImg,
    user: "Marie Ann",
    designation: "IT Manager at T-Devs",
  },
];

const TestimonialCard = () => {
  return (
    <div>
      <div className="grid  gap-5 lg:gap-10 mt-5 lg:mt-10">
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
      </div>
    </div>
  );
};

export default TestimonialCard;
