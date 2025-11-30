import React, { useState } from 'react';
import ContactImages from '../../assets/images/contact.png'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-content">
          <h2 className="h2 contact-title">Let's Build Something Amazing</h2>

          <figure className="contact-banner">
            <img src={ContactImages} alt="contact banner" />
          </figure>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-wrapper">
            <label htmlFor="name" className="input-label">Name *</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              placeholder="Type Name"
              className="input-field"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="phone" className="input-label">Phone</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Type Phone Number"
              className="input-field"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="email" className="input-label">Email Address *</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder="Type Email Address"
              className="input-field"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="message" className="input-label">How can we help? *</label>
            <textarea
              name="message"
              id="message"
              placeholder="Type Description"
              required
              className="input-field"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;