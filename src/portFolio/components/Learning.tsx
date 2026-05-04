import React from "react";
import { FaNodeJs, FaDatabase, FaServer, FaCode } from "react-icons/fa";
// import "./Learning.css";

const Learning: React.FC = () => {
  return (
    <section id="learning" className="learning-section">
      <div className="container">
        <p className="section-top text-center">CONTINUOUS GROWTH</p>

        <h2 className="section-title text-center">Currently Learning</h2>

        <div className="learning-card mt-5">
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-lg-5 text-center">
              <div className="learning-icon">🚀</div>

              <div className="learning-tags">
                <span>
                  <FaNodeJs /> Node.js
                </span>
                <span>
                  <FaServer /> Express
                </span>
                <span>
                  <FaDatabase /> PostgreSQL
                </span>
                <span>
                  <FaDatabase /> MySQL
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-7">
              <h3 className="learning-title">Full-Stack Development Journey</h3>

              <p className="learning-desc">
                I am actively improving my backend development skills by
                learning Node.js, Express, and relational databases. My goal is
                to build scalable, secure, and production-ready systems.
              </p>

              {/* PROGRESS */}
              <div className="learning-progress">
                <div className="progress-item">
                  <span>
                    <FaNodeJs /> Node.js & Express
                  </span>
                  <div className="progress-bar-bg">
                    <div className="progress-fill" style={{ width: "65%" }} />
                  </div>
                </div>

                <div className="progress-item">
                  <span>
                    <FaDatabase /> PostgreSQL
                  </span>
                  <div className="progress-bar-bg">
                    <div className="progress-fill" style={{ width: "55%" }} />
                  </div>
                </div>

                <div className="progress-item">
                  <span>
                    <FaDatabase /> MySQL
                  </span>
                  <div className="progress-bar-bg">
                    <div className="progress-fill" style={{ width: "60%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Learning;
