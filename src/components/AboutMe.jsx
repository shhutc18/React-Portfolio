import React from 'react';
import myPicture from '../assets/images/Self.jpg'; // Replace with the path to your picture

const AboutMe = () => {
    const aboutMeStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
        backgroundColor: '#d7edd6', // Add a background color
    };

  const imageStyle = {
    width: '29%', // Make the image smaller
    marginRight: '20px',
    borderRadius: '10px', // Add rounded corners
    border: '5px solid lightgrey',
  };

  const textStyle = {
    width: '80%',
    fontSize: '20px',
    fontFamily: "'Work Sans', sans-serif",
    color: '#333',
    lineHeight: '1.5',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add a box shadow
    padding: '20px', // Add some padding
  };

  return (
    <div style={aboutMeStyle}>
      <img src={myPicture} alt="Me" style={imageStyle} />
      <div style={textStyle}>
        <p>
          Hi there! Nice to meet you and welcome to my personal portfolio. Whether you are looking to learn more about me personally
          or just take a look at the projects I have worked on, you have come to the right place. I am a web developer with a passion
          of creating and designing websites with a purpose. I am always looking for new opportunities to learn and grow in the field of web development.
        </p>
        <p>
          I graduated from the University of Oregon with a Full Stack Web Developement Certificate and have been working on projects ever since.
        </p>
        <p>
          When I am not coding, I enjoy spending time with my family, friends and 3 fur babies, hiking, and traveling. Video games are also a big part of my life, so if you have any recommendations, I would love to hear them!
        </p>
        <p>
            Please feel free to reach out to me if you have any questions or would like to work together. I am always open to new opportunities and connections. In the meantime, feel free to take a look around and enjoy!
        </p>
      </div>
    </div>
  );
};

export default AboutMe;