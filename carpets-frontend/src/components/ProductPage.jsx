import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

const ProductPage = ({ products, addToCart }) => {
  return (
    <div>
      <h1>Our Products</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>£{product.price}</p>
            {/* Link to the product details page */}
            <Link to={`/products/${product.id}`}>View Details</Link>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;