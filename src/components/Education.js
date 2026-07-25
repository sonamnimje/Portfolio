import React from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Education.css';

const educationData = [
  {
    title: "Bachelor of Technology – Computer Science and Engineering",
    institute: "Baderiya Global Institute of Engineering and Management, Jabalpur",
    date: "Sept 2022 – June 2026",
    grade: "8.21 CGPA",
    description: "Specializing in IoT, Cybersecurity, and Blockchain while building strong programming and problem-solving skills.",
    side: "left",
    logo: "/images/bgiem.png",
    tag: "B.Tech",
  },
  {
    title: "CBSE (XII) – PCM",
    institute: "Aditya Convent Senior Secondary School, Jabalpur",
    date: "April 2020 – March 2022",
    description: "Completed Class 12 with core subjects Physics, Chemistry, and Mathematics.",
    side: "right",
    logo: "/images/aditya-logo.png",
    tag: "Class XII",
  },
  {
    title: "CBSE (X) – Science",
    institute: "Aditya Convent Senior Secondary School, Jabalpur",
    date: "April 2018 – March 2020",
    description: "Completed Class 10 under the CBSE board with Science stream.",
    side: "left",
    logo: "/images/aditya-logo.png",
    tag: "Class X",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 44, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Education() {
  const [ref, inView] = useInView({ threshold: 0.08, triggerOnce: true });

  return (
    <section id="education" className="education-section" aria-labelledby="edu-heading">
      <div className="container">

        {/* ── Header ── */}
        <motion.div
          className="edu-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">My journey</span>
          <h2 id="edu-heading" className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
          <p className="edu-subtitle">
            My education has been a journey of continuous learning and growth — here's a glimpse into my academic background.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          className="edu-timeline"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Centre spine */}
          <div className="edu-spine" aria-hidden="true" />

          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className={`edu-row ${edu.side === 'right' ? 'edu-row-right' : 'edu-row-left'}`}
              variants={cardVariants}
            >
              {/* Card */}
              <motion.article
                className="edu-card"
                whileHover={{
                  y: -6,
                  boxShadow: '0 24px 64px rgba(139,92,246,0.22), 0 0 0 1.5px rgba(139,92,246,0.45)',
                  transition: { duration: 0.26, ease: 'easeOut' },
                }}
                aria-label={edu.title}
              >
                {/* Top accent bar */}
                <div className="edu-card-bar" />

                {/* Card header */}
                <div className="edu-card-head">
                  {edu.logo && (
                    <img
                      src={edu.logo}
                      alt=""
                      className="edu-logo"
                      onError={e => { e.target.style.display = 'none'; }}
                    />
                  )}
                  <div className="edu-card-meta">
                    <span className="edu-tag">{edu.tag}</span>
                    <h3 className="edu-title">{edu.title}</h3>
                  </div>
                </div>

                {/* Institute */}
                <p className="edu-institute">
                  {edu.institute}
                </p>

                {/* Date + grade row */}
                <div className="edu-info-row">
                  <span className="edu-date">
                    {edu.date}
                  </span>
                  {edu.grade && (
                    <span className="edu-grade">
                      {edu.grade}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="edu-desc">{edu.description}</p>
              </motion.article>

              {/* Timeline dot */}
              <div className="edu-dot" aria-hidden="true">
                <div className="edu-dot-inner" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
