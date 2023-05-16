import React from "react";
import "./Style/Enroll.css";
import phone from "../Images/phone_icon.png";

const Enroll = (props) => {
  return (
    <div className="enroll-main">
      <div className="enroll-content">
        <h1>{props.data.Heading}</h1>
        <p>{props.data.SubHeading}</p>
        <div className="phone-wrap">
          <img src={phone} alt="phone-icon" />
          <div>
            <span>+91&nbsp;</span>
            {props.data.Number}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enroll;
