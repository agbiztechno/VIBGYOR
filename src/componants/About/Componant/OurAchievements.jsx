import React from 'react';
import "./Style/OurAchievements.css";

const OurAchievements = (props) => {
  return (
    <section className="our-achievements-0">
    <div className="our-achievements-1 flex our-achievements-2">
        <div className="our-achievements-4">
            <img src={props.data.image} alt=""/>
            {/* <iframe className='utube'  src="https://www.youtube.com/embed/UBlRRN3oJ-c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </div>
        <div className="our-achievements-3 flex">
            <h3 className='our-achievements-heading'>{props.data.Heading}</h3>
            <p className='our-achievements-para'>{props.data.para[0].para1}</p>
            <p className='our-achievements-para'>{props.data.para[0].para2}</p>
        </div>
    </div>
</section>

  )
}

export default OurAchievements
