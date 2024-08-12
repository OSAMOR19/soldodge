import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import NavBar from "./Nav";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import imgpattern from "../Images/homeimage.svg";
import soladodge from "../Images/bettersoldodge.png";

const Home = () => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  const gradientBackgroundStyle = {
    background: "linear-gradient(360deg,  #FFA07A 10%, #FCFCFC 100%)",
  };
  return (
    <React.Fragment>
      <section
        className="section pb-0 hero-section"
        id="home"
        style={gradientBackgroundStyle}
      >
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} sm={10} lg={8}>
              <div className="text-center text-light mt-4 mt-lg-5 pt-5">
                {/* <div
                  className="btn rounded-pill get-started-btn mb-3 mb-sm-0"
                  style={{ backgroundColor: "#B22222", color: "white" }}
                >
                  Get Started
                  <i className="ri-arrow-right-line align-middle ms-1"></i>
                </div> */}
                <span className="small-text w-0 text-dark mt-2 mt-sm-0 ms-sm-3">
                  woo-o-oof woo-o-oof The dog has finally been let out.
                </span>

                <div
                  className={`d-flex flex-column align-items-center justify-content-center mb-4 ${
                    animate ? "animate-slide-in" : ""
                  }`}
                >
                  <h1
                    className="display-2 fw-bold mb-3 lh-base custom-title"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#B22222",
                    }}
                  >
                    SOLADOGE
                  </h1>
                  <img
                    src={soladodge}
                    alt="SOLADOGE"
                    className="soladoge-image mb-3"
                  />
                </div>
                <p
                  className="lead text-break text-dark custom-lead"
                  style={{ fontFamily: "Mulish, sans-serif" }}
                >
                  more than just a "meme" It's a movement....
                </p>
                
                {/* <div className="glassmorphism-container">
                  <div className="glassmorphism-item">
                    <h2>20k+</h2>
                    <p>Holders</p>
                  </div>
                  <div className="glassmorphism-item">
                    <h2>30K+</h2>
                    <p>Interactions</p>
                  </div>
                  <div className="glassmorphism-item">
                    <h2>12</h2>
                    <p>Chains</p>
                  </div>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Mulish&display=swap");

        @keyframes slideIn {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slideIn 0.8s ease-out forwards;
        }
        .custom-title {
          font-size: 4rem;
          line-height: 1.2;
        }
        .soladoge-image {
          width: 80%;
          max-width: 300px;
          height: auto;
          margin-bottom: 1rem;
        }
        .custom-lead {
          font-size: 1.2rem;
        }
        .glassmorphism-container {
          display: flex;
          justify-content: space-around;
          margin-top: 2rem;
        }
        .glassmorphism-item {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 10px;
          padding: 1rem;
          text-align: center;
          color: #333;
        }
        .glassmorphism-item h2 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #b22222;
        }
        .glassmorphism-item p {
          font-size: 1rem;
          margin-bottom: 0;
        }
        @media (max-width: 576px) {
          .custom-title {
            font-size: 3rem;
          }
          .soladoge-image {
            width: 100%;
            max-width: 250px;
          }
          .custom-lead {
            font-size: 1rem;
          }
          .glassmorphism-container {
            flex-direction: column;
            align-items: center;
          }
          .glassmorphism-item {
            margin-bottom: 1rem;
            width: 80%;
          }
        }
      `}</style>
    </React.Fragment>
  );
};
export default Home;
