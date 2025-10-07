import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      title: '🎨 Frontend',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind' }
      ]
    },
    {
      title: '🧠 Backend',
      skills: [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'Django', icon: 'fab fa-python' },
        { name: 'Flask', icon: 'fas fa-flask' },
        { name: 'FastAPI', icon: 'fas fa-rocket' },
        { name: 'Scikit-learn', icon: 'fas fa-brain' },
        { name: 'Pandas', icon: 'fas fa-table' },
        { name: 'NumPy', icon: 'fas fa-calculator' }
      ]
    },
    {
      title: '🗄️ Database',
      skills: [
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'PostgreSQL', icon: 'fas fa-database' },
        { name: 'SQLite', icon: 'fas fa-database' }
      ]
    },
    {
      title: '💬 Languages',
      skills: [
        { name: 'C', icon: 'fas fa-code' },
        { name: 'C++', icon: 'fas fa-code' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js-square' }
      ]
    },
    {
      title: '🧰 Tools & Platforms',
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'VS Code', icon: 'fas fa-code' },
        { name: 'Postman', icon: 'fas fa-mail-bulk' },
        { name: 'Vercel', icon: 'fas fa-cloud' },
        { name: 'Figma', icon: 'fab fa-figma' },
        { name: 'Render', icon: 'fas fa-server' },
        { name: 'Streamlit', icon: 'fas fa-stream' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          ⚡ Skills
        </motion.h2>
        <motion.p 
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          A collection of my technical skills and expertise honed through various projects and experiences.
        </motion.p>
        <div className="skills-grid" ref={ref}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3>{category.title}</h3>
              <div className="skill-items">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.2) + (skillIndex * 0.1) 
                    }}
                    whileHover={{ scale: 1.05, rotate: 5 }}
                  >
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
