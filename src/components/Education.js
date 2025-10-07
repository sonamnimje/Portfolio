import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

export default function Education() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const educationData = [
    {
      title: "Bachelor of Technology – Computer Science and Engineering",
      institute:
        "Baderiya Global Institute of Engineering and Management, Jabalpur",
      date: "Sept 2022 – May 2026",
      grade: "8.02 CGPA",
      description:
        "Specializing in IoT, Cybersecurity, and Blockchain while building strong programming and problem-solving skills.",
      side: "left",
      logo: "/images/bgiem.png", // Baderiya Global Institute logo
    },
    {
      title: "CBSE (XII) – PCM",
      institute: "Aditya Convent Senior Secondary School, Jabalpur",
      date: "April 2020 – March 2022",
      description:
        "Completed Class 12 with core subjects Physics, Chemistry, and Mathematics.",
      side: "right",
      logo: "/images/aditya-logo.png", // Aditya Convent School logo
    },
    {
      title: "CBSE (X) – Science",
      institute: "Aditya Convent Senior Secondary School, Jabalpur",
      date: "April 2018 – March 2020",
      description: "Completed Class 10 under the CBSE board with Science stream.",
      side: "left",
      logo: "/images/aditya-logo.png", // Aditya Convent School logo
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="education" className="education">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          My education has been a journey of learning and development. Here are the details of my academic background
        </motion.p>

        <motion.div 
          className="timeline-wrapper"
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="timeline-line"></div>

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`timeline-item ${edu.side === "left" ? "timeline-left" : "timeline-right"}`}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="timeline-content">
                <div className="education-card-header">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt=""
                      className="education-logo"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  )}
                  <h3 className="education-card-title">
                    {edu.title}
                  </h3>
                </div>
                <p className="education-institute">
                  <strong>{edu.institute}</strong>
                </p>
                <p className="education-date">📅 {edu.date}</p>
                {edu.grade && (
                  <p className="education-grade">
                    <strong>Grade:</strong> {edu.grade}
                  </p>
                )}
                <p className="education-description">
                  {edu.description}
                </p>
              </div>

              {/* Timeline Dot */}
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}