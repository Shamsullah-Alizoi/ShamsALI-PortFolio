import React from "react";
import {
  FiUsers,
  FiShoppingCart,
  FiDatabase,
  FiArrowRight,
} from "react-icons/fi";

const Projects: React.FC = () => {
  const projects = [
    {
      name: "Human Resource MIS",
      desc: "Human resource management system for employee records, attendance, and organizational operations.",
      tech: "React • Node.js • PostgreSQL",
      icon: <FiUsers />,
    },
    {
      name: "Shopping MIS",
      desc: "Inventory and sales management system for handling products, orders, and customer transactions.",
      tech: "TypeScript • Express • MySQL",
      icon: <FiShoppingCart />,
    },
    {
      name: "Laboratory MIS",
      desc: "Laboratory management system for tracking tests, reports, and medical data efficiently.",
      tech: "React • Bootstrap • REST APIs",
      icon: <FiDatabase />,
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-top text-center">PORTFOLIO</p>

        <h2 className="section-title text-center">Featured Projects</h2>

        <div className="row g-4 mt-5">
          {projects.map((project, index) => (
            <div className="col-md-6 col-lg-4" key={index}>
              <div className="project-card">
                <div className="project-icon">{project.icon}</div>

                <h3 className="project-title">{project.name}</h3>

                <p className="project-desc">{project.desc}</p>

                <span className="project-tech">{project.tech}</span>

                <button className="project-btn">
                  View Project <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
