import React, { useState } from 'react';

const faqs = [
  {
    question: "QUELLE EST LA DIFFÉRENCE ENTRE BRANDING ET IDENTITÉ VISUELLE ?",
    answer: "Le branding, c’est le fond. L’identité visuelle, c’est la forme. Chez Point Virgule, on commence toujours par le sens avant le style."
  },
  {
    question: "AI-JE BESOIN D’UN BRANDING SI J’AI DÉJÀ UN LOGO ?",
    answer: "Souvent, oui. Un logo peut exister seul. Une marque, jamais. On vous aide à transformer un symbole en système."
  },
  {
    question: "À QUOI SERT UNE STRATÉGIE DE MARQUE ?",
    answer: "À savoir quoi dire, comment le dire, et surtout pourquoi le dire. C’est la boussole avant le voyage."
  },
  {
    question: "QUELLE EST LA DIFFÉRENCE ENTRE WEB DESIGN ET UX/UI ?",
    answer: "Le web design séduit l’œil. L’UX/UI facilite le parcours. Nous concevons des sites qui font les deux."
  },
  {
    question: "PROPOSEZ-VOUS LA CRÉATION DE SITES WEB ?",
    answer: "Oui. Des sites clairs, rapides et pensés pour convertir, pas seulement pour exister."
  },
  {
    question: "FAITES-VOUS LA CRÉATION DE CONTENU ET LES RÉSEAUX SOCIAUX ?",
    answer: "Oui. Du contenu aligné à votre marque, pas du bruit de plus sur Internet."
  },
  {
    question: "COMMENT SAVOIR QUELS SERVICES SONT FAITS POUR MOI ?",
    answer: "Parlons-en. Racontez-nous où vous en êtes, on vous dira par où commencer."
  },
  {
    question: "TRAVAILLEZ-VOUS SUR DES PROJETS PONCTUELS OU EN ACCOMPAGNEMENT ?",
    answer: "Les deux. Parfois, une virgule suffit. Parfois, il faut écrire tout le paragraphe ensemble."
  },
  {
    question: "EN COMBIEN DE TEMPS UN PROJET PEUT-IL ÊTRE RÉALISÉ ?",
    answer: "Chaque projet a son rythme. On définit le tempo ensemble, dès le départ."
  },
  {
    question: "COMMENT DÉMARRER UNE COLLABORATION ?",
    answer: "Écrivez-nous. Dites-nous ce que vous avez en tête. On mettra le point de départ, et la virgule au bon endroit."
  }
];

const FAQ = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section id="faq" className="faq-section">
      <style>{`
        .faq-section {
          padding: 140px 5%;
          background-color: transparent;
        }

        .faq-container {
          padding-top: 20px;
          margin-top: 0;
        }

        .faq-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          font-weight: 900;
          margin-bottom: 80px;
          color: #fff;
          letter-spacing: -0.02em;
          text-transform: uppercase;
        }

        .faq-list {
          max-width: 100%;
        }

        .faq-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          padding: 0;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-bottom-color: rgba(255, 255, 255, 0.25);

        }

        summary {
          list-style: none;
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 24px;
          align-items: center;
          padding: 36px 0;
          cursor: pointer;
          color: #fff;
          transition: all 0.3s ease;
        }

        summary::-webkit-details-marker {
          display: none;
        }

        .faq-item:hover summary {
          color: var(--brand-orange);
        }

        .question-number {
          font-size: clamp(0.85rem, 1.5vw, 1rem);
          font-weight: 700;
          opacity: 0.5;
          letter-spacing: 0.1em;
          font-family: monospace;
        }

        .question-text {
          font-weight: 700;
          font-size: clamp(1rem, 2vw, 1.25rem);
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .icon {
          width: 24px;
          height: 24px;
          position: relative;
          flex-shrink: 0;
        }

        .icon::before,
        .icon::after {
          content: '';
          position: absolute;
          background-color: currentColor;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .icon::before {
          width: 100%;
          height: 2px;
          top: 11px;
          left: 0;
        }

        .icon::after {
          width: 2px;
          height: 100%;
          left: 11px;
          top: 0;
        }

        details[open] .icon::after {
          transform: rotate(90deg);
          opacity: 0;
        }

        details[open] summary {
          color: var(--brand-orange);

        }

        .faq-content {
          padding: 0 0 40px 0;
          padding-left: calc(0px + 48px); /* Aligns text under the question */
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.75;
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          max-width: 750px;
          animation: fadeIn 0.4s ease;
        }

        .btn-container {
          display: flex;
          justify-content: center;
          margin-top: 60px;
        }

        .load-more-btn {
          background: transparent;
          border: 1px solid var(--brand-orange);
          color: #fff;
          padding: 16px 40px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.8rem;
        }

        .load-more-btn:hover {
          background: var(--brand-orange);
          color: #fff;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          summary { padding: 28px 0; gap: 16px; }
          .faq-content { padding-left: 0; }
        }
      `}</style>

      <div className="faq-container">
        <h2 className="faq-title">Questions Fréquentes</h2>
        <div className="faq-list">
          {visibleFaqs.map((faq, index) => (
            <details className="faq-item" key={index}>
              <summary>
                <span className="question-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="question-text">{faq.question}</span>
                <span className="icon"></span>
              </summary>
              <div className="faq-content">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="btn-container">
          <button
            className="load-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Voir Moins" : "Voir Plus"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;