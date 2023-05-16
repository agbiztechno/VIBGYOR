import React from "react";
import "./Style/Carousel.css";

import Carousel from "react-bootstrap/Carousel";
import { Typography } from "@mui/material";

const SlideShow = (props) => {
  //   console.log("🚀 ~ file: Carousel.jsx:8 ~ SlideShow ~ props:", props);
  const image = props.data.type.images[0];
  const description = props.data.type.Description[0];
  const subDescription = props.data.type.SubDescription[0];

  const redirectToGoogleForm = (formUrl) => {
    window.open(formUrl, "_blank");
  };

  return (
    <Carousel className="carousel-main--container">
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-image"
          src={image.image1}
          alt="First slide"
        />
        <Carousel.Caption className="carousel-description">
          <Typography>{description.desc1}</Typography>

          <button
            onClick={() =>
              redirectToGoogleForm(
                "https://docs.google.com/forms/d/e/1FAIpQLScn55ueMDHAK2KNugmx-q_WNSm3edD5Z2A83nvo5qaKT9gZKg/viewform"
              )
            }
            className="carousal-btn"
          >
            {subDescription.subdesc1}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-image"
          src={image.image2}
          alt="Second slide"
        />
        <Carousel.Caption className="carousel-description">
          <Typography>{description.desc2}</Typography>

          <button
            onClick={() =>
              redirectToGoogleForm(
                "http://www.vibgyorpublicschool.com/uploads/docs/Mr_prabhat_verma_scholarship_scheme.pdf"
              )
            }
            className="carousal-btn"
          >
            {subDescription.subdesc2}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 carousel-image"
          src={image.image3}
          alt="Third slide"
        />
        <Carousel.Caption className="carousel-description">
          <Typography>{description.desc3}</Typography>
          {/* issue with link */}
          <button
            onClick={() => redirectToGoogleForm("#")}
            className="carousal-btn"
          >
            {subDescription.subdesc3}
          </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;
