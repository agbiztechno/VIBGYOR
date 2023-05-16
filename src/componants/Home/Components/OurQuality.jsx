import React from "react";
import "./Style/OurQuality.css";
import {
  LocalLibrary,
  AutoStories,
  Lightbulb,
  School
} from "@mui/icons-material";

const OurQuality = (props) => {
  const heading = props.data.Heading[0];
  const paragraph = props.data.Paragraph[0];

  return (
    <div className="ourquality-main--container">
      <div className="ourquality-cards">
        <div className="ourquality-item1">
          <School />
          <h3>{heading.one}</h3>
          <p>{paragraph.one}</p>
        </div>
        <div className="ourquality-item2">
          <AutoStories />
          <h3>{heading.two}</h3>
          <p>{paragraph.two}</p>
        </div>
        <div className="ourquality-item3">
          <Lightbulb />
          <h3>{heading.three}</h3>
          <p>{paragraph.three}</p>
        </div>
        <div className="ourquality-item4">
          <LocalLibrary />
          <h3>{heading.four}</h3>
          <p>{paragraph.four}</p>
        </div>
      </div>
    </div>
  );
};

export default OurQuality;
