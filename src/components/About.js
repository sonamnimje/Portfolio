import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

/* ─── Animation helpers ──────────────────────────────────────────────── */
const fadeUp   = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  whileInView:{ opacity: 1, y: 0  },
  viewport:   { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const fadeLeft = (delay = 0) => ({
  initial:    { opacity: 0, x: -40 },
  whileInView:{ opacity: 1, x: 0  },
  viewport:   { once: true, amount: 0.15 },
  transition: { duration: 0.7,  ease: [0.22, 1, 0.36, 1], delay },
});

const stagger = {
  initial:    {},
  whileInView:{},
  viewport:   { once: true, amount: 0.1 },
  transition: { staggerChildren: 0.08 },
};

const staggerChild = {
  initial:    { opacity: 0, y: 20, scale: 0.92 },
  whileInView:{ opacity: 1, y: 0,  scale: 1    },
  transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

/* ─── Data ───────────────────────────────────────────────────────────── */
const tags = [
  'Curious', 'Problem Solver', 'AI Builder', 'Continuous Learner',
  'Team Player', 'Creative Thinker', 'Fast Learner', 'Detail Oriented',
];

const quickInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Jabalpur, Madhya Pradesh, India',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
    label: 'Status',
    value: 'Open to Full-Time Software Engineering Opportunities',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    label: 'Focus',
    value: 'Artificial Intelligence · Machine Learning · Full Stack Development',
  },
];

const journey = [
  {
    title: 'How it Started',
    body: 'My interest in technology began with curiosity about how software powers everyday life. During my Computer Science Engineering journey (graduating 2026), I discovered that programming wasn\'t just about writing code — it was about solving meaningful problems. That curiosity gradually evolved into a passion for Artificial Intelligence, modern web development, and building applications that improve people\'s lives.',
  },
  {
    title: 'What I Build',
    body: 'I enjoy creating AI-powered healthcare platforms, intelligent railway optimization systems, voice interview assistants, supply chain optimization tools, and scalable full-stack web applications. Every project helps me strengthen my understanding of software architecture, machine learning, and user-centered design.',
  },
  {
    title: 'What Drives Me',
    body: 'I\'m motivated by continuous learning, challenging problems, hackathons, collaboration, and the opportunity to build technology that creates real-world impact. I believe growth comes from experimenting, building consistently, and sharing knowledge with others.',
  },
];

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Curiosity',
    desc: 'Constantly learning new technologies and exploring innovative ideas.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Collaboration',
    desc: 'Building better software through teamwork, communication, and shared knowledge.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Innovation',
    desc: 'Using AI and modern technologies to solve practical challenges.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/><path d="M12 6v6l4 2"/><path d="M18 2v4h4"/>
      </svg>
    ),
    title: 'Growth',
    desc: 'Improving every day through learning, feedback, and hands-on experience.',
  },
];

const achievements = [
  { title: 'Smart India Hackathon Runner-Up', sub: 'National level hackathon — Government of India' },
  { title: 'Best Girls Team — HackSRIT', sub: 'Hackathon organised by SRIT, Jabalpur' },
  { title: 'EcoPreneur Hackathon Runner-Up', sub: 'Sustainability & entrepreneurship challenge' },
  { title: '100+ DSA Problems Solved', sub: 'LeetCode · Consistent problem-solving practice' },
];

/* ─── Sub-components ─────────────────────────────────────────────────── */

const SectionLabel = ({ children }) => (
  <span className="about-label">{children}</span>
);

/* ─── Main component ─────────────────────────────────────────────────── */
const About = () => {
  const heroRef  = useRef(null);
  const heroView = useInView(heroRef, { once: true, amount: 0.2 });

  return (
    <section id="about" className="about-v2">

      {/* Engineering grid overlay */}
      <div className="about-grid-bg" aria-hidden="true" />

      <div className="container">

        {/* ══════════════════════════════════════════════════════
            1. HERO INTRODUCTION
        ══════════════════════════════════════════════════════ */}
        <div className="about-hero" ref={heroRef}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <SectionLabel>About Me</SectionLabel>
          </motion.div>

          <motion.h1
            className="about-hero-heading"
            initial={{ opacity: 0, y: 36 }}
            animate={heroView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            From curiosity to building{' '}
            <span className="about-accent">intelligent solutions</span>{' '}
            with AI.
          </motion.h1>

          <motion.p
            className="about-hero-sub"
            initial={{ opacity: 0, y: 24 }}
            animate={heroView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
          >
            I'm <strong>Sonam Nimje</strong> — a <strong>2026 Computer Science Engineering graduate</strong> and{' '}
            <span className="about-accent-soft">AI/ML Engineer</span> and{' '}
            <span className="about-accent-soft">Full Stack Developer</span> who enjoys
            transforming ideas into intelligent, user-friendly applications. I love{' '}
            <span className="about-accent-soft">solving real-world problems</span> through
            clean code, modern technologies, and continuous learning. Every project I build
            is an opportunity to learn, innovate, and create{' '}
            <span className="about-accent-soft">meaningful impact</span>.
          </motion.p>

          {/* ── Philosophy quote ──────────────────────────────────────── */}
          <motion.blockquote
            className="about-quote"
            {...fadeUp(0.35)}
          >
            <span className="about-quote-mark">"</span>
            I believe great software is built with curiosity, consistency, and empathy.
            The best products don't just solve problems — they create meaningful experiences.
            <span className="about-quote-mark">"</span>
          </motion.blockquote>
        </div>

        {/* ══════════════════════════════════════════════════════
            2. PERSONALITY TAGS
        ══════════════════════════════════════════════════════ */}
        <motion.div className="about-tags-wrap" {...stagger}>
          {tags.map((tag) => (
            <motion.span key={tag} className="about-tag" {...staggerChild}
              whileHover={{ scale: 1.07, y: -3 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            3. QUICK INFO  (3 columns)
        ══════════════════════════════════════════════════════ */}
        <motion.div className="about-info-grid" {...stagger}>
          {quickInfo.map((item) => (
            <motion.div key={item.label} className="about-info-card glass-card" {...staggerChild}>
              <div className="about-info-icon">{item.icon}</div>
              <div>
                <p className="about-info-label">{item.label}</p>
                <p className="about-info-value">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ══════════════════════════════════════════════════════
            4. MY JOURNEY
        ══════════════════════════════════════════════════════ */}
        <div className="about-section-block">
          <motion.div {...fadeUp()}>
            <SectionLabel>My Journey</SectionLabel>
            <h2 className="about-block-title">The story so far</h2>
          </motion.div>

          <div className="journey-grid">
            {journey.map((item, i) => (
              <motion.div
                key={item.title}
                className="journey-card glass-card"
                {...fadeUp(i * 0.1)}
                whileHover={{ y: -6 }}
              >
                <div className="journey-index">0{i + 1}</div>
                <h3 className="journey-title">{item.title}</h3>
                <p className="journey-body">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════
            5. CORE VALUES
        ══════════════════════════════════════════════════════ */}
        <div className="about-section-block">
          <motion.div {...fadeUp()}>
            <SectionLabel>Core Values</SectionLabel>
            <h2 className="about-block-title">What I stand by</h2>
          </motion.div>

          <motion.div className="values-grid" {...stagger}>
            {values.map((v) => (
              <motion.div
                key={v.title}
                className="value-card glass-card"
                {...staggerChild}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(139,92,246,0.18)' }}
              >
                <div className="value-icon">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════
            6. ACHIEVEMENTS  (timeline)
        ══════════════════════════════════════════════════════ */}
        <div className="about-section-block">
          <motion.div {...fadeUp()}>
            <SectionLabel>Achievements</SectionLabel>
            <h2 className="about-block-title">Recognition &amp; milestones</h2>
          </motion.div>

          <div className="achievements-timeline">
            {achievements.map((a, i) => (
              <motion.div
                key={a.title}
                className="achievement-item"
                {...fadeLeft(i * 0.1)}
              >
                <div className="achievement-dot" />
                <div className="achievement-card glass-card">
                  <h3 className="achievement-title">{a.title}</h3>
                  <p className="achievement-sub">{a.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
