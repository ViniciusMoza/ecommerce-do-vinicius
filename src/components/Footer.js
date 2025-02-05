import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaTiktok, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        
        <div className="footer-section">
          <h3>Sobre Nós</h3>
          <p>Loja de roupas femininas atemporais, feitas à mão com conforto e estilo.</p>
        </div>

        
        <div className="footer-section">
          <h3>Links Úteis</h3>
          <ul>
            <li><a href="#">Política de Privacidade</a></li>
            <li><a href="#">Termos de Serviço</a></li>
            <li><a href="#">Trocas e Devoluções</a></li>
            <li><a href="#">Perguntas Frequentes</a></li>
          </ul>
        </div>

        
        <div className="footer-section">
          <h3>Atendimento</h3>
          <p>📞 WhatsApp: (11) 99999-9999</p>
          <p>📧 Email: suporte@minhaloja.com</p>
          <p>🕒 Seg-Sex: 9h - 18h</p>
        </div>

        
        <div className="footer-section">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTiktok /></a>
          </div>
        </div>

        
        <div className="footer-section">
          <h3>Pagamento Seguro</h3>
          <div className="payment-icons">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcPaypal />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 Minha Loja - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
