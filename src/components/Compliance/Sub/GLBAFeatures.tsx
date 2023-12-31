import Image from "next/image";
import React from "react";
import tickImg from "../../../../public/industries/industries-tick-circle-icon.svg";

const GLBA_FEATURES_DATA = [
  {
    img: tickImg,
    title: [
      "Evaluating the processes by which the institution monitors and tests the effectiveness of the institution's information security-related controls and their relationship with its Institution's information security risk assessment",
      "Meeting GLBA requirements",
      "Reviewing current policies and procedures regarding privacy disclosures",
      "Evaluating the Board of Directors approval and oversight of the institution's ISP and supervision of its development, implementation and maintenance, including a review of management reports concerning the effectiveness of the ISP",
      "Building security & compliance reports in a language your C-Suite and Board will understand",
      "Addressing the protection of NPI and notification to the institution of any information security breaches.",
    ],
  },
];

const GLBAFeatures = () => {
  return (
    <div className="bg-[#132534]">
      <div className="p-5 lg:px-20 lg:py-20 py-10">
        <h1 className="text-white text-2xl lg:text-4xl font-semibold">
          Key Features
        </h1>
        <div className="grid lg:grid-cols-2 gap-5 py-5 lg:py-10">
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Evaluating the processes by which the institution monitors and
              tests the effectiveness of the institution&apos;s information
              security-related controls and their relationship with its
              Institution&apos;s information security risk assessment
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Meeting GLBA requirements
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Reviewing current policies and procedures regarding privacy
              disclosures
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Evaluating the Board of Directors approval and oversight of the
              institution&apos;s ISP and supervision of its development,
              implementation and maintenance, including a review of management
              reports concerning the effectiveness of the ISP
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Building security & compliance reports in a language your C-Suite
              and Board will understand
            </p>
          </div>
          <div className="flex items-center bg-[#1E3A52] gap-5 lg:h-[130px] p-6 rounded-md hover:bg-[#193146] cursor-pointer">
            <Image src={tickImg} alt="tick icon" className="" />
            <p className="text-white font-semibold">
              Addressing the protection of NPI and notification to the
              institution of any information security breaches.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GLBAFeatures;
