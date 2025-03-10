import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Luxury Wool Carpet', price: 120, img: 'https://source.unsplash.com/random/300x300?carpet', description: 'High-quality wool carpet' },
  { id: 2, name: 'Modern Grey Carpet', price: 150, img: 'https://source.unsplash.com/random/300x300?modern-grey-carpet', description: 'Stylish grey carpet' },
  { id: 3, name: 'Classic Beige Carpet', price: 100, img: 'https://source.unsplash.com/random/300x300?classic-beige-carpet', description: 'Elegant beige carpet' },
  // Add more products here
];

const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [sortBy, setSortBy] = useState('price');

  const filteredProducts = products
    .filter((p) => p.price >= minPrice)
    .sort((a, b) => (sortBy === 'price' ? a.price - b.price : 0)); // Sorting by price

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <div className="filters">
        <input
          type="number"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          placeholder="Minimum Price"
        />
        <select onChange={(e) => setSortBy(e.target.value)}>
          <option value="price">Sort by Price</option>
          <option value="popularity">Sort by Popularity</option>
        </select>
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>£{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;