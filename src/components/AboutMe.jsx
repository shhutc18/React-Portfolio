import React from 'react';
import myPicture from '../assets/images/Self.jpg'; // Replace with the path to your picture
import Green from '../assets/images/Green2.jpg';

const AboutMe = () => {
  const aboutMeStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Work Sans', sans-serif",
    color: '#333',
    lineHeight: '1.6',
    backgroundImage: `url(${Green})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  };

  const imageStyle = {
    width: '30%',
    height: '550px',
    marginRight: '20px',
    borderRadius: '50%', // Make the image circular
    border: '2px solid lightgrey',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    position: 'relative',
    top: '-150px',
  };

  const cardStyle = {
    width: '35%', // Adjust the width to make room for the new section
    fontSize: '18px',
    padding: '20px',
    paddingBottom: '100px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
    borderRadius: '10px', // Add rounded corners
    backgroundColor: '#fff', // Add a background color
  };

  const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Bootstrap', 'APIs', 'JQuery', 'JSON', 'AJAX', 'Agile Development', 'Object Oriented Programming', 'Express', 'MySQL', 'NoSQL', 'MVC', 'Sequelize', 'Testing', 'MERN Stack', 'GraphQL']; // Add your technologies

  return (
    <div style={aboutMeStyle}>
      <img src={myPicture} alt="Me" style={imageStyle} />
      <div style={cardStyle}>
        <h2>About Me</h2>
        <p>
          Hi there! My name is Shelby Hutchinson and I am a full-stack web developer. I recently graduated from the University of Oregon with a certification in Full-Stack Web Development. I am passionate about creating appealing and efficient full-stack applications. I am excited to bring my skills to a team that values creativity and innovation.
        </p>
        <p>
          I enjoy collaborating as a team and am always looking for ways to grow and broaden my skill set as a developer. If you would like to check out some of my work, please feel free to take a look around my Portfolio.
        </p>
        <p>
          When I'm not coding, you can find me hiking, reading, or spending time with my family and friends. I am always up for a new challenge and am excited to see where my coding journey will take me next!
        </p>
      </div>
      <div style={cardStyle}>
        <h2>Technologies & Knowledge</h2>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;