import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click events for smooth scrolling with offset
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
  };

  // Handle logo click to go to home and scroll to top
  const handleLogoClick = (e) => {
    // If we're already on the home page, just scroll to top
    if (window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      // Close mobile menu after navigation
      setIsMobileMenuOpen(false);
    }
    // If we're on a different page, the Link will handle navigation
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle body scroll lock when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          {/* Logo */}
          <Link to="/" className="navbar-logo" onClick={handleLogoClick}>
            <img 
              src={logo} 
              alt="Kitchen One" 
              className="navbar-logo-image"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="navbar-nav navbar-nav-desktop">
            <li className="navbar-nav-item">
              <a 
                href="#home" 
                className={`navbar-nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li className="navbar-nav-item">
              <a 
                href="#about" 
                className={`navbar-nav-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                About
              </a>
            </li>
            <li className="navbar-nav-item">
              <a 
                href="#products" 
                className={`navbar-nav-link ${activeSection === 'products' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'products')}
              >
                Products
              </a>
            </li>
            <li className="navbar-nav-item">
              <a 
                href="#contact" 
                className={`navbar-nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                Contact
              </a>
            </li>
            <li className="navbar-nav-item">
              <button 
                className="navbar-theme-toggle"
                onClick={toggleTheme}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
                title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                {isDark ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                )}
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle Button */}
          <button 
            className={`navbar-toggle ${isMobileMenuOpen ? 'disabled' : ''}`}
            onClick={toggleMobileMenu}
            disabled={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'disabled' : ''}`}></span>
            <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'disabled' : ''}`}></span>
            <span className={`navbar-toggle-line ${isMobileMenuOpen ? 'disabled' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

      {/* Mobile Menu Panel */}
      <div className={`mobile-menu-panel ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-header">
          <h3 className="mobile-menu-title">Menu</h3>
          <button 
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        
        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">
              <a 
                href="#home" 
                className={`mobile-menu-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                <span className="mobile-menu-icon">🏠</span>
                <span className="mobile-menu-text">Home</span>
              </a>
            </li>
            <li className="mobile-menu-item">
              <a 
                href="#about" 
                className={`mobile-menu-link ${activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'about')}
              >
                <span className="mobile-menu-icon">ℹ️</span>
                <span className="mobile-menu-text">About</span>
              </a>
            </li>
            <li className="mobile-menu-item">
              <a 
                href="#products" 
                className={`mobile-menu-link ${activeSection === 'products' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'products')}
              >
                <span className="mobile-menu-icon">🛍️</span>
                <span className="mobile-menu-text">Products</span>
              </a>
            </li>
            <li className="mobile-menu-item">
              <a 
                href="#contact" 
                className={`mobile-menu-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'contact')}
              >
                <span className="mobile-menu-icon">📧</span>
                <span className="mobile-menu-text">Contact</span>
              </a>
            </li>
            <li className="mobile-menu-item">
              <button 
                className="mobile-menu-theme-toggle"
                onClick={() => {
                  toggleTheme();
                  setIsMobileMenuOpen(false);
                }}
                aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
              >
                <span className="mobile-menu-icon">
                  {isDark ? '☀️' : '🌙'}
                </span>
                <span className="mobile-menu-text">
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
