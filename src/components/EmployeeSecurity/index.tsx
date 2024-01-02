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
import EmpSecurityHero from "./Sub/EmplSecurityHero";
import EmpSecurityFeatures from "./Sub/EmpSecurityFeatures";

const EMPLOYEE_SECURITY_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "Today financial services providers are extremely busy and don't have the time to train employees on the importance of security awareness. This could lead to accidental internal leaks, clicking on links that they shouldn't and giving out confidential information. All of these instances could hurt your banks overall security posture and cost your company thousands to fix.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's CSAP (Cybersecurity Awareness Program) helps you educate your online banking customers about the dangers from bad actors that create ACH & wire fraud, malware, phishing and more. Our convenient web portal makes it easy to create awareness and train your online banking customers with a complete library of ready-to-use content and materials.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "InfoSight's security experts refresh the content on our portal weekly to ensure you are getting the latest and greatest information. We offer a hands-on approach and a hands-off approach where your organization can pick and choose where you need our assistance or if you want to take the reins yourself! Our CSAP portal will leave your employees with the knowledge they need to be able to spot a cybercriminal and learn key tactics on how to avoid breaches.",
  },
];

const EmployeeSecurityAwareness = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Employee Security Awareness";
  }, []);

  return (
    <div>
      <NavBar />
      <EmpSecurityHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Training & Education / Employee Security
        Awareness Training
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              Cyberattacks can happen to anyone at any company which means
              employees, all the way up to senior management, remain a
              significant vulnerability within every organization. Cybersecurity
              awareness training can help your staff circumvent a security
              incident and save your organization thousands of dollars in
              related costs and fines.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <div className="flex gap-5 items-center">
                <Image src={videoIcon} alt="Document icon" />
                <p className=" text-[#8C340D] font-semibold">Book a Demo Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {EMPLOYEE_SECURITY_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"EMPLOYEE_SECURITY_DATA__" + i}
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
      <EmpSecurityFeatures />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default EmployeeSecurityAwareness;
