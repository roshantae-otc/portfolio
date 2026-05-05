import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        {/* Other sections like Skills and Experience can be added here */}
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Roshantae Rodway. Built with React & ❤️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
