import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Project 1', description: 'A modern web application built with React and Node.js.' },
    { id: 2, title: 'Project 2', description: 'An e-commerce platform with a focus on user experience.' },
    { id: 3, title: 'Project 3', description: 'A real-time chat application using WebSockets.' },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
