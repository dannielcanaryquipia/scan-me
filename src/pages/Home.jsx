import React, { useEffect, useRef } from 'react';
import Products from './Products';
import ImageCarousel from '../components/ImageCarousel';
import ContactForm from '../components/ContactForm';
import './Home.css';

const Home = () => {
  const productsSectionRef = useRef(null);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observers = [];

    // Observe products section
    if (productsSectionRef.current) {
      const productsObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              productsObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '100px'
        }
      );
      productsObserver.observe(productsSectionRef.current);
      observers.push({ observer: productsObserver, target: productsSectionRef.current });
    }

    // Observe about section
    if (aboutSectionRef.current) {
      const aboutObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              aboutObserver.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      );
      aboutObserver.observe(aboutSectionRef.current);
      observers.push({ observer: aboutObserver, target: aboutSectionRef.current });
    }

    return () => {
      observers.forEach(({ observer, target }) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="home-hero">
        <div className="container">
          <div className="home-hero-content">
            <h1 className="home-hero-title">Welcome to <span className="home-hero-brand">Kitchen One</span></h1>
            <p className="home-hero-subtitle">
              Serving delicious pizzas, pastas, and more made with fresh ingredients and passion
            </p>
            <div className="home-hero-actions">
              <a href="#products" className="btn btn-primary home-hero-btn">
                View Menu
              </a>
              <a href="#about" className="btn btn-secondary home-hero-btn">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutSectionRef} className="home-about">
        <div className="container">
          <div className="home-about-content">
            <h2 className="home-about-title">About Kitchen One</h2>
            <div className="home-about-grid">
              <div className="home-about-text">
                <p className="home-about-description">
                  Kitchen One is your neighborhood restaurant dedicated to serving delicious, freshly prepared 
                  pizzas, pastas, and sides. We use only the finest ingredients to create meals that bring 
                  families and friends together around great food.
                </p>
                <p className="home-about-description">
                  Our mission is simple: to serve high-quality, flavorful meals that satisfy your cravings 
                  and create memorable dining experiences. From our signature pizzas to our creamy pastas, 
                  every dish is crafted with care and attention to detail. Whether you're dining in, 
                  ordering for takeout, or having it delivered, Kitchen One is committed to excellence 
                  in every bite.
                </p>
              </div>
              <div className="home-about-image">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" ref={productsSectionRef} className="home-products">
        <div className="container">
          <div className="home-products-header">
            <h2 className="home-products-title">Our Menu</h2>
            <p className="home-products-subtitle">
              Explore our delicious selection of pizzas, pastas, and sides
            </p>
          </div>
          <Products />
        </div>
      </section>

      {/* Contact Section */}
      <ContactForm />
    </div>
  );
};

export default Home;
