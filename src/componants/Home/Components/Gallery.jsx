import React from "react";
import "./Style/Gallery.css";
import { Link } from "react-router-dom";

const Gallery = (props) => {
  const cards = props.data.cards;

  return (
    <div className="gallery-main">
      <div className="gallery-title">
        <h1>{props.data.Heading}</h1>
        <p>{props.data.SubHeading}</p>
        <Link to="/Gallary">
          <button>View All</button>
        </Link>
      </div>
      <div className="gallery-container row">
        {cards.map((image, index) => (
          <div className="gallery-card-item" key={index}>
            <img src={image.img} alt="image-section" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
