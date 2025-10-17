import React, { useState } from 'react';
import './ProductContentCard.css';

const ProductContentCard = ({ product, onReviewClick }) => {
  const { name, description, price, sizes } = product;
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define the character limit for truncation
  const MAX_LENGTH = 200;
  const shouldTruncate = description.length > MAX_LENGTH;
  const displayDescription = isExpanded || !shouldTruncate 
    ? description 
    : description.substring(0, MAX_LENGTH) + '...';

  const handleReviewClick = () => {
    // For now, we'll open a placeholder URL
    // Later this will link to a Google Form
    window.open('https://forms.google.com', '_blank');
    if (onReviewClick) {
      onReviewClick();
    }
  };

  return (
    <div className="product-content-card">
      <div className="product-content-header">
        <h1 className="product-content-title">{name}</h1>
        <div className="product-content-price">
          {sizes && sizes.length > 0 ? (
            <div className="product-price-variants">
              {sizes.map((size, index) => (
                <div key={index} className="product-price-variant">
                  <span className="product-price-variant-label">{size.label}</span>
                  <span className="product-price-variant-price">₱{size.price.toFixed(2)}</span>
                </div>
              ))}
            </div>
          ) : (
            <span className="product-price-single">₱{price.toFixed(2)}</span>
          )}
        </div>
      </div>

      <div className="product-content-description">
        <h2 className="product-content-description-title">Description</h2>
        <p className="product-content-description-text">{displayDescription}</p>
        {shouldTruncate && (
          <button 
            className="product-content-read-more"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      <div className="product-content-actions">
        <button 
          className="btn btn-primary product-review-btn"
          onClick={handleReviewClick}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="product-review-btn-icon"
          >
            <path 
              d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          Leave a Review
        </button>
      </div>
    </div>
  );
};

export default ProductContentCard;
