import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const projects = [
    {
      title: '🚆 RailAnukriti',
      description: 'AI-powered train traffic optimization system for Indian Railways. Uses reinforcement learning and constraint optimization to schedule trains, manage crossings, and allocate platforms in real-time. Includes explainable AI insights, digital twin simulation, and human-in-the-loop overrides.',
      technologies: ['React', 'FastAPI', 'Python', 'OR-Tools', 'PyTorch', 'Graph Neural Networks'],
      keyFeatures: [
        'Real-time train scheduling & optimization',
        'Simulation mode for disruptions',
        'Adaptive learning from overrides',
        'Live dashboard with analytics'
      ],
      liveLink: 'https://rail-anukriti-7u8e.vercel.app/',
      githubLink: 'https://github.com/sonamnimje/RailAnukriti',
      icon: 'fas fa-train',
      image: '/images/railanukriti-preview.png'
    },
    {
      title: '💗 SheCare-AI',
      description: 'An AI-based women\'s health and wellness assistant. Tracks cycles, moods, PCOS risk, and provides personalized health tips with chatbot support.',
      technologies: ['React', 'FastAPI', 'Python', 'JavaScript'],
      keyFeatures: [
        'AI-powered health chatbot',
        'PCOS & wellness prediction',
        'Personalized recommendations',
        'Smart reminders & tracking'
      ],
      liveLink: 'https://she-care-ai-7rwe.vercel.app/',
      githubLink: 'https://github.com/sonamnimje/SheCare-AI',
      icon: 'fas fa-heart',
      image: '/images/shecare-preview.png'
    },
    {
      title: '🏭 SmartChain-AI',
      description: 'AI-driven retail supply chain optimizer improving inventory management, demand forecasting, and delivery tracking with real-time dashboards.',
      technologies: ['React', 'FastAPI', 'Python', 'HTML', 'CSS', 'JavaScript'],
      keyFeatures: [
        'AI-based demand forecasting',
        'Live delivery tracking',
        'Chatbot insights dashboard',
        'Intelligent inventory alerts'
      ],
      liveLink: 'https://smart-chain-ai.vercel.app/',
      githubLink: 'https://github.com/sonamnimje/SmartChain-AI',
      icon: 'fas fa-industry',
      image: '/images/smartchain-preview.png'
    },
    {
      title: '🎤 VoiceIQ – AI Voice Interview Assistant',
      description: 'AI-powered virtual interview assistant offering mock interviews, real-time feedback, and performance analytics.',
      technologies: ['React', 'FastAPI', 'Python', 'OpenAI API'],
      keyFeatures: [
        'Real-time voice interviews',
        'Smart AI feedback',
        'Performance analytics dashboard',
        'Multiple interview modes'
      ],
      liveLink: 'https://voiceiq-eta.vercel.app/',
      githubLink: 'https://github.com/sonamnimje/VoiceIQ-AI-Voice-Interview-Assistant',
      icon: 'fas fa-microphone',
      image: '/images/voiceiq-preview.png'
    },
    {
      title: '🏥 HealthQ – AI Hospital Queue Management',
      description: 'Intelligent hospital management system that optimizes patient flow and predicts wait times to reduce congestion, improve resource allocation, and enhance patient experience.',
      technologies: ['React', 'FastAPI', 'Python', 'scikit-learn', 'Random Forest', 'Framer Motion'],
      keyFeatures: [
        'AI-powered wait time prediction',
        'Real-time bed availability & predictive allocation',
        'Priority-based OPD queue with live ETA'
      ],
      liveLink: '#',
      githubLink: 'https://github.com/sonamnimje/healthQ',
      icon: 'fas fa-hospital',
      image: '/images/healthq-preview.png'
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          💻 Projects
        </motion.h2>
        <div className="projects-grid" ref={ref}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -10,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-preview-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div className="project-placeholder" style={project.image ? {display: 'none'} : {}}>
                  <i className={project.icon}></i>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a 
                    href={project.liveLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i>
                    Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;