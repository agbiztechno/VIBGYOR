import React from "react";
import founder from "../Images/founder.jpg";
import "./Style/OurFounder.css";

const OurFounder = (props) => {
  return (
    <div className="ourfounder-container">
      <div className="ourfounder-title">
        <h1>{props.data.Heading}</h1>
      </div>
      <div className="founder-image--container">
        <div className="founder-image">
          <img src={founder} alt="founder-image" />
          <h3>{props.data.Name}</h3>
          <div className="founder-content">{props.data.Paragraph}</div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
