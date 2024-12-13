import React from "react";
import "./Footer.css";
import logoBranca from "../../assets/logo-branca.png";

function Footer() {
  return (
    <footer>
      <div>
        <img src={logoBranca} alt="Logo Branca" />
        <p>Wine Club</p>
        <p>Av. Atlântica, 6000</p>
        <p>Copacabana - Rio de Janeiro</p>
        <p>Tel.: (21) 2340-5040</p>
        <p>Email: contato@wineclub.com</p>
      </div>
    </footer>
  );
}

export default Footer;
