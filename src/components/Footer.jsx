import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-logo">ScanMe! </h3>
            <p className="footer-description">
              Discover exceptional local products from Gubat, Sorsogon. 
              Supporting local businesses and celebrating regional flavors.
            </p>
            <div className="footer-social">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/173tmAAfyL/" className="footer-social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* GitHub */}
              <a href="#" className="footer-social-link" aria-label="GitHub">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.31-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.31-.53-1.56.12-3.25 0 0 1-.32 3.3 1.23A11.5 11.5 0 0 1 12 6.84c1.02.01 2.05.14 3.01.41 2.3-1.55 3.3-1.23 3.3-1.23.65 1.69.24 2.94.12 3.25.76.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27 0 .32.22.7.83.58A12 12 0 0 0 12 .5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-links-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#products" className="footer-link">Products</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div className="footer-links">
            <h4 className="footer-links-title">Products</h4>
            <ul className="footer-links-list">
              <li><a href="#products" className="footer-link">Pastiyum</a></li>
              <li><a href="#products" className="footer-link">Langka Chips</a></li>
              <li><a href="#products" className="footer-link">Palawan Chips</a></li>
              <li><a href="#products" className="footer-link">Pilipulp</a></li>
              <li><a href="#products" className="footer-link">Pawpaya Crackers</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-links-title">Contact Us</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="footer-contact-icon">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Gubat, Sorsogon, Philippines</span>
              </div>
              <div className="footer-contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="footer-contact-icon">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+63 928 747 9732</span>
              </div>
              <div className="footer-contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="footer-contact-icon">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>scanme!@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © 2025 ScanMe!. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
              <a href="#" className="footer-bottom-link">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
