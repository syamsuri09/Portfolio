import React from 'react';
import '../App.css';
import Resume from '../components/SyamSuri_Resume.pdf';
import HireMe from '../components/HireMe';
import { useState } from 'react';

export const About = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div id="about">
      <div className="container">
        <div className="inner-Container">
          <h1>
            I'm <span className="font-bold">Syam suri</span> - a final year
            student in India with a
            <span className="font-medium"> strong passion</span> for crafting
            elegant and interactive user experiences through{' '}
            <span className="font-medium">front-end development</span>.
          </h1>
          <p>
            While I'm still refining my skills, I'm eager to learn, contribute,
            and make a real impact in the web development landscape.
          </p>
        </div>
        <div className="button-sec">
          <button className="button-style" onClick={togglePopup}>
            Hire me
          </button>
          <HireMe isOpen={showPopup} onClose={togglePopup} />
          <a href={Resume} target="new">
            <button className="button-style">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};
