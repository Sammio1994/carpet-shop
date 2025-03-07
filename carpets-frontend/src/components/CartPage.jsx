import { Route } from 'react-router-dom';
import React from 'react';

const CartPage = ({ cart, removeFromCart }) => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    
    return (
      <div>
        <h2>Your Shopping Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>Price: £{item.price}</p>
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          ))
        )}
        <h3>Total: £{totalPrice}</h3>
        <button>Proceed to Checkout</button>
      </div>
    );
  };
//   <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
  export default CartPage;