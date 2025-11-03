import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1000);

    // TODO: Replace with actual form submission logic
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h2 className="contact-title">Contact Us</h2>
            <p className="contact-subtitle">
              Have a question, comment, or want to place an order? We'd love to hear from you!
            </p>
          </div>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h3 className="contact-info-title">Get in Touch</h3>
              <p className="contact-info-text">
                We're here to help! Reach out to us through any of the following ways.
              </p>
              
              <div className="contact-info-items">
                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Address</h4>
                    <p className="contact-info-value">San Vicente, Bulan, Sorsogon</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Phone</h4>
                    <p className="contact-info-value">0909-474-4215</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="contact-info-content">
                    <h4 className="contact-info-label">Facebook</h4>
                    <a 
                      href="https://www.facebook.com/profile.php?id=100076165180445" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-info-link"
                    >
                      Kitchen One
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name" className="contact-form-label">
                      Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-form-input"
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-form-input"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="phone" className="contact-form-label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="contact-form-input"
                      placeholder="+63 9XX XXX XXXX"
                    />
                  </div>

                  <div className="contact-form-group">
                    <label htmlFor="subject" className="contact-form-label">
                      Subject <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="contact-form-input"
                      required
                      placeholder="What's this about?"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-form-textarea"
                    rows="5"
                    required
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="contact-form-message success">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </div>
                )}

                <button
                  type="submit"
                  className="contact-form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
