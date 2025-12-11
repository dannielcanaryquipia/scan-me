import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, logo, manufacturer, contact } = product;

  return (
    <div className="product-card-wrapper">
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
            
            {contact?.location && (
              <div className="product-card-location">
                <FaMapMarkerAlt className="product-card-location-icon" />
                <span className="product-card-location-text">{contact.location}</span>
              </div>
            )}
            
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
    </div>
  );
};

export default ProductCard;
