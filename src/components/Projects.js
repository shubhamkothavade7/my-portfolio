// src/components/Projects.js
import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projects = [
    {
      name: "Project 1",
      description: "A brief description of Project 1",
      thumbnail: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg",
      link: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg",
    },
    { name: "Project 2", description: "A brief description of Project 2", thumbnail: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg", link: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg" },
    { name: "Project 3", description: "A brief description of Project 3", thumbnail: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg", link: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg" },
    { name: "Project 4", description: "A brief description of Project 4", thumbnail: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg", link: "https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg" },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div className="col-12 col-sm-6 col-md-4" key={index}>
            <div className="card">
              <img className="card-img-top" src={project.thumbnail} alt={`${project.name} thumbnail`} />
              <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.link} className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
