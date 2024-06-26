import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  const navbarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '10px',
    width: 'fit-content',
    margin: '0 auto',
    left: 0,
    right: 0,
    marginBottom: 0,
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '0 30px',
    fontSize: '20px',
    fontFamily: "'Work Sans', sans-serif",
  };

  return (
    <div style={navbarStyle}>
      <Link style={linkStyle} to="/">About Me</Link> {/* Change to Link */}
      <Link style={linkStyle} to="/portfolio">Portfolio</Link> {/* Change to Link */}
      <Link style={linkStyle} to="/contact">Contact</Link> {/* Change to Link */}
      <a style={linkStyle} href="https://docs.google.com/document/d/1x1crGquko9N9Ba6ol-8wlnwt3VkJVcHBfpbl0AHAa-w/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
    </div>
  );
};

export default Navbar;