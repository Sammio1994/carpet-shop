{/* <Route path="/CheckOut" element={<CheckOut cart={cart} />} /> */}

const CheckOut = ({ cart }) => {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
  
    return (
      <div>
        <h2>Checkout</h2>
        {cart.map((item, index) => (
          <div key={index}>
            <p>{item.name}</p>
            <p>Price: £{item.price}</p>
          </div>
        ))}
        <h3>Total: £{totalPrice}</h3>
  
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Shipping Address" required />
          <input type="email" placeholder="Email" required />
          {/* Add more fields as needed */}
          <button className="bg-green-500 text-white py-1 px-4 mt-4">Confirm Order</button>
        </form>
      </div>
    );
  };
  
  export default CheckOut;