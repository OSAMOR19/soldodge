import React from "react";
import { Container, Row, Col, Card, CardImg } from "reactstrap";
import { motion } from "framer-motion";

import M1 from "../Images/meme1.jpg";
import M2 from "../Images/meme2.jpg";
import M3 from "../Images/meme3.jpg";
import M4 from "../Images/meme4.jpg";
import M5 from "../Images/meme5.jpg";
import M6 from "../Images/meme6.jpg";
import M7 from "../Images/meme7.jpg";
import M8 from "../Images/meme8.jpg";
import M9 from "../Images/meme9.jpg";
import M10 from "../Images/meme10.jpg";
import M11 from "../Images/meme11.jpg";
import M12 from "../Images/meme12.jpg";
import M13 from "../Images/meme13.jpg";

const Services = () => {
  const memes = [
    { id: 1, src: M1, alt: "Meme 1" },
    { id: 2, src: M2, alt: "Meme 2" },
    { id: 3, src: M3, alt: "Meme 3" },
    { id: 4, src: M4, alt: "Meme 4" },
    { id: 5, src: M5, alt: "Meme 5" },
    { id: 6, src: M6, alt: "Meme 6" },
    { id: 7, src: M7, alt: "Meme 7" },
    { id: 8, src: M8, alt: "Meme 8" },
    { id: 9, src: M9, alt: "Meme 9" },
    { id: 10, src: M10, alt: "Meme 10" },
    { id: 11, src: M11, alt: "Meme 11" },
    { id: 12, src: M12, alt: "Meme 12" },
    { id: 13, src: M13, alt: "Meme 13" },
  ];

  return (
    <section id="faq" className="bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-500 py-16">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-12"
            >
              <h2 className="font-bold mt-5 text-dark mb-8">
                SOLADODGE MEMES
              </h2>
            </motion.div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {memes.map((meme, index) => (
            <Col key={meme.id} lg={4} md={6} className="mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-2" style={{ borderRadius: '3rem' }}>
                  <CardImg
                    top
                    width="100%"
                    src={meme.src}
                    alt={meme.alt}
                    className="h-80 object-cover"
                    style={{ borderRadius: '3rem' }}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;