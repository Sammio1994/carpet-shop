import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import CheckOut from './components/CheckOut';
import HomePage from './components/HomePage';
import Contact from './components/Contact';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const products = [
    { id: 1, name: 'Luxury Wool Carpet', price: 120, img: 'carpet1.jpg', description: 'High-quality wool carpet' },
    { id: 2, name: 'Modern Grey Carpet', price: 150, img: 'carpet2.jpg', description: 'Stylish grey carpet' },
    { id: 3, name: 'Classic Beige Carpet', price: 100, img: 'carpet3.jpg', description: 'Elegant beige carpet' },
    // Add more products as necessary
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductPage products={products} addToCart={addToCart} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        <Route path="/checkout" element={<CheckOut cart={cart} />} />
        <Route path="/products/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default App;