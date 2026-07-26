import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring as useMotionSpring } from 'framer-motion';
import { usePage } from '../App';
import './HomeSections.css';

/* ─── Shared animation presets ──────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:     { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true, amount: 0.12 },
  transition:  { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

const SPRING = { type: 'spring', stiffness: 280, damping: 24 };

/* ─── Scroll progress bar ────────────────────────────────────────────── */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useMotionSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="scroll-progress-bar"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

/* ─── "View All →" button ────────────────────────────────────────────── */
const ViewAll = ({ label, page }) => {
  const { navigate } = usePage();
  return (
    <button className="hs-view-all" onClick={() => navigate(page)}>
      {label}
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    </button>
  );
};

/* ─── Section label pill ─────────────────────────────────────────────── */
const Label = ({ children }) => <span className="hs-label">{children}</span>;

/* ═══════════════════════════════════════════════════════════════════════
   1. TECH STACK PREVIEW
═══════════════════════════════════════════════════════════════════════ */
const TECHS = [
  { title: 'Python',      el: <i className="fab fa-python"   style={{ color: '#3776AB' }} /> },
  { title: 'React',       el: <i className="fab fa-react"    style={{ color: '#61DAFB' }} /> },
  { title: 'JavaScript',  el: <i className="fab fa-js"       style={{ color: '#F7DF1E' }} /> },
  { title: 'Node.js',     el: <i className="fab fa-node-js"  style={{ color: '#339933' }} /> },
  { title: 'Django',      el: <i className="fab fa-python"   style={{ color: '#44B78B' }} /> },
  { title: 'Git',         el: <i className="fab fa-git-alt"  style={{ color: '#F05032' }} /> },
  { title: 'Docker',      el: <i className="fab fa-docker"   style={{ color: '#2496ED' }} /> },
  { title: 'HTML5',       el: <i className="fab fa-html5"    style={{ color: '#E34F26' }} /> },
  { title: 'CSS3',        el: <i className="fab fa-css3-alt" style={{ color: '#1572B6' }} /> },
  { title: 'Figma',       el: <i className="fab fa-figma"    style={{ color: '#F24E1E' }} /> },
  { title: 'FastAPI',     el: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="#009688">
        <path d="M12 0C5.375 0 0 5.375 0 12c0 6.628 5.375 12 12 12 6.628 0 12-5.372 12-12 0-6.625-5.372-12-12-12zm-.625 17.25H9.5V9h2.625v-1.875L15.5 10.5h-2.125l-2 2.25v4.5zm5 0H13.5V9h2.875v8.25z"/>
      </svg>
    )
  },
  { title: 'PostgreSQL', el: (
      <svg viewBox="0 0 32 32" width="22" height="22">
        <path d="M23.2 5.6c-1.2-.267-2.453-.293-3.573.027-.96-.72-2.187-1.093-3.627-1.093-2.373 0-4.08 1.12-5.12 2.56C8.933 7.44 7.467 9.227 7.467 12c0 1.92.48 3.547 1.44 4.8.427.56.96 1.04 1.6 1.44l-.267 2.027c-.16 1.2.4 2.347 1.44 2.88l1.28.64c.48.24 1.013.373 1.547.373.64 0 1.28-.187 1.84-.533l.453-.28.507.267c.56.293 1.173.44 1.787.44.64 0 1.28-.16 1.84-.48l1.28-.72c.987-.56 1.52-1.653 1.387-2.8l-.16-1.52c.64-.4 1.173-.907 1.6-1.467.96-1.253 1.44-2.88 1.44-4.8-.013-2.56-1.2-4.347-3.28-5.177z" fill="#336791"/>
      </svg>
    )
  },
  { title: 'TensorFlow', el: (
      <svg viewBox="0 0 32 32" width="22" height="22">
        <path d="M16 2L2 10v12l14 8 14-8V10L16 2zm0 3.09l10.5 6.04v10.74L16 27.91 5.5 21.87V11.13L16 5.09z" fill="#FF6F00"/>
        <path d="M16 8l-8 4.62v5.38l8 4.62 8-4.62v-5.38L16 8zm0 2.18l5.5 3.17v4.3L16 20.82l-5.5-3.17v-4.3L16 10.18z" fill="#FF6F00"/>
      </svg>
    )
  },
  { title: 'Scikit-learn', el: (
      <svg viewBox="0 0 32 32" width="22" height="22">
        <circle cx="16" cy="16" r="14" fill="#F7931E"/>
        <text x="7" y="20" fontSize="9" fontWeight="bold" fill="white" fontFamily="sans-serif">SK</text>
      </svg>
    )
  },
];

const TechPreview = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="hs-section hs-tech">
      <div className="container">
        <motion.div className="hs-section-header" {...fadeUp()}>
          <div>
            <Label>Technology</Label>
            <h2 className="hs-title">Tech Stack</h2>
          </div>
          <ViewAll label="View All Skills" page="skills" />
        </motion.div>

        <motion.div className="hs-tech-card glass-card" {...fadeUp(0.08)}>
          <div className="hs-tech-grid">
            {TECHS.map((t, i) => (
              <motion.div
                key={t.title}
                className="hs-tech-tile"
                initial={{ opacity: 0, y: 16, scale: 0.88 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -7, scale: 1.14, transition: SPRING }}
              >
                {t.el}
                <span className={`hs-tech-name ${hovered === i ? 'visible' : ''}`}>
                  {t.title}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════════
   2. ACHIEVEMENTS + GITHUB
═══════════════════════════════════════════════════════════════════════ */
const ACHIEVEMENTS_PREVIEW = [
  { tier: 'runner-up',   title: 'Smart India Hackathon 2025',      sub: 'National Grand Finale — 1st Runner-Up' },
  { tier: 'runner-up',   title: 'EcoPreneur Hackathon 2025',       sub: 'BGIEM Jabalpur — 1st Runner-Up'        },
  { tier: 'winner',      title: 'HackSRIT — Best Girls Team',      sub: 'Technical Innovation Award'            },
  { tier: 'participant', title: 'Global Entrepreneurship Summit',  sub: 'IIT Kharagpur — Participant'           },
];

const TIER_ICON = { 'runner-up': '🥈', winner: '🏆', participant: '🎖️' };

/* ═══════════════════════════════════════════════════════════════════════
   GITHUB CONTRIBUTION GRAPH  (interactive, year-toggle)
═══════════════════════════════════════════════════════════════════════ */

/* Colour scale — 5 levels, purple palette */
const LEVELS = [
  'var(--gh-0)',
  'var(--gh-1)',
  'var(--gh-2)',
  'var(--gh-3)',
  'var(--gh-4)',
];

/** Map a contribution count → level 0-4 */
const countToLevel = (n) => {
  if (!n)      return 0;
  if (n <= 2)  return 1;
  if (n <= 5)  return 2;
  if (n <= 9)  return 3;
  return 4;
};

/**
 * Build a 52-week calendar grid for a given year.
 * Starts from the Sunday on or before Jan 1 of that year.
 */
const buildGrid = (rawMap, year) => {
  /* Start from the Sunday on or before Jan 1 */
  const jan1 = new Date(year, 0, 1);
  const start = new Date(jan1);
  start.setDate(jan1.getDate() - jan1.getDay());   // back to Sunday

  const weeks = [];
  const seenMonths = new Set();
  const months = [];

  for (let w = 0; w < 53; w++) {
    const week = [];
    for (let d = 0; d < 7; d++) {
      const day = new Date(start);
      day.setDate(start.getDate() + w * 7 + d);

      /* Stop if we've gone past Dec 31 of the target year */
      if (day.getFullYear() > year) break;

      const iso = day.toISOString().slice(0, 10);
      const mon = day.toLocaleString('default', { month: 'short' });
      if (d === 0 && !seenMonths.has(mon) && day.getFullYear() === year) {
        seenMonths.add(mon);
        months.push({ label: mon, col: w });
      }
      week.push({ date: iso, count: rawMap[iso] || 0 });
    }
    if (week.length) weeks.push(week);
  }
  return { weeks, months };
};

/**
 * Fetches contributions for both current and previous year.
 * API supports ?y=<YYYY> for a specific year.
 */
const useContributions = (username) => {
  const currentYear = new Date().getFullYear();
  const prevYear    = currentYear - 1;

  const [maps,    setMaps   ] = useState({ [currentYear]: {}, [prevYear]: {} });
  const [totals,  setTotals ] = useState({ [currentYear]: null, [prevYear]: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parseYear = (json, year) => {
      const m = {};
      let t = 0;
      (json.contributions || []).forEach(({ date, count }) => {
        m[date] = count;
        t += count;
      });
      setMaps(prev  => ({ ...prev,   [year]: m }));
      setTotals(prev => ({ ...prev,  [year]: t }));
    };

    Promise.all([
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${currentYear}`)
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(json => parseYear(json, currentYear)),
      fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${prevYear}`)
        .then(r => r.ok ? r.json() : Promise.reject())
        .then(json => parseYear(json, prevYear)),
    ])
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [username, currentYear, prevYear]);

  return { maps, totals, loading, currentYear, prevYear };
};

/** The interactive contribution graph widget */
const ContribGraph = ({ username }) => {
  const { maps, totals, loading, currentYear, prevYear } = useContributions(username);
  const YEARS = [currentYear, prevYear];
  const [yearIdx, setYearIdx] = useState(0);
  const [tooltip, setTooltip] = useState(null);

  const CELL    = 11;
  const GAP     = 3;
  const STEP    = CELL + GAP;
  const W       = 53 * STEP - GAP;
  const H       = 7  * STEP - GAP;
  const LABEL_H = 18;

  const activeYear = YEARS[yearIdx];
  const { weeks, months } = buildGrid(maps[activeYear] || {}, activeYear);
  const total = totals[activeYear];

  return (
    <div className="cg-wrap">

      {/* Header: total + year toggle */}
      <div className="cg-header">
        <span className="cg-total">
          {loading
            ? 'Loading…'
            : total !== null
              ? `${total} contributions in ${activeYear}`
              : `${activeYear}`}
        </span>
        <div className="cg-year-toggle" role="group" aria-label="Select year">
          {YEARS.map((y, i) => (
            <button
              key={y}
              className={`cg-year-btn ${yearIdx === i ? 'active' : ''}`}
              onClick={() => { setYearIdx(i); setTooltip(null); }}
            >
              {y}
            </button>
          ))}
        </div>
      </div>

      {/* SVG grid */}
      <div className="cg-svg-wrap" onMouseLeave={() => setTooltip(null)}>
        <svg
          viewBox={`0 0 ${W} ${LABEL_H + H}`}
          width="100%"
          aria-label={`GitHub contribution graph — ${activeYear}`}
        >
          {months.map(({ label, col }) => (
            <text key={`${label}-${col}`} x={col * STEP} y={LABEL_H - 4} className="cg-month-label">
              {label}
            </text>
          ))}

          {weeks.map((week, wi) =>
            week.map(({ date, count }, di) => {
              const level = countToLevel(count);
              return (
                <rect
                  key={date}
                  x={wi * STEP}
                  y={LABEL_H + di * STEP}
                  width={CELL}
                  height={CELL}
                  rx="2" ry="2"
                  fill={LEVELS[level]}
                  className="cg-cell"
                  onMouseEnter={(e) => {
                    const nice = new Date(date + 'T12:00:00').toLocaleDateString('en-US', {
                      weekday: 'short', month: 'short', day: 'numeric',
                    });
                    const cellRect = e.currentTarget.getBoundingClientRect();
                    const wrap = e.currentTarget.closest('.cg-svg-wrap').getBoundingClientRect();
                    setTooltip({
                      text: count === 0
                        ? `No contributions on ${nice}`
                        : `${count} contribution${count !== 1 ? 's' : ''} on ${nice}`,
                      x: cellRect.left - wrap.left + CELL / 2,
                      y: cellRect.top  - wrap.top,
                    });
                  }}
                />
              );
            })
          )}
        </svg>

        {tooltip && (
          <div className="cg-tooltip" style={{ left: tooltip.x, top: tooltip.y - 36 }}>
            {tooltip.text}
          </div>
        )}
      </div>

      {/* Less → More legend */}
      <div className="cg-legend">
        <span className="cg-legend-label">Less</span>
        {LEVELS.map((color, i) => (
          <span key={i} className="cg-legend-cell" style={{ background: color }}
            title={['0', '1–2', '3–5', '6–9', '10+'][i]} />
        ))}
        <span className="cg-legend-label">More</span>
      </div>

    </div>
  );
};




/* ─── GitHub stats + card ──────────────────────────────────────────── */
const useGitHub = (username) => {
  const [data,  setData ] = useState(null);
  const [repos, setRepos] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(setData)
      .catch(() => setError(true));

    fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => { if (Array.isArray(data)) setRepos(data); })
      .catch(() => {});
  }, [username]);

  const topLang = (() => {
    if (!repos.length) return null;
    const counts = {};
    repos.forEach(r => { if (r.language) counts[r.language] = (counts[r.language] || 0) + 1; });
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  })();

  const totalStars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
  return { data, repos, topLang, totalStars, error };
};

const AchievementsGitHub = () => {
  const { data: gh, topLang, totalStars, error: ghErr } = useGitHub('sonamnimje');

  const stats = [
    { icon: 'fas fa-book',         val: gh?.public_repos,  label: 'Public Repos'  },
    { icon: 'fas fa-star',         val: totalStars || (gh ? 0 : null), label: 'Total Stars'   },
    { icon: 'fas fa-users',        val: gh?.followers,     label: 'Followers'     },
    { icon: 'fas fa-user-check',   val: gh?.following,     label: 'Following'     },
    { icon: 'fas fa-code',         val: topLang,           label: 'Top Language'  },
    { icon: 'fas fa-calendar-alt', val: gh ? new Date(gh.created_at).getFullYear() : null, label: 'Active Since' },
  ];

  return (
    <section className="hs-section hs-ach-gh hs-alt-bg">
      <div className="container">
        <div className="hs-two-col">

          {/* ── Achievements ── */}
          <motion.div className="hs-card glass-card" {...fadeUp(0)}>
            <div className="hs-card-header">
              <div>
                <Label>Recognition</Label>
                <h2 className="hs-title">Achievements</h2>
              </div>
              <ViewAll label="View All" page="achievements" />
            </div>
            <ul className="hs-ach-list">
              {ACHIEVEMENTS_PREVIEW.map((a, i) => (
                <motion.li
                  key={a.title}
                  className="hs-ach-item"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
                  whileHover={{ x: 6, transition: SPRING }}
                >
                  <span className="hs-ach-icon">{TIER_ICON[a.tier]}</span>
                  <div>
                    <p className="hs-ach-title">{a.title}</p>
                    <p className="hs-ach-sub">{a.sub}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ── GitHub ── */}
          <motion.div className="hs-card glass-card" {...fadeUp(0.1)}>
            <div className="hs-card-header">
              <div>
                <Label>Open Source</Label>
                <h2 className="hs-title">GitHub Activity</h2>
              </div>
            </div>

            {/* Interactive contribution graph */}
            <ContribGraph username="sonamnimje" />

            {/* Stats grid — 2×3 */}
            {!ghErr && (
              <div className="hs-gh-stats-grid">
                {stats.map(({ icon, val, label }, i) => (
                  <motion.div
                    key={label}
                    className="hs-gh-stat-cell"
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.38, delay: 0.1 + i * 0.06 }}
                  >
                    <i className={`${icon} hs-gh-cell-icon`} aria-hidden="true" />
                    <span className="hs-gh-cell-val gradient-text">{val ?? '—'}</span>
                    <span className="hs-gh-cell-label">{label}</span>
                  </motion.div>
                ))}
              </div>
            )}

            <a href="https://github.com/sonamnimje"
               target="_blank" rel="noopener noreferrer"
               className="btn btn-secondary hs-gh-btn">
              <i className="fab fa-github" />
              Visit GitHub
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════════
   3. FEATURED PROJECTS
═══════════════════════════════════════════════════════════════════════ */
const FEATURED = [
  {
    title: 'RailSarthi',
    desc:  'AI-powered railway traffic optimization using Reinforcement Learning and Graph Neural Networks to intelligently schedule trains and reduce congestion at scale.',
    image: '/images/railanukriti-preview.png',
    tech:  ['Python', 'FastAPI', 'React', 'RL', 'OR-Tools', 'GNN'],
    github: 'https://github.com/sonamnimje/RailSarthi',
    live:   'https://rail-sarthii-7u8e.vercel.app/',
  },
  {
    title: 'SheCare AI',
    desc:  'AI-based women\'s health assistant that tracks cycles, moods, and PCOS risk, providing personalized tips through an intelligent conversational interface.',
    image: '/images/shecare-preview.png',
    tech:  ['React', 'Django', 'Python', 'AI/ML', 'Healthcare'],
    github: 'https://github.com/sonamnimje/SheCare-AI',
    live:   'https://she-care-ai-7rwe.vercel.app/',
  },
];

const FeaturedProjects = () => (
  <section className="hs-section hs-projects">
    <div className="container">
      <motion.div className="hs-section-header" {...fadeUp()}>
        <div>
          <Label>Work</Label>
          <h2 className="hs-title">Featured Projects</h2>
        </div>
        <ViewAll label="View All Projects" page="projects" />
      </motion.div>

      <div className="hs-projects-grid">
        {FEATURED.map((p, i) => (
          <motion.div
            key={p.title}
            className="hs-project-card glass-card"
            {...fadeUp(i * 0.12)}
            whileHover={{ y: -10, transition: SPRING }}
          >
            <div className="hs-proj-img-wrap">
              <motion.img
                src={p.image} alt={p.title}
                className="hs-proj-img" loading="lazy"
                whileHover={{ scale: 1.06 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hs-proj-img-fallback"><i className="fas fa-code" /></div>
            </div>

            <div className="hs-proj-body">
              <h3 className="hs-proj-title">{p.title}</h3>
              <p className="hs-proj-desc">{p.desc}</p>
              <div className="hs-proj-tech">
                {p.tech.map(t => <span key={t} className="hs-tech-chip">{t}</span>)}
              </div>
              <div className="hs-proj-btns">
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                   className="btn btn-secondary hs-proj-btn">
                  <i className="fab fa-github" /> GitHub
                </a>
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                   className="btn btn-primary hs-proj-btn">
                  <i className="fas fa-external-link-alt" /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════════════════
   4. ABOUT PREVIEW
═══════════════════════════════════════════════════════════════════════ */
const useCounter = (target, duration = 1600, started = false) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let n = 0;
    const step = Math.ceil(target / (duration / 16));
    const t = setInterval(() => {
      n = Math.min(n + step, target);
      setCount(n);
      if (n >= target) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [started, target, duration]);
  return count;
};

const COUNTERS = [
  { target: 5,   suffix: '+', label: 'Projects Built'   },
  { target: 3,   suffix: '',  label: 'Hackathon Awards' },
  { target: 100, suffix: '+', label: 'DSA Problems'     },
];

const CounterStat = ({ target, suffix, label, started }) => {
  const val = useCounter(target, 1600, started);
  return (
    <div className="hs-about-stat">
      <span className="hs-about-stat-num gradient-text">{val}{suffix}</span>
      <span className="hs-about-stat-label">{label}</span>
    </div>
  );
};

const AboutPreview = () => {
  const { navigate } = usePage();
  const statsRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="hs-section hs-about-preview hs-alt-bg">
      <div className="container">
        <motion.div className="hs-about-card glass-card" {...fadeUp()}>
          <div className="hs-about-inner">

            <motion.div
              className="hs-about-avatar-wrap"
              whileHover={{ scale: 1.05, transition: SPRING }}
            >
              <img src="/profile.jpg" alt="Sonam Nimje"
                className="hs-about-avatar"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hs-about-avatar-fallback"><i className="fas fa-user" /></div>
            </motion.div>

            <div className="hs-about-text">
              <Label>Who I Am</Label>
              <h2 className="hs-title">About Me</h2>
              <p className="hs-about-bio">
                I'm <strong>Sonam Nimje</strong>, a <strong>2026 Computer Science Engineering graduate</strong> from
                Baderia Global Institute of Engineering &amp; Management, Jabalpur,
                specializing in <strong>AI/ML</strong>, <strong>Full Stack Development</strong>,
                and <strong>Data Analytics</strong>. I love building intelligent applications
                that solve real-world problems through clean code and innovative thinking.
              </p>
              <div className="hs-about-stats" ref={statsRef}>
                {COUNTERS.map(c => (
                  <CounterStat key={c.label} {...c} started={started} />
                ))}
              </div>
              <button className="hs-view-all" onClick={() => navigate('about')}>
                Read More
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════════
   5. CONTACT CTA
═══════════════════════════════════════════════════════════════════════ */
const ContactCTA = () => {
  const { navigate } = usePage();

  return (
    <section className="hs-section hs-cta">
      {/* Decorative blobs */}
      <div className="hs-cta-blob hs-cta-blob-1" aria-hidden="true" />
      <div className="hs-cta-blob hs-cta-blob-2" aria-hidden="true" />

      <div className="container">
        <motion.div className="hs-cta-inner" {...fadeUp()}>

          <motion.div
            className="hs-cta-icon-ring"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <div className="hs-cta-icon-dot hs-cta-dot-1" />
            <div className="hs-cta-icon-dot hs-cta-dot-2" />
            <div className="hs-cta-icon-dot hs-cta-dot-3" />
          </motion.div>

          <motion.span className="hs-label" {...fadeUp(0.05)}>
            Get In Touch
          </motion.span>

          <motion.h2 className="hs-cta-heading" {...fadeUp(0.1)}>
            Let's Build Something{' '}
            <span className="gradient-text">Amazing Together</span>
          </motion.h2>

          <motion.p className="hs-cta-sub" {...fadeUp(0.16)}>
            I'm currently open to full-time software engineering roles, exciting
            collaborations, and interesting projects. Let's connect and create something impactful.
          </motion.p>

          <motion.div className="hs-cta-btns" {...fadeUp(0.22)}>
            <motion.a
              href="mailto:sonamnimje27@gmail.com"
              className="btn btn-primary hs-cta-btn"
              whileHover={{ y: -3, scale: 1.03, transition: SPRING }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              Send an Email
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/sonam-nimje-b385b3258/"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-secondary hs-cta-btn"
              whileHover={{ y: -3, scale: 1.03, transition: SPRING }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fab fa-linkedin" />
              Connect on LinkedIn
            </motion.a>

            <motion.button
              className="btn btn-secondary hs-cta-btn"
              onClick={() => navigate('contact')}
              whileHover={{ y: -3, scale: 1.03, transition: SPRING }}
              whileTap={{ scale: 0.97 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              Contact Form
            </motion.button>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════════════════
   Root export
═══════════════════════════════════════════════════════════════════════ */
const HomeSections = () => (
  <>
    <TechPreview />
    <AchievementsGitHub />
    <FeaturedProjects />
    <AboutPreview />
    <ContactCTA />
  </>
);

export default HomeSections;
