import React from 'react'
import './Style/Banner.css';
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="about-first">
      <div className="about-1">
        <div className="about-2">
          <div className="about-4">
                  <Link to="/" className="about-5">
                    Home
                  </Link> / About Us
          </div>
          <div className="about-3">
            About Us
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner