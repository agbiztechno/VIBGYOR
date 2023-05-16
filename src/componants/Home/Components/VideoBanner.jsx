import React from "react";
import "./Style/VideoBanner.css";

const VideoBanner = (props) => {
  return (
    <div className="videobanner-main">
      <div className="videobanner-title">
        <h1>{props.data.Heading}</h1>
      </div>
      <div className="videobanner-wrapper">
        <div className="videobanner-video">
          <iframe
            src="https://www.youtube.com/embed/BNA7SDuHLbk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen
            className="video-item"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
