import React from "react";

const projects = [
  {
    title: "Progetto 1",
    description: "Descrizione del progetto 1.",
    link: "#",
  },
  {
    title: "Progetto 2",
    description: "Descrizione del progetto 2.",
    link: "#",
  },
  {
    title: "Progetto 3",
    description: "Descrizione del progetto 3.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">I miei Progetti</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{project.title}</h2>
            <p className="text-lg mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-primary font-medium hover:text-secondary transition-colors"
            >
              Scopri di più
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
