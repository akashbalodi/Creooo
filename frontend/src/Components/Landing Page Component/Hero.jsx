import React from 'react';
import HeroImage from '../../assets/images/bg.png'; 

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 hero-title">
            We Create, Develop & Test Your Digital Future
          </h1>

          <p className="hero-text">
            Creooo is your one-stop IT partner providing Web Development,
            App Development, QA Testing, Automation Testing, SEO, Digital
            Marketing, Branding & more.
          </p>
          <button className="btn btn-primary">
            <a
              href="#contact"
              style={{ color: 'white', textDecoration: 'none', display: 'block' }}
            >
              Start Your Project
            </a>
          </button>
        </div>

        <div className="hero-banner"></div>
      </div>

      <img src={HeroImage} alt="shape" className="shape-content" />
    </section>
  );
};

export default Hero;