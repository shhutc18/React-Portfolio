import React from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Contact from './components/Contact.jsx'; // Import the Contact component
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Contact /> {/* Add the Contact component */}
      <Footer />
    </>
  )
}

export default App;
