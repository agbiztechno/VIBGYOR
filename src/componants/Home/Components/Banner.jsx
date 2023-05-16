import React from "react";
import "./Style/Banner.css";
import { Link } from "react-router-dom";

const Banner = (props) => {
  return (
    <div className="banner-main">
      <div className="banner-content">
        <h1>{props.data.Heading}</h1>
        <p>{props.data.Paragraph}</p>
        <Link to="/Contact-Us">
          <button>Contact Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
