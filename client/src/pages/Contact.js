import React from "react";
import Layout from "../components/Layout/Layout.js";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us - Ecommerce App"}>
      <div className="row containerBox">
        <div className="col-md-6">
          <img className="contactUs-image" src="/images/contactUs.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24/7
            available
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.help@ecommerceApp.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 011-12345678
          </p>
          <p className="mt-3">
            <BiSupport /> : 02320-123456
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
