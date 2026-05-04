import React from "react";

const WelcomePage: React.FC = () => {
  return (
    <header className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT */}
          <div className="col-lg-6 text-lg-start text-center hero-left">
            <p className="hero-top-text">WELCOME TO MY PORTFOLIO</p>

            <h1 className="hero-title">
              Shamsullah <br />
              <span className="hero-gradient">ALIZOI</span>
            </h1>

            <p className="hero-desc">
              I design and build modern digital systems — combining IT
              infrastructure, networking, and elegant web experiences.
            </p>

            <div className="hero-tags">
              <span>WEB DEVELOPER</span>
              <span>IT Officer</span>
            </div>

            <div className="mt-4 d-flex gap-3 justify-content-lg-start justify-content-center flex-wrap">
              <button className="btn-glow">Contact Me</button>
              <button className="btn-outline-modern">Download CV</button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className="glass-card">
              <div className="row g-3">
                <div className="col-6">
                  <div className="stat-box">
                    <h3>4+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="stat-box">
                    <h3>7+</h3>
                    <p>Projects Completed</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="stat-box">
                    <h3>2</h3>
                    <p>Professional Roles</p>
                  </div>
                </div>

                <div className="col-6">
                  <div className="stat-box">
                    <h3>100%</h3>
                    <p>Commitment</p>
                  </div>
                </div>
              </div>

              <div className="availability">
                <span className="dot"></span>
                Available for new opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default WelcomePage;
