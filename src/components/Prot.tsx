import React from "react";

type Skill = {
  name: string;
  percent: number;
};

type CardProps = {
  title: string;
  subtitle: string;
  skills: Skill[];
  icon: string;
};

const SkillCard: React.FC<CardProps> = ({ title, subtitle, skills, icon }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="skill-box">
        <div className="icon-box">{icon}</div>
        <h4>{title}</h4>
        <p className="subtitle">{subtitle}</p>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="d-flex justify-content-between">
              <span>{skill.name}</span>
              <span>{skill.percent}%</span>
            </div>
            <div className="progress">
              <div
                className="progress-bar"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function Portfolio() {
  return (
    <div className="app-bg">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark nav-glass sticky-top shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold brand-text">
            Shamsullah ALIZOI
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#learning">
                  Learning
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-section d-flex align-items-center text-center text-white">
        <div className="container hero-content">
          <p className="hero-tag">Welcome to my Portfolio</p>
          <h1 className="hero-title">
            Shamsullah <span className="hero-gradient">ALIZOI</span>
          </h1>
          <p className="hero-subtitle">IT Assistant • Web Developer</p>
          <div className="mt-4">
            <span className="badge badge-custom mx-1">React</span>
            <span className="badge badge-custom mx-1">TypeScript</span>
            <span className="badge badge-custom mx-1">Node.js</span>
            <span className="badge badge-custom mx-1">Express</span>
            <span className="badge badge-custom mx-1">PostgreSQL</span>
            <span className="badge badge-custom mx-1">MySQL</span>
          </div>
          <div className="mt-4">
            <button className="btn btn-glow me-2">Contact Me</button>
            <button className="btn btn-outline-light">Download CV</button>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="about" className="container section-padding about">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <div className="section-badge">About Me</div>
            <h2 className="section-title">Get to Know Me</h2>
            <div className="about-card">
              <p className="section-text">
                Experienced IT professional with expertise in system
                administration, web development, and networking. Currently
                working as IT Assistant at Refah Al Alami Trading Consultancy
                Services and Vehicle Documents Officer at Peace Global Logistics
                Company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION - Fully Visible Cards */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-badge light text-center mx-auto d-table">
            EXPERTISE
          </div>
          <h2 className="section-title light text-center">
            Skills & Technologies
          </h2>

          {/* Frontend Card */}
          <div className="row g-4 mt-2">
            <SkillCard
              title="Frontend Development"
              subtitle="Web technologies"
              icon="🎨"
              skills={[
                { name: "HTML5 & CSS3", percent: 75 },
                { name: "JavaScript", percent: 60 },
                { name: "Bootstrap", percent: 60 },
              ]}
            />

            {/* Frameworks Card */}
            <SkillCard
              title="Frameworks & Libraries"
              subtitle="Modern frameworks"
              icon="⚛️"
              skills={[
                { name: "React.js", percent: 40 },
                { name: "TypeScript", percent: 25 },
                { name: "Component Design", percent: 45 },
              ]}
            />

            {/* Backend Card */}
            <SkillCard
              title="Backend Development"
              subtitle="Server-side technologies"
              icon="🗄️"
              skills={[
                { name: "Node.js", percent: 40 },
                { name: "Express.js", percent: 30 },
                { name: "REST APIs", percent: 25 },
              ]}
            />

            {/* Databases Card */}
            <SkillCard
              title="Databases"
              subtitle="Data management"
              icon="💾"
              skills={[
                { name: "PostgreSQL", percent: 35 },
                { name: "MySQL", percent: 45 },
                { name: "MongoDB", percent: 25 },
              ]}
            />

            {/* IT & Networking Card */}
            <SkillCard
              title="IT & Networking"
              subtitle="Infrastructure & systems"
              icon="🌐"
              skills={[
                { name: "System Admin", percent: 80 },
                { name: "Networking", percent: 72 },
                { name: "IT Support", percent: 85 },
              ]}
            />

            {/* Tools & DevOps Card */}
            <SkillCard
              title="Tools & DevOps"
              subtitle="Development tools"
              icon="🔧"
              skills={[
                { name: "Git & GitHub", percent: 55 },
                { name: "VS Code", percent: 70 },
                { name: "Docker", percent: 20 },
              ]}
            />
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="container section-padding">
        <div className="section-badge center">Career Timeline</div>
        <h2 className="section-title text-center">Work Experience</h2>
        <div className="row g-4">
          {[
            {
              title: "IT Assistant",
              company: "Refah Al Alami Trading Consultancy Services",
              year: "2023 - 2026",
              color: "exp-blue",
              icon: "👔",
            },
            {
              title: "IT Assistant",
              company: "Kims Medical Complex",
              year: "2021 - 2023",
              color: "exp-purple",
              icon: "💻",
            },
          ].map((item, index) => (
            <div className="col-md-6" key={index}>
              <div className={`card experience-card ${item.color}`}>
                <div className="exp-icon">{item.icon}</div>
                <div className="exp-content">
                  <div className="exp-year">{item.year}</div>
                  <h5 className="exp-title">{item.title}</h5>
                  <p className="exp-company">{item.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-badge center">Recent Work</div>
          <h2 className="section-title text-center light">Featured Projects</h2>
          <div className="row g-4">
            {[
              {
                name: "Web Management Systems",
                desc: "Full-stack dashboard for business operations",
                tech: "React, Node.js, PostgreSQL",
                icon: "📊",
              },
              {
                name: "Hospital Internship System",
                desc: "Tracking and management for medical interns",
                tech: "TypeScript, Express, MySQL",
                icon: "🏥",
              },
              {
                name: "University IT Tools Suite",
                desc: "Network monitoring and IT asset management",
                tech: "React, Bootstrap, REST APIs",
                icon: "🎓",
              },
            ].map((project, index) => (
              <div className="col-md-4" key={index}>
                <div className="card project-card">
                  <div className="project-icon">{project.icon}</div>
                  <h5>{project.name}</h5>
                  <p>{project.desc}</p>
                  <div className="project-tech">{project.tech}</div>
                  <button className="btn-project">View Project →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING SECTION */}
      <section id="learning" className="container section-padding">
        <div className="section-badge center">Continuous Growth</div>
        <h2 className="section-title text-center">Currently Learning</h2>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="learning-card">
              <div className="row align-items-center">
                <div className="col-md-5 text-center">
                  <div className="learning-badge-group">
                    <span className="badge-node">Node.js</span>
                    <span className="badge-express">Express</span>
                    <span className="badge-postgres">PostgreSQL</span>
                    <span className="badge-mysql">MySQL</span>
                  </div>
                  <div className="learning-icon">🚀</div>
                </div>
                <div className="col-md-7">
                  <h3 className="learning-title">
                    Full-Stack Development Journey
                  </h3>
                  <p className="learning-text">
                    I'm currently expanding my skills into backend development
                    with Node.js and Express, while mastering relational
                    databases including PostgreSQL and MySQL. Building robust
                    REST APIs and understanding database design patterns are my
                    current focus.
                  </p>
                  <div className="learning-progress">
                    <div className="progress-item">
                      <span>Node.js & Express</span>
                      <div className="progress-bar-custom">
                        <div style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span>PostgreSQL</span>
                      <div className="progress-bar-custom">
                        <div style={{ width: "55%" }}></div>
                      </div>
                    </div>
                    <div className="progress-item">
                      <span>MySQL</span>
                      <div className="progress-bar-custom">
                        <div style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="contact-section">
        <div className="container text-center">
          <div className="section-badge light">Get in Touch</div>
          <h2 className="section-title light">Contact Me</h2>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h4>Email Me</h4>
              <p>shamsullah.alizoi@example.com</p>
              <button className="contact-btn">Send Email →</button>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h4>Location</h4>
              <p>Kabul, Afghanistan</p>
              <button className="contact-btn">Get Directions →</button>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h4>Call Me</h4>
              <p>+93 (0) 700 123 456</p>
              <button className="contact-btn">Call Now →</button>
            </div>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">
              GitHub
            </a>
            <a href="#" className="social-link">
              LinkedIn
            </a>
            <a href="#" className="social-link">
              Twitter
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="brand-text-small">Shamsullah ALIZOI</span>
              <p>Building digital experiences with passion</p>
            </div>
            <div className="footer-links">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © 2026 Shamsullah ALIZOI. All rights reserved. | Built with React
              + TypeScript + Bootstrap
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
