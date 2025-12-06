import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { id, name, price, logo, manufacturer } = product;

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
            
            {/* Contact Information */}
            {product.contact && (
              <div className="product-contact-info">
                {product.contact.phone && product.contact.phone.length > 0 && (
                  <div className="contact-item">
                    <FaPhone className="contact-icon" />
                    <div className="contact-details">
                      {product.contact.phone.map((phone, index) => (
                        <a key={index} href={`tel:${phone}`} className="contact-link">
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.contact.facebook && (
                  <div className="contact-item">
                    <FaFacebook className="contact-icon" />
                    <a 
                      href={`https://facebook.com/${product.contact.facebook}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="contact-link"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {product.contact.facebook}
                    </a>
                  </div>
                )}
                
                {product.contact.location && (
                  <div className="contact-item">
                    <FaMapMarkerAlt className="contact-icon" />
                    <span className="contact-text">{product.contact.location}</span>
                  </div>
                )}
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
