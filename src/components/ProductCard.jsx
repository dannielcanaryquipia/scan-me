import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, logo, description } = product;
  
  // Truncate description if too long
  const MAX_DESCRIPTION_LENGTH = 100;
  const truncatedDescription = description && description.length > MAX_DESCRIPTION_LENGTH
    ? description.substring(0, MAX_DESCRIPTION_LENGTH) + '...'
    : description;

  return (
    <Link to={`/products/${id}`} className="product-card-link">
      <div className="product-card">
        {/* Product Logo */}
        <div className="product-card-image-container">
          <img 
            src={logo} 
            alt={`${name} logo`}
            className="product-card-image"
            loading="lazy"
          />
        </div>

        {/* Product Info */}
        <div className="product-card-content">
          <h3 className="product-card-title">{name}</h3>
          {description && (
            <p className="product-card-description">{truncatedDescription}</p>
          )}
          <p className="product-card-price">
            ₱{price.toFixed(2)}
          </p>
        </div>

        {/* Hover Effect Overlay */}
        <div className="product-card-overlay">
          <span className="product-card-overlay-text">View Details</span>
        </div>
      </div>
    </Link>
  );
};

export default memo(ProductCard);
