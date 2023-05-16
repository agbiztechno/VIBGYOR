import React from "react";
import "./Style/Home.css";
//components
import Carousel from "./Components/Carousel";
import OurQuality from "./Components/OurQuality";
import AboutUs from "./Components/AboutUs";
import Banner from "./Components/Banner";
import VideoBanner from "./Components/VideoBanner";
import Gallery from "./Components/Gallery";
import Testimonial from "./Components/Testimonial";
import Enroll from "./Components/Enroll";
import OurFounder from "./Components/OurFounder";

//contents
import Carousels from "./Contents/Carousels";
import OurQualities from "./Contents/OurQualities";
import About from "./Contents/AboutUs";
import Banners from "./Contents/Banners";
import VideoBanners from "./Contents/VideoBanners";
import Galleries from "./Contents/Galleries";
import Testimonials from "./Contents/Testimonials";
import Enrolls from "./Contents/Enrolls";
import OurFounders from "./Contents/OurFounders";

const Home = () => {
  return (
    <div className="Home">
      <Carousel data={<Carousels />} />
      <OurQuality data={OurQualities} />
      <AboutUs data={About} />
      <Banner data={Banners} />
      <VideoBanner data={VideoBanners} />
      <Gallery data={Galleries} />
      <Testimonial data={Testimonials} />
      <Enroll data={Enrolls} />
      <OurFounder data={OurFounders} />
    </div>
  );
};

export default Home;
