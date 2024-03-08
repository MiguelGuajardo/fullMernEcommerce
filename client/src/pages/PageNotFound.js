import React from "react";
import Layout from "../components/Layout/Layout.js";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Layout>
      <div className="pageNotFound">
        <h1 className="pageNotFound-title">404</h1>
        <h2 className="pageNotFound-heading">Oops! Page Not Found</h2>
        <Link className="pageNotFound-button">Go Back</Link>
      </div>
    </Layout>
  );
};

export default PageNotFound;
