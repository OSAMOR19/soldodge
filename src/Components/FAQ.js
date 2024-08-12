import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "reactstrap";

import M1 from "../Images/meme1.jpg";
import M2 from "../Images/meme2.jpg";
import M3 from "../Images/meme3.jpg";
import M4 from "../Images/meme4.jpg";
import M5 from "../Images/meme5.jpg";
import M6 from "../Images/meme6.jpg";

const Services = () => {
  const memes = [
    { id: 1, src: M1, alt: "Meme 1", caption: "When you buy the dip but it keeps dipping" },
    { id: 2, src: M2, alt: "Meme 2", caption: "HODLing through the bear market like" },
    { id: 3, src: M3, alt: "Meme 3", caption: "SolaDoge to the moon! 🚀🌕" },
    { id: 4, src: M4, alt: "Meme 4", caption: "Diamond paws activated 💎🐾" },
    { id: 5, src: M5, alt: "Meme 5", caption: "When your shitcoin finally moons" },
    { id: 6, src: M6, alt: "Meme 6", caption: "Panic selling? Couldn't be me" },
  ];

  return (
    <section id="faq" className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 py-16">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="text-center mb-12">
              <h3 className="text-5xl font-bold text-white mb-4 shadow-text animate-pulse">
                woo-o-oof woo-o-oof The dog has finally been let out.
              </h3>
              <p className="text-2xl text-white opacity-90 shadow-text">
                SolaDoge is poised to capture the hearts of Degenerates on
                Solana with its community-driven approach as well as its
                adorable dog-theme.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {memes.map((meme) => (
            <Col key={meme.id} lg={4} md={6} className="mb-8">
              <Card className="border-0 shadow-xl rounded-[2rem] overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-2">
                <CardImg
                  top
                  width="100%"
                  src={meme.src}
                  alt={meme.alt}
                  className="h-80 object-cover"
                />
                <CardBody className="bg-white bg-opacity-90 p-6">
                  <h5 className="text-2xl font-bold text-gray-800 mb-2">Much Wow!</h5>
                  <p className="text-gray-700 text-lg font-semibold">
                    {meme.caption}
                  </p>
                  <p className="text-gray-600 text-sm mt-2">
                    Very crypto! Such gains! Wow SolaDoge!
                  </p>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;