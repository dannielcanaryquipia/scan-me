import React, { useState } from 'react';
import ReviewBox from './ReviewBox';
import './ProductContentCard.css';

const ProductContentCard = ({ product }) => {
  const { name, description, price, sizes } = product;
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define the character limit for truncation
  const MAX_LENGTH = 200;
  const shouldTruncate = description.length > MAX_LENGTH;
  const displayDescription = isExpanded || !shouldTruncate 
    ? description
    : description.substring(0, MAX_LENGTH) + '...';

  // replaced by ReviewBox

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
        <ReviewBox product={product} />
      </div>
    </div>
  );
};

export default ProductContentCard;
