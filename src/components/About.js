import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: 'B.Tech', label: 'CSE Student' },
    { number: 'AI/ML', label: 'Currently Learning' },
    { number: '3+', label: 'Tech Domains' }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <div className="about-content" ref={ref}>
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p>
              Hi, I'm Sonam Nimje, a Full-Stack Developer passionate about building scalable, efficient, and impactful web applications.
              I enjoy turning ideas into real-world solutions through clean code, thoughtful design, and continuous learning.
            </p>
            <p>
              I'm currently pursuing my B.Tech in Computer Science Engineering at Baderia Global Institute of Engineering and Management, Jabalpur (M.P).
              My journey revolves around exploring how technology — especially AI, Blockchain, and Cybersecurity — can solve meaningful problems.
            </p>
            <div className="currently-exploring">
              <h3>🔍 Currently Exploring</h3>
              <ul>
                <li>💡 AI/ML with Scikit-learn & Pandas</li>
                <li>🔐 Cybersecurity fundamentals</li>
                <li>⛓️ Blockchain technology</li>
                <li>💻 Scalable web apps using Django & Tailwind CSS</li>
              </ul>
            </div>
            <div className="about-stats">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="stat"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                >
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="image-placeholder">
              <i className="fas fa-code"></i>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
