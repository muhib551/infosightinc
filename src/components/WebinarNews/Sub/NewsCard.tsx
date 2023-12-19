import Image from "next/image";
import React from "react";
import profileImg from "../../../../public/webinars/webinar-profile-img.png";
import chevronIcon from "../../../../public/homepage/right-chevron-icon.svg";

const NewsCard = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-7 py-10">
      <div className="rounded-lg border border-gray-300 flex flex-col lg:flex-row items-start p-5">
        <Image
          src={profileImg}
          alt="Webinar news profile image"
          className="h-[177px]"
        />
        <div className="">
          <h1 className="text-[#2F5A7E] lg:px-4 text-xl lg:mt-0 mt-2">
            Welcoming Chris Fridley, InfoSight&apos;s NEW COO to the Team!
          </h1>
          <p className="text-gray-500 text-sm lg:text-base mt-2 lg:px-4">
            As InfoSight&apos;s new Chief Operating Officer (COO) Chris will
            initially oversee our company&apos;s technical operations to ensure
            operations are optimized to deliver superior outcomes for our
            clients.
          </p>
          <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 lg:px-4">
            Read Full Article
            <span>
              <Image src={chevronIcon} alt="Chevron Icon" />
            </span>
          </button>
        </div>
      </div>
      <div className="rounded-lg border border-gray-300 flex flex-col lg:flex-row items-start p-5">
        <Image
          src={profileImg}
          alt="Webinar news profile image"
          className="h-[177px]"
        />
        <div className="">
          <h1 className="text-[#2F5A7E] lg:px-4 text-xl lg:mt-0 mt-2">
            Welcoming Chris Fridley, InfoSight&apos;s NEW COO to the Team!
          </h1>
          <p className="text-gray-500 text-sm lg:text-base mt-2 lg:px-4">
            As InfoSight&apos;s new Chief Operating Officer (COO) Chris will
            initially oversee our company&apos;s technical operations to ensure
            operations are optimized to deliver superior outcomes for our
            clients.
          </p>
          <button className="text-[#EA5715] font-semibold flex items-center gap-2 mt-5 lg:px-4">
            Read Full Article
            <span>
              <Image src={chevronIcon} alt="Chevron Icon" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
