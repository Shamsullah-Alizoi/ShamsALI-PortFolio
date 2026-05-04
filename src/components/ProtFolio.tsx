export default function Portfolio() {
  return (
    <div className="app-bg">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark nav-glass sticky-top shadow-sm">
        <div className="container">
          <span className="navbar-brand fw-bold brand-text">
            Shamsullah ALIZOI
          </span>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero-section d-flex align-items-center text-center text-white">
        <div className="container hero-content">
          <p className="hero-tag">Welcome to my Portfolio</p>

          <h1 className="hero-title">
            Shamsullah <span className="hero-gradient">ALIZOI</span>
          </h1>

          <p className="hero-subtitle">
            IT Manager • Web Developer • Networking Specialist
          </p>

          <div className="mt-4">
            <span className="badge badge-custom mx-1">React</span>
            <span className="badge badge-custom mx-1">TypeScript</span>
            <span className="badge badge-custom mx-1">Networking</span>
          </div>

          <div className="mt-4">
            <button className="btn btn-glow me-2">Contact Me</button>
            <button className="btn btn-outline-light">Download CV</button>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section className="container section-padding">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h2 className="section-title">About Me</h2>
            <p className="section-text">
              Experienced IT professional with expertise in system
              administration, web development, and networking. Currently working
              as IT Manager at Refah Al Alami Trading Consultancy Services and
              Vehicle Documents Officer at Peace Global Logistics Company.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title text-center">Skills</h2>

          <div className="row g-4">
            <div className="col-sm-4">
              <div className="card skill-card">
                <h5>Frontend</h5>
                <p>HTML, CSS, JavaScript (35%)</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card skill-card">
                <h5>Frameworks</h5>
                <p>React + TypeScript (Learning)</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card skill-card">
                <h5>Backend</h5>
                <p>Node.js + Express</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card skill-card">
                <h5>IT & Networking</h5>
                <p>System Administration & Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="container section-padding">
        <h2 className="section-title text-center">Experience</h2>

        <div className="row g-3">
          {[
            "IT Manager - Refah Al Alami Trading Consultancy Services",
            "IT Officer - Zam Zam Institute of Higher Education",
            "Software Engineering Intern - Rahmat Hospital",
            "Vehicle Documents Officer - Peace Global Logistics",
          ].map((item, i) => (
            <div className="col-md-6" key={i}>
              <div className="card experience-card">{item}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-alt">
        <div className="container">
          <h2 className="section-title text-center">Projects</h2>

          <div className="row g-4">
            {[
              "Web Management Systems",
              "Hospital Internship Systems",
              "University IT Tools",
            ].map((p, i) => (
              <div className="col-md-4" key={i}>
                <div className="card project-card">
                  <h5>{p}</h5>
                  <p>Built using modern web technologies</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="container section-padding text-center">
        <h2 className="section-title">Contact</h2>
        <p className="section-text">Email: your-email@example.com</p>
        <p className="section-text">Location: Kabul, Afghanistan</p>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Shamsullah ALIZOI. All rights reserved.
      </footer>
    </div>
  );
}
