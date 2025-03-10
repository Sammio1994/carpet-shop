import React, { useEffect, useState } from "react";
import axios from "axios";
import { CartContext } from "../CartContext";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random?query=carpet&client_id=lsA3B_jAyBXVwPBE_S5_CWmmYyvmEaQdUbsRZ9Dmzwo');
        setProducts(response.data); // Assuming the API returns an array of images
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="product-page">
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.urls.small} alt={product.description || "Product"} />
            <h2>{product.description || "Unnamed Product"}</h2>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;