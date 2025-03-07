import { useState } from 'react';
import { Link } from 'react-router-dom';
// This will be your routing setup (in a different component or in your App.jsx)
import { Route } from 'react-router-dom';
import ProductDetails from './ProductDetails'; // Update the path if needed
import CheckOut from './CheckOut'; // Update the path if needed

// Product data (you can replace this with dynamic data from an API or DB)
const products = [
  { id: 1, name: 'Luxury Wool Carpet', price: 120, img: 'carpet1.jpg' },
  { id: 2, name: 'Modern Grey Carpet', price: 150, img: 'carpet2.jpg' },
  { id: 3, name: 'Classic Beige Carpet', price: 100, img: 'carpet3.jpg' },
];

// ProductPage Component
const ProductPage = () => {
  const [cart, setCart] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [sortBy, setSortBy] = useState('price');

  const filteredProducts = products
    .filter((p) => p.price >= minPrice)
    .sort((a, b) => (sortBy === 'price' ? a.price - b.price : 0));

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      {/* Filter and Sorting UI */}
      <div>
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

      {/* Displaying Products */}
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>£{product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <Link to={`/products/${product.id}`}>View Details</Link> {/* Link to Product Details */}
          </div>
        ))}
      </div>

      {/* Show Cart */}
      <div>
        <Link to="/cart">Go to Cart ({cart.length})</Link>
      </div>
    </div>
  );
};

// Route setup for ProductDetails and Checkout
// These would usually be added in your main App.jsx component
const App = () => {
  return (
    <>
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/cart" element={<CartPage />} />
    </>
  );
};

// CartPage Component (for cart page)
const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>Price: £{item.price}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <h3>Total: £{totalPrice}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

// Export the ProductPage component to use it elsewhere
export default ProductPage;