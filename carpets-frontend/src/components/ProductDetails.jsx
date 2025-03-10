import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Luxury Wool Carpet', price: 120, img: 'https://source.unsplash.com/random/300x300?carpet', description: 'High-quality wool carpet' },
  { id: 2, name: 'Modern Grey Carpet', price: 150, img: 'https://source.unsplash.com/random/300x300?modern-grey-carpet', description: 'Stylish grey carpet' },
  { id: 3, name: 'Classic Beige Carpet', price: 100, img: 'https://source.unsplash.com/random/300x300?classic-beige-carpet', description: 'Elegant beige carpet' },
  // Add more products here
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Price: £{product.price}</p>
    </div>
  );
};

export default ProductDetails;