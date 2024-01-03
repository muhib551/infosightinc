import React from "react";
import Image from "next/image";
import logoImg from "../../../public/logo.svg";
import DDIcon from "../../../public/DDIcon.svg";
import chevronRightIcon from "../../../public/Chevron-right-Icon.svg";
import "@/Styles/NavDropdown.css";

const SERVICE_SOLUTION_DATA = [
  {
    title: "Advisory Services",
    link: "",
  },
  {
    title: "24x7 Managed Detection & Response",
    link: "partners",
  },
  {
    title: "SOCaaS",
    link: "SOCaaS",
  },
  {
    title: "SECaaS",
    link: "SECaaS",
  },
  {
    title: "Managed Services",
    link: "",
  },
  {
    title: "Training & Education",
    link: "careers",
  },
];

const INDUSTRIES_DATA = [
  {
    title: "Financial",
    link: "industries",
  },
  {
    title: "Energy & Electric",
    link: "industries",
  },
  {
    title: "Government",
    link: "industries",
  },
  {
    title: "Oil & Gas",
    link: "industries",
  },
  {
    title: "Manufacturing",
    link: "industries",
  },
  {
    title: "Water & Wastewater",
    link: "industries",
  },
  {
    title: "Entertainment",
    link: "industries",
  },
  {
    title: "Healthcare",
    link: "industries",
  },
];
const ABOUT_US_DATA = [
  {
    title: "About Us & Company History",
    link: "about-us",
  },
  {
    title: "Partners",
    link: "partners",
  },
  {
    title: "Why InfoSight",
    link: "why-infosight",
  },
  {
    title: "Testimonials",
    link: "testimonials",
  },
  {
    title: "Careers",
    link: "careers",
  },
];

const WEBINARS_DATA = [
  {
    title: "Webinars",
    link: "webinars",
  },
  {
    title: "News",
    link: "webinar-news",
  },
];

const ADV_SERVICE_SECURITY_DATA_1 = [
  {
    title: "Vulnerability & Cybersecurity Assessments",
    link: "vulnerability-cyber-security",
  },

  { title: "Penetration Testing", link: "penetration-testing" },

  { title: "Web Application Testing", link: "web-application-testing" },

  {
    title: "Mobile, API & Code Review",
    link: "code-review-api-mobile-testing",
  },

  {
    title: "Social Engineering & Physical Security Testing",
    link: "social-engineering-physical-security-testing",
  },
  { title: "VISO", link: "viso" },
];
const ADV_SERVICE_SECURITY_DATA_2 = [
  {
    title: "Industrial Control & IoT Security Assessments",
    link: "#industrial-control-IoT-security-assessments",
  },

  {
    title: "Cybersecurity & Incident Response Planning",
    link: "cybersecurity-incident-response-planning",
  },

  {
    title: "SCADA-ICS Risk & Vulnerability Assessments",
    link: "scada-ics-risk-assessments",
  },

  {
    title: "Red Blue Purple Team Testing",
    link: "red-blue-purple-team-testing",
  },
];

const NavBar = () => {
  return (
    <nav className="py-2 md:py-4 px-4 hidden md:block bg-white">
      <div className="container mx-auto flex items-center justify-center">
        <ul className=" flex items-center gap-8 text-[#667085]">
          <a href="#">
            <Image src={logoImg} alt="" className="" />
          </a>
          <li>
            <a href="#" className="">
              Home
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="">
              Services & Solutions
            </a>
            <Image src={DDIcon} alt="" className="cursor-pointer" />
            <div className="dropdown__menu absolute top-full text-[#667085] left-0 bg-white z-50 px-5 pb-5 w-max">
              <div className="py-5">
                <h1 className="text-gray-800 font-semibold">
                  Services & Solutions
                </h1>
                <p>
                  Get started and learn more about our services & solutions.
                </p>
              </div>
              <ul className="flex flex-col gap-3 w-7/12">
                <li className="flex items-center justify-between relative">
                  <a href="">Advisory Services</a>
                  <Image
                    src={chevronRightIcon}
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="dropdown__submenu absolute top-0 text-[#667085] left-full bg-white z-50 px-5 pb-5 w-max">
                    <ul className="flex flex-col gap-3">
                      <li className="flex items-center justify-between gap-2">
                        <a href="">Security</a>
                        <Image
                          src={chevronRightIcon}
                          alt=""
                          className="cursor-pointer"
                        />
                        <div className="DD__submenu absolute top-0 text-[#667085] left-full bg-white z-50 px-10 py-5 w-max">
                          <div className="flex justify-between">
                            <ul className="flex flex-col gap-3">
                              {ADV_SERVICE_SECURITY_DATA_1.map(
                                ({ title, link }, i) => {
                                  return (
                                    <li
                                      key={"ADV_SERVICE_SECURITY_DATA_1__" + i}
                                      className="w-10/12 mx-auto"
                                    >
                                      <a href={link} target="_blank">
                                        {title}
                                      </a>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                            <ul className="flex flex-col gap-3">
                              {ADV_SERVICE_SECURITY_DATA_2.map(
                                ({ title, link }, i) => {
                                  return (
                                    <li
                                      key={"ADV_SERVICE_SECURITY_DATA_2__" + i}
                                      className="w-10/12 ms-auto"
                                    >
                                      <a href={link}>{title}</a>
                                    </li>
                                  );
                                }
                              )}
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="business-continuity" target="_blank">
                          BCR/DR Planning
                        </a>
                      </li>
                      <li className="flex items-center justify-between gap-2">
                        <a href="">Risk Management</a>
                        <Image
                          src={chevronRightIcon}
                          alt=""
                          className="cursor-pointer"
                        />
                        <div className="DD__submenu absolute bottom-0 text-[#667085] left-full bg-white z-50 px-10 py-5 w-max">
                          <ul className="flex flex-col gap-3">
                            <li>
                              <a
                                href="enterprise-risk-management"
                                target="_blank"
                              ></a>
                              Enterprise Risk Management
                            </li>
                            <li>
                              <a
                                href="scada-ics-risk-assessments"
                                target="_blank"
                              ></a>
                              SCADA/ICS Risk Assessments
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-center justify-between gap-2">
                        <a href="">Compliance</a>
                        <Image
                          src={chevronRightIcon}
                          alt=""
                          className="cursor-pointer"
                        />
                        <div className="DD__submenu absolute -bottom-10 text-[#667085] left-full bg-white z-50 px-10 py-5 w-max">
                          <ul className="flex flex-col gap-3">
                            <li>
                              <a href="compliance" target="_blank"></a>
                              PCI - DSS
                            </li>
                            <li>
                              <a href="compliance" target="_blank"></a>
                              HIPAA
                            </li>
                            <li>
                              <a href="compliance" target="_blank"></a>
                              NERC - CIP
                            </li>
                            <li>
                              <a href="compliance" target="_blank"></a>
                              GLBA
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="flex items-center justify-between gap-2">
                        <a href="">Audit & Assurance</a>
                        <Image
                          src={chevronRightIcon}
                          alt=""
                          className="cursor-pointer"
                        />
                        <div className="DD__submenu absolute bottom-[70px] text-[#667085] left-full bg-white z-50 px-10 py-5 w-max">
                          <ul className="flex flex-col gap-3">
                            <li>
                              <a href="IT-audit" target="_blank">
                                IT Audit
                              </a>
                            </li>
                            <li>
                              <a
                                href="IT-general-controls-review"
                                target="_blank"
                              >
                                IT General Controls Review
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="" target="_blank">
                    24x7 Managed Detection & Response
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    SOCaaS
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    SECaaS
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <a href="">Managed Services</a>
                  <Image
                    src={chevronRightIcon}
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="dropdown__submenu absolute bottom-1 text-[#667085] left-full bg-white z-50 px-5 pb-5 w-max">
                    <ul className="flex flex-col gap-3">
                      <li>
                        <a href="">Managed XDR</a>
                      </li>
                      <li>
                        <a href="">Managed Network & Cloud Services</a>
                      </li>
                      <li>
                        <a href="">
                          Managed Communications, Collaboration & Connect
                          Services
                        </a>
                      </li>
                      <li>
                        <a href="">Managed EDR</a>
                      </li>
                      <li>
                        <a href="">Patch & Vulnerability Management</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="flex items-center justify-between">
                  <a href="">Training & Education</a>
                  <Image
                    src={chevronRightIcon}
                    alt=""
                    className="cursor-pointer"
                  />
                  <div className="dropdown__submenu absolute bottom-28 text-[#667085] left-full bg-white z-50 px-5 pb-5 w-max">
                    <ul className="flex flex-col gap-3">
                      <li>
                        <a href="">
                          Security Awareness Training for Online Banking
                        </a>
                      </li>
                      <li>
                        <a href="">Employee Security Awareness Training</a>
                      </li>
                      <li>
                        <a href="">LearnCloud LMS</a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* {SERVICE_SOLUTION_DATA.map(({ title, link }, i) => {
                  return (
                    <li key={"SERVICE_SOLUTION_DATA__" + i} className="">
                      <a href={link} target="_blank" className="">
                        {title}
                      </a>
                    </li>
                  );
                })} */}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-2 ">
            <a href="#" className="">
              Industries
            </a>
            <Image src={DDIcon} alt="" className="cursor-pointer" />
            <div className="dropdown__menu absolute top-full text-[#667085] left-0 bg-white z-50 px-5 pb-5 w-[360px]">
              <div className="py-5">
                <h1 className="text-gray-800 font-semibold">Industries</h1>
                <p>
                  Learn more about our services & solutions for below
                  industries.
                </p>
              </div>
              <ul className="flex flex-col gap-3">
                {INDUSTRIES_DATA.map(({ title, link }, i) => {
                  return (
                    <li key={"INDUSTRIES_DATA__" + i} className="">
                      <a href={link} target="_blank" className="">
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="">
              Insights
            </a>
            <Image src={DDIcon} alt="" className="cursor-pointer" />
            <div className="dropdown__menu absolute top-full text-[#667085] left-0 bg-white z-50 px-5 pb-5 w-[360px]">
              <div className="py-5">
                <h1 className="text-gray-800 font-semibold">Insights</h1>
                <p>Learn more about our company insights.</p>
              </div>
              <ul className="flex flex-col gap-3">
                {WEBINARS_DATA.map(({ title, link }, i) => {
                  return (
                    <li key={"WEBINARS_DATA__" + i} className="">
                      <a href={link} target="_blank" className="">
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="">
              About Us
            </a>
            <Image src={DDIcon} alt="" className="cursor-pointer" />
            <div className="dropdown__menu absolute top-full text-[#667085] left-0 bg-white z-50 px-5 pb-5 w-max">
              <div className="py-5">
                <h1 className="text-gray-800 font-semibold">About Us</h1>
                <p>Learn more about our Company & Partners.</p>
              </div>
              <ul className="flex flex-col gap-3">
                {ABOUT_US_DATA.map(({ title, link }, i) => {
                  return (
                    <li key={"ABOUT_US_DATA__" + i} className="">
                      <a href={link} target="_blank" className="">
                        {title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </li>
          <li>
            <a href="#" className="">
              Case Studies
            </a>
          </li>
          <li>
            <a href="#" className="">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
