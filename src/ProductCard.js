import React, { useContext } from "react";
import "./ProductCardcss"
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem", width: "250px" }}>
      <img
  src={product.image}
  alt={product.title}
  className="product-image"
/>

      <p>Price: ₹{product.price}</p>
      <button onClick={() => addToCart(product)}>🛒 Add to Cart</button>
    </div>
  );
};

export default ProductCard;


