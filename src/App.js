import React, { useState, useEffect, createContext, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

/* ─── Theme Context ─────────────────────────────────────────────────── */
export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

/* ─── Floating Particles ────────────────────────────────────────────── */
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
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('portfolio-theme') || 'light';
    } catch {
      return 'light';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try { localStorage.setItem('portfolio-theme', theme); } catch {}
  }, [theme]);

  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light');

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App">
        {/* Animated layered background */}
        <div className="animated-bg" aria-hidden="true">
          <div className="blob blob-1" />
          <div className="blob blob-2" />
          <div className="blob blob-3" />
          <div className="dot-grid" />
        </div>

        {/* Floating particles */}
        <Particles />

        <Header />
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
