import React, { useState } from 'react';
import './CheckOut.css';


const CheckOut = ({ cart }) => {
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      <div>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.alt_description}</p>
            <p>Price: £{item.price}</p>
          </div>
        ))}
        <h3>Total: £{totalPrice}</h3>
      </div>
      <form>
        <h3>Shipping Information</h3>
        <input type="text" placeholder="Full Name" required />
        <input type="text" placeholder="Address" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Complete Purchase</button>
      </form>
    </div>
  );
};

export default CheckOut;