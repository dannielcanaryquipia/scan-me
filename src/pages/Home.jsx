import React from 'react';
import Products from './Products';
import ImageCarousel from '../components/ImageCarousel';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="home-hero">
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
      </section>

      {/* About Section */}
      <section id="about" className="home-about">
        <div className="container">
          <div className="home-about-content">
            <h2 className="home-about-title">About ScanMe!</h2>
            <div className="home-about-grid">
              <div className="home-about-text">
                <p className="home-about-description">
                  ScanMe is your gateway to discovering exceptional local products from Gubat, Sorsogon. 
                  We showcase a curated selection of handcrafted snacks and treats that celebrate the rich 
                  flavors and traditions of our community.
                </p>
                <p className="home-about-description">
                  Our mission is to promote local businesses and provide you with access to high-quality, 
                  authentic products that tell the story of our region. From traditional pastillas to 
                  innovative chip varieties, each product represents the dedication and craftsmanship of 
                  local producers.
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
            <h2 className="home-products-title">Our Products</h2>
            <p className="home-products-subtitle">
              Discover our range of delicious and healthy snacks
            </p>
          </div>
          <Products />
        </div>
      </section>
    </div>
  );
};

export default Home;
