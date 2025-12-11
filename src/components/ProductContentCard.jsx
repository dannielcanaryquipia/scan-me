import React, { useState } from 'react';
import ReviewBox from './ReviewBox';
import { FaFacebook, FaMapMarkerAlt } from 'react-icons/fa';
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

      {/* Contact Information */}
      {product.contact && (
        <div className="product-contact-info">
          <h3 className="product-content-contact-title">Contact Information</h3>
          
          {product.contact.phone && product.contact.phone.length > 0 && (
            <div className="contact-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="contact-icon">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
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

      <div className="product-content-actions">
        <ReviewBox product={product} />
      </div>
    </div>
  );
};

export default ProductContentCard;
