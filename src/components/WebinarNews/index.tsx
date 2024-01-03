"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import InfoSight from "../CaseStudy/Sub/InfoSight";
import FutureBlackButtons from "../Elements/FutureBlackButtons";
import WebNewsHero from "./Sub/WebNewsHero";
import FollowUsCard from "../Webinars/Sub/FollowUsCard";
import WebCard from "../Webinars/Sub/WebCard";
import TopNews from "./Sub/TopNews";
import MainComponent from "./Sub/MainComp";

const WebinarNews = () => {
  React.useEffect(() => {
    document.title = "Webinars";
  }, []);

  return (
    <div>
      <NavBar />
      <WebNewsHero />
      <p className="p-5 lg:px-20">Home / Insights / Webinars</p>
      <TopNews />
      <FollowUsCard />
      <div className="lg:py-10">
        <InfoSight />
      </div>
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default WebinarNews;
