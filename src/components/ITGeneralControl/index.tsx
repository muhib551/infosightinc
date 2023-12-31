"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import Image from "next/image";
import auditInfoImg1 from "../../../public/audit/Audit-info-img1.png";
import generalinfoImg1 from "../../../public/audit/IT-General-Control-Review-img1.png";
import generalinfoImg2 from "../../../public/audit/IT-General-Control-Review-img2.png";
import ITGeneralControlHero from "./Sub/ITGeneralControlHero";
import ITGeneralControlFeatures from "./Sub/ITGeneralControlFeatures";

const IT_GENERAL_CONTROL_DATA = [
  {
    img: generalinfoImg1,
    title: "What is an IT General Controls Review?",
    description:
      "ITGC are the basic controls that support an organization's IT infrastructure. ITGC are related to IT systems such as operating systems, databases and applications to make sure that they are working and operating properly. They abide by policies, procedures and compliances related to your specific industry.",
  },
  {
    img: generalinfoImg2,
    title: "How can InfoSight Help?",
    description:
      "InfoSight's goal is to provide management and assurance to assets and safeguard controls against lost and compromised data. Our experts work with your team to assist with IT Management, Information Security, BCP/DRP, outsourcing technology & more. Our team assists your company to continuously improve your security posture, making your organization aware of emerging security threats.",
  },
];

const ITGeneralControl = () => {
  React.useEffect(() => {
    document.title = "IT General Control Review";
  }, []);

  return (
    <div>
      <NavBar />
      <ITGeneralControlHero />
      <p className="p-5 lg:px-20">
        Home / Advisory Services / Audit & Assurance / IT General Control Review
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        IT General Control Review
      </h1>
      <div className="p-5 lg:px-20">
        <p>
          InfoSight conducts General IT Controls Reviews (GITCR) to identify
          principle IT control policies and analyze the current condition of
          such policies to make necessary changes to ensure regulatory
          compliance. This review will also provide the foundation to assist
          your organization in aligning its control environment with industry
          standards and best practices. Overall, InfoSight&apos;s GITCR serves
          as a tool for managing risk levels as your company moves forward with
          future growth strategies.
        </p>
        <Image
          src={auditInfoImg1}
          alt="Audit Info Image"
          className="w-full pt-3"
        />
      </div>
      <div className="p-5 lg:px-20">
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5">
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              What is an IT General Controls Review?
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 ">
              ITGC are the basic controls that support an organization&apos;s IT
              infrastructure. ITGC are related to IT systems such as operating
              systems, databases and applications to make sure that they are
              working and operating properly. They abide by policies, procedures
              and compliances related to your specific industry.
            </p>
          </div>
          <Image
            src={generalinfoImg1}
            alt="Info image"
            className="w-full rounded-lg"
          />
        </div>
        <div className="py-5 lg:py-10 flex flex-col lg:flex-row justify-between gap-5 border-t-2 border-gray-300">
          <Image
            src={generalinfoImg2}
            alt="Info image"
            className="w-full rounded-lg lg:block hidden"
          />
          <div className="flex flex-col justify-between w-full">
            <h1 className="lg:text-2xl text-gray-900 font-semibold">
              How can InfoSight Help?
            </h1>
            <p className="text-gray-900 text-sm lg:text-base py-1 text-justify">
              InfoSight&apos;s goal is to provide management and assurance to
              assets and safeguard controls against lost and compromised data.
              Our experts work with your team to assist with IT Management,
              Information Security, BCP/DRP, outsourcing technology & more. Our
              team assists your company to continuously improve your security
              posture, making your organization aware of emerging security
              threats.
            </p>
          </div>
          <Image
            src={generalinfoImg2}
            alt="Info image"
            className="w-full rounded-lg lg:hidden"
          />
        </div>
      </div>
      <ITGeneralControlFeatures />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default ITGeneralControl;
