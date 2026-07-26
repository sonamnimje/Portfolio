import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useSpring } from 'framer-motion';
import { usePage } from '../App';
import HomeSections from './HomeSections';
import './Hero.css';

const ROLES = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'Software Engineer',
  'Problem Solver',
  'Curious Builder'
];

function useTyping(words, typingSpeed = 80, deleteSpeed = 45, pause = 1600) {
  const [display, setDisplay]   = useState('');
  const [wordIndex, setWordIdx] = useState(0);
  const [isDeleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        }
      } else {
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setDeleting(false);
          setWordIdx(i => i + 1);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [display, isDeleting, wordIndex, words, typingSpeed, deleteSpeed, pause]);

  return display;
}

const MagneticButton = ({ children, className, onClick, strength = 0.35, ...rest }) => {
  const ref   = useRef(null);
  const xRaw  = useSpring(0, { stiffness: 200, damping: 20 });
  const yRaw  = useSpring(0, { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    xRaw.set((e.clientX - cx) * strength);
    yRaw.set((e.clientY - cy) * strength);
  };

  const onLeave = () => { xRaw.set(0); yRaw.set(0); };

  return (
    <motion.button
      ref={ref}
      className={`btn ${className}`}
      style={{ x: xRaw, y: yRaw }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </motion.button>
  );
};


const GhibliAvatar = ({ mouseX, mouseY, isHovered }) => {
  const containerRef = useRef(null);
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const cx   = rect.left + rect.width  / 2;
    const cy   = rect.top  + rect.height / 2;
    const dx   = (mouseX - cx) / (rect.width  / 2);
    const dy   = (mouseY - cy) / (rect.height / 2);
    const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
    const dist = Math.sqrt(dx * dx + dy * dy);
    const scale = clamp(dist, 0, 1);
    setEyeOffset({
      x: clamp(dx * scale * 2.5, -2.5, 2.5),
      y: clamp(dy * scale * 2.0, -2.0, 2.0),
    });
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="avatar-svg-wrap" aria-label="Sonam's avatar illustration">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        className="avatar-svg"
      >
        {/* Background circle */}
        <circle cx="100" cy="100" r="96" fill="white" stroke="#C4B5FD" strokeWidth="2.5"/>

        <g className={`av-sparkles ${isHovered ? 'av-sparkles-show' : ''}`}>
          {[
            [18, 30, 0], [172, 22, 30], [14, 162, 15],
            [178, 168, 60], [148, 14, -20], [52, 182, 45],
          ].map(([x, y, rot], i) => (
            <g key={i} transform={`translate(${x},${y}) rotate(${rot})`}
               style={{ animationDelay: `${i * 0.08}s` }} className="av-sparkle-item">
              <line x1="0" y1="-6" x2="0" y2="6"  stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
              <line x1="-6" y1="0" x2="6" y2="0"  stroke="#A78BFA" strokeWidth="2" strokeLinecap="round"/>
              <line x1="-4" y1="-4" x2="4" y2="4"  stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round"/>
              <line x1="4"  y1="-4" x2="-4" y2="4" stroke="#C4B5FD" strokeWidth="1.5" strokeLinecap="round"/>
            </g>
          ))}
        </g>

        <g
          className={`av-motion-lines ${isHovered ? 'av-motion-show' : ''}`}
          stroke="#1a1a1a" strokeWidth="2.2" strokeLinecap="round" fill="none"
        >
          <path d="M40 70 L28 62"/>
          <path d="M36 90 L22 88"/>
          <path d="M40 112 L27 118"/>
          <path d="M160 70 L172 62"/>
          <path d="M164 90 L178 88"/>
          <path d="M160 112 L173 118"/>
        </g>
        <g
          className={`av-hair-rest ${isHovered ? 'av-hide' : ''}`}
          fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"
        >
          <path d="M100 40 C 66 40 52 66 54 96 C 55 108 58 118 62 126
            C 60 108 62 92 68 84 C 70 96 70 108 73 118 C 72 100 76 88 82 82
            C 82 96 84 108 88 116 C 87 100 90 88 96 84 C 97 98 98 108 100 116
            C 102 108 103 98 104 84 C 110 88 113 100 112 116 C 116 108 118 96 118 82
            C 124 88 128 100 127 118 C 130 108 132 96 130 84 C 136 92 138 108 136 126
            C 140 118 143 108 144 96 C 146 66 134 40 100 40 Z"/>
        </g>
        <g
          className={`av-hair-bounce-state ${isHovered ? '' : 'av-hide'}`}
          fill="#1a1a1a" stroke="#1a1a1a" strokeWidth="2" strokeLinejoin="round"
        >
          <path d="M100 36 C 64 36 50 62 52 92 C 53 106 57 118 61 128
            C 58 106 60 88 66 78 C 69 92 69 106 72 118 C 70 96 75 82 82 76
            C 82 92 84 106 88 116 C 86 96 90 82 96 78 C 97 94 98 106 100 116
            C 102 106 103 94 104 78 C 110 82 114 96 112 116 C 116 106 118 92 118 76
            C 125 82 130 96 129 118 C 132 106 133 92 131 78 C 138 88 141 106 139 128
            C 143 118 147 106 148 92 C 150 62 136 36 100 36 Z"/>
        </g>
        <circle cx="100" cy="104" r="52" fill="white" stroke="#1a1a1a" strokeWidth="3.5"/>

        <path
          d="M56 92 C 60 70 78 58 100 58 C 122 58 140 70 144 92
             C 136 82 122 76 112 80 C 108 74 100 72 96 78
             C 88 74 80 78 76 84 C 68 80 60 84 56 92 Z"
          fill="#1a1a1a"
        />
        <g
          className={`av-glasses ${isHovered ? 'av-glasses-lift' : ''}`}
          stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"
        >
          <circle cx="82" cy="106" r="15"/>
          <circle cx="118" cy="106" r="15"/>
          <path d="M97 104 L103 104"/>
          <path d="M67 102 L58 98"/>
          <path d="M133 102 L142 98"/>
        </g>

        <g className={`av-eyes-default ${isHovered ? 'av-eyes-hide' : ''}`}>
          {/* Left pupil */}
          <circle
            cx={82 + eyeOffset.x}
            cy={106 + eyeOffset.y}
            r="3.4"
            fill="#1a1a1a"
          />
          {/* Right pupil */}
          <circle
            cx={118 + eyeOffset.x}
            cy={106 + eyeOffset.y}
            r="3.4"
            fill="#1a1a1a"
          />
          {/* Default smile */}
          <path
            d="M90 124 Q100 132 110 124"
            stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round"
          />
        </g>

        <g className={`av-eyes-happy ${isHovered ? 'av-eyes-show' : ''}`}>
          {/* Happy curved eyes */}
          <path d="M75 104 Q82 98 89 104" stroke="#1a1a1a" strokeWidth="3"
            fill="none" strokeLinecap="round"/>
          <path d="M111 104 Q118 98 125 104" stroke="#1a1a1a" strokeWidth="3"
            fill="none" strokeLinecap="round"/>
          {/* Wide smile with teeth */}
          <path d="M86 120 Q100 140 114 120 Q100 128 86 120 Z" fill="#1a1a1a"/>
          <path d="M91 122 L109 122" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          {/* Sparkle dots near eyes */}
          <circle cx="70" cy="96" r="1.8" fill="#A78BFA" opacity="0.9"/>
          <circle cx="130" cy="96" r="1.8" fill="#A78BFA" opacity="0.9"/>
        </g>

        <ellipse
          cx="70" cy="118" rx="7" ry="3.5"
          fill="#1a1a1a" opacity="0"
          className={`av-blush ${isHovered ? 'av-blush-show' : ''}`}
        />
        <ellipse
          cx="130" cy="118" rx="7" ry="3.5"
          fill="#1a1a1a" opacity="0"
          className={`av-blush ${isHovered ? 'av-blush-show' : ''}`}
        />

      </svg>
    </div>
  );
};
const SOCIALS = [
  { href: 'https://github.com/sonamnimje',                          icon: 'fab fa-github',   label: 'GitHub'   },
  { href: 'https://www.linkedin.com/in/sonam-nimje-b385b3258/',     icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { href: 'https://leetcode.com/u/Sonam27/',                        icon: 'fas fa-code',     label: 'LeetCode' },
  { href: 'mailto:sonamnimje27@gmail.com',                          icon: 'fas fa-envelope', label: 'Email'    },
];

const SocialLink = ({ href, icon, label, index }) => (
  <motion.a
    href={href}
    target={href.startsWith('mailto') ? '_self' : '_blank'}
    rel="noopener noreferrer"
    aria-label={label}
    className="social-link"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0 + index * 0.08, duration: 0.45 }}
    whileHover={{ y: -4, scale: 1.12 }}
    whileTap={{ scale: 0.92 }}
  >
    <i className={icon} aria-hidden="true" />
  </motion.a>
);

const Hero = () => {
  const typedRole  = useTyping(ROLES);
  const { navigate } = usePage();
  const [hovered,  setHovered]  = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  /* Floating avatar spring */
  const floatY = useSpring(0, { stiffness: 60, damping: 12 });
  useEffect(() => {
    let frame; let t = 0;
    const tick = () => {
      t += 0.012;
      floatY.set(Math.sin(t) * 12);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [floatY]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <>
    <section id="home" className="hero" aria-label="Hero section">

      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="hero-badge">
            <span className="hero-badge-dot" aria-hidden="true"/>
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={itemVariants} className="hero-title">
            <span className="hero-name gradient-text">Sonam Nimje</span>
            <span className="hero-wave" role="img" aria-label="sparkle">✨</span>
          </motion.h1>

          {/* Typing subtitle */}
          <motion.div variants={itemVariants} className="hero-subtitle" aria-live="polite">
            <span className="typing-prefix">I'm a </span>
            <span className="typing-text" aria-label={`Role: ${typedRole}`}>
              {typedRole}
            </span>
            <span className="typing-cursor" aria-hidden="true">|</span>
          </motion.div>

          {/* Description */}
          <motion.p variants={itemVariants} className="hero-description">
            I build intelligent AI-powered applications, modern web experiences,
            and data-driven solutions that solve real-world problems.
          </motion.p>

          

          {/* Buttons */}
          <motion.div variants={itemVariants} className="hero-buttons">
            <MagneticButton
              className="btn-primary"
              onClick={() => {
                window.open('https://drive.google.com/file/d/1B4sU8AmIkbCO4eYoeKWFkwBOIBMDblxG/view?usp=drive_link', '_blank');
              }}
            >
              <i className="fas fa-download" aria-hidden="true"/>
              Download Resume
            </MagneticButton>

            <MagneticButton
              className="btn-secondary"
              onClick={() => navigate('projects')}
            >
              <i className="fas fa-eye" aria-hidden="true"/>
              View Projects
            </MagneticButton>
          </motion.div>

          {/* Social links */}
          <div className="hero-socials" role="list" aria-label="Social profiles">
            {SOCIALS.map((s, i) => (
              <SocialLink key={s.label} {...s} index={i} />
            ))}
          </div>

          {/* Quick stats */}
          <motion.div
            className="hero-stats"
            variants={itemVariants}
          >
            {[
              { icon: 'fas fa-layer-group', value: '3+',  label: 'Tech Domains'   },
              { icon: 'fas fa-code-branch', value: '10+', label: 'Projects Built' },
              { icon: 'fas fa-brain',       value: 'AI',  label: 'Specialization' },
            ].map(({ icon, value, label }) => (
              <div className="hero-stat" key={label}>
                <span className="hero-stat-value gradient-text">
                  <i className={icon} style={{ marginRight: '4px', fontSize: '0.85em' }} aria-hidden="true"/>
                  {value}
                </span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-avatar-wrap"
          style={{ y: floatY }}
          initial={{ opacity: 0, scale: 0.85, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
        >
          {/* Decorative rings */}
          <div className="avatar-ring avatar-ring-1" aria-hidden="true"/>
          <div className="avatar-ring avatar-ring-2" aria-hidden="true"/>
          <div className="avatar-ring avatar-ring-3" aria-hidden="true"/>

          {/* Orbit dots */}
          <div className="avatar-orbit" aria-hidden="true">
            <div className="orbit-dot orbit-dot-1">
              <i className="fab fa-python" title="Python"/>
            </div>
            <div className="orbit-dot orbit-dot-2">
              <i className="fab fa-react" title="React"/>
            </div>
            <div className="orbit-dot orbit-dot-3">
              <i className="fas fa-brain" title="AI/ML"/>
            </div>
          </div>

          {/* Avatar container */}
          <div className="avatar-container">
            <motion.div
              className="avatar-inner"
              animate={hovered ? {
                rotate: -3,
                scale: 1.04,
                transition: { type: 'spring', stiffness: 260, damping: 18 }
              } : {
                rotate: 0,
                scale: 1,
                transition: { type: 'spring', stiffness: 180, damping: 22 }
              }}
            >
              <GhibliAvatar
                mouseX={mousePos.x}
                mouseY={mousePos.y}
                isHovered={hovered}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        className="scroll-cue"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.5 }}
        aria-hidden="true"
      >
        <div className="scroll-mouse">
          <div className="scroll-wheel"/>
        </div>
        <span>Scroll</span>
      </motion.div>
      

    </section>
    <HomeSections />
  </>
  );
};
export default Hero;
