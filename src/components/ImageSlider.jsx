import React, { useState, useEffect, useRef } from 'react';
import './ImageSlider.css';
import SliderNavButton from './SliderNavButton';

const ImageSlider = ({ images, productName }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const sliderRef = useRef(null);

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

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle click to toggle zoom
  const handleImageClick = (e) => {
    e.stopPropagation();
    setIsZoomed(!isZoomed);
  };

  // Handle keyboard events
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsZoomed(!isZoomed);
    } else if (e.key === 'Escape' && isZoomed) {
      setIsZoomed(false);
    }
  };

  // Handle click outside to close zoom
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sliderRef.current && !sliderRef.current.contains(event.target)) {
        setIsZoomed(false);
      }
    };

    if (isZoomed) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isZoomed]);

  // Prevent body scroll when zoomed
  useEffect(() => {
    if (isZoomed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isZoomed]);

  if (!images || images.length === 0) {
    return (
      <div className="image-slider">
        <div className="image-slider-main">
          <div className="image-slider-placeholder">
            <span>No images available</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={sliderRef}
      className={`image-slider ${isZoomed ? 'zoomed' : ''}`}
    >
      {/* Main Image Display */}
      <div className="image-slider-main">
        {!isZoomed && (
          <SliderNavButton direction="prev" onClick={goToPrevious} ariaLabel="Previous image" />
        )}

        <div className="image-slider-container">
          <img
            src={images[currentIndex]}
            alt={`${productName} - Image ${currentIndex + 1}`}
            className={`image-slider-image ${isZoomed ? 'zoomed' : ''}`}
            loading="lazy"
            onClick={handleImageClick}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="button"
            aria-label={`${isZoomed ? 'Close' : 'Zoom'} ${productName} - Image ${currentIndex + 1}`}
          />
        </div>

        {!isZoomed && (
          <SliderNavButton direction="next" onClick={goToNext} ariaLabel="Next image" />
        )}

        {/* Image Counter */}
        {images.length > 1 && !isZoomed && (
          <div className="image-slider-counter">
            {currentIndex + 1} / {images.length}
          </div>
        )}

        {/* Zoom overlay */}
        {isZoomed && (
          <div className="image-slider-zoom-overlay">
            <div className="image-slider-zoom-controls">
              <div className="image-slider-zoom-counter">
                {currentIndex + 1} / {images.length}
              </div>
              <div className="image-slider-zoom-hint">
                Click outside to close
              </div>
            </div>
            {images.length > 1 && (
              <div className="image-slider-zoom-nav">
                <SliderNavButton className="image-slider-zoom-btn" direction="prev" onClick={goToPrevious} ariaLabel="Previous image" />
                <SliderNavButton className="image-slider-zoom-btn" direction="next" onClick={goToNext} ariaLabel="Next image" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Thumbnail Navigation */}
      {images.length > 1 && !isZoomed && (
        <div className="image-slider-thumbnails">
          {images.map((image, index) => (
            <button
              key={index}
              className={`image-slider-thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img
                src={image}
                alt={`${productName} thumbnail ${index + 1}`}
                className="image-slider-thumbnail-image"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSlider;
