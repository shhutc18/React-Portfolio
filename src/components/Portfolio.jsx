import React from 'react';

const Portfolio = () => {
  const portfolioItems = [
    { title: 'Poke-Pedia', img: '../assets/images/Final.png', text: 'Description for image 1', appLink: 'https://shhutc18.github.io/Poke-Pedia/', repoLink: 'https://github.com/shhutc18/Poke-Pedia' },
    { title: 'App 2', img: 'path/to/image2.jpg', text: 'Description for image 2', appLink: 'https://app2.com', repoLink: 'https://github.com/user/repo2' },
    { title: 'App 3', img: 'path/to/image3.jpg', text: 'Description for image 3', appLink: 'https://app3.com', repoLink: 'https://github.com/user/repo3' },
    { title: 'App 4', img: 'path/to/image4.jpg', text: 'Description for image 4', appLink: 'https://app4.com', repoLink: 'https://github.com/user/repo4' },
    { title: 'App 5', img: 'path/to/image5.jpg', text: 'Description for image 5', appLink: 'https://app5.com', repoLink: 'https://github.com/user/repo5' },
    { title: 'App 6', img: 'path/to/image6.jpg', text: 'Description for image 6', appLink: 'https://app6.com', repoLink: 'https://github.com/user/repo6' },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {portfolioItems.map((item, index) => (
        <div key={index} style={{ display: 'flex', width: '100%', marginBottom: '20px' }}>
          <div style={{ width: '50%' }}>
            <img src={item.img} alt={item.title} style={{ width: '100%', objectFit: 'cover' }} />
            <h3>{item.title}</h3>
            <a href={item.appLink} target="_blank" rel="noopener noreferrer">Link to live application</a>
            <a href={item.repoLink} target="_blank" rel="noopener noreferrer">Link to code repository</a>
          </div>
          <p style={{ width: '50%', padding: '20px' }}>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;