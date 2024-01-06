"use client";
import React from "react";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import videoIcon from "../../../public/homepage/video-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import MobileAPIHero from "./Sub/MobileAPIHero";
import MobileAPIFeatures from "./Sub/MobileAPIFeatures";
import PageLayout from "../PageLayout";

const MOBILE_API_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today, Applications have become a tremendous target for cybercriminals because of their heightened value of stored information. Weaknesses and flaws in an application's source code or APIs can result in exploits compromising confidential data.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's API and Code Reviews, which can include Mobile, assist in identifying any underlying security issues with the application by providing a comprehensive review of Application code and API's. This will identify vulnerabilities and ensure your applications meet the latest security standards needed.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Recommendations for remedial action will be made at the conclusion of the testing procedure, with the option of additional security testing following post-change. Following the reports, we suggest maintaining a change management log of all code changes and/or architectural changes. We can also provide follow up services upon further discussion with your IT team.",
  },
];

const MobileAPI = () => {
  React.useEffect(() => {
    document.title = "Code Review, API & Mobile Testing - Infosight";
  }, []);

  return (
    <PageLayout hideWeProvide hideOurServices>
      <MobileAPIHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security / Mobile, API
        & Code Review
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              InfoSight&apos;s Code Review, API & Mobile Testing provides your
              organization the assurance it needs to demonstrate your
              applications are secure with no exploitable vulnerabilities. Our
              comprehensive testing will provide both detailed technical
              remediation reporting for internal teams, and an executive-level
              report that can be shared to validate your applications&apos;
              security.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <div className="flex gap-5 items-center">
                <Image src={documentIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">
                  Download Overview
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <Image src={videoIcon} alt="" />
                <p className=" text-[#8C340D] font-semibold">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {MOBILE_API_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"MOBILE_API_DATA__" + i}
              className={`py-5 lg:py-10 flex flex-col-reverse lg:flex-row justify-between gap-5 +
              ${i % 2 === 1 ? " lg:flex-row" : "lg:flex-row-reverse"}`}
            >
              <Image src={img} alt="" className="w-full rounded-lg" />
              <div className="flex flex-col justify-between w-full">
                <h1 className="lg:text-2xl text-gray-900 font-semibold">
                  {title}
                </h1>
                <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <MobileAPIFeatures />
    </PageLayout>
  );
};

export default MobileAPI;
