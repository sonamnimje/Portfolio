import { useRef } from 'react';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';
import './Achievements.css';

/* ─── Animation presets ──────────────────────────────────────────────── */
const SPRING = { type: 'spring', stiffness: 260, damping: 24 };

const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.15 },
  transition:  { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const slideIn = (dir = 'left', delay = 0) => ({
  initial:     { opacity: 0, x: dir === 'left' ? -56 : 56 },
  whileInView: { opacity: 1, x: 0 },
  viewport:    { once: true, amount: 0.2 },
  transition:  { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

/* ─── Data ───────────────────────────────────────────────────────────── */
const TIMELINE = [
  {
    id: 0,
    title: 'Smart India Hackathon (SIH) 2025',
    location: 'Welingkar Institute of Management, Mumbai',
    category: 'National-Level Hackathon',
    date: '2025',
    achievement: '1st Runner-Up',
    achievementTier: 'runner-up',
    description:
      'Led an all-girls team to develop RailSarthi, an AI-powered railway traffic optimization platform using Reinforcement Learning, Graph Neural Networks, and OR-Tools. The solution intelligently optimized train scheduling, platform allocation, and reduced railway congestion. The project won ₹25,000 in prize money and team mementos at the national grand finale.',
    tech: ['Python', 'FastAPI', 'React', 'Reinforcement Learning', 'OR-Tools', 'GNN'],
    image: '/images/sih.jpeg',
    cert: null,
    side: 'left',
  },
  {
    id: 1,
    title: 'EcoPreneur Hackathon 2025',
    location: 'BGIEM, Jabalpur',
    category: 'Sustainability Innovation',
    date: 'June 2025',
    achievement: '1st Runner-Up',
    achievementTier: 'runner-up',
    description:
      'Developed RePouch, a sustainability-focused solution designed to reduce single-use plastic through smart refill systems and eco-friendly packaging. The project emphasized practical environmental impact and scalable innovation.',
    tech: ['Sustainability', 'Circular Economy', 'Green Innovation'],
    image: '/images/ecopreneur.jpg',
    cert: null,
    side: 'right',
  },
  {
    id: 2,
    title: 'HackSRIT 2025',
    location: null,
    category: 'Technical Innovation',
    date: 'May 2025',
    achievement: 'Best Girls Team',
    achievementTier: 'winner',
    description:
      'Built HealthQ, an AI-powered hospital queue and resource management platform that predicts waiting times, optimizes patient flow, and improves healthcare operations through intelligent scheduling.',
    tech: ['React', 'Django', 'Python', 'AI', 'Healthcare'],
    image: '/images/hacksrit.jpg',
    cert: null,
    side: 'left',
  },
  {
    id: 3,
    title: 'Global Entrepreneurship Summit 2025',
    location: 'IIT Kharagpur',
    category: 'Business Innovation',
    date: 'February 2025',
    achievement: 'Participant',
    achievementTier: 'participant',
    description:
      'Participated in the Global Entrepreneurship Summit at IIT Kharagpur, engaging with entrepreneurs, startup founders, investors, and innovators while gaining valuable exposure to business strategy, product innovation, and entrepreneurship.',
    tech: [],
    image: '/images/entrepreneurship.jpg',
    cert: null,
    side: 'right',
  },
];

const STATS = [
  { number: '4+', label: 'Hackathons Participated' },
  { number: '3',  label: 'Awards Won' },
  { number: '2026', label: 'Active Year' },
];

/* ─── Location icon (inline SVG) ────────────────────────────────────── */
const PinIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
);

const CalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

/* ─── Animated growing timeline line ────────────────────────────────── */
const TimelineLine = () => {
  const ref   = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="ach-line-track" ref={ref} aria-hidden="true">
      <motion.div className="ach-line-fill" style={{ scaleY, originY: 0 }} />
    </div>
  );
};

/* ─── Single timeline card ───────────────────────────────────────────── */
const AchievementCard = ({ item, index }) => {
  const isLeft   = item.side === 'left';
  const nodeRef  = useRef(null);
  const nodeView = useInView(nodeRef, { once: true, amount: 0.5 });

  return (
    <div className={`ach-item ${isLeft ? 'ach-item--left' : 'ach-item--right'}`}>

      {/* Timeline node */}
      <motion.div
        ref={nodeRef}
        className="ach-node"
        initial={{ scale: 0, opacity: 0 }}
        animate={nodeView ? { scale: 1, opacity: 1 } : {}}
        transition={{ ...SPRING, delay: 0.1 }}
        aria-hidden="true"
      >
        <motion.div
          className="ach-node-ring"
          animate={nodeView ? { scale: [1, 1.55, 1], opacity: [0.6, 0, 0.6] } : {}}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Card */}
      <motion.div
        className="ach-card glass-card"
        {...slideIn(isLeft ? 'left' : 'right', index * 0.08)}
        whileHover={{ y: -10, scale: 1.02, transition: SPRING }}
      >
        {/* ── Image ── */}
        <div className="ach-img-wrap">
          <motion.img
            src={item.image}
            alt={item.title}
            className="ach-img"
            loading="lazy"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback */}
          <div className="ach-img-fallback" style={{ display: 'none' }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
          </div>

          {/* Achievement badge — overlaid on image */}
          <motion.div
            className={`ach-badge ach-badge--${item.achievementTier}`}
            initial={{ opacity: 0, scale: 0.7, y: 8 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING, delay: index * 0.08 + 0.3 }}
          >
            {item.achievement}
          </motion.div>
        </div>

        {/* ── Body ── */}
        <div className="ach-body">
          {/* Category + date row */}
          <div className="ach-meta-row">
            <span className="ach-category">{item.category}</span>
            <span className="ach-date"><CalIcon />{item.date}</span>
          </div>

          {/* Title */}
          <h3 className="ach-title">{item.title}</h3>

          {/* Location */}
          {item.location && (
            <p className="ach-location"><PinIcon />{item.location}</p>
          )}

          {/* Description */}
          <p className="ach-desc">{item.description}</p>

          {/* Tech chips */}
          {item.tech.length > 0 && (
            <div className="ach-tech-row">
              {item.tech.map((t) => (
                <span key={t} className="ach-tech-chip">{t}</span>
              ))}
            </div>
          )}

          {/* Certificate button */}
          {item.cert && (
            <a
              href={item.cert}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary ach-cert-btn"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              View Certificate
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
};

/* ─── Main component ─────────────────────────────────────────────────── */
const Achievements = () => {
  return (
    <section id="achievements" className="ach-section">

      {/* Engineering grid */}
      <div className="ach-grid-bg" aria-hidden="true" />

      <div className="container">

        {/* ── Header ── */}
        <motion.div className="ach-header" {...fadeUp(0)}>
          <span className="about-label">Achievements</span>
          <h2 className="ach-heading">HACKATHONS &amp; ACHIEVEMENTS</h2>
          <p className="ach-subheading">
            A journey of innovation, teamwork, and continuous learning through
            hackathons, technical competitions, and entrepreneurial events.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="ach-timeline">
          <TimelineLine />
          {TIMELINE.map((item, i) => (
            <AchievementCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* ── Stats bar ── */}
        <motion.div className="ach-stats" {...fadeUp(0.1)}>
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="ach-stat glass-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ y: -5, transition: SPRING }}
            >
              <span className="ach-stat-num gradient-text">{s.number}</span>
              <span className="ach-stat-label">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Achievements;
