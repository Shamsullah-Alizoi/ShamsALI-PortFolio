import React from "react";
import Header from "./portFolio/components/Header";
import WelcomePage from "./portFolio/components/WelcomePage";
import AboutMe from "./portFolio/components/AboutMe";
import Skills from "./portFolio/components/Skills";
import Experience from "./portFolio/components/Experience";
import Projects from "./portFolio/components/Projects";
import Learning from "./portFolio/components/Learning";
import Contact from "./portFolio/components/Contact";
import Footer from "./portFolio/components/Footer";

// Import Bootstrap FIRST (before your custom CSS)
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Then import all your custom CSS files individually
import "./portFolio/styles/variables.css";
import "./portFolio/styles/global.css";
import "./portFolio/styles/components/header.css";
import "./portFolio/styles/components/welcome.css";
import "./portFolio/styles/components/about.css";
import "./portFolio/styles/components/skills.css";
import "./portFolio/styles/components/experience.css";
import "./portFolio/styles/components/projects.css";
import "./portFolio/styles/components/learning.css";
import "./portFolio/styles/components/contact.css";
import "./portFolio/styles/components/footer.css";
import "./portFolio/styles/responsive.css";

function App() {
  return (
    <div className="app-bg">
      <Header />
      <main>
        <WelcomePage />
        <AboutMe />
        <Skills />
        <Experience />
        <Projects />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
