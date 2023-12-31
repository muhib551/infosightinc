import React from "react";
import serviceIcon1 from "../../../../public/homepage/service-icon1.svg";
import serviceIcon2 from "../../../../public/homepage/service-icon2.svg";
import serviceIcon3 from "../../../../public/homepage/service-icon3.svg";
import serviceIcon4 from "../../../../public/homepage/service-icon4.svg";
import serviceIcon5 from "../../../../public/homepage/service-icon5.svg";
import serviceIcon6 from "../../../../public/homepage/service-icon6.svg";
import Image from "next/image";
import { title } from "process";

const OURSERVICES_DATA = [
  {
    img: serviceIcon1,
    title: "Managed Security Services",
    description:
      "InfoSight's Security Operations Center (SOC) leverages sound and repeatable processes to mitigate threats in a systematic approach delivering superior outcomes with no alert fatigue ever.",
  },
  {
    img: serviceIcon2,
    title: "Penetration Testing Services",
    description:
      "Our penetration testing service can be used to test your security policy compliance, the effectiveness of your employee security awareness training and your organization's ability to identifysecurity incidents.",
  },
  {
    img: serviceIcon3,
    title: "Managed Network & Cloud Support Services",
    description:
      "InfoSight's Managed Network and Support Services provide the appropriate skillsets to achieve the ideal level of network management required for your specific environment.",
  },
  {
    img: serviceIcon4,
    title: "BCP/DR Planning",
    description:
      "InfoSight's Certified Business Continuity Planners (CBCP's) utilize years of experience in Business Continuity Planning and Disaster Recovery experience to develop a specific plan for your organization.",
  },
  {
    img: serviceIcon5,
    title: "Managed EDR",
    description:
      "InfoSight's Endpoint Detection & Response (EDR) provides you with real time incident response, enterprise remediation and threat containment 24x7x365. Coupled with our Security Operations Center (SOC).",
  },
  {
    img: serviceIcon6,
    title: "Industrial Control & IoT Assessments",
    description:
      "InfoSight performs Industrial Control & OT Security Assessments to provide a complete evaluation and holistic view of your organization's security posture.",
  },
];

const OurServices = ({ heading }: { heading?: string }) => {
  return (
    <div className="p-5 lg:p-20">
      <div>
        <h1 className="text-2xl lg:text-4xl font-semibold">{heading}</h1>
        <div className="grid lg:grid-cols-3 gap-5 lg:gap-10 mt-8">
          {OURSERVICES_DATA.map(({ img, title, description }, i) => {
            return (
              <div
                className="flex items-start gap-4 p-3 border border-gray-300 rounded-md"
                key={title + i}
              >
                <Image src={img} alt="" className="w-10 lg:w-20" />
                <div className="">
                  <h1 className="lg:text-xl mb-2 font-semibold">{title}</h1>
                  <p className="text-sm lg:text-base">{description}</p>
                </div>
              </div>
            );
          })}

          {/* 
          <div className="flex items-start gap-4 p-3 border border-gray-300 rounded-md">
            <Image
              src={serviceIcon1}
              alt="Service icon"
              className="w-10 lg:w-20"
            />
            <div className="">
              <h1 className="lg:text-xl mb-2 font-semibold">
                Managed Security Services
              </h1>
              <p className="text-sm lg:text-base">
                InfoSight&apos;s Security Operations Center (SOC) leverages
                sound and repeatable processes to mitigate threats in a
                systematic approach delivering superior outcomes with no alert
                fatigue ever.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border border-gray-300 rounded-md">
            <Image
              src={serviceIcon2}
              alt="Service icon"
              className="w-10 lg:w-20"
            />
            <div className="">
              <h1 className="lg:text-xl mb-2 font-semibold">
                Penetration Testing Services
              </h1>
              <p className="text-sm lg:text-base">
                Our penetration testing service can be used to test your
                security policy compliance, the effectiveness of your employee
                security awareness training and your organization's ability to
                identifysecurity incidents.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border border-gray-300 rounded-md">
            <Image
              src={serviceIcon3}
              alt="Service icon"
              className="w-10 lg:w-20"
            />
            <div className="">
              <h1 className="lg:text-xl mb-2 font-semibold">
                Managed Network & Cloud Support Services
              </h1>
              <p className="text-sm lg:text-base">
                InfoSight&apos;s Managed Network and Support Services provide
                the appropriate skillsets to achieve the ideal level of network
                management required for your specific environment.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border border-gray-300 rounded-md">
            <Image
              src={serviceIcon4}
              alt="Service icon"
              className="w-10 lg:w-20"
            />
            <div className="">
              <h1 className="lg:text-xl mb-2 font-semibold">BCP/DR Planning</h1>
              <p className="text-sm lg:text-base">
                InfoSight&apos;s Certified Business Continuity Planners
                (CBCP&apos;s) utilize years of experience in Business Continuity
                Planning and Disaster Recovery experience to develop a specific
                plan for your organization.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border border-gray-300 rounded-md">
            <Image
              src={serviceIcon5}
              alt="Service icon"
              className="w-10 lg:w-20"
            />
            <div className="">
              <h1 className="lg:text-xl mb-2 font-semibold">Managed EDR</h1>
              <p className="text-sm lg:text-base">
                InfoSight&apos;s Endpoint Detection & Response (EDR) provides
                you with real time incident response, enterprise remediation and
                threat containment 24x7x365. Coupled with our Security
                Operations Center (SOC).
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-3 border border-gray-300 rounded-md">
            <Image
              src={serviceIcon6}
              alt="Service icon"
              className="w-10 lg:w-20"
            />
            <div className="">
              <h1 className="lg:text-xl mb-2 font-semibold">
                Industrial Control & IoT Assessments
              </h1>
              <p className="text-sm lg:text-base">
                InfoSight performs Industrial Control & OT Security Assessments
                to provide a complete evaluation and holistic view of your
                organization&apos;s security posture.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
