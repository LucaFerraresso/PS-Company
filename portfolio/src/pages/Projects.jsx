import React from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Projects";

const Projects = () => {
  return (
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-6">I miei Progetti</h1>
      {/* Grid Responsiva */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
