
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          🛍️ ShopEase
        </Link>
      </div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart 🛒</Link>
      </nav>
    </header>
  );
}

export default Header;

