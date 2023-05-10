import React from "react";
import "./Style/ContactBorder.css";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import "bootstrap/dist/css/bootstrap.min.css";

const ContactBorder = (props) => {
  const navigate = useNavigate();

  const Moveto = () => {
    navigate(props.data.Links[0].Link);
  };

  return (
      <div className="ContactBorder-0">
        <div className="container">
          <div className="row">
            <div className="col-12 ContactBorder-1">{props.data.Heading}</div>
            <div className="col-12 ContactBorder-2">
              <a className="ContactBorder-3" href="/">
                {props.data.Links[0].Heading}
              </a>
              <span className="slash">/</span>
              <span className="ContactBorder-4">{props.data.Links[1].Heading}</span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ContactBorder;
