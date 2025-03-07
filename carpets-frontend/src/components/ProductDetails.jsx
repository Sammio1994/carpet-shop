import { useParams } from 'react-router-dom';
import { useState } from 'react';

const products = [
  { id: 1, name: 'Luxury Wool Carpet', price: 120, img: 'carpet1.jpg', description: 'High-quality wool carpet' },
  { id: 2, name: 'Modern Grey Carpet', price: 150, img: 'carpet2.jpg', description: 'Stylish grey carpet' },
  // Add more products here
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  // Moving state inside the component
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: £{product.price}</p>
      {/* Button to add product to cart */}
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetailsPage;