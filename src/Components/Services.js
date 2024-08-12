import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Col,
  Row,
  CardBody,
  Button,
  Fade,
} from "react-bootstrap";
import NavBar from "./Nav";

import img1 from "../Images/solanacoin.jpg";
import img2 from "../Images/soladodgeimage.jpg";
import img3 from "../Images/dodgelogo.png";
import img4 from "../Images/soladodgeimage.jpg";
import img6 from "../Images/teacher.svg";
import img5 from "../Images/curriculumpic.png";
import bcg from "../Images/dodgebcg.jpg";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const sectionStyle = {
    backgroundImage: `url(${bcg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Very opaque white
    zIndex: 1,
  };

  const contentStyle = {
    position: "relative",
    zIndex: 2,
  };

  const cardStyle = {
    background: "rgba(253, 249, 239, 0.8)", // Slightly transparent
    transition: "all 0.3s ease-in-out",
  };

  const buttonStyle = {
    background: "#FAF3DD",
    border: "none",
    transition: "background-color 0.3s ease-in-out",
    color: "#5C0632",
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = enter
      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
      : "none";
  };

  return (
    <React.Fragment>
      <section
        id="portfolio"
        className="position-relative"
        style={sectionStyle}
      >
        <div style={overlayStyle}></div>
        <Container style={contentStyle}>
          <Row className="justify-content-center mt-3">
            <Col lg={8}>
              <div className="text-center pt-5 text-dark mb-5">
                <h1
                  className="fw-bold"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    color: "#B22222",
                  }}
                >
                  ABOUT SOLADODGE
                </h1>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center gy-4">
            {/* Card 1 */}
            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img1}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button className="rounded-pill" style={buttonStyle}>
                        Solana Ecosystem
                      </Button>
                      <p
                        className="card-text mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        SolaDoge is the meme token that is taking the Solana
                        Ecosystem by Storm.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            {/* Card 2 */}
            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img4}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button className="rounded-pill" style={buttonStyle}>
                        Soladodge Meme
                      </Button>
                      <p
                        className="card-text mt-2 mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        In a world filled with countless meme coins, SolaDodge
                        stands out by combining the fun of memes with the
                        cutting-edge technology of Solana. We’re all about
                        bringing the community together, spreading laughter, and
                        of course, riding the wave of crypto innovation.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            {/* Card 3 */}
            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img3}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button className="rounded-pill" style={buttonStyle}>
                        soladodge
                      </Button>
                      <p
                        className="card-text mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        SolaDoge, a state of the art meme token on the Solana
                        Blockchain is the latest addition to this trend.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            {/* Card 4 */}
            <Col md={3}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3 text-center">
                      <div className="mt-auto">
                        <img
                          src={img4}
                          alt=""
                          height="55"
                          className="mb-3 pb-2"
                        />
                      </div>
                      <Button className="rounded-pill" style={buttonStyle}>
                        Membership
                      </Button>
                      <p
                        className="card-text mb-1 text-center text-muted"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        In a world filled with countless meme coins, SolaDodge
                        stands out by combining the fun of memes with the
                        cutting-edge technology of Solana. We’re all about
                        bringing the community together, spreading laughter, and
                        of course, riding the wave of crypto innovation.
                      </p>
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
