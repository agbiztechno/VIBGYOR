
import React from 'react';
import './Style/OurHistory.css';

const OurHistory = (props) => {
  return (
    <section className="our-history-0">
    <div className="our-history-1 flex our-history-2">
        <div className="our-history-4">
            <img src={props.data.image} alt=""/>
        </div>
        <div className="our-history-3 flex">
            
            <h3 className='our-history-heading'>{props.data.Heading}</h3>
            
            <p className='our-history-para'>{props.data.para[0].para1}</p>
            <p className='our-history-para'>{props.data.para[0].para2}</p>
        </div>
    </div>
</section>
  )
}

export default OurHistory