import React, { useState } from "react";
import "../Style/photos_section.css";
import photos_section from "../content/photos_section";

const Photos_section = (props) => {
  const [fullScreenImageSrc, setFullScreenImageSrc] = useState(null);

  const openFullImage = (src) => {
    setFullScreenImageSrc(src);
  };

  const closeFullImage = () => {
    setFullScreenImageSrc(null);
  };

  return (
    <div className="photos_section_div">
      <h1 className="photos_section_div_heading01">Image Gallery</h1>
      <div className="photos_section_photo-gallery">
        {photos_section.Headings.map((item, index) => (
          <div
            key={index}
            className="photos_section_container"
            onClick={() => openFullImage(item.i)}
          >
            <img src={item.i} alt="my_image" className="photos_section_image" />
            <div className="photos_section_sub_headings">{item.h}</div>
          </div>
        ))}
      </div>

      {fullScreenImageSrc && (
        <div className="photos_section_popup-image">
          <span className="photos_section_popup-image_span" onClick={closeFullImage}>
            &times;
          </span>
          <img
            src={fullScreenImageSrc}
            alt="my_image"
            className="photos_section_popup-image_img"
          />
        </div>
      )}
    </div>
  );
};

export default Photos_section;
