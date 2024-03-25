import React from 'react';

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
      <a style={linkStyle} href="#aboutme">About Me</a>
      <a style={linkStyle} href="#portfolio">Portfolio</a>
      <a style={linkStyle} href="#contact">Contact</a>
      <a style={linkStyle} href="#resume">Resume</a>
    </div>
  );
};

export default Navbar;