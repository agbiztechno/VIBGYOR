import React from "react";
import "./Style/Gallary.css";
import "bootstrap/dist/css/bootstrap.min.css";
import bg_images from './content/bg_image'
import Bg_image from "./componants/Bg_image";
import photos_sections from './content/photos_section';
import videos_sections from './content/videos_section';
import Photos_section from './componants/Photos_section'
import Videos_section from './componants/Videos_section';


const Gallary = () => {
  return (
    <div className="Gallary">
    <Bg_image data={bg_images} />
    <Photos_section data={photos_sections}/>
    <Videos_section data={videos_sections}/>
    </div>
  );
};

export default Gallary;
