import React from 'react';
import './Style/OurDedications.css';
const OurDedications = (props) => {
  return (
    <section className="our-Dedications-0">
        <div className="our-Dedications-1 flex our-Dedications-2">
            
            <div className="our-Dedications-3 flex">
                <h3 className='our-Dedications-heading'>{props.data.Heading}</h3>
                <p className='our-Dedications-para'>{props.data.para}</p>
            </div>
            <div className="our-Dedications-4">
                <img src={props.data.image} alt=""/>
            </div>
        </div>
    </section>
  )
}

export default OurDedications