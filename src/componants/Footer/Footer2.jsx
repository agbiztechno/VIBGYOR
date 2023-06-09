import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style/Footer2.css";
import { Link } from "react-router-dom";
import first from "../../Image/logo.png";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  const redirectToGoogleForm = (formUrl) => {
    window.open(formUrl, "_blank");
  };
  return (
    <div className="complete">
      <footer className="container text-center text-lg-start text-dark stylefirst">
        <section className="d-flex justify-content-between text-white stylesecond"></section>

        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
                  <img className="icon" src={first} alt="First slide" />
                </h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>
                  At Vibgyor we are committed to providing a safe and secure
                  learning environment to enable our children to develop skills
                  that will help them be caring, confident and responsible
                  global citizens. It is with this belief and faith that we
                  endeavor to inculcate in our children values of empathy,
                  responsibility, humility and the passion to believe in their
                  dreams.
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Service Provided</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>Quality Education</p>
                <p>Feedback Support</p>
                <p>Standard Teacher</p>
                <p>Practical Work</p>
                <p>Performance Review</p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>
                  <Link to="/" className="footer-link">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/About-Us" className="footer-link">
                    About Us
                  </Link>
                </p>
                <p>
                  <Link to="/Gallary" className="footer-link">
                    Gallary
                  </Link>
                </p>
                <p>
                  <Link to="/Online-Application" className="footer-link">
                    Online Application
                  </Link>
                </p>
                <p>
                  <Link to="/Contact-Us" className="footer-link">
                    Contact Us
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto stylethird" />
                <p>Vibgyor Public School Chandauli Raibareli, India</p>
                <p>principalofvibgyor @gmail.com</p>
                <p>+91-9451745323</p>
                <p>+91-9451745323</p>
                <p>
                  <FacebookRoundedIcon
                    id="Icon-MUI"
                    onClick={() =>
                      redirectToGoogleForm("https://m.facebook.com/vibgyorpublicschool")
                    }
                  />{" "}
                  <SubscriptionsRoundedIcon
                    id="Icon-MUI"
                    onClick={() =>
                      redirectToGoogleForm("https://www.youtube.com/channel/UC-HwqtOmbU1iVlobhKTa-rQ")
                    }
                  />{" "}
                  <TwitterIcon
                    id="Icon-MUI"
                    onClick={() =>
                      redirectToGoogleForm("https://twitter.com/vibgyor_school")
                    }
                  />{" "}
                  <InstagramIcon
                    id="Icon-MUI"
                    onClick={() =>
                      redirectToGoogleForm("https://www.instagram.com/vibgyor_group_of_schools_rbl/")
                    }
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <div className="text-center p-3 stylefour">
        © 2023 <span style={{ fontWeight: "600" }}>Vibgyor Public School</span>{" "}
        : Made by{" "}
        <a
          style={{ cursor: "pointer", fontWeight: "600" }}
          onClick={() => redirectToGoogleForm("http://www.agbiztech.in/")}
        >
          AGBIZ
        </a>
      </div>
    </div>
  );
};

export default Footer;
