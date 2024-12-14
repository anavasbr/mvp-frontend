import React from 'react';
import './FloatingWhatsAppButton.css';
import whatsappIcon from "../../assets/whatsappIcon.png";

function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5521998877665"
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsappIcon} alt="WhatsApp" />
    </a>
  );
}

export default FloatingWhatsAppButton;
