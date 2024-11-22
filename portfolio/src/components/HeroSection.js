import { motion } from "framer-motion";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <HeroContainer>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Benvenuto nel mio portfolio!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Sono uno sviluppatore front-end con passione per il design e le
        animazioni.
      </motion.p>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #a18cd1, #fbc2eb);
  color: white;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    max-width: 600px;
  }
`;

export default HeroSection;
