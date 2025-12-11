import React from 'react';
import Products from './Products';
import ImageCarousel from '../components/ImageCarousel';
import VideoBackground from '../components/VideoBackground';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section with Video Background */}
      <section id="home" className="home-hero">
        <VideoBackground>
          <div className="container">
            <div className="home-hero-content">
              <h1 className="home-hero-title">Welcome to <span className="home-hero-brand">ScanMe!</span></h1>
              <p className="home-hero-subtitle">
                Discover our range of delicious and healthy snacks made with local ingredients
              </p>
              <div className="home-hero-actions">
                <a href="#products" className="btn btn-primary home-hero-btn">
                  Explore Products
                </a>
                <a href="#about" className="btn btn-secondary home-hero-btn">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </VideoBackground>
      </section>

      {/* About Section */}
      <section id="about" className="home-about">
        <div className="container">
          <div className="home-about-content">
            <h2 className="home-about-title">About ScanMe!</h2>
            <div className="home-about-grid">
              <div className="home-about-text">
                <p className="home-about-description">
                  ScanMe is your gateway to discovering exceptional local products from Gubat and Barcelona, Sorsogon. 
                  We showcase a curated selection of handcrafted snacks and treats that celebrate the rich 
                  flavors and traditions of our community.
                </p>
                <p className="home-about-description">
                    Our mission is to empower young entrepreneurs and small bussinesses in the Municipality of Gubat, Sorosogon,
                    by providing a simple, QR Code-based web platform that delivers instant product transparency to consumers and actionable
                    customers feedback to sellers. 
                </p>
                {/* Features removed as requested */}
              </div>
              <div className="home-about-image">
                <ImageCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="home-products">
        <div className="container">
          <div className="home-products-header">
            <h2 className="home-products-title">Products Offered</h2>
            <p className="home-products-subtitle">
              Discover the range of delicious and healthy snacks
            </p>
          </div>
          <Products />
        </div>
      </section>
    </div>
  );
};

export default Home;
