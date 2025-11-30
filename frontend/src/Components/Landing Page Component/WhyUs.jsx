import React from 'react';
import feature1 from '../../assets/images/feature-1.png';
import feature2 from '../../assets/images/feature-2.png';

const WhyUs = () => {
  const features = [
    {
      image: feature1,
      title: 'End-to-End IT Services',
      text: 'One company for design, development, branding & testing.'
    },
    {
      image: feature2,
      title: 'Affordable & Professional',
      text: 'High-quality work at budget-friendly pricing.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2 className="h2 section-title">Why work with Creooo?</h2>

        <p className="section-text">
          From design to deployment to testing — we handle everything with
          perfection.
        </p>

        <ul className="features-list">
          {features.map((feature, index) => (
            <li className="features-item" key={index}>
              <figure className="features-item-banner">
                <img src={feature.image} alt="feature" />
              </figure>
              <div className="feature-item-content">
                <h3 className="h2 item-title">{feature.title}</h3>
                <p className="item-text">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;