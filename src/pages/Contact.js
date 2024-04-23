import React from 'react';
import { contactData } from '../components/Data';

export const Contact = () => {
  return (
    <div id="contact">
      <div className="contactContainer">
        <h1 className="contactHeading">Get In Touch</h1>
        <a href="mailto:syamsuri0907@gmail.com" className="mail">
          syamsuri0907@gmail.com
        </a>
        <div className="socialDiv">
          {contactData.map((contact, index) => (
            <a href={`${contact.link}`} key={index} target="new">
              <img
                src={contact.imageUrl}
                alt={contact.name}
                className="socialIcons"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
