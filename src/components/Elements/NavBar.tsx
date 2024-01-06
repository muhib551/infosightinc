import React from "react";
import Image from "next/image";
import logoImg from "../../../public/logo.svg";
import DDIcon from "../../../public/DDIcon.svg";
import chevronRightIcon from "../../../public/Chevron-right-Icon.svg";
import "@/Styles/NavDropdown.css";
import MbNavbar from "./MbNavbar";

const INDUSTRIES_DATA = [
  {
    title: "Financial",
    link: "/industries?s=0",
  },
  {
    title: "Energy & Electric",
    link: "/industries?s=1",
  },
  {
    title: "Government",
    link: "/industries?s=2",
  },
  {
    title: "Oil & Gas",
    link: "/industries?s=3",
  },
  {
    title: "Manufacturing",
    link: "/industries?s=4",
  },
  {
    title: "Water & Wastewater",
    link: "/industries?s=5",
  },
  {
    title: "Entertainment",
    link: "/industries?s=6",
  },
  {
    title: "Healthcare",
    link: "/industries?s=7",
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
    link: "industrial-control-IoT-security-assessments",
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
  // const [showsMenu, setShowMenu] = React.useState(false);

  return <MbNavbar />;

  return (
    <div className="">
      <nav className="py-2 md:py-6 px-4 hidden md:block bg-white lg:flex lg:items-center lg:justify-center ">
        <div className="container flex items-center justify-center w-full">
          <ul className=" flex items-center gap-8 ">
            <a href="home-page">
              <Image src={logoImg} alt="" className="w-16" />
            </a>
            <li>
              <a href="home-page" className="">
                Home
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#" className="">
                Services & Solutions
              </a>
              <Image src={DDIcon} alt="" className="cursor-pointer" />
              <div className="dropdown__menu absolute top-full left-0 bg-white z-50 w-[330px]">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">
                    Services & Solutions
                  </p>
                  <p className="text-gray-500">
                    Get started and learn more about our services & solutions.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 w-full pb-5">
                  <li className="flex items-center justify-between relative px-5">
                    <a href="">Advisory Services</a>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-full">
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center justify-between gap-2 px-5 pt-3">
                          <a href="">Security</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0 left-full bg-white z-50 w-max">
                            <div className="flex justify-between">
                              <ul className="flex flex-col gap-3 px-5 py-3">
                                {[
                                  ...ADV_SERVICE_SECURITY_DATA_1,
                                  ...ADV_SERVICE_SECURITY_DATA_2,
                                ].map(({ title, link }, i) => {
                                  return (
                                    <li
                                      key={"ADV_SERVICE_SECURITY_DATA_1__" + i}
                                      className=""
                                    >
                                      <a href={link}>{title}</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="px-5">
                          <a href="business-continuity">BCR/DR Planning</a>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5">
                          <a href="">Risk Management</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0  left-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              <li>
                                <a href="enterprise-risk-management">
                                  Enterprise Risk Management
                                </a>
                              </li>
                              <li>
                                <a href="scada-ics-risk-assessments">
                                  SCADA/ICS Risk Assessments
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5">
                          <a href="">Compliance</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0  left-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              <li>
                                <a href="compliance">PCI - DSS</a>
                              </li>
                              <li>
                                <a href="compliance">HIPAA</a>
                              </li>
                              <li>
                                <a href="compliance">NERC - CIP</a>
                              </li>
                              <li>
                                <a href="compliance">GLBA</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5 pb-3">
                          <a href="">Audit & Assurance</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0 left-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              <li>
                                <a href="IT-audit">IT Audit</a>
                              </li>
                              <li>
                                <a href="IT-general-controls-review">
                                  IT General Controls Review
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="px-5">
                    <a href="24x7-managed-detection-&-response">
                      24x7 Managed Detection & Response
                    </a>
                  </li>
                  <li className="px-5">
                    <a href="SOCaaS">SOCaaS</a>
                  </li>
                  <li className="px-5">
                    <a href="SECaaS">SECaaS</a>
                  </li>
                  <li className="flex items-center justify-between px-5">
                    <a href="">Managed Services</a>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-max">
                      <ul className="flex flex-col gap-3 px-5 py-3">
                        <li>
                          <a href="managed-xdr">Managed XDR</a>
                        </li>
                        <li>
                          <a href="managed-network-support-services">
                            Managed Network & Cloud Services
                          </a>
                        </li>
                        <li>
                          <a href="managed-communications">
                            Managed Communications, Collaboration & Connect
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="managed-EDR">Managed EDR</a>
                        </li>
                        <li>
                          <a href="patch-vulnerability-management">
                            Patch & Vulnerability Management
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="flex items-center justify-between px-5">
                    <a href="">Training & Education</a>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-max">
                      <ul className="flex flex-col gap-3 px-5 py-3">
                        <li>
                          <a href="bank-security-awareness-training">
                            Security Awareness Training for Online Banking
                          </a>
                        </li>
                        <li>
                          <a href="employee-security-awareness-training">
                            Employee Security Awareness Training
                          </a>
                        </li>
                        <li>
                          <a href="learn-about-the-cloud">Learn Cloud LMS</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2 ">
              <a href="industries" className="">
                Industries
              </a>
              <Image src={DDIcon} alt="" className="cursor-pointer" />
              <div className="dropdown__menu absolute top-full  left-0 bg-white z-50 w-[360px]">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">Industries</p>
                  <p className="text-gray-500">
                    Learn more about our services & solutions for below
                    industries.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 px-5 pb-3">
                  {INDUSTRIES_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"INDUSTRIES_DATA__" + i} className="">
                        <a href={link} className="">
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
              <div className="dropdown__menu absolute top-full left-0 bg-white z-50 w-max">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">Insights</p>
                  <p className="text-gray-500">
                    Learn more about our company insights.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 px-5 py-3">
                  {WEBINARS_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"WEBINARS_DATA__" + i} className="">
                        <a href={link} className="">
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <a href="about-us" className="">
                About Us
              </a>
              <Image src={DDIcon} alt="" className="cursor-pointer" />
              <div className="dropdown__menu absolute top-full  left-0 bg-white z-50 w-max">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">About Us</p>
                  <p className="text-gray-500">
                    Learn more about our Company & Partners.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 py-3">
                  {ABOUT_US_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"ABOUT_US_DATA__" + i} className=" px-5">
                        <a href={link} className="">
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <a href="case-studies" className="">
                Case Studies
              </a>
            </li>
            <li>
              <a href="contact" className="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav className="md:hidden">
        <div className="px-3 py-3 flex w-7/12 justify-between relative">
          <div onClick={() => setShowMenu(!showsMenu)} className="mt-2">
            {!showsMenu ? (
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#575757"
                  className="w-7 h-7 ml-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            ) : (
              <button className="flex items-center gap-1 font-semibold text-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-5 h-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5 8.25 12l7.5-7.5"
                  />
                </svg>
                Back
              </button>
            )}
          </div>
          <a href="home-page" className={showsMenu ? "hidden" : "block"}>
            <Image src={logoImg} alt="" className="" />
          </a>
        </div>
        <div
          className={`absolute bg-white z-50 h-full w-full ${
            !showsMenu ? "hidden" : "block"
          }`}
        >
          <ul className="flex flex-col px-5 pr-10 gap-5 pt-6">
            <li>
              <a href="#" className="">
                Home
              </a>
            </li>
            <li className="flex items-center justify-between gap-2">
              <a href="#" className="">
                Services & Solutions
              </a>
              <Image src={chevronRightIcon} alt="" className="cursor-pointer" />
              <div className="absolute top-0 right-0 bg-white z-50 w-[330px]">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">
                    Services & Solutions
                  </p>
                  <p className="text-gray-500">
                    Get started and learn more about our services & solutions.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 w-full pb-5">
                  <li className="flex items-center justify-between relative px-5">
                    <a href="">Advisory Services</a>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="absolute top-0  right-full bg-white z-50 w-full">
                      <ul className="flex flex-col gap-3">
                        <li className="flex items-center justify-between gap-2 px-5 pt-3">
                          <a href="">Security</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="absolute top-0 right-full bg-white z-50 w-max">
                            <div className="flex justify-between">
                              <ul className="flex flex-col gap-3 px-5 py-3">
                                {[
                                  ...ADV_SERVICE_SECURITY_DATA_1,
                                  ...ADV_SERVICE_SECURITY_DATA_2,
                                ].map(({ title, link }, i) => {
                                  return (
                                    <li
                                      key={"ADV_SERVICE_SECURITY_DATA_1__" + i}
                                      className=""
                                    >
                                      <a href={link}>{title}</a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="px-5">
                          <a href="business-continuity">BCR/DR Planning</a>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5">
                          <a href="">Risk Management</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0  right-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              <li>
                                <a href="enterprise-risk-management">
                                  Enterprise Risk Management
                                </a>
                              </li>
                              <li>
                                <a href="scada-ics-risk-assessments">
                                  SCADA/ICS Risk Assessments
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5">
                          <a href="">Compliance</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0  right-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              <li>
                                <a href="compliance">PCI - DSS</a>
                              </li>
                              <li>
                                <a href="compliance">HIPAA</a>
                              </li>
                              <li>
                                <a href="compliance">NERC - CIP</a>
                              </li>
                              <li>
                                <a href="compliance">GLBA</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="flex items-center justify-between gap-2 px-5 pb-3">
                          <a href="">Audit & Assurance</a>
                          <Image
                            src={chevronRightIcon}
                            alt=""
                            className="cursor-pointer"
                          />
                          <div className="DD__submenu absolute top-0 right-full bg-white z-50 w-max">
                            <ul className="flex flex-col gap-3 px-5 py-3">
                              <li>
                                <a href="IT-audit">IT Audit</a>
                              </li>
                              <li>
                                <a href="IT-general-controls-review">
                                  IT General Controls Review
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="px-5">
                    <a href="">24x7 Managed Detection & Response</a>
                  </li>
                  <li className="px-5">
                    <a href="">SOCaaS</a>
                  </li>
                  <li className="px-5">
                    <a href="">SECaaS</a>
                  </li>
                  <li className="flex items-center justify-between px-5">
                    <a href="">Managed Services</a>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  right-full bg-white z-50 w-max">
                      <ul className="flex flex-col gap-3 px-5 py-3">
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
                  <li className="flex items-center justify-between px-5">
                    <a href="">Training & Education</a>
                    <Image
                      src={chevronRightIcon}
                      alt=""
                      className="cursor-pointer"
                    />
                    <div className="dropdown__submenu absolute top-0  right-full bg-white z-50 w-max">
                      <ul className="flex flex-col gap-3 px-5 py-3">
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
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-between">
              <a href="#" className="">
                Industries
              </a>
              <Image src={chevronRightIcon} alt="" className="cursor-pointer" />
              <div className="absolute top-0 right-0 bg-white z-50 w-[360px]">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">Industries</p>
                  <p className="text-gray-500">
                    Learn more about our services & solutions for below
                    industries.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 px-5 pb-3">
                  {INDUSTRIES_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"INDUSTRIES_DATA__" + i} className="">
                        <a href={link} className="">
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-between">
              <a href="#" className="">
                Insights
              </a>
              <Image src={chevronRightIcon} alt="" className="cursor-pointer" />
              <div className="absolute top-0 right-0 bg-white z-50 w-max">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">Insights</p>
                  <p className="text-gray-500">
                    Learn more about our company insights.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 px-5 py-3">
                  {WEBINARS_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"WEBINARS_DATA__" + i} className="">
                        <a href={link} className="">
                          {title}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-between">
              <a href="#" className="">
                About Us
              </a>
              <Image src={chevronRightIcon} alt="" className="cursor-pointer" />
              <div className="absolute top-0  right-0 bg-white z-50 w-max">
                <div className="p-5">
                  <p className="text-gray-800 font-semibold">About Us</p>
                  <p className="text-gray-500">
                    Learn more about our Company & Partners.
                  </p>
                </div>
                <ul className="flex flex-col gap-3 py-3">
                  {ABOUT_US_DATA.map(({ title, link }, i) => {
                    return (
                      <li key={"ABOUT_US_DATA__" + i} className=" px-5">
                        <a href={link} className="">
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
                Case Studiess
              </a>
            </li>
            <li>
              <a href="#" className="">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav> */}
    </div>
  );
};

export default NavBar;
