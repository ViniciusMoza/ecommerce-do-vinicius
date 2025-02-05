import React from "react";
import "./Sidebar.css";

const Sidebar = ({ cartItems, updateQuantity, removeFromCart, clearCart, toggleCart }) => {

  const subtotal = cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button className="close-btn" onClick={toggleCart}>X</button>
        <button className="clear-btn" onClick={clearCart}>🗑 Limpar Carrinho</button>
      </div>
      
      <h2>Carrinho</h2>
      
      {cartItems.length === 0 ? (
        <p>O carrinho está vazio</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.nome} className="cart-item">
            <img src={item.imagem} alt={item.nome} className="cart-item-image" />
            <div className="cart-item-details">
              <p className="cart-item-name">{item.nome}</p>
              <p className="cart-item-price">R$ {item.preco},00</p>
              <div className="cart-item-quantity">
                <button onClick={() => updateQuantity(item.nome, -1)}>-</button>
                <span>{item.quantidade}</span>
                <button onClick={() => updateQuantity(item.nome, 1)}>+</button>
              </div>
              <button className="remove-item-btn" onClick={() => removeFromCart(item.nome)}>❌ Excluir</button>
            </div>
          </div>
        ))
      )}


     
      <div className="subtotal-container">
        <p className="subtotal-text">Subtotal:</p>
        <p className="subtotal-value">R$ {subtotal.toFixed(2)}</p>
      </div>


      
      <button className="checkout-btn">Finalizar Compra</button>
    </div>
  );
};

export default Sidebar;








