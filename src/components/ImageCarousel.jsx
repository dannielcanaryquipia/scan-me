import React, { useState, useEffect } from 'react';
import './ImageCarousel.css';
import SliderNavButton from './SliderNavButton';

// Import the PNG images
import langkaChips from '../assets/images/langka-chips.png';
import palawanChips from '../assets/images/palawan-chips.png';
import pastiyum from '../assets/images/pastiyum.png';
import pilipulp from '../assets/images/pilipulp.png';
import pawpayaCrackers from '../assets/images/pawpaya-crackers.png'
const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    {
      src: langkaChips,
      alt: 'Langka Chips - Local Product',
      title: 'Langka Chips'
    },
    {
      src: palawanChips,
      alt: 'Palawan Chips - Local Product',
      title: 'Palawan Chips'
    },
    {
      src: pastiyum,
      alt: 'Pastiyum - Local Product',
      title: 'Pastiyum'
    },
    {
      src: pilipulp,
      alt: 'Pilipulp - Local Product',
      title: 'Pilipulp'
    },
    {
      src: pawpayaCrackers,
      alt: 'Pawpaya Crackers - Local Product',
      title: 'Pawpaya Crackers'
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
