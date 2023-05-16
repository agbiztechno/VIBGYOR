import react from "react";
import "../Style/bg_image.css";
import image1 from '../images/background-image_final.png'


const Bg_image = (props) => {
  return (
    <div>
      <div className='bg_image_main_container'>
        <img src={image1} alt='my_img' className='img-fluid banner_img'/>
        <div className='text_container_aboutus'>Welcome to VIBGYOR </div>
        {/* <div className='row mx-4 text_container_aboutus1'>Gallery </div> */}
          {/* <div className='text_container_content'><h4>hello</h4> </div> */}
        </div>
    </div>
  );

};

export default Bg_image;
