import Image from "next/image";
import React from "react";
import webCardImg from "../../../../public/webinars/webinar-demand-img.png";
import youtubeIcon from "../../../../public/webinars/youtube-icon.svg";

const WebCard = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-3 gap-7 py-10">
        <div className="rounded-lg  border border-gray-300">
          <Image
            src={webCardImg}
            alt="Webinar card image"
            className="rounded-lg w-full"
          />
          <div className="pt-2 pb-5">
            <h1 className="text-[#2F5A7E] mt-2 px-4 text-xl ">
              Cyber Risk Security
            </h1>
            <p className="text-gray-500 text-sm lg:text-base mt-2 px-4">
              Simplify your journey to security by assessing your risk
              readiness.
            </p>
            <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 px-4">
              <span>
                <Image src={youtubeIcon} alt="Youtube Icon" />
              </span>
              Watch Now
            </button>
          </div>
        </div>
        <div className="rounded-lg  border border-gray-300">
          <Image
            src={webCardImg}
            alt="Webinar card image"
            className="rounded-lg w-full"
          />
          <div className="pt-2 pb-5">
            <h1 className="text-[#2F5A7E] mt-2 px-4 text-xl ">IoT Security</h1>
            <p className="text-gray-500 text-sm lg:text-base mt-2 px-4">
              Simplify your journey to security by assessing your risk
              readiness.
            </p>
            <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 px-4">
              <span>
                <Image src={youtubeIcon} alt="Youtube Icon" />
              </span>
              Watch Now
            </button>
          </div>
        </div>
        <div className="rounded-lg  border border-gray-300">
          <Image
            src={webCardImg}
            alt="Webinar card image"
            className="rounded-lg w-full"
          />
          <div className="pt-2 pb-5">
            <h1 className="text-[#2F5A7E] mt-2 px-4 text-xl ">
              Users Permissions
            </h1>
            <p className="text-gray-500 text-sm lg:text-base mt-2 px-4">
              Simplify your journey to security by assessing your risk
              readiness.
            </p>
            <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 px-4">
              <span>
                <Image src={youtubeIcon} alt="Youtube Icon" />
              </span>
              Watch Now
            </button>
          </div>
        </div>
        <div className="rounded-lg  border border-gray-300">
          <Image
            src={webCardImg}
            alt="Webinar card image"
            className="rounded-lg w-full"
          />
          <div className="pt-2 pb-5">
            <h1 className="text-[#2F5A7E] mt-2 px-4 text-xl ">
              New Era Industrial Threats
            </h1>
            <p className="text-gray-500 text-sm lg:text-base mt-2 px-4">
              Simplify your journey to security by assessing your risk
              readiness.
            </p>
            <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 px-4">
              <span>
                <Image src={youtubeIcon} alt="Youtube Icon" />
              </span>
              Watch Now
            </button>
          </div>
        </div>
        <div className="rounded-lg  border border-gray-300">
          <Image
            src={webCardImg}
            alt="Webinar card image"
            className="rounded-lg w-full"
          />
          <div className="pt-2 pb-5">
            <h1 className="text-[#2F5A7E] mt-2 px-4 text-xl ">
              Cyber Risk Security
            </h1>
            <p className="text-gray-500 text-sm lg:text-base mt-2 px-4">
              Simplify your journey to security by assessing your risk
              readiness.
            </p>
            <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 px-4">
              <span>
                <Image src={youtubeIcon} alt="Youtube Icon" />
              </span>
              Watch Now
            </button>
          </div>
        </div>
        <div className="rounded-lg  border border-gray-300">
          <Image
            src={webCardImg}
            alt="Webinar card image"
            className="rounded-lg w-full"
          />
          <div className="pt-2 pb-5">
            <h1 className="text-[#2F5A7E] mt-2 px-4 text-xl ">IoT Security</h1>
            <p className="text-gray-500 text-sm lg:text-base mt-2 px-4">
              Simplify your journey to security by assessing your risk
              readiness.
            </p>
            <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 px-4">
              <span>
                <Image src={youtubeIcon} alt="Youtube Icon" />
              </span>
              Watch Now
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="text-white bg-black px-5 py-2 rounded-xl hover:bg-gray-900">
          Load More
        </button>
      </div>
    </div>
  );
};

export default WebCard;
