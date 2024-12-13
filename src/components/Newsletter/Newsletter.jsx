import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return (
    <>
      <section class="newsletter">
        <div class="newsletter-container">
          <h2>Receba nossas novidades</h2>
          <div class="newsletter-content">
            <p>Inscreva-se em nossa Newsletter</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Digite seu e-mail" />
              <button type="submit">Enviar</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Newsletter;
