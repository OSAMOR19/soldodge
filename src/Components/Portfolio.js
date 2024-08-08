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

import img1 from "../Images/soladodgeblue.jpg";
import img2 from "../Images/dodge2.jpeg";
import img3 from "../Images/integrateimage.svg";
import img4 from "../Images/solaelon.jpg";
import img6 from "../Images/solaflyer.jpg";
import img5 from "../Images/solthrone.jpg";

const Portfolio = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const cardStyle = {
    transition: "all 0.3s ease-in-out",
  };

  const buttonStyle = {
    background: "#FFD700",
    border: "none",
    transition: "background-color 0.3s ease-in-out",
  };

  const handleCardHover = (e, enter) => {
    e.currentTarget.style.transform = enter
      ? "translateY(-5px)"
      : "translateY(0)";
    e.currentTarget.style.boxShadow = enter
      ? "0 10px 20px rgba(0, 0, 0, 0.1)"
      : "none";
  };

  const handleButtonHover = (e, enter) => {
    e.currentTarget.style.backgroundColor = enter ? "#FFA07A" : "#FF7223";
  };

  return (
    <React.Fragment>
      <section
        id="portfolio"
        className="mt-4"
        style={{ background: "#FFA07A" }}
      >
        <Container>
          <Row className="justify-content-center gy-4">
            <Col xs={12}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate mt-5"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <Row className="g-0">
                    <Col md={7}>
                      <CardBody>
                        <div className="p-3">
                          <Button
                            className="mt-2 rounded-pill"
                            style={buttonStyle}
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                          >
                            AI Mentor
                          </Button>
                          <h4
                            className="card-title mt-3 fw-bold mb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            INTRODUCING SOLADOGE.
                          </h4>
                          <h6
                            className="card-text mb-3 text-muted"
                            style={{ fontFamily: "Mulish, sans-serif" }}
                          >
                            In the ever evolving world of Crypto Currency, meme
                            tokens have emerged as a force to reckon with.
                            SolaDoge, a state of the art meme token on the
                            Solana Blockchain is the latest addition to this
                            trend.
                          </h6>
                        </div>
                      </CardBody>
                    </Col>
                    <Col md={4}>
                      <img
                        className="rounded-end img-fluid h-100 object-cover"
                        src={img1}
                        alt="Card"
                      />
                    </Col>
                  </Row>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      {/* <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Personalization
                      </Button> */}

                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        SOLADOGE was inspired by a popular dog-themed meme token
                        that did over 100,000% at ATH and $85Billion Market Cap.
                        I'm talking about Dogecoin itself.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img2}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      {/* <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Personalization
                      </Button> */}
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        SolaDoge is poised to capture the hearts of Degenerates
                        on Solana with it's community-driven approach as well as
                        it's adorable dog-theme.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img5}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      {/* <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Notepad
                      </Button> */}
                      <h3
                        className="card-title mt-3 fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        INSPIRATION
                      </h3>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        SOLADOGE was inspired by a popular dog-themed meme token
                        that did over 100,000% at ATH and $85Billion Market Cap.
                        I'm talking about Dogecoin itself.
                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img4}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            <Col md={6}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate h-100"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <CardBody className="d-flex flex-column">
                    <div className="p-3">
                      {/* <Button
                        className="rounded-pill"
                        style={buttonStyle}
                        onMouseEnter={(e) => handleButtonHover(e, true)}
                        onMouseLeave={(e) => handleButtonHover(e, false)}
                      >
                        Notepad
                      </Button> */}
                      <h3
                        className="card-title mt-3 fw-bold mb-2"
                        style={{ fontFamily: "Poppins, sans-serif" }}
                      >
                        MEME TOKEN
                      </h3>
                      <p
                        className="card-text mb-3 text-muted"
                        style={{ fontFamily: "Mulish, sans-serif" }}
                      >
                        SolaDoge is the meme token that is taking the Solana Ecosystem by Storm.

                      </p>
                    </div>
                    <div className="mt-auto">
                      <img
                        className="rounded-bottom img-fluid w-100"
                        src={img6}
                        alt="Card"
                        style={{ objectFit: "cover", height: "200px" }}
                      />
                    </div>
                  </CardBody>
                </Card>
              </Fade>
            </Col>

            {/* <Col xs={12}>
              <Fade in={open}>
                <Card
                  className="rounded-5 card-animate mt-5 mb-4"
                  style={cardStyle}
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <Row className="g-0 align-items-center">
                    <Col md={9}>
                      <CardBody>
                        <div className="p-3">
                          <Button
                            className="mt-2 rounded-pill"
                            style={buttonStyle}
                            onMouseEnter={(e) => handleButtonHover(e, true)}
                            onMouseLeave={(e) => handleButtonHover(e, false)}
                          >
                            Integrate App
                          </Button>
                          <h3
                            className="card-title mt-3 fw-bold mb-2"
                            style={{ fontFamily: "Poppins, sans-serif" }}
                          >
                            Integrate Your Personal Library into Your Space
                          </h3>
                          <p
                            className="card-text mb-3 text-muted"
                            style={{ fontFamily: "Mulish, sans-serif" }}
                          >
                            Connect your existing library of learning resources
                            to your Space. By centralizing all your study
                            materials, you can easily access and reference them
                            without interrupting your workflow. This integration
                            streamlines your learning process, making it more
                            efficient and organized.
                          </p>
                        </div>
                      </CardBody>
                    </Col>
                    <Col md={3}>
                      <img
                        className="rounded-end img-fluid"
                        src={img3}
                        style={{
                          width: "250%",
                          height: "250px",
                          objectFit: "cover",
                        }}
                        alt="Card"
                      />
                    </Col>
                  </Row>
                </Card>
              </Fade>
            </Col> */}
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Portfolio;
