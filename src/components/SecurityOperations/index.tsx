"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import TextPictorialCard from "../Elements/TextPictorialCard";
import Image from "next/image";
import documentIcon from "../../../public/homepage/document-icon.svg";
import videoIcon from "../../../public/homepage/video-icon.svg";
import SecurityOperHero from "./Sub/SecurityOperHero";
import SecurityOperFeatures from "./Sub/SecurityOperFeatures";
import infoImg1 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img1.png";
import infoImg2 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img2.png";
import infoImg3 from "../../../public/services-solutions/Business-Planning-Disaster-Recovery-info-img3.png";

const SECURITY_OPERATIONS_DATA = [
  {
    img: infoImg1,
    title: "The Challenge",
    description:
      "The limitations on cybersecurity funds and internal IT staff make holistic information security seem impossible. The result of these issues are teams to extend beyond basic security operations and are requested to actively threat hunt and research zero-day attacks. This can easily exhaust personnel and create unnecessary risk for most organizations.",
  },
  {
    img: infoImg2,
    title: "How We Solve It",
    description:
      "InfoSight's Security Operations Center as a Service (SOCaaS) detects cyber threats quickly and provides containment, mitigation and remediation services to ensure a safe running environment 24x7x365. Additionally, internal threats can be detected to protect against insider compromise.We deliver enterprise threat management through a layered security model where all assets in the datacenter or the Cloud can be viewed in a “single pane of glass” by both your IT team and our SOC simultaneously. This allows your team to focus on day-to-day concerns thereby improving overall efficiency and operational effectiveness.",
  },
  {
    img: infoImg3,
    title: "The Outcome",
    description:
      "Our goal is to ensure 24x7 security, incident response and remediation to improve your overall security posture and minimize cyber risk. We help your organization: Detect & Analyze: InfoSight believes in a proactive rather than a reactive approach. We analyze and scan your networks 24x7 to ensure security and discover any suspicious activity. Recognize & Respond: InfoSight believes in a proactive rather than a reactive approach. We analyze and scan your networks 24x7 to ensure security and discover any suspicious activity. Remediate & Strengthen: InfoSight believes in a proactive rather than a reactive approach. We analyze and scan your networks 24x7 to ensure security and discover any suspicious activity.",
  },
];

const SecurityOperations = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Security Operations";
  }, []);

  return (
    <div>
      <NavBar />
      <SecurityOperHero />
      <p className="p-5 lg:px-20">
        Home / Services & Solutions / 24x7 Managed Detection & Response
      </p>
      <h1 className="p-5 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Overview
      </h1>
      <div className="p-5 lg:px-20">
        <div className="border-b-2 border-gray-300 pb-10">
          <div className="lg:p-10 p-5 bg-gray-100 flex flex-col lg:flex-row gap-5 lg:gap-20 justify-between">
            <p className=" text-justify text-[#444444]">
              InfoSight&apos;s Security Operations Center (SOC) serves as your
              own trusted cybersecurity team providing you with real time
              incident response, enterprise remediation and threat confinement
              24x7x365.
              <br />
              <br />
              <span className="font-bold">
                We leverage sound and repeatable processes to mitigate threats
                in a systematic approach delivering superior outcomes with no
                alert fatigue ever!
              </span>
            </p>
            <div className="flex gap-5 flex-col lg:flex-row lg:items-center lg:w-8/12 cursor-pointer">
              <div className="flex gap-5 items-center">
                <Image src={documentIcon} alt="Document icon" />
                <p className=" text-[#8C340D] font-semibold">
                  Download Overview
                </p>
              </div>
              <div className="flex gap-5 items-center">
                <Image src={videoIcon} alt="Document icon" />
                <p className=" text-[#8C340D] font-semibold">Watch Video</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 lg:px-20">
        {SECURITY_OPERATIONS_DATA.map(({ img, title, description }, i) => {
          return (
            <div
              key={"SECURITY_OPERATIONS_DATA__" + i}
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
      <SecurityOperFeatures />
      <div className="py-5">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default SecurityOperations;
