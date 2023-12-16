import Image from "next/image";
import React from "react";
import docIcon from "../../../../public/homepage/document-icon.svg";
import videoIcon from "../../../../public/homepage/video-icon.svg";

const Latest = () => {
  return (
    <div className="w-11/12 mx-auto py-10 lg:py-20">
      <h1 className="text-gray-900 text-2xl lg:text-4xl font-semibold">
        Infosight&apos;s Latest
      </h1>
      <div className="bg-[#F9FAFB] p-8 lg:p-10 mt-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-28 border-b border-gray-400">
          <div className="w-full mb-5">
            <h1 className="text-lg lg:text-2xl font-semibold">
              Penetration Testing
            </h1>
            <p className="text-gray-600 lg:text-lg font-normal mt-4">
              InfoSight&apos;s Penetration Testing services reduce the risk of a
              successful attacks before they occur.As cyberattacks continue to
              rise everyday it is important to perform penetration tests
              regularly
            </p>
          </div>
          <div className="flex items-start lg:flex-row flex-col lg:gap-10 gap-4 mb-6 lg:w-8/12">
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={docIcon} alt="Document Icon" className="w-8" />
              <p className="text-orange-500 font-semibold">Download Overview</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={videoIcon} alt="Video Icon" className="w-8" />
              <p className="text-orange-500 font-semibold">Watch Video</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-28">
          <div className="w-full mt-5">
            <h1 className="text-lg lg:text-2xl font-semibold">SOCaaS</h1>
            <p className="text-gray-600 lg:text-lg font-normal mt-4">
              InfoSight&apos;s Security Operations Center as a Service (SOCaaS)
              detects cyber threats quickly and provides containment, mitigation
              and remediation services to ensure a safe running environment
              24x7x365.
            </p>
          </div>
          <div className="flex items-start lg:flex-row flex-col lg:gap-10 gap-4 mt-6 lg:w-8/12">
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={docIcon} alt="Document Icon" className="" />
              <p className="text-orange-500 font-semibold">Download Overview</p>
            </div>
            <div className="flex items-center gap-3 cursor-pointer">
              <Image src={videoIcon} alt="Video Icon" className="" />
              <p className="text-orange-500 font-semibold">Watch Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Latest;