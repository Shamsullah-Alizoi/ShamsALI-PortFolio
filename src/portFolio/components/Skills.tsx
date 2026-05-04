import React from "react";
import SkillCard from "./SkillsCard"; // ← Changed from "./SkillCard" to "./SkillsCard"

const Skills: React.FC = () => {
  const skillsData = [
    {
      title: "Frontend Development",
      subtitle: "Web technologies",
      icon: "🎨",
      skills: [
        { name: "HTML5 & CSS3", percent: 75 },
        { name: "JavaScript", percent: 60 },
        { name: "Bootstrap", percent: 60 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      subtitle: "Modern frameworks",
      icon: "⚛️",
      skills: [
        { name: "React.js", percent: 35 },
        { name: "TypeScript", percent: 25 },
        { name: "Component Design", percent: 40 },
      ],
    },
    {
      title: "Backend Development",
      subtitle: "Server-side technologies",
      icon: "🗄️",
      skills: [
        { name: "Node.js", percent: 30 },
        { name: "Express.js", percent: 25 },
        { name: "REST APIs", percent: 20 },
      ],
    },
    {
      title: "Databases",
      subtitle: "Data management",
      icon: "💾",
      skills: [
        { name: "PostgreSQL", percent: 35 },
        { name: "MySQL", percent: 40 },
        { name: "MongoDB", percent: 15 },
      ],
    },
    {
      title: "IT & Networking",
      subtitle: "Infrastructure & systems",
      icon: "🌐",
      skills: [
        { name: "System Admin", percent: 65 },
        { name: "Networking", percent: 55 },
        { name: "IT Support", percent: 60 },
      ],
    },
    {
      title: "Tools & DevOps",
      subtitle: "Development tools",
      icon: "🔧",
      skills: [
        { name: "Git & GitHub", percent: 45 },
        { name: "VS Code", percent: 70 },
        { name: "Docker", percent: 15 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-top text-center">EXPERTISE</div>
        <h2 className="section-title-light text-center fw-bold text-white display-5 mb-3">
          Skills & Technologies
        </h2>
        <div className="row g-4 mt-2">
          {skillsData.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
