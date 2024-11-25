"use client";
import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import style from '../../styles/About-module.css';
import Footer from '../components/footer';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <Navbar />
      <div className="heading">
        <h1>About Us</h1>
        <p>Welcome to Fit&Tone! We are dedicated to helping you achieve your fitness goals and lead a healthier, more active lifestyle.</p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            <img src={"/aboutus.png"} alt="About Us" />
          </div>
          <div className="about-content">
            <h2>Our Mission</h2>
            <p>
              Our mission is to provide personalized fitness and nutrition guidance that fits seamlessly into your busy life. We believe in empowering individuals with the knowledge and tools they need to succeed in their wellness journey. 
              {isExpanded && (
                <span>
                  By offering custom workout routines, balanced meal plans, and expert advice, we aim to be your trusted partner in fitness. Join us today and take the first step towards a healthier you!
                </span>
              )}
            </p>
            <button onClick={toggleParagraph} className="read-more">
              {isExpanded ? 'Show Less' : 'Learn More'}
            </button>
          </div>
        </section>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default About;
