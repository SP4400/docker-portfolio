import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <img src="https://profile-portfolio.s3.amazonaws.com/istockphoto-1495088043-612x612.jpg" alt="Profile" className="profile-image" />
          <p>
            Hello! I'm a passionate web developer with expertise in React, Node.js, and modern web technologies. I love building scalable and user-friendly applications that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
