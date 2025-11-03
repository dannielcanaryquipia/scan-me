import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import SliderNavButton from './SliderNavButton';

// Import Kitchen One food images
import kitchenOneSpecial from '../assets/images/Kitchen One Special.jpeg';
import allMeat from '../assets/images/All-meat.jpeg';
import hawaiian from '../assets/images/Hawaiian.jpeg';
import creamyChickenPasta from '../assets/images/Creamy Chicken and Ham Pasta.jpeg';
import orientalSpicyPasta from '../assets/images/Oriental Spicy Chicken Pasta.jpeg';

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: kitchenOneSpecial,
      alt: 'Kitchen One Special Pizza',
      title: 'Kitchen One Special'
    },
    {
      src: allMeat,
      alt: 'All-Meat Pizza',
      title: 'All-Meat Pizza'
    },
    {
      src: hawaiian,
      alt: 'Hawaiian Pizza',
      title: 'Hawaiian Pizza'
    },
    {
      src: creamyChickenPasta,
      alt: 'Creamy Chicken and Ham Pasta',
      title: 'Creamy Chicken Pasta'
    },
    {
      src: orientalSpicyPasta,
      alt: 'Oriental Spicy Chicken Pasta',
      title: 'Oriental Spicy Pasta'
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="image-carousel">
      <div className="carousel-container">
        {/* Main Image Display */}
        <div className="carousel-main">
          <SliderNavButton direction="prev" onClick={goToPrevious} ariaLabel="Previous image" />

          <div className="carousel-image-container">
            {images.map((image, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image"
                  loading="lazy"
                />
                <div className="carousel-overlay">
                  <h3 className="carousel-title">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <SliderNavButton direction="next" onClick={goToNext} ariaLabel="Next image" />
        </div>

        {/* Dots Navigation */}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="carousel-progress">
          <div 
            className="carousel-progress-bar"
            style={{
              width: `${((currentIndex + 1) / images.length) * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
