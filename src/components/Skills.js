import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

/* ─── Inline SVG icons for techs Font Awesome doesn't cover well ─── */
const SVGIcon = ({ name }) => {
  const icons = {
    tailwind: (
      <svg viewBox="0 0 32 32" width="16" height="16" fill="none">
        <path d="M16 6.4c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4.914.228 1.564.89 2.285 1.624C17.234 13.39 18.656 14.8 21.6 14.8c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-.914-.228-1.564-.89-2.285-1.624C20.366 7.81 18.944 6.4 16 6.4zM8 14.8c-4.267 0-6.933 2.133-8 6.4 1.6-2.133 3.467-2.933 5.6-2.4.914.228 1.564.89 2.285 1.624C9.234 21.79 10.656 23.2 13.6 23.2c4.267 0 6.933-2.133 8-6.4-1.6 2.133-3.467 2.933-5.6 2.4-.914-.228-1.564-.89-2.285-1.624C12.366 16.21 10.944 14.8 8 14.8z" fill="#38BDF8"/>
      </svg>
    ),
    fastapi: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#009688"/>
        <path d="M17 6l-8 12h7l-1 8 8-12h-7z" fill="white"/>
      </svg>
    ),
    sklearn: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#F7931E"/>
        <text x="5" y="21" fontSize="10" fontWeight="bold" fill="white" fontFamily="sans-serif">SK</text>
      </svg>
    ),
    numpy: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <rect width="32" height="32" rx="4" fill="#4DABCF"/>
        <text x="4" y="22" fontSize="10" fontWeight="bold" fill="white" fontFamily="monospace">NP</text>
      </svg>
    ),
    pandas: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <rect width="32" height="32" rx="4" fill="#150458"/>
        <rect x="8" y="6" width="5" height="20" rx="2" fill="#E70488"/>
        <rect x="19" y="6" width="5" height="20" rx="2" fill="#00D4AA"/>
      </svg>
    ),
    ortools: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#4285F4"/>
        <text x="5" y="22" fontSize="11" fontWeight="bold" fill="white" fontFamily="sans-serif">OR</text>
      </svg>
    ),
    gnn: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#7C3AED"/>
        <circle cx="8"  cy="16" r="3" fill="white"/>
        <circle cx="24" cy="16" r="3" fill="white"/>
        <circle cx="16" cy="8"  r="3" fill="white"/>
        <circle cx="16" cy="24" r="3" fill="white"/>
        <line x1="11" y1="16" x2="21" y2="16" stroke="white" strokeWidth="1.5"/>
        <line x1="16" y1="11" x2="16" y2="21" stroke="white" strokeWidth="1.5"/>
      </svg>
    ),
    nlp: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#059669"/>
        <text x="5" y="22" fontSize="11" fontWeight="bold" fill="white" fontFamily="sans-serif">NLP</text>
      </svg>
    ),
    rl: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#DC2626"/>
        <path d="M10 22 L16 10 L22 22 M12.5 18 L19.5 18" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
    vercel: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#000000"/>
        <path d="M16 8 L26 24 L6 24 Z" fill="white"/>
      </svg>
    ),
    render: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#46E3B7"/>
        <text x="7" y="22" fontSize="13" fontWeight="bold" fill="#000" fontFamily="sans-serif">R</text>
      </svg>
    ),
    postman: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <circle cx="16" cy="16" r="16" fill="#FF6C37"/>
        <path d="M22 16a6 6 0 11-6-6 6 6 0 016 6z" fill="white" opacity="0.3"/>
        <circle cx="16" cy="16" r="3" fill="white"/>
      </svg>
    ),
    jwt: (
      <svg viewBox="0 0 32 32" width="16" height="16">
        <rect width="32" height="32" rx="4" fill="#D63AFF"/>
        <text x="2" y="22" fontSize="10" fontWeight="bold" fill="white" fontFamily="monospace">JWT</text>
      </svg>
    ),
  };
  return icons[name] || null;
};

/* ─── Skill data ──────────────────────────────────────────────────────── */
const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    color: '#6366F1',
    skills: [
      { name: 'HTML5',          fa: 'fab fa-html5',      color: '#E34F26' },
      { name: 'CSS3',           fa: 'fab fa-css3-alt',   color: '#1572B6' },
      { name: 'JavaScript',     fa: 'fab fa-js',         color: '#F7DF1E' },
      { name: 'React.js',       fa: 'fab fa-react',      color: '#61DAFB' },
      { name: 'Tailwind CSS',   svg: 'tailwind' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    color: '#8B5CF6',
    skills: [
      { name: 'Python',         fa: 'fab fa-python',     color: '#3776AB' },
      { name: 'FastAPI',        svg: 'fastapi' },
      { name: 'Django',         fa: 'fab fa-python',     color: '#092E20' },
      { name: 'Flask',          fa: 'fas fa-flask',      color: '#A78BFA' },
      { name: 'REST APIs',      fa: 'fas fa-network-wired', color: '#6EE7B7' },
      { name: 'JWT Auth',       svg: 'jwt' },
    ],
  },
  {
    id: 'aiml',
    title: 'AI / Machine Learning',
    color: '#A855F7',
    skills: [
      { name: 'Scikit-learn',   svg: 'sklearn' },
      { name: 'Pandas',         svg: 'pandas' },
      { name: 'NumPy',          svg: 'numpy' },
      { name: 'NLP',            svg: 'nlp' },
      { name: 'Reinforcement Learning', svg: 'rl' },
      { name: 'OR-Tools',       svg: 'ortools' },
      { name: 'GNNs',           svg: 'gnn' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    color: '#6366F1',
    skills: [
      { name: 'MySQL',          fa: 'fas fa-database',   color: '#4479A1' },
      { name: 'SQLite',         fa: 'fas fa-database',   color: '#003B57' },
      { name: 'SQL',            fa: 'fas fa-table',      color: '#6B7280' },
      { name: 'PostgreSQL',     fa: 'fas fa-database',   color: '#336791' },
    ],
  },
  {
    id: 'languages',
    title: 'Programming Languages',
    color: '#7C3AED',
    skills: [
      { name: 'C++',            fa: 'fas fa-code',       color: '#00599C' },
      { name: 'Python',         fa: 'fab fa-python',     color: '#3776AB' },
      { name: 'JavaScript',     fa: 'fab fa-js',         color: '#F7DF1E' },
      { name: 'SQL',            fa: 'fas fa-table',      color: '#6B7280' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    color: '#8B5CF6',
    skills: [
      { name: 'Git',            fa: 'fab fa-git-alt',    color: '#F05032' },
      { name: 'GitHub',         fa: 'fab fa-github',     color: '#181717' },
      { name: 'VS Code',        fa: 'fas fa-code',       color: '#007ACC' },
      { name: 'Postman',        svg: 'postman' },
      { name: 'Vercel',         svg: 'vercel' },
      { name: 'Render',         svg: 'render' },
      { name: 'Figma',          fa: 'fab fa-figma',      color: '#F24E1E' },
    ],
  },
];

/* ─── Animation variants ─────────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

const chipVariants = {
  hidden:  { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

/* ─── Skill Chip ─────────────────────────────────────────────────────── */
const SkillChip = ({ skill, index }) => (
  <motion.span
    className="skill-chip"
    variants={chipVariants}
    whileHover={{ scale: 1.08, y: -2 }}
    transition={{ type: 'spring', stiffness: 300, damping: 18 }}
    title={skill.name}
  >
    <span className="skill-chip-icon">
      {skill.fa
        ? <i className={skill.fa} style={{ color: skill.color }} aria-hidden="true" />
        : <SVGIcon name={skill.svg} />
      }
    </span>
    <span className="skill-chip-name">{skill.name}</span>
  </motion.span>
);

/* ─── Category Card ──────────────────────────────────────────────────── */
const CategoryCard = ({ category, index, inView }) => {
  const chipContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
  };

  return (
    <motion.article
      className="skill-card"
      variants={cardVariants}
      whileHover={{
        y: -8,
        boxShadow: `0 24px 64px rgba(139,92,246,0.22), 0 0 0 1.5px rgba(139,92,246,0.5)`,
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
      aria-label={`${category.title} skills`}
      style={{ '--card-accent': category.color }}
    >
      {/* Card header */}
      <div className="skill-card-header">
        <span className="skill-card-emoji" role="img" aria-hidden="true">
          {category.emoji}
        </span>
        <h3 className="skill-card-title">{category.title}</h3>
      </div>

      {/* Divider */}
      <div className="skill-card-divider" style={{ background: `linear-gradient(90deg, ${category.color}60, transparent)` }} />

      {/* Chips */}
      <motion.div
        className="skill-chips"
        variants={chipContainer}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {category.skills.map((skill, i) => (
          <SkillChip key={skill.name} skill={skill} index={i} />
        ))}
      </motion.div>
    </motion.article>
  );
};

/* ─── Skills Section ─────────────────────────────────────────────────── */
const Skills = () => {
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="container">

        {/* Heading */}
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          <span className="section-label">What I work with</span>
          <h2 id="skills-heading" className="section-title">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="skills-subtitle">
            A collection of the technologies, frameworks, and tools I use to design,
            build, and deploy intelligent software solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} inView={inView} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
