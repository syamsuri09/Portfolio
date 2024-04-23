import React, { useState } from 'react';
import '../App.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div>
        <p>
          I'm <span>syam</span>
        </p>
      </div>

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenuOnMobile}>
          About
        </a>
        <a href="#work" onClick={closeMenuOnMobile}>
          {' '}
          Work{' '}
        </a>
        <a href="#projects" onClick={closeMenuOnMobile}>
          Projects
        </a>
        <a href="#skills" onClick={closeMenuOnMobile}>
          Skills
        </a>
        <a href="#contact" onClick={closeMenuOnMobile}>
          Contact
        </a>
      </div>

      <div className="menu-icon">
        {isMenuOpen ? (
          <FaTimes color="rgb(0, 0, 0)" onClick={toggleMenu} />
        ) : (
          <FaBars color="rgb(0, 0, 0)" onClick={toggleMenu} />
        )}
      </div>
    </nav>
  );
};
