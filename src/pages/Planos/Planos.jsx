import React, { useState, useEffect } from "react";
import "./Planos.css";
import planosData from "../../data/planos.json";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Newsletter from "../../components/Newsletter/Newsletter";
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton/FloatingWhatsAppButton";

const Planos = () => {
  const [planos, setPlanos] = useState([]);

  useEffect(() => {
    
    const fetchPlanos = () => {
      setTimeout(() => {
        setPlanos(planosData);
      }, 1000); 
    };

    fetchPlanos();
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <div className="planos">
        <h2>Planos de Assinatura</h2>
        <div className="planos-container">
          {planos.length === 0 ? (
            <p>Carregando planos...</p>
          ) : (
            planos.map((plano) => (
              <div key={plano.id} className="plano-card">
                <h3>
                  Plano {plano.tipo}{" "} 
                  <span className="desconto">{plano.desconto}</span>
                </h3>
                <p className="preco-original">
                  De <s>R$ {plano.precoOriginal.toFixed(2)}</s> p/ garrafa
                </p><br />
                <p className="preco-destaque">
                  R$ {plano.precoComDesconto.toFixed(2)} 
                </p> <p className="porgarrafa">por garrafa</p>
                <p className="descricao">{plano.descricao}</p>
                <button className="btn-assinar">QUERO ASSINAR!</button>
              </div>
            ))
          )}
        </div>
      </div>
      
      <Newsletter />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
};

export default Planos;

