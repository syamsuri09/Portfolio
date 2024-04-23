import React from 'react';
import { skillsData } from '../components/Data';
import '../App.css';

export const Skills = () => {
  return (
    <div id="skills">
      <div className="skillContainer">
        <h1 className="skillHeading">My Skills</h1>
        <div className="skillDiv">
          {skillsData.map((skill, index) => (
            <span key={index} /**/ className="techSpan">
              <img src={skill.imageUrl} alt={skill.name} className="techImg" />
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
