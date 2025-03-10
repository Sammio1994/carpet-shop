import { Link } from 'react-router-dom';
import './CartPage.css';
import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.alt_description}</p>
          <p>Price: £{item.price}</p>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      ))}
      <h3>Total: £{totalPrice}</h3>
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;