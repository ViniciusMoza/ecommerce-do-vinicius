import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BannerSlide from "./components/BannerSlide";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar"; 
import produtos from "./data/products";
import ofertas from "./data/offers";
import favoritos from "./data/favorites";
import banners from "./data/banners";
import carousel from "./data/carrossel";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

 
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.nome === product.nome);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.nome === product.nome ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantidade: 1 }]);
    }
  };

  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  
  const updateQuantity = (productName, amount) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.nome === productName
            ? { ...item, quantidade: Math.max(item.quantidade + amount, 1) }
            : item
        )
    );
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.preco * item.quantidade, 0);


const removeFromCart = (productName) => {
  setCartItems(cartItems.filter((item) => item.nome !== productName));
};


const clearCart = () => {
  setCartItems([]);
};



  return (
    <div className="App">
      <Header cartCount={cartItems.length} toggleCartModal={toggleCart} />

      <div className="content">
        <BannerSlide banners={banners} />
        <Carousel images={carousel} />

        
        <div className="product-container">
          <h2>Produtos</h2>
          <div className="product-grid">
            {produtos.map((produto) => (
              <div className="product-card" key={produto.nome}>
                <img src={produto.imagem} alt={produto.nome} className="product-image" />
                <p className="product-description">{produto.descricao}</p>
                <p className="product-price">
                  R$ {produto.preco},00
                  <button className="buy-button" onClick={() => handleAddToCart(produto)}>
                    Eu quero
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="offers-container">
          <h2>Ofertas</h2>
          <div className="offers-grid">
            {ofertas.map((oferta) => (
              <div className="offer-card" key={oferta.nome}>
                <img src={oferta.imagem} alt={oferta.nome} className="offer-image" />
                <p className="offer-description">{oferta.descricao}</p>
                <p className="offer-price">
                  R$ {oferta.preco},00
                  <button className="buy-button" onClick={() => handleAddToCart(oferta)}>
                    Eu quero
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>

        
        <div className="favorite-container">
          <h2>Favoritos</h2>
          <div className="favorites-grid">
            {favoritos.map((favorito) => (
              <div className="favorite-card" key={favorito.nome}>
                <img src={favorito.imagem} alt={favorito.nome} className="favorite-image" />
                <p className="favorite-description">{favorito.descricao}</p>
                <p className="favorite-price">
                  R$ {favorito.preco},00
                  <button className="buy-button" onClick={() => handleAddToCart(favorito)}>
                    Eu quero
                  </button>
                </p>
              </div>
            ))}
          </div>
        </div>

        <Footer />
      </div>

      
      {isCartOpen && (
  <Sidebar
    cartItems={cartItems}
    updateQuantity={updateQuantity}
    removeFromCart={removeFromCart} 
    clearCart={clearCart} 
    toggleCart={toggleCart}
  />
)}
    </div>
  );
}

export default App;

