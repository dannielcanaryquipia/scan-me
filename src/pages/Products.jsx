import React from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import './Products.css';

const Products = () => {
  return (
    <div className="products-section">
      {/* Products Grid */}
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
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
