import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx'; // Import the AboutMe component
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe /> {/* Add the AboutMe component */}
      <Footer />
    </>
  )
}

export default App;
