import React, { useRef } from 'react';
import '../App.css';
import { IoCloseSharp } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

function HireMe({ isOpen, onClose }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3wt70va', 'template_g4wfgsk', form.current, {
        publicKey: 'wkO5CXgkH8JW-bork',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          onClose();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  return (
    isOpen && (
      <div className="popup">
        <div className="popup-content">
          <IoCloseSharp className="close-icon" onClick={onClose} />
          <h1>Send me a message </h1>

          <form ref={form} onSubmit={sendEmail}>
            <div className="input-container name-container">
              <input type="text" id="nameField" required name="user_name" />
              <label htmlFor="nameField">Name</label>
            </div>

            <div className="input-container email-container">
              <input type="email" id="emailField" required name="user_email" />
              <label htmlFor="emailField">Email</label>
            </div>

            <div className="input-container message-container">
              <textarea id="messageField" required name="message"></textarea>
              <label htmlFor="messageField">Message</label>
            </div>
            <div style={{ textAlign: 'end', marginRight: '5px' }}>
              <button className="button-style" type="submit" value="Send">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default HireMe;
