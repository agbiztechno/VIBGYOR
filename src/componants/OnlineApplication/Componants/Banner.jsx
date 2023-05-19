import React from 'react'
import './Style/Banner.css';
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="online-first">
      <div className="online-1">
        <div className="online-2">
          <div className="online-4">
                  <Link to="/" className="online-5">
                    Home
                  </Link> / Online Application
          </div>
          <div className="online-3">
          Online Application 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner