import React, { useState, useEffect, createContext, useContext } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Header      from './components/Header';
import Hero        from './components/Hero';
import About       from './components/About';
import Education   from './components/Education';
import Skills      from './components/Skills';
import Projects    from './components/Projects';
import Achievements from './components/Achievements';
import Contact     from './components/Contact';
import Footer      from './components/Footer';
import './App.css';

/* ─── Theme Context ─────────────────────────────────────────────────── */
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});
export const useTheme = () => useContext(ThemeContext);

/* ─── Page / Nav Context ─────────────────────────────────────────────── */
export const PageContext = createContext({
  activePage: 'home',
  navigate: () => {},
});
export const usePage = () => useContext(PageContext);

/* ─── Page transition variants ──────────────────────────────────────── */
const pageVariants = {
  initial:  { opacity: 0, y: 24 },
  animate:  { opacity: 1, y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  exit:     { opacity: 0, y: -16,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] } },
};

/* ─── Floating Particles ─────────────────────────────────────────────── */
const Particles = () => {
  const particles = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1.5,
    duration: Math.random() * 18 + 12,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 60,
  }));
  return (
    <div className="particles-wrap" aria-hidden="true">
      {particles.map(p => (
        <span key={p.id} className="particle" style={{
          left: `${p.x}%`, top: `${p.y}%`,
          width: `${p.size}px`, height: `${p.size}px`,
          animationDuration: `${p.duration}s`,
          animationDelay: `${p.delay}s`,
          '--drift': `${p.drift}px`,
        }} />
      ))}
    </div>
  );
};

/* ─── Page renderer ─────────────────────────────────────────────────── */
const PageContent = ({ page }) => {
  // Scroll to top whenever the page changes
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [page]);

  if (page === 'home') {
    return <Hero />;
  }

  const sectionMap = {
    about:        <About />,
    education:    <Education />,
    skills:       <Skills />,
    projects:     <Projects />,
    achievements: <Achievements />,
    contact:      <Contact />,
  };

  return (
    <>
      {sectionMap[page] ?? <Hero />}
      <Footer />
    </>
  );
};

/* ─── App ────────────────────────────────────────────────────────────── */
function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('portfolio-theme') || 'light'; }
    catch { return 'light'; }
  });

  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');
  const navigate    = (page) => setActivePage(page);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <PageContext.Provider value={{ activePage, navigate }}>
        <div className="App">

          {/* Animated layered background */}
          <div className="animated-bg" aria-hidden="true">
            <div className="blob blob-1" />
            <div className="blob blob-2" />
            <div className="blob blob-3" />
            <div className="dot-grid" />
          </div>

          <Particles />
          <Header />

          <AnimatePresence mode="wait">
            <motion.main
              key={activePage}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <PageContent page={activePage} />
            </motion.main>
          </AnimatePresence>

        </div>
      </PageContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
