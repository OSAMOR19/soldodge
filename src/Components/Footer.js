import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const footerStyle = {
    background: "linear-gradient(90deg, #0E0D13 0%, #121212 100%)",
    color: "#ffffff",
    padding: "30px 0",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const logoStyle = {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "bold",
    fontSize: "2rem",
    background: "linear-gradient(45deg, #FF6B6B, #4ECDC4)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "20px",
  };

  const socialLinkStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    fontSize: "1.5rem",
    width: "40px",
    height: "40px",
    marginRight: "15px",
    textDecoration: "none",
    transition: "all 0.3s ease",
    borderRadius: "50%",
    background: "rgba(255, 255, 255, 0.1)",
  };

  const copyrightStyle = {
    fontSize: "0.9rem",
    opacity: 0.7,
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
            <h2 style={logoStyle}>SOLADOGE</h2>
            <p style={copyrightStyle}>© 2024 SOLADOGE. All rights reserved.</p>
          </Col>
          <Col lg={6} className="text-center text-lg-end">
            <a href="https://x.com/realsoladoge" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="ri-twitter-x-fill"></i>
            </a>
            <a href="https://t.me/realsoladoge" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <i className="ri-telegram-fill"></i>
            </a>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        @import url('https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css');
        .ri-twitter-x-fill, .ri-telegram-fill {
          font-size: 1.5rem;
        }
        @media (hover: hover) {
          a:hover {
            background: rgba(255, 255, 255, 0.2) !important;
            transform: translateY(-3px);
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;