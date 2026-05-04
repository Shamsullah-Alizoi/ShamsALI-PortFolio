import React from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaEnvelope,
  FaBook,
} from "react-icons/fa";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="about-modern">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-7 about-left">
            <p className="who-text">WHO I AM</p>

            <h1 className="about-heading">
              Building Digital Systems <br />
              <span className="gradient-text">That Matter</span>
            </h1>

            <div className="underline"></div>

            <p className="about-description">
              I am an experienced IT professional specializing in{" "}
              <span>system administration</span>, modern{" "}
              <span>web development</span>, and enterprise{" "}
              <span>network solutions</span>. With a strong technical foundation
              and real-world experience, I create scalable, secure, and
              efficient digital systems.
            </p>

            <div className="skills mt-4">
              <span>Web Development</span>
              <span>System Admin</span>
              <span>IT Management</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div className="glass-info-box">
              <div className="info-item">
                <FaMapMarkerAlt />
                <div>
                  <small>LOCATION</small>
                  <p>Kabul, Afghanistan</p>
                </div>
              </div>

              <div className="info-item">
                <FaBriefcase />
                <div>
                  <small>CURRENT ROLE</small>
                  <p>IT Officer — Peace Global Logistics</p>
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope />
                <div>
                  <small>EMAIL</small>
                  <p>alizoishams.com</p>
                </div>
              </div>

              <div className="info-item">
                <FaBook />
                <div>
                  <small>EDUCATION</small>
                  <p>Bachelor of Computer Science</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
