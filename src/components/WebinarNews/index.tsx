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

const WebinarNews = () => {
  React.useEffect(() => {
    document.title = "InfoSight | Webinars News";
  }, []);

  return (
    <div>
      <NavBar />
      <WebNewsHero />
      <p className="p-5 lg:px-20">Here will be path</p>
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
