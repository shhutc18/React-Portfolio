import React from 'react';
import pokePediaImage from '../assets/images/Final.png';
import WeatherImage from '../assets/images/WeatherDashboardFinal.jpg';
import PlannerImage from '../assets/images/Planner.jpg';
import TrackerImage from '../assets/images/EmployeeTracker.jpg';
import SocialNetworkImage from '../assets/images/Social.jpg';
import QuizImage from '../assets/images/CodingQuizFinal.jpg';

const Portfolio = () => {
  const portfolioItems = [
    { title: 'Poke-Pedia ⚡🔥💧🍃', img: pokePediaImage, text: 'An encyclopia for all things Pokemon. This application allows you to search for specific Pokemon or browse all Pokemon that have ever been created. A sure hit for all Pokemon enthusiasts!', appLink: 'https://shhutc18.github.io/Poke-Pedia/', repoLink: 'https://github.com/shhutc18/Poke-Pedia' },
    { title: 'Weather App ☀️☁️🌧️❄️⚡', img: WeatherImage, text: 'Need to check the weather? Look no further! This application allows you to check the current weather conditions for any city as well as a 5-day forecast for searched city. Previously searched cities will be saved for easy reference back to them in the future.', appLink: 'https://shhutc18.github.io/Weather-Dashboard/', repoLink: 'https://github.com/shhutc18/Weather-Dashboard' },
    { title: 'Personal Digital Planner 📒', img: PlannerImage, text: 'This application utilizes back-end technologies to allow a user to sign in to access their saved information. Use this digital daily planner so that you can access your important items from any device. Plan events, create to-do lists, and leave yourself notes for each day of the year.', appLink: 'https://rocky-mountain-31745-6823d73c66a2.herokuapp.com/login', repoLink: 'https://github.com/shhutc18/Daily-Planner' },
    { title: 'Employee Tracker 👥', img: TrackerImage, text: 'This back-end application allows users within a company to track, update, or browse the current employee database. Information provided is employee first and last name, salary, current role and department, and their managers name. Any of this information can be updated by using the prompts in the command line. Please follow directions in repository to use this application.', appLink: 'https://github.com/shhutc18/Employee-Tracker', repoLink: 'https://github.com/shhutc18/Employee-Tracker' },
    { title: 'Social Network Application Programming Interface🌐', img: SocialNetworkImage, text: 'This back-end application allows you to manage a database for a social media network by using the latest technologies. Please follow directions in repository to use this application.', appLink: 'https://github.com/shhutc18/Social-Network-API', repoLink: 'https://github.com/shhutc18/Social-Network-API' },
    { title: 'Coding Quiz 📝', img: QuizImage, text: 'Put you coding knowledge to the test with this simple quiz designed with Javascript!', appLink: 'https://shhutc18.github.io/Code-Quiz/', repoLink: 'https://github.com/shhutc18/Code-Quiz?tab=readme-ov-file' },
  ];

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      fontFamily: "'Work Sans', sans-serif"
    }}>
      {portfolioItems.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
          <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
          <div style={{ padding: '20px' }}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <a href={item.appLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#007BFF', color: '#fff', padding: '10px 0', borderRadius: '5px', marginTop: '10px' }}>Live Application 🔗</a>
            <a href={item.repoLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', backgroundColor: '#6c757d', color: '#fff', padding: '10px 0', borderRadius: '5px', marginTop: '10px' }}>GitHub Repository 🐙</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;