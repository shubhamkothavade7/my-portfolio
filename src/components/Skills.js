// src/components/Skills.js
import React from "react";
import '../styles/Skills.css';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaPython, FaDatabase, FaGitAlt, FaMobileAlt } from 'react-icons/fa';

const skillsData = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Python", icon: <FaPython /> },
  { name: "MongoDB", icon: <FaDatabase /> },
  { name: "Git & GitHub", icon: <FaGitAlt /> },
  { name: "Responsive Design", icon: <FaMobileAlt /> },
];

const Skills = () => {
  return (
    <div className="skills-page">
      <h2 className="skills-heading">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;