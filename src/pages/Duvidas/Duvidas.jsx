import React, { useState } from "react";
import "./Duvidas.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import FloatingWhatsAppButton from "../../components/FloatingWhatsAppButton/FloatingWhatsAppButton";
import Newsletter from "../../components/Newsletter/Newsletter";

function Duvidas() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Como funciona o cancelamento?",
      answer:
        "O cancelamento pode ser feito a qualquer momento diretamente no painel do usuário.",
    },
    {
      question: "Política de frete",
      answer:
        "O frete é grátis para capitais e possui custo reduzido para outras regiões.",
    },
    {
      question: "Quais benefícios?",
      answer:
        "Você terá acesso a descontos exclusivos, produtos premium e conteúdos especiais.",
    },
    {
      question: "Por onde posso assinar?",
      answer:
        "As assinaturas podem ser feitas diretamente no nosso site, na seção de planos.",
    },
  ];

  return (
    <>
      <Header />
      <Banner />
      <div className="faq-section">
        <h2>Ainda tem dúvidas?</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "open" : ""}`}
          >
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {item.question}
              <span className="faq-icon">
                {activeIndex === index ? "-" : "+"}
              </span>
            </button>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <Newsletter />
      <Footer />
      <FloatingWhatsAppButton />
    </>
  );
}

export default Duvidas;
