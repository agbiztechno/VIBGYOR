import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from '../../Image/logo.png';
import './Style/Header.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={logo}
            width="300"
            height="60"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Nav.Link href="/" id="Header-links">Home</Nav.Link>
            <Nav.Link eventKey={2} href="/About-Us" id="Header-links">
            About Us
            </Nav.Link>
            <Nav.Link href="/Gallary" id="Header-links">Gallary</Nav.Link>
            <Nav.Link href="/Careers" id="Header-links">Careers</Nav.Link>
            <Nav.Link href="/Contact-Us" id="Header-links">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
