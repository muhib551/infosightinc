"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import videoIcon from "../../../public/homepage/video-icon.svg";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";
import CybersecurityIRPMHero from "./Sub/CybersecurityIRPMHero";
import CybersecurityIRPMFeatures from "./Sub/CybersecurityIRPMFeatures";

const CybersecurityIRPM = () => {
  React.useEffect(() => {
    document.title =
      "InfoSight | Cybersecurity Incident Response Planning & Management";
  }, []);

  return (
    <div>
      <NavBar />
      <CybersecurityIRPMHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Advisory Services / Security /
        Cybersecurity Incident Response Planning & Management
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              InfoSight&apos;s cybersecurity Incident Response Planning &
              Management will continuously ensure your environment is protected
              and your organization&apos;s data is secure as well as make sure
              you are up to date on industry compliance.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <div className="flex gap-5 items-center">
                <Image src={videoIcon} alt="Document icon" />
                <p className=" text-[#8C340D] font-semibold">Learn More</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              The Challenge
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              Having a safe and secure environment is a must but so is knowing
              what to do in case a successful cyber breach occurs. A
              cybersecurity Incident Response Plan provides utilities with
              practical guidance and critical considerations in preparing for a
              cyber incident. A cybersecurity Incident Response Plan enables
              staff to take swift, effective action.
            </p>
          </div>
          <Image
            src={infoImg1}
            alt="Info image"
            className="w-full rounded-lg"
          />
        </div>
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5 border-t-2 border-gray-300">
          <Image
            src={infoImg2}
            alt="Info image"
            className="w-full rounded-lg lg:block hidden"
          />
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              How We Solve It
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              InfoSight identifies the external response organizations—including
              law enforcement, information sharing organizations, and cyber
              mutual assistance groups—the utility might engage during cyber
              incident response, particularly for severe incidents that outpace
              utility resources and expertise. Our staff collaborates with your
              team to outline your incident response requirements as well as
              timelines in case of an emergency.
            </p>
          </div>
          <Image
            src={infoImg2}
            alt="Info image"
            className="w-full rounded-lg lg:hidden"
          />
        </div>
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              The Outcome
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              Once your Cybersecurity Incident Response Plan is in place your
              organization will have a strategic plan in case an attack were to
              occur.
            </p>
          </div>
          <Image
            src={infoImg3}
            alt="Info image"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <CybersecurityIRPMFeatures />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default CybersecurityIRPM;
