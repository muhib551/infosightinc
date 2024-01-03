"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import TextPictorialCard from "../Elements/TextPictorialCard";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import SecurityServiceFeatures from "./Sub/SecurityServiceFeatures";
import SecurityServiceHero from "./Sub/SecurityServiceHero";

import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SECURITY_SERVICES_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "In today's cybersecurity environment staffing for quality experts is a constant challenge due to sheer demand. Additionally, sourcing quality tools that are implemented to full feature capacity and keeping them that way requires a large and constant effort. And it's a 24x7x365 job too! Security as a service (SECaaS) allows you to outsource these challenging tasks around the clock to ensure your organizations cybersecurity and incident response plan is as effective as possible against cyberattack and systems compromise.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      " With security as a service (SECaaS), we implement a variety of services and solutions to defend your network and respond to potential incidents 24x7. We also put into place a vulnerability management program that matches your operational risk level. InfoSight's SECaaS offering simplifies your overall cybersecurity effort into an affordable subscription-based “pay as you go” model. It reduces the challenges associated with hiring and retaining cybersecurity experts and managing a 24x7 internal team saving your organization time and money!",
  },
];

const SecurityService = () => {
  React.useEffect(() => {
    document.title = "Services & Solutions / SOCaaS";
  }, []);

  return (
    <div>
      <NavBar />
      <SecurityServiceHero />
      <p className="p-5 lg:px-20">Home / Services & Solutions / SECaaS</p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-60 justify-between">
            <p className=" ">
              InfoSight&apos;s Security as a Service (SECaaS) detects cyber
              threats quickly and simplifies incident response 24x7x365. Our
              SECaaS offering streamlines your cybersecurity defenses into one
              affordable subscription-based model.
            </p>
            <div className="flex gap-5 items-center lg:w-1/2 cursor-pointer">
              <Image src={documentIcon} alt="Document icon" />
              <p className=" text-[#8C340D] font-semibold">Download Overview</p>
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
              In today&apos;s cybersecurity environment staffing for quality
              experts is a constant challenge due to sheer demand. Additionally,
              sourcing quality tools that are implemented to full feature
              capacity and keeping them that way requires a large and constant
              effort. And it&apos;s a 24x7x365 job too!
              <br />
              <br />
              Security as a service (SECaaS) allows you to outsource these
              challenging tasks around the clock to ensure your organizations
              cybersecurity and incident response plan is as effective as
              possible against cyberattack and systems compromise.
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
              With security as a service (SECaaS), we implement a variety of
              services and solutions to defend your network and respond to
              potential incidents 24x7. We also put into place a vulnerability
              management program that matches your operational risk level.
              <br />
              <br />
              InfoSight&apos;s SECaaS offering simplifies your overall
              cybersecurity effort into an affordable subscription-based “pay as
              you go” model. It reduces the challenges associated with hiring
              and retaining cybersecurity experts and managing a 24x7 internal
              team saving your organization time and money!
            </p>
          </div>
          <Image
            src={infoImg2}
            alt="Info image"
            className="w-full rounded-lg lg:hidden"
          />
        </div>
      </div>
      <SecurityServiceFeatures />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default SecurityService;
