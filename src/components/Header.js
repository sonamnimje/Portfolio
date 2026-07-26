import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../App';
import { usePage  } from '../App';
import { ScrollProgress } from './HomeSections';
import './Header.css';

const NAV_LINKS = [
  { label: 'About',        id: 'about'        },
  { label: 'Education',    id: 'education'    },
  { label: 'Tech Stack',   id: 'skills'       },
  { label: 'Projects',     id: 'projects'     },
  { label: 'Achievements', id: 'achievements' },
  { label: 'Contact',      id: 'contact'      },
];

/* ── Icons ──────────────────────────────────────────────────────────── */
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/>
    <line x1="12" y1="1"  x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/>
    <line x1="4.22" y1="4.22"  x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
    <line x1="1"  y1="12" x2="3"  y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

/* ── Component ──────────────────────────────────────────────────────── */
const Header = () => {
  const { theme, toggleTheme }   = useTheme();
  const { activePage, navigate } = usePage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled,   setScrolled  ] = useState(false);

  /* Close mobile menu when page changes */
  useEffect(() => { setIsMenuOpen(false); }, [activePage]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    navigate(id);
    setIsMenuOpen(false);
  };

  const handleHome = (e) => {
    e.preventDefault();
    navigate('home');
    setIsMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <ScrollProgress />
      <div className="nav-container">

        {/* Logo → goes home */}
        <a href="#home" className="nav-logo" onClick={handleHome} aria-label="Home">
          <span className="nav-logo-bracket">&lt;</span>
          <span className="nav-logo-name">Sonam</span>
          <span className="nav-logo-bracket">/&gt;</span>
        </a>

        {/* Desktop + mobile nav links */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {NAV_LINKS.map(({ label, id }) => (
            <li key={id} className="nav-item">
              <button
                className={`nav-link ${activePage === id ? 'active' : ''}`}
                onClick={() => handleNav(id)}
                aria-label={`Go to ${label}`}
              >
                {label}
                <span className="nav-link-dot" />
              </button>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="nav-actions">
          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            whileTap={{ scale: 0.88 }}
            whileHover={{ scale: 1.08 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={theme}
                initial={{ rotate: -30, opacity: 0, scale: 0.7 }}
                animate={{ rotate: 0,   opacity: 1, scale: 1   }}
                exit={{    rotate:  30, opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.28 }}
              >
                {theme === 'light' ? <MoonIcon /> : <SunIcon />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          <button
            className={`hamburger ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="bar bar-1" />
            <span className="bar bar-2" />
            <span className="bar bar-3" />
          </button>
        </div>
      </div>

      {/* Mobile backdrop */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
