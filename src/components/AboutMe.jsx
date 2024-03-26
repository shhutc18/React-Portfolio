import React from 'react';
import myPicture from '../assets/images/Self.jpg'; // Replace with the path to your picture

const AboutMe = () => {
  const aboutMeStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    fontFamily: "'Work Sans', sans-serif",
    color: '#333',
    lineHeight: '1.6',
  };

  const imageStyle = {
    width: '30%',
    marginRight: '20px',
    borderRadius: '10px',
    border: '2px solid lightgrey',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
  };

  const textStyle = {
    width: '65%',
    fontSize: '18px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.4)',
  };

  const emojiStyle = {
    textAlign: 'center',
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
        <p style={emojiStyle}>🐶🐱</p> {/* Center the dog and cat emojis */}
      </div>
    </div>
  );
};

export default AboutMe;