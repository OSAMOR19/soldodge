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
    color: "#ffffff",
    fontSize: "1.5rem",
    marginRight: "20px",
    textDecoration: "none",
    transition: "color 0.3s ease",
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
            <h2 style={logoStyle}>SOLADODGE</h2>
            <p style={copyrightStyle}>© 2024 SOLADODGE. All rights reserved.</p>
          </Col>
          <Col lg={6} className="text-center text-lg-end">
            <a href="https://twitter.com/soladodge" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              &#128038; {/* Bird emoji for Twitter */}
            </a>
            <a href="https://discord.gg/soladodge" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              &#128172; {/* Speech balloon emoji for Discord */}
            </a>
            <a href="https://t.me/soladodge" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              &#9993; {/* Envelope emoji for Telegram */}
            </a>
          </Col>
        </Row>
      </Container>
      <style jsx>{`
        @media (hover: hover) {
          a:hover {
            color: #4ECDC4 !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;