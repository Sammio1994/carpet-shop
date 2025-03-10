import React from 'react';
import './CartPage.css';
import { Link } from 'react-router-dom';

const CartPage = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.img} alt={item.name} />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>£{item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))}
          <Link to="/checkout" className="checkout-link">
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;