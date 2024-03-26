import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const formFieldStyle = { marginBottom: '30px' };
  const formContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Work Sans', sans-serif",
    borderTop: '2px solid black',
  };
  const inputStyle = { marginTop: '30px'}; // Add this

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <div style={formContainerStyle}>
      <p>Let's work together! Please fill out and submit the form below. I will respond as quickly as I can!</p>
      <form onSubmit={handleSubmit}>
        <div style={formFieldStyle}>
          <label>
            Name:
            <input
              style={inputStyle} // Add this
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
              style={inputStyle} // Add this
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
              style={inputStyle} // Add this
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;