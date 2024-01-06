import React from "react";
import Image from "next/image";
import heroImg from "../../../../public/homepage/hero-img-desktop.svg";
import heroImgMob from "../../../../public/homepage/Mask group.png";
import Button from "../../Elements/Button";
import NavBar from "../../Elements/NavBar";

const HeroSection = () => {
  return (
    <div className="relative">
      {/* <div className="absolute top-0 w-full">
        <NavBar />
      </div> */}
      <div className="">
        <Image src={heroImg} alt="" className="w-full md:block hidden" />
        <div className="absolute top-[24%] left-32 text-white hidden md:block">
          <h1 className="  text-[60px] font-semibold leading-tight">
            InfoSight Network & <br /> Cyber Security <br /> Training
          </h1>
          <p className="mt-6 text-xl">
            The experience-based knowledge you need to guard against <br />{" "}
            Cyber Attacks and simplify Risk Management.
          </p>
          <div className="mt-10">
            <Button text="Watch Video" />
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-[#3B719F] w-full px-5 py-8 ">
          <div className=" md:hidden block text-white ">
            <h1 className="text-[36px] font-semibold">
              InfoSight <br /> Network & Cyber <br /> Security Training
            </h1>
            <p className="mt-3">
              The experience-based knowledge you need to guard against Cyber
              Attacks and simplify Risk Management.
            </p>
            <div className="mt-4">
              <Button text="Watch Video" />
            </div>
          </div>
        </div>
        <Image src={heroImgMob} alt="" className="w-full md:hidden block" />
      </div>
    </div>
  );
};

export default HeroSection;
