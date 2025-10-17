import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, logo, manufacturer } = product;

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
          {manufacturer && (
            <p className="product-card-manufacturer">{manufacturer}</p>
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

export default ProductCard;
