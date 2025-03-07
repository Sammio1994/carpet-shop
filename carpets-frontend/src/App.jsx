import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import ProductPage from './components/ProductPage';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import CheckOut from './components/CheckOut';
<Route path="/products/:id" element={<ProductDetails />} />;
<Route path="/CheckOut" element={<CheckOut />} />

const App = () => {
  const [cart, setCart] = useState([]);

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;