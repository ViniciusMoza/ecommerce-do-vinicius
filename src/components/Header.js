import React from "react";
import "./Header.css";

const Header = ({ cartCount, toggleCartModal }) => {
  return (
    <header className="header">
      <div className="user-info">
        <span className="user-icon">👤</span>
        <span>Usuário</span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar produtos, marcas e muito mais..." />
      </div>
      <div className="cart-container" onClick={toggleCartModal}>
        <span className="cart-icon">🛒</span>
        {cartCount > 0 && (
          <span className="cart-count">{cartCount}</span>
        )}
      </div>
    </header>
  );
};

export default Header;
