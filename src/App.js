import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <nav className="navbar animate-down">
        <h2>SC</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <header className="hero" id="about">
        <h1 className="animate-up">Shalin Christian</h1>
        <h2 className="animate-up delay-1">Full-Stack Developer</h2>
        <p className="objective animate-up delay-2">
          Focused on developing innovative, scalable, and efficient software solutions.
        </p>
        <div className="links animate-up delay-3">
          <a href="mailto:shalinchristian3@gmail.com" className="btn primary">Email Me</a>
          <a href="https://github.com/shalinchristian" target="_blank" rel="noreferrer" className="btn outline">GitHub</a>
        </div>
      </header>

      <section className="section animate-up delay-4" id="skills">
        <h3>Technical Skills</h3>
        <div className="grid">
          <div className="card">
            <h4>Languages</h4>
            <p>Java, C#, PHP, Python, SQL</p>
          </div>
          <div className="card">
            <h4>Web Technologies</h4>
            <p>HTML, CSS, JavaScript, ASP.NET, PHP</p>
          </div>
        </div>
      </section>

      <section className="section animate-up delay-4" id="education">
        <h3>Education</h3>
        <div className="timeline">
          <div className="card">
            <h4>Master of Computer Applications (MCA) - 7.59 CGPA</h4>
            <p>CHARUSAT, Changa, India | 2025 - 2027</p>
          </div>
          <div className="card">
            <h4>Bachelor of Computer Applications (BCA) - 6.60 CGPA</h4>
            <p>CHARUSAT, Changa, India | 2022 - 2025</p>
          </div>
        </div>
      </section>

      <section className="section animate-up delay-4" id="projects">
        <h3>Projects</h3>
        <div className="grid">
          <div className="card empty-state">
            <h4>Building Something New</h4>
            <p>Currently working on fresh full-stack applications. Check back soon.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;