import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://api.unsplash.com/photos/random?query=carpet&client_id=lsA3B_jAyBXVwPBE_S5_CWmmYyvmEaQdUbsRZ9Dmzwo');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Carpets</h1>
      <div>
        {products.map((product) => (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.imageUrl} alt={product.name} style={{ width: '200px' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

// export default ProductPage;