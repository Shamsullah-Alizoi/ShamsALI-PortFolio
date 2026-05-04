import React from "react";
import {
  FaHeart,
  FaReact,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { SiTypescript, SiBootstrap } from "react-icons/si";
// import "./Footer.css";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-brand">
            <h2>Shamsullah ALIZOI</h2>
            <p>
              Building modern digital systems with clean design, scalable code,
              and real-world IT experience.
            </p>

            <div className="tech-stack">
              <span>
                <FaReact /> React
              </span>
              <span>
                <SiTypescript /> TypeScript
              </span>
              <span>
                <SiBootstrap /> Bootstrap
              </span>
            </div>
          </div>

          {/* LINKS */}
          <div className="footer-links">
            <h3>Navigation</h3>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h3>Connect</h3>

            <a href="mailto:alizoishams@gmail.com">
              <FaEnvelope /> Email
            </a>

            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>

            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>
            © {year} Made with <FaHeart className="heart" /> using React +
            TypeScript by Shamsullah ALLIZOI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
