import { motion } from "framer-motion"; // Per le animazioni

const TechCard = ({ icon }) => {
  return (
    <motion.div
      className="w-full sm:w-60 h-80 bg-white rounded-lg shadow-lg p-6 m-4 flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-center mb-4">{icon.component}</div>
      <h3 className="text-xl font-semibold mb-2">{icon.title}</h3>
      <p className="text-sm text-gray-700 overflow-auto h-32 sm:h-28 md:h-32 lg:h-32">
        {icon.description}
      </p>
    </motion.div>
  );
};

export default TechCard;
