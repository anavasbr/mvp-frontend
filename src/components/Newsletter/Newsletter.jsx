import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <section class="newsletter">
        <div class="newsletter-container">
          <h2>Receba nossas novidades</h2>
          <div class="newsletter-form">
            <p>Inscreva-se em nossa Newsletter</p>
            <div class="newsletter-input">
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
