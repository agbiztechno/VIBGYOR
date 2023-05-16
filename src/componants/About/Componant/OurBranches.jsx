import React from 'react';
import './Style/OurBranches.css';

const OurBranches = (props) => {
  return (
    <div className="our-Branches-0">
    <h1>{props.data.heading}</h1>
    
    <div className="our-Branches-1">
        <div className="our-Branches-2">
          <div className="our-Branches-img">
             <img src={props.data.branch[0].image} alt="our_branch"/>
            
          </div>
          <h3>{props.data.branch[0].heading}</h3>
          <p className="branch-contact">{props.data.branch[0].contact}</p>
          <p>{props.data.branch[0].email}</p>
        </div>
        <div className="our-Branches-2">
           <div className="our-Branches-img">
             <img src={props.data.branch[1].image} alt="our_branch"/>
           
          </div>
          <h3>{props.data.branch[1].heading}</h3>
          <p className="branch-contact">{props.data.branch[1].contact_1}</p>
          <p className="branch-contact">{props.data.branch[1].contact_2}</p>
          <p>{props.data.branch[1].email}</p>
      </div>
        <div className="our-Branches-2">
           <div className="our-Branches-img">
             <img src={props.data.branch[2].image} alt="our_branch"/>
          </div>
          <h3>{props.data.branch[2].heading}</h3>
          <p className="branch-contact">{props.data.branch[2].contact_1}</p>
          <p className="branch-contact">{props.data.branch[2].contact_2}</p>
          <p>{props.data.branch[2].email}</p>
      </div> 
    </div>
</div>	
  )
}

export default OurBranches
