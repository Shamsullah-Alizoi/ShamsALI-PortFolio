import React from "react";
import {
  FaBriefcase,
  FaLaptopCode,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "IT Officer",
      company: "Peace Global Logistics",
      year: "2023 - Current",
      icon: <FaBriefcase />,
      description:
        "Managing IT infrastructure, providing system support, and ensuring network reliability across business operations."
    },
    {
      title: "IT Assistant",
      company: "KIMS Medical Complex",
      year: "2022 - 2023",
      icon: <FaLaptopCode />,
      description:
        "Handled system maintenance, troubleshooting, and supported medical IT systems and networking.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <p className="section-top text-center">CAREER PATH</p>

        <h2 className="section-title text-center">Work Experience</h2>

        <div className="timeline mt-5">
          {experiences.map((item, index) => (
            <div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">{item.icon}</div>

                <div className="timeline-body">
                  <span className="timeline-year">
                    <FaCalendarAlt /> {item.year}
                  </span>

                  <h3>{item.title}</h3>

                  <p className="company">
                    <FaBuilding /> {item.company}
                  </p>

                  <p className="desc">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
