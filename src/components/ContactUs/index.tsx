import React from "react";
import NavBar from "../Elements/NavBar";
import Footer from "../Elements/Footer";
import FutureWOButton from "../Elements/FutureWOButton";
import Form from "./Sub/Form";
import ContactInfo from "./Sub/ContactInfo";

const ContactUs = () => {
  return (
    <div>
      <NavBar />
      <p className="p-5 lg:px-20">Here will be path</p>
      <h1 className="p-5 text-gray-900 lg:px-20 text-2xl lg:text-4xl font-semibold">
        Contact Us
      </h1>
      <ContactInfo />
      <Form />
      <FutureWOButton />
      <Footer />
    </div>
  );
};

export default ContactUs;
