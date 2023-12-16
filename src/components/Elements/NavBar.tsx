import React from "react";
import Image from "next/image";
import logoImg from "../../../public/logo.svg";
import DDIcon from "../../../public/DDIcon.svg";

const NavBar = () => {
  return (
    <nav className="py-2 md:py-4 px-4 hidden md:block bg-white">
      <div className="container mx-auto flex items-center justify-center">
        <ul className="flex items-center gap-8 text-[#667085]">
          <a href="#">
            <Image src={logoImg} alt="Logo" className="" />
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
            <Image src={DDIcon} alt="Dropdwon" className="cursor-pointer" />
          </li>
          <li>
            <a href="#" className="">
              Industries
            </a>
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="">
              Insights
            </a>
            <Image src={DDIcon} alt="Dropdwon" className="cursor-pointer" />
          </li>
          <li className="flex items-center gap-2">
            <a href="#" className="">
              About Us
            </a>
            <Image src={DDIcon} alt="Dropdwon" className="cursor-pointer" />
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
