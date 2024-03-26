import React, { useState, useEffect } from 'react';
import backgroundImage from '../assets/images/Vines.jpg'; // Adjust the path if necessary

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    document.body.style.backgroundImage = `url(${backgroundImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = '0 100px'; // Move the image down by 100px
    return () => {
      document.body.style.backgroundImage = null;
      document.body.style.backgroundSize = null;
      document.body.style.backgroundRepeat = null;
      document.body.style.backgroundPosition = null;
    };
  }, []);

  const formFieldStyle = { marginBottom: '30px' };
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Work Sans', sans-serif",
    border: '2px solid black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    margin: '0 auto',
  };
  const inputStyle = { 
    marginTop: '10px',
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: '5px',
    border: '1px solid #ccc',
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div style={formContainerStyle}>
      <h2>Contact Me</h2>
      <p>Let's work together! Please fill out and submit the form below. I will respond as quickly as I can!</p>
      <form onSubmit={handleSubmit}>
        <div style={formFieldStyle}>
          <label>
            Name:
            <input
              style={inputStyle}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        </div>
        <div style={formFieldStyle}>
          <label>
            Email:
            <input
              style={inputStyle}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address."
            />
          </label>
        </div>
        <div style={formFieldStyle}>
          <label>
            Questions or Comments:
            <textarea
              style={inputStyle}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <input type="submit" value="Submit" style={{ ...inputStyle, cursor: 'pointer' }} />
      </form>
    </div>
  );
};

export default Contact;