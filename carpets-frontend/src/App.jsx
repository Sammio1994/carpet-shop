import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import CheckOut from './components/CheckOut';
import HomePage from './components/HomePage';
import Contact from './components/Contact';
import { CartContext } from "./CartContext";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
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
    <CartContext.Provider value={{ cart, addToCart }}>
<Router>
  <Navbar />
  <Routes>
    {/* Homepage */}
    <Route path="/" element={<HomePage />} />

    {/* Product Listing Page */}
    <Route path="/products" element={<ProductPage products={products} addToCart={addToCart} />} />

    {/* Product Details Page */}
    <Route path="/products/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />

    {/* Cart Page */}
    <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />

    {/* Checkout Page */}
    <Route path="/checkout" element={<CheckOut cart={cart} />} />

    {/* Contact Page */}
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
</CartContext.Provider>
  );
};

export default App;