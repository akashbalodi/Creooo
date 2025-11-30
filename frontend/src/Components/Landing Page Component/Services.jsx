import React from 'react';
import aboutBanner from '../../assets/images/about-banner.png';
import { 
  IoCodeSlashOutline, 
  IoBugOutline, 
  IoTrendingUpOutline 
} from 'react-icons/io5';

const Services = () => {
  const services = [
    {
      icon: <IoCodeSlashOutline />,
      title: 'Web & App Development',
      text: 'Modern, fast, responsive websites & apps built to convert and scale.'
    },
    {
      icon: <IoBugOutline />,
      title: 'QA & Automation Testing',
      text: 'Manual, Automation, API, Load, Security & Performance testing.'
    },
    {
      icon: <IoTrendingUpOutline />,
      title: 'SEO & Digital Marketing',
      text: 'Rank higher, get more traffic & scale your business with targeted marketing.'
    }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-top">
          <h2 className="h2 section-title">Our Services</h2>

          <p className="section-text">
            Creooo delivers full-suite digital services designed to scale
            your business fast.
          </p>

          <ul className="about-list">
            {services.map((service, index) => (
              <li key={index}>
                <div className="about-card">
                  <div className="card-icon">
                    {service.icon}
                  </div>
                  <h3 className="h3 card-title">{service.title}</h3>
                  <p className="card-text">{service.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="about-bottom">
          <figure className="about-bottom-banner">
            <img
              src={aboutBanner}
              alt="about banner"
              className="about-banner"
            />
          </figure>

          <div className="about-bottom-content">
            <h2 className="h2 section-title">Your Growth Partner</h2>
            <p className="section-text">
              Creooo focuses on delivering long-term value, strong branding,
              powerful development, and high-quality software testing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;