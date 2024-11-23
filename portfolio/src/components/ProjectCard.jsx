import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-lg rounded-lg p-6 flex flex-col gap-4 w-full sm:w-96 mx-auto" // Responsivo con larghezza fissa su schermi medi
    >
      {/* Immagine del progetto */}
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md"
      />

      {/* Titolo del progetto */}
      <h2 className="text-2xl font-semibold mt-4">{project.title}</h2>

      {/* Descrizione del progetto */}
      <p className="text-lg mt-2 text-gray-700">{project.description}</p>

      {/* Icona del progetto */}
      <div className="flex items-center mt-4 space-x-2">
        <span className="text-xl">{project.icon}</span>
        <span className="text-sm text-gray-500">{project.date}</span>
      </div>

      {/* Tecnologie utilizzate */}
      <div className="mt-2 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Link per la demo e GitHub */}
      <div className="mt-4 flex space-x-4">
        <a
          href={project.vercelLink}
          className="text-primary font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          href={project.githubLink}
          className="text-secondary font-medium hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
