import React from "react";

type Skill = {
  name: string;
  percent: number;
};

type Props = {
  title: string;
  subtitle: string;
  skills: Skill[];
  icon: React.ReactNode;
};

const SkillCard: React.FC<Props> = ({ title, subtitle, skills, icon }) => {
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

export default SkillCard;
