import React from "react";
import Image from "next/image";
import logoImg from "../../../public/logo.svg";
import DDIcon from "../../../public/DDIcon.svg";
import chevronRightIcon from "../../../public/Chevron-right-Icon.svg";
import menuIcon from "../../../public/menuIcon.svg";
import backIcon from "../../../public/backIcon.svg";
import "@/Styles/NavDropdown.css";

const SERVICE_SOLUTION_DATA = [
  {
    title: "Advisory Services",
    link: "",
  },
  {
    title: "24x7 Managed Detection & Response",
    link: "24x7-managed-detection-&-response",
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
  const [showsMenu, setShowMenu] = React.useState(false);

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
      <nav className="md:hidden">
        <div className=" px-5 py-3 flex w-7/12 justify-between relative">
          <Image
            onClick={() => setShowMenu(!showsMenu)}
            src={!showsMenu ? menuIcon : backIcon}
            alt=""
            className="cursor-pointer"
          />
          <a href="home-page">
            <Image src={logoImg} alt="" className="" />
          </a>
        </div>
        <div
          className={`absolute bg-white z-50 h-full w-full ${
            !showsMenu ? "hidden" : "block"
          }`}
        >
          <ul className=" flex flex-col px-5 pr-10 gap-5 ">
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
                          <div
                            className="DD__submenu absolute top-0 left-full bg-white z-50 w-max"
                            // style={{
                            //   left: "calc(100% + 40px)",
                            //   top: "-15px",
                            // }}
                          >
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
                              {/* <ul className="flex flex-col gap-3">
                              {ADV_SERVICE_SECURITY_DATA_2.map(
                                ({ title, link }, i) => {
                                  return (
                                    <li
                                      key={"ADV_SERVICE_SECURITY_DATA_2__" + i}
                                      className="w-11/12 mx-auto"
                                    >
                                      <a href={link}>{title}</a>
                                    </li>
                                  );
                                }
                              )}
                            </ul> */}
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
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-max">
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
                    <div className="dropdown__submenu absolute top-0  left-full bg-white z-50 w-max">
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
                  {/* {SERVICE_SOLUTION_DATA.map(({ title, link }, i) => {
                  return (
                    <li key={"SERVICE_SOLUTION_DATA__" + i} className="">
                      <a href={link}  className="">
                        {title}
                      </a>
                    </li>
                  );
                })} */}
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-2 justify-between">
              <a href="#" className="">
                Industries
              </a>
              <Image src={chevronRightIcon} alt="" className="cursor-pointer" />
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
            <li className="flex items-center gap-2 justify-between">
              <a href="#" className="">
                Insights
              </a>
              <Image src={chevronRightIcon} alt="" className="cursor-pointer" />
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
            <li className="flex items-center gap-2 justify-between">
              <a href="#" className="">
                About Us
              </a>
              <Image src={chevronRightIcon} alt="" className="cursor-pointer" />
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
      </nav>
    </div>
  );
};

export default NavBar;
