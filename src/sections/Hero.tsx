import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glow-text-red"
        >
          Lead Full-Stack Consultant
        </motion.h2>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glow-text-pink"
        >
          Roshantae Rodway
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Engineering sophisticated digital solutions with precision and creative flair. 
          Specializing in React, Python automation, and Geospatial Data.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="hero-ctas"
        >
          <a 
            href="mailto:roshantaerodway22@gmail.com" 
            className="cta-main glow-border-pink"
          >
            Hire Me Direct
          </a>
          <a href="#projects" className="cta-secondary">
            View My Work
          </a>
        </motion.div>
      </div>
      
      <div className="hero-grid-overlay"></div>
    </section>
  );
};

export default Hero;
