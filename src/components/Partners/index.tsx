"use client";
import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import PartnersHeroSecton from "./Sub/PartnersHeroSecton";
import PartnersCard from "./Sub/PartnersCard";
import FutureBlackButtons from "../Elements/FutureBlackButtons";

const Partners = () => {
  React.useEffect(() => {
    document.title = "InfoSight Partners | InfoSight";
  }, []);

  return (
    <div>
      <NavBar />
      <PartnersHeroSecton />
      <p className="p-5 lg:px-20">Home / About Us / Partners</p>
      <PartnersCard />
      <FutureBlackButtons />
      <Footer />
    </div>
  );
};

export default Partners;
