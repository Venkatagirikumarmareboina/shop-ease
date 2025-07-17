import React, { useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { useContext } from "react";

function Home() {
  const [products, setProducts] = useState([]);
const { addToCart } = useContext(CartContext);

  // Fetch data from the API
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div style={{
        backgroundColor:"lightseagreen",
        display:"grid"
    }}>
      <h2 style={{ textAlign: "center", marginTop: "10px" }}>🛍️Welcome To ShopEase🛍️</h2>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
        gap: "20px", 
        padding: "30px", 
                backgroundColor:"lightslategrey"

              }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
            border: "1px solid #ccc", 
            padding: "10px", 
            borderRadius: "10px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          backgroundColor:"lightseagreen"
          }}>
            <img 
              src={product.image} 
              alt={product.title} 
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h3>{product.title.slice(0, 40)}...</h3>
            <p>₹ {product.price}</p>
            <button onClick={()=> addToCart(product)}style={{
              backgroundColor: "#1e293b",
              color: "#fff",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
              marginTop: "10px"
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
