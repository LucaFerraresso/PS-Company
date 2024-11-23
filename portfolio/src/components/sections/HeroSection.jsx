import { motion } from "framer-motion";
import { useState } from "react";
import { FaUserAlt } from "react-icons/fa";

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => setHovered(true);
  const handleLeave = () => setHovered(false);

  const textAnimation = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1 },
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white p-8">
      <div className="text-center">
        <motion.h1 {...textAnimation} className="text-4xl font-bold">
          Benvenuto nel mio portfolio!
        </motion.h1>
        <motion.p
          {...textAnimation}
          className="text-xl mt-4"
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          Sono uno sviluppatore front-end con passione per il design e le
          animazioni.
        </motion.p>
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="mt-6 w-32 h-32 mx-auto rounded-full border-4 border-white flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
          >
            <FaUserAlt size={60} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
