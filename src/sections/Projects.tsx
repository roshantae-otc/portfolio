import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, Code2, Cpu, Globe, Rocket } from 'lucide-react';
import { projects } from '../data/portfolioData';
import './Projects.css';

const Projects: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Full-Stack': return <Globe size={20} />;
      case 'Automation': return <Cpu size={20} />;
      case 'Game': return <Rocket size={20} />;
      default: return <Code2 size={20} />;
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="section-title glow-text-pink"
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card project-card"
            >
              <div className="project-header">
                <div className="project-icon glow-text-red">
                  {getIcon(project.category)}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <GitBranch size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-analysis">
                <h4>Analysis</h4>
                <p>{project.analysis}</p>
              </div>

              <div className="project-tech">
                {project.tech.map(t => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
