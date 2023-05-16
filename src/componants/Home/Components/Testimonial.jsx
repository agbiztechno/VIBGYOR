import React from "react";
import "./Style/Testimonial.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = (props) => {
  const slide = props.data.cards;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="testimonial-container">
      <div className="testimonial-header">
        <h1>{props.data.Heading}</h1>
        <h3>{props.data.SubHeading}</h3>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {slide.map((testimonial) => (
            <div key={crypto.randomUUID()} className="testimonial">
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <p className="testimonial-content">{testimonial.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
