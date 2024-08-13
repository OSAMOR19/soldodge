import React from "react";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";

const Tokenomics = () => {
  const tokenomicsData = [
    {
      id: 1,
      title: "Total Supply",
      value: "1,000,000,000,000",
      description: "The maximum number of SOLADOGE tokens that will ever exist."
    },
    {
      id: 2,
      title: "Initial Burn",
      value: "50%",
      description: "Half of the total supply will be burned at launch to increase scarcity."
    },
    {
      id: 3,
      title: "Transaction Tax",
      value: "5%",
      description: "A 5% tax on each transaction: 2% redistributed to holders, 3% added to liquidity."
    }
  ];

  return (
    <section id="tokenomics" className="bg-gradient-to-r from-purple-900 via-purple-700 to-pink-600 py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-dark mb-4 text-5xl">
            SOLADOGE Tokenomics
          </h2>
          <p className="text-pink-200 text-xl">Understanding our token distribution and economics</p>
        </motion.div>
        <Row className="justify-content-center">
          {tokenomicsData.map((item, index) => (
            <Col key={item.id} lg={4} md={6} className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl p-8 h-full"
              >
                <h3 className="text-2xl font-bold mb-4 text-pink-300">{item.title}</h3>
                <p className="text-5xl font-extrabold mb-6 text-white">{item.value}</p>
                <p className="text-gray-300 text-lg">{item.description}</p>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Tokenomics;