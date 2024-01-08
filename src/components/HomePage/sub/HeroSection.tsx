import React from "react";
import Image from "next/image";
import heroImg from "../../../../public/homepage/hero-img-desktop.svg";
import heroImgMob from "../../../../public/homepage/Mask group.png";
import Button from "../../Elements/Button";
import NavBar from "../../Elements/NavBar";
import Link from "next/link";
import PopupModal from "@/components/WebinarNews/Sub/Popup";

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="">
        <Image src={heroImg} alt="" className="w-full md:block hidden" />
        <div className="absolute lg:top-[24%] md:top-[6%] md:left-5 lg:left-32 text-white hidden md:block">
          <div>
            <h1 className="lg:text-[60px] md:text-[40px] font-semibold leading-tight">
              InfoSight Network & <br /> Cyber Security <br /> Training
            </h1>
            <p className="mt-6 lg:text-xl w-7/12">
              The experience-based knowledge you need to guard against Cyber
              Attacks and simplify Risk Management.
            </p>
          </div>
          <div className="mt-10">
            <Button text="Watch Video" onClick={handleOpenModal} />
            <PopupModal
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              style={{
                display: "flex",
                alignItems: "center",
                justifyItems: "center",
                top: "-10px",
                right: "-5px",
                backgroundColor: "transparent",
                fontSize: "18px",
                fontWeight: "500",
                padding: "0",
              }}
            >
              <div className="">
                <video
                  width="600"
                  className="video_player"
                  autoPlay={true}
                  muted={true}
                  // playsinline={}
                  controls={true}
                >
                  <source
                    src="https://www.infosightinc.com/Videos/infosight-video.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </div>
            </PopupModal>
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
              <Button text="Watch Video" onClick={handleOpenModal} />
              <PopupModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  top: "-10px",
                  right: "-5px",
                  backgroundColor: "transparent",
                  fontWeight: "500",
                }}
              >
                <video
                  width="600"
                  className="video_player"
                  autoPlay={true}
                  muted={true}
                  controls={true}
                >
                  <source
                    src="https://www.infosightinc.com/Videos/infosight-video.mp4"
                    type="video/mp4"
                  ></source>
                </video>
              </PopupModal>
            </div>
          </div>
        </div>
        <Image src={heroImgMob} alt="" className="w-full md:hidden block" />
      </div>
    </div>
  );
};

export default HeroSection;
