import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../../Image/logo.png';
import './Style/Header.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  const redirectToGoogleForm = (formUrl) => {
    window.open(formUrl, "_blank");
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")} >
          <img
            id="Navbar-Image"
            src={logo}
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link onClick={() => navigate("/")} id="Header-links">Home</Nav.Link>
            <Nav.Link eventKey={2} onClick={() => navigate("/About-Us")}  id="Header-links">
            About Us
            </Nav.Link>
            <Nav.Link onClick={() => navigate("/Gallary")} id="Header-links">Gallary</Nav.Link>
            <Nav.Link target="_blank" onClick={() =>
              redirectToGoogleForm(
                "https://docs.google.com/forms/d/e/1FAIpQLSfiaKXb72Kc9m2d29zZA8SY1oOIeHs5TEnksnPSrqTo-7TU-w/viewform"
              )
            } id="Header-links">Careers</Nav.Link>
            <Nav.Link onClick={() => navigate("/Contact-Us")}  id="Header-links">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
