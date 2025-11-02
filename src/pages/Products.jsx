import React, { useEffect, useRef, useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="products-section" ref={sectionRef}>
      {/* Products Grid */}
      <div className={`products-grid ${isVisible ? 'visible' : ''}`}>
        {products.map((product, index) => (
          <div
            key={product.id}
            className="product-card-wrapper"
            style={{
              animationDelay: isVisible ? `${index * 0.1}s` : '0s'
            }}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Empty State (if no products) */}
      {products.length === 0 && (
        <div className="products-empty">
          <div className="products-empty-content">
            <h2 className="products-empty-title">No Products Available</h2>
            <p className="products-empty-text">
              We're working on adding new products. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
