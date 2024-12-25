import React from 'react';
import '../styles/Home.css'; // Importing custom CSS

const Home = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Hi, I'M SHUBHAM KOTHAVADE</h1>
          <p>Full Stack Developer | Mern Enthusiast | Mern Expert</p>
          <a href="#projects" className="cta-btn">See My Work</a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-content">
          <img src="https://call-plugin-images.s3.ap-south-1.amazonaws.com/PH1.jpg" alt="Shubham Kothavade" className="profile-pic" />
          <p>
            I'm a passionate developer with expertise in React, Python, and Node.js.
            I love building interactive web applications and solving problems.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src="https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg" alt="Project 1" />
            <h3>Youtube Clone</h3>
            <p>Short description of your project here.</p>
            <a href="https://i.ytimg.com/vi/Mos5QJAje28/sddefault.jpg" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          <div className="project-card">
            <img src="https://i.ytimg.com/vi/0ihPVIrf_Dw/maxresdefault.jpg" alt="Project 2" />
            <h3>LinkedIn Clone</h3>
            <p>Short description of your project here.</p>
            <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Message</button>   
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>Connect with me on <a href="⋄ https://www.linkedin.com/in/shubham-kothavade-22957a14b/" target="_blank" rel="noopener noreferrer">LinkedIn</a> | <a href="mailto:shubhamkothavade7@gmail.com">Email</a></p>
      </footer>
    </div>
  );
};

export default Home;
