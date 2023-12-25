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
import ManagedEDRHero from "./Sub/ManagedRDRHero";
import ManagedEDRFeatures from "./Sub/ManagedEDRFeatures";

const ManagedEDR = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Managed EDR";
  }, []);

  return (
    <div>
      <NavBar />
      <ManagedEDRHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / Managed Services / Managed EDR
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20 ">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              Early detection of attacks targeting endpoints is critical to
              protecting networks from all types of attacks including
              ransomware. However, without a team of security experts working
              24x7x365 to proactively hunt for threats, it's unlikely to achieve
              the outcome in threat prevention everyone is looking to achieve.
              <br />
              <br />
              InfoSight&apos;s Endpoint Detection & Response (EDR) provides you
              with real time incident response, enterprise remediation and
              threat containment 24x7x365. Coupled with our Security Operations
              Center (SOC), we serve as your own trusted cybersecurity team.
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <div className="flex gap-5 items-center">
                <Image src={documentIcon} alt="Document icon" />
                <p className=" text-[#8C340D] font-semibold">
                  Download Overview
                </p>
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
              Endpoints represent a significant security risk to all
              organization&apos;s no matter the industry. Relying solely on
              alerts to end users and overloaded network administrators is no
              longer the best and most effective method to protect against
              threats. Responding to endpoint-focused attacks has never been
              more challenging and is a 24x7 task that exhausts IT personnel.
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
              InfoSight&apos;s EDR Service monitors triages and remediates
              malware attacks and infections and significantly enhances
              visibility of attacks targeting endpoint devices. Our trusted
              professional&apos;s quickly coordinate remediation support and
              incident response solutions through patterns and repetition as
              well as new adjustments for immediate endpoint protection saving
              your organization time and money.
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
              Our goal is to work with your team to ensure 24x7 security,
              incident response and remediation to improve your overall security
              posture and minimize cyber risk. InfoSight&apos;s team of expert
              analysts alleviate resource constrained IT teams by providing the
              knowledge and EDR expertise needed to defend and respond against
              any attacks missed at the endpoint.
            </p>
          </div>
          <Image
            src={infoImg3}
            alt="Info image"
            className="w-full rounded-lg"
          />
        </div>
      </div>
      <ManagedEDRFeatures />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default ManagedEDR;
