import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "reactstrap";
import soladodge from "../Images/bettersoldodge.png";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const gradientBackgroundStyle = {
    background: "linear-gradient(70deg,  #FCFCFC 10%, #FCFCFC 50%)",
  };

  const navLinkStyle = {
    marginLeft: '15px',
    marginRight: '15px',
    color: '#000',
    // fontWeight: 'semi-bold',  // This makes the text bold
  };

  const buttonStyle = {
    backgroundColor: '#B22222',
    borderColor: '#B22222',
  };

  const centerNavStyle = {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
  };

  const toggleButtonStyle = {
    border: '1px solid #121212',
    backgroundColor: 'transparent',
  };

  const toggleIconStyle = {
    backgroundColor: 'transparent',
  };

  return (
    <div className="justify-center">
      <Navbar bg="myRed" data-bs-theme="light" style={gradientBackgroundStyle} expand="lg">
        <Container>
          <Navbar.Brand className="fw-bold" href="#home" style={{ color: '#B22222' }}>
          <img src={soladodge} alt="Swift Wings Logo" height="40" />
            SOLADODGE
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="basic-navbar-nav" 
            style={toggleButtonStyle}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="navbar-toggler-icon" style={toggleIconStyle}></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav" in={isOpen}>
            <Nav style={centerNavStyle}>
              {/* <Nav.Link href="#home" style={navLinkStyle}>Home</Nav.Link> */}
              <Nav.Link href="#services" style={navLinkStyle}>Overview</Nav.Link>
              <Nav.Link href="#portfolio" style={navLinkStyle}>About Us</Nav.Link>
              <Nav.Link href="#contact" style={navLinkStyle}>Blog</Nav.Link>
              <Nav.Link href="#faq" style={navLinkStyle}>FAQ's</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;