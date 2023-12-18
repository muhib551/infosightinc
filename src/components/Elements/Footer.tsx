import Image from "next/image";
import React from "react";
import logoImg from "../../../public/logo.svg";

const Footer = () => {
  return (
    <div>
      <div className="p-5 lg:p-20 flex flex-col lg:flex-row items-start justify-between w-full">
        <div className="hidden lg:flex flex-col gap-5">
          <Image src={logoImg} alt="Logo" className="w-32" />
          <div>
            <h1 className="text-[#EC6A30] text-lg">InfoSight</h1>
            <p className="text-gray-900">Bringing the future into focus.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-xl text-gray-900 font-semibold">Navigation</h1>
          <a href="">Home</a>
          <a href="">Services & Solutions</a>
          <a href="">Industries</a>
          <a href="">Insights</a>
          <a href="">About us</a>
        </div>
        <div className="flex flex-col gap-2 mt-8 lg:mt-0">
          <h1 className="text-xl text-gray-900 font-semibold">Insights</h1>
          <a href="">Penetration Testing</a>
          <a href="">SOCaaS</a>
        </div>
        <div className="flex flex-col gap-2 mt-8 lg:mt-0">
          <h1 className="text-xl text-gray-900 font-semibold">Contact us</h1>
          <p>info@infosightinc.com</p>
          <p>305-828-1003</p>
          <p className="">
            14100 Palmetto Frontage <br /> Rd Suite 310 Miami Lakes, <br /> FL
            33016{" "}
          </p>
        </div>
        <div className="lg:hidden mt-8 lg:mt-0">
          <Image src={logoImg} alt="Logo" className="w-32" />
          <div className="mt-5">
            <h1 className="text-[#EC6A30] text-lg">InfoSight</h1>
            <p className="text-gray-900">Bringing the future into focus.</p>
          </div>
        </div>
      </div>
      <p className="text-gray-500 -mt-5 lg:-mt-10 px-8 pb-5 lg:pb-5 lg:px-20">
        © 2023 InfoSight. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
