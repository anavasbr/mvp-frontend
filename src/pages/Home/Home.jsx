import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton/FloatingWhatsAppButton";
import "./Home.css";
import assineClube from "../../assets/icone-assine-clube.png";
import selecaoEspecial from "../../assets/icone-selecao-especial.png";
import recebaCasa from "../../assets/icone-receba-casa.png";
import aproveite from "../../assets/icone-aproveite.png";
import fotoUm from "../../assets/foto-01.jpg";
import fotoDois from "../../assets/foto-02.jpg";

function Home() {
  return (
    <>
      <Header />
      <main className="home-container">
        <Banner />
        <div className="como-funciona">
          <h2>Como funciona?</h2>
          <div className="funciona-grid">
            <div className="funciona-item">
              <img src={assineClube} alt="Ícone Assine o Clube" />
              <h3>Assine o Clube</h3>
              <p>Comece sua experiência e aproveite todos os benefícios.</p>
            </div>
            <div className="funciona-item">
              <img src={selecaoEspecial} alt="Ícone Seleção Especial" />
              <h3>Seleção Especial</h3>
              <p>
                Receba itens escolhidos com cuidado para agradar seu paladar.
              </p>
            </div>
            <div className="funciona-item">
              <img src={recebaCasa} alt="Ícone Receba em Casa" />
              <h3>Receba em Casa</h3>
              <p>Conte com praticidade: entregamos diretamente na sua casa.</p>
            </div>
            <div className="funciona-item">
              <img src={aproveite} alt="Ícone Aproveite" />
              <h3>Aproveite</h3>
              <p>
                Aproveite sua experiência com todo o conforto e qualidade que
                você merece.
              </p>
            </div>
          </div>
        </div>
        <div class="beneficios">
          <div class="beneficios-row">
            <div class="beneficios-item">
              <img src={fotoUm} alt="Imagem de Benefícios" />
            </div>
            <div class="beneficios-item">
              <h2>Benefícios que só os sócios vão ter</h2>
              <ul>
                <li>1. Campanhas exclusivas</li>
                <li>
                  2. Cupom de 10% para os pedidos no site excluindo itens em
                  promoção
                </li>
                <li>3. Desconto de 10% nos eventos da Wine Out</li>
                <li>4. Antecipação das campanhas</li>
                <li>5. Assistência 100% do tempo com nossos consultores</li>
              </ul>
            </div>
          </div>
          <div class="beneficios-row">
            <div class="beneficios-item">
              <h2>Por que nosso clube é o melhor?</h2>
              <ul>
                <li>1. Curadoria selecionada pelo Wine Hunter LK</li>
                <li>2. Pode cancelar quando quiser</li>
                <li>
                  3. Clube selecionado somente para Amantes do mundo dos vinhos
                  
                </li>
               
                <li>5. O clube que você realmente vai receber vinhos bons</li>
              </ul>
            </div>
            <div class="beneficios-item">
              <img src={fotoDois} alt="Imagem de Taça" />
            </div>
          </div>
        </div>

        <section className="newsletter">
          <h2>Receba nossas novidades</h2>
          <form className="newsletter-form">
            <input type="email" placeholder="Digite seu e-mail" />
            <button type="submit">Enviar</button>
          </form>
        </section>
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default Home;
