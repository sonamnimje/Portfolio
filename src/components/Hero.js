import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            👋Hi, I’m <span className="highlight">Sonam Nimje</span>
          </h1>
          <p className="hero-description">
            I’m a Full-Stack Developer passionate about building innovative, scalable, and user-focused web applications.<br />
            With a strong foundation in both frontend and backend development. I love turning ideas into interactive digital experiences that solve real-world problems.
          </p>
          <div className="hero-tech">
            <span>🔹 <strong>Tech Stack:</strong> Django | React | FastAPI | Python | TailwindCSS</span>
          </div>
          <blockquote className="hero-quote">
            🎯 "I believe great products come from combining creativity, code, and a clear purpose."
          </blockquote>
          <div className="hero-buttons">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection('projects')}
            >
              View My Projects
            </button>
            <a
              className="btn btn-primary"
              href="/resume.pdf"
              download
            >
              Download Resume
            </a>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </button>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="profile-card">
            <div className="profile-image">
              <img src="/profile.jpg" alt="Profile" />
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
