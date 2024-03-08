import React from "react";
import Layout from "../components/Layout/Layout.js";

const About = () => {
  return (
    <Layout title={"About Us - Ecommerce App"}>
      <div className="row containerBox">
        <div className="col-md-6">
          <img className="contactUs-image" src="/images/aboutUs.jpg" alt="" />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            officiis obcaecati esse tempore unde ratione, eveniet mollitia,
            perferendis eius temporibus dicta blanditiis doloremque explicabo
            quasi sunt vero optio cum aperiam vel consectetur!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
