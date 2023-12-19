import Image from "next/image";
import React from "react";
import youtubeIcon from "../../../../public/webinars/youtube-icon.svg";
import instagramIcon from "../../../../public/webinars/instagram-icon.svg";
import xIcon from "../../../../public/webinars/twitter-icon.svg";
import linkedinIcon from "../../../../public/webinars/linkedin-icon.svg";
import chevronRight from "../../../../public/webinars/chevron-right-white.png";
import Link from "next/link";

const FollowUsCard = () => {
  return (
    <div className="bg-gray-900">
      <div className="p-5 lg:px-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl ">
          Follow Us on Social Media
        </h1>
        <div className="py-5 grid lg:grid-cols-4 grid-cols-1 gap-5">
          <Link href="#">
            <div className="flex lg:flex-col gap-3 bg-[#1E3A52] p-10 rounded-lg">
              <Image src={youtubeIcon} alt="Youtube Icon" className="" />
              <p className="text-white font-semibold flex items-center lg:gap-1">
                Youtube{" "}
                <span>
                  {" "}
                  <Image src={chevronRight} alt="Chevron Icon" className="" />
                </span>
              </p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex lg:flex-col gap-3 bg-[#1E3A52] p-10 rounded-lg">
              <Image src={instagramIcon} alt="Instagram Icon" className="" />
              <p className="text-white font-semibold flex items-center lg:gap-1">
                Instagram{" "}
                <span>
                  {" "}
                  <Image src={chevronRight} alt="Chevron Icon" className="" />
                </span>
              </p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex lg:flex-col gap-3 bg-[#1E3A52] p-10 rounded-lg">
              <Image src={xIcon} alt="X Icon" className="" />
              <p className="text-white font-semibold flex items-center lg:gap-1">
                X{" "}
                <span>
                  {" "}
                  <Image src={chevronRight} alt="Chevron Icon" className="" />
                </span>
              </p>
            </div>
          </Link>
          <Link href="#">
            <div className="flex lg:flex-col gap-3 bg-[#1E3A52] p-10 rounded-lg">
              <Image src={linkedinIcon} alt="Linkedin Icon" className="" />
              <p className="text-white font-semibold flex items-center lg:gap-1">
                Linkedin{" "}
                <span>
                  {" "}
                  <Image src={chevronRight} alt="Chevron Icon" className="" />
                </span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FollowUsCard;
