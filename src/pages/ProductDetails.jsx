 import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import ImageSlider from '../components/ImageSlider';
import ProductLabelCard from '../components/ProductLabelCard';
import ProductContentCard from '../components/ProductContentCard';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="product-details-page">
        <div className="container">
          <div className="product-not-found">
            <h1 className="product-not-found-title">Product Not Found</h1>
            <p className="product-not-found-text">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <button 
              className="btn btn-primary"
              onClick={handleBackToProducts}
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleReviewClick = () => {
    console.log('Review button clicked for product:', product.name);
    // Here you can add analytics or other tracking
  };

  const handleBackToProducts = () => {
    // Navigate to home page first
    navigate('/');
    
    // Then scroll to products section after a short delay to ensure page is loaded
    setTimeout(() => {
      const productsSection = document.getElementById('products');
      if (productsSection) {
        productsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }, 100);
  };

  return (
    <div className="product-details-page">
      <div className="container">
        {/* Back Button */}
        <div className="product-details-back">
          <button 
            className="btn btn-secondary product-back-btn"
            onClick={handleBackToProducts}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="product-back-btn-icon"
            >
              <path 
                d="M19 12H5M12 19L5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back to Products
          </button>
        </div>

        {/* Product Details Grid */}
        <div className="product-details-grid">
          {/* Product Label - Full width on its own row */}
          <div className="product-details-label">
            <ProductLabelCard product={product} />
          </div>

          {/* Product Content and Images Container */}
          <div className="product-details-main">
            {/* Product Content */}
            <div className="product-details-content">
              <ProductContentCard 
                product={product} 
                onReviewClick={handleReviewClick}
              />
            </div>

            {/* Product Images */}
            <div className="product-details-images">
              <ImageSlider 
                images={product.productImages} 
                productName={product.name}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
