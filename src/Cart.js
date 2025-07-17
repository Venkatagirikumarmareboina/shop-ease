// src/Cart.js
import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import "./Cart.css"; // Add custom styles here

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const clearCart = () => {
    cartItems.length = 0; // Directly clear array
    window.location.reload(); // Temporary way to refresh UI (or implement setCartItems([]) properly inside context)
  };

  return (
    <div className="cart-container">
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} width="70" />
                <div className="details">
                  <h4>{item.name}</h4>
                  <p>₹ {item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => decreaseQuantity(item)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item)}>+</button>
                  </div>
                  <button className="remove-btn" onClick={() => removeFromCart(item)}>
                     Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="cart-footer">
            <h3>Total: ₹ {totalPrice}</h3>
            <button className="clear-cart-btn" onClick={clearCart}>
              🧹 Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
