import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Achievements.css';

const Achievements = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const achievements = [
    {
      title: 'Ecopreneur Hackathon 2025',
      subtitle: 'BGIEM Jabalpur',
      position: '1st Runner-Up',
      description: 'Our Project RePouch focuses on reducing single use plastic through smart refilling and sustainable packaging.',
      date: 'June 2025',
      type: '1st Runner-Up',
      image: '/images/ecopreneur.jpg',
      category: 'Hackathon',
      side: 'left',
      icon: 'fas fa-trophy'
    },
    {
      title: 'Global Entrepreneurship Summit 2025',
      subtitle: 'IIT KHARAGPUR',
      position: 'Participant',
      description: 'Participated in the Global Entrepreneurship Summit at IIT Kharagpur, gaining exposure to entrepreneurial ideas and networking with innovators.',
      date: 'Feb 2025',
      type: 'Participants',
      image: '/images/entrepreneurship.jpg',
      category: 'Business Innovation',
      side: 'right',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'HackSRIT 2025',
      subtitle: 'Technical Innovation',
      position: 'Best Girls Team',
      description: 'Built a HealthQ - an AI-powered hospital queue and resource management system.',
      date: 'May 2025',
      type: 'Winner',
      image: '/images/hacksrit.jpg',
      category: 'Hackathon',
      side: 'left',
      icon: 'fas fa-code'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="achievements-header"
        >
          <h2 className="section-title">HACKATHONS & ACHIEVEMENTS</h2>
          <p className="section-subtitle">
            My participation in various hackathons and coding competitions has sharpened my problem-solving skills
          </p>
        </motion.div>

        <motion.div 
          className="timeline-wrapper"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${achievement.side === "left" ? "timeline-left" : "timeline-right"}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="timeline-content">
                <div className="achievement-image-section">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="achievement-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="fallback-icon" style={{display: 'none'}}>
                    <i className={achievement.icon}></i>
                  </div>
                </div>

                <div className="achievement-card-header">
                  <div className="achievement-icon">
                    <i className={achievement.icon}></i>
                  </div>
                  <div className="achievement-header-text">
                    <h3 className="achievement-title">{achievement.title}</h3>
                    <p className="achievement-subtitle">{achievement.subtitle}</p>
                  </div>
                </div>

                <div className="achievement-meta">
                  <span className="achievement-category">{achievement.category}</span>
                  <span className="achievement-date">📅 {achievement.date}</span>
                </div>
                
                <div className="achievement-position">
                  <i className="fas fa-medal"></i>
                  <span>{achievement.position}</span>
                </div>

                <p className="achievement-description">{achievement.description}</p>

                <div className="achievement-badge">
                  <span className={`badge ${achievement.type.toLowerCase().replace(/\s+/g, '-').replace(/^(\d)/, 'first-')}`}>
                    {achievement.type}
                  </span>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="achievements-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">Hackathons Participated</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2025</div>
            <div className="stat-label">Active Year</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Awards Won</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;