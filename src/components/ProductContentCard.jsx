import React, { useState } from 'react';
import './ProductContentCard.css';

const ProductContentCard = ({ product }) => {
  const { name, description, price, sizes, category, crustTypes, sliceTypes } = product;
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Define the character limit for truncation
  const MAX_LENGTH = 200;
  const shouldTruncate = description.length > MAX_LENGTH;
  const displayDescription = isExpanded || !shouldTruncate 
    ? description
    : description.substring(0, MAX_LENGTH) + '...';

  // Check if product is a pizza
  const isPizza = category === "Pizza";

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

      {/* Crust Types - Only for Pizza */}
      {isPizza && crustTypes && crustTypes.length > 0 && (
        <div className="product-content-options">
          <h3 className="product-content-options-title">Crust Type</h3>
          <div className="product-options-grid">
            {crustTypes.map((crust, index) => (
              <div key={index} className="product-option-item">
                <span className="product-option-label">{crust.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Slice Types - Only for Pizza */}
      {isPizza && sliceTypes && sliceTypes.length > 0 && (
        <div className="product-content-options">
          <h3 className="product-content-options-title">Slice Type</h3>
          <div className="product-options-grid">
            {sliceTypes.map((slice, index) => (
              <div key={index} className="product-option-item">
                <span className="product-option-label">{slice.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
    </div>
  );
};

export default ProductContentCard;
