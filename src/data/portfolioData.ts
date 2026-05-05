export interface Project {
  id: string;
  title: string;
  description: string;
  analysis: string;
  tech: string[];
  link?: string;
  github?: string;
  category: 'Full-Stack' | 'Automation' | 'Design' | 'Game';
}

export const projects: Project[] = [
  {
    id: 'ecosync',
    title: 'EcoSync',
    description: 'A collaborative green-tech initiative focused on synchronization and environmental efficiency.',
    analysis: 'Developed in collaboration, this project leverages real-time data synchronization to optimize resource management. The architecture focuses on high-availability and scalable data pipelines.',
    tech: ['React', 'Node.js', 'Collaborative Development', 'Green-Tech'],
    github: 'https://github.com/roshantae-otc/EcoSync',
    category: 'Full-Stack'
  },
  {
    id: 'forex-bot',
    title: 'Algorithmic Forex Bot',
    description: 'A high-performance trading system built for MetaTrader 5.',
    analysis: 'Implemented complex risk management protocols and predictive logic using Python. The system interfaces directly with MT5 API to execute trades based on real-time market signals.',
    tech: ['Python', 'MT5 API', 'Algorithmic Trading', 'Predictive Logic'],
    category: 'Automation'
  },
  {
    id: 'lyricjumper',
    title: 'LyricJumper',
    description: 'An interactive web-based rhythm and jumping game.',
    analysis: 'Deep dive into DOM manipulation and browser-based game physics. Optimized for smooth performance and responsive input handling across devices.',
    tech: ['JavaScript', 'HTML5 Canvas', 'Game Physics', 'Web Audio API'],
    github: 'https://github.com/roshantae-otc',
    category: 'Game'
  },
  {
    id: 'luxury-fragrance',
    title: 'Luxury Fragrance Site',
    description: 'A premium e-commerce platform for high-end fragrances.',
    analysis: 'Built using a hybrid architecture for maximum performance. Integrated complex state management for a seamless shopping experience and custom product filtering.',
    tech: ['React', 'PHP/Backend', 'Hybrid Build', 'E-commerce'],
    category: 'Full-Stack'
  },
  {
    id: 'lfmc-map',
    title: 'LFMC Interactive Map',
    description: 'Geospatial data visualization for forest management in Jamaica.',
    analysis: 'Utilized Leaflet.js to create a highly performant regional navigation system. Integrated custom GeoJSON data to represent forest regions and stakeholder zones.',
    tech: ['Leaflet.js', 'Mapbox', 'Geospatial Data', 'JavaScript'],
    category: 'Full-Stack'
  }
];

export const skills = {
  languages: ['JavaScript', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
  frontend: ['React', 'Mobile-First Design', 'WCAG 2.1 Accessibility', 'Responsive UI'],
  backend: ['Node.js', 'WordPress Customization', 'API Integration', 'CMS Management'],
  specialized: ['Mapbox/Leaflet.js', 'MT5 API', 'Algorithmic Trading', 'Technical Writing']
};
