import React, { useState, useEffect, useRef } from 'react';
import './ProductLabelCard.css';

const ProductLabelCard = ({ product }) => {
  const { label, name } = product;
  const [isZoomed, setIsZoomed] = useState(false);
  const cardRef = useRef(null);

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
      if (cardRef.current && !cardRef.current.contains(event.target)) {
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

  return (
    <div 
      ref={cardRef}
      className={`product-label-card ${isZoomed ? 'zoomed' : ''}`}
    >
      <div className="product-label-image-container">
        <img 
          src={label} 
          alt={`${name} product label`}
          className={`product-label-image ${isZoomed ? 'zoomed' : ''}`}
          loading="lazy"
          onClick={handleImageClick}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="button"
          aria-label={`${isZoomed ? 'Close' : 'Zoom'} ${name} product label`}
        />
        {isZoomed && (
          <div className="zoom-overlay">
            <div className="zoom-close-hint">
              Click outside to close
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductLabelCard;
