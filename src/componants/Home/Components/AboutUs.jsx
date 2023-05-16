import React from "react";
import "./Style/AboutUs.css";

const AboutUs = (props) => {
  const images = props.data.Images[0];
  const heading = props.data.Heading;
  // console.log("🚀 ~ file: AboutUs.jsx:11 ~ AboutUs ~ heading:", heading);

  return (
    <div className="about-main--container">
      <div className="about-image--container">
        {/* <img src={images.one} alt="first-image" className="about-first-img" /> */}
        <img src={images.one} alt="second-image" className="about-second-img" />
        {/* <div className="red-overlay"></div> */}
        <div className="green-overlay"></div>
      </div>
      <div className="about-description--container">
        <div className="about-header">
          <h2>{props.data.mainHeading}</h2>
          <p>{props.data.paragraph}</p>
        </div>
        {heading.map((aboutElem) => (
          <div key={crypto.randomUUID()} className="about-subheader">
            <h3>{aboutElem.main}</h3>
            <p>{aboutElem.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
