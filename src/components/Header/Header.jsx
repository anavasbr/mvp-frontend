import React from "react";
import "./Header.css";
import logoHeader from "../../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logoHeader} alt="Logo header" />
      <nav>
        <ul>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/planos">PLANOS DE ASSINATURA</a>
          </li>
          <li>
            <a href="/duvidas">DÚVIDAS?</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
