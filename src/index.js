import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import CartProvider from "./Context/CartContext"; // adjust path if different

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <App />
  </CartProvider>
);
