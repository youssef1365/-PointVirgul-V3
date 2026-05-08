import React from 'react';

const services = [
  {
    question: <>Pourquoi notre <i>marque</i> manque de clarté ?</>,
    title: "STRATÉGIE",
    details: ["Plateforme de marque", "Positionnement", "Audit", "Vision"]
  },
  {
    question: <>Pourquoi notre <i>image</i> ne reflète pas notre niveau ?</>,
    title: "BRANDING",
    details: ["Identité visuelle", "Direction artistique", "Design system"]
  },
  {
    question: <>Pourquoi notre présence en ligne <i>ne performe pas ?</i></>,
    title: "DIGITAL",
    details: ["Site web", "E-commerce", "SEO", "Social media"]
  },
  {
    question: <>Comment <i>concrétiser</i> notre idée ?</>,
    title: "DÉVELOPPEMENT",
    details: ["Prototype", "MVP", "Développement sur-mesure"]
  }
];

const tickerItems = [
  "Brand Naming",
  "Identité Visuelle",
  "Direction Artistique",
  "Site E-commerce",
  "Brand Naming",
  "Identité Visuelle",
  "Direction Artistique",
  "Site E-commerce",
];

const Services = () => {
  return (
    <section className="services-section">
      <style>{`
        .services-section {
          background-color: var(--brand-primary);
          padding: 120px 8% 0;
          color: var(--text-main);
        }

        .services-header {
          margin-bottom: 80px;
          border-top: 1px solid rgba(136, 179, 198, 0.2);
          padding-top: 20px;
        }

        .services-eyebrow {
          font-size: 0.8rem;
          letter-spacing: 0.3em;
          color: var(--brand-pale);
          display: block;
          margin-bottom: 1rem;
        }

        .services-main-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          text-transform: uppercase;
          max-width: 900px;
          line-height: 1.1;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .service-column {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }

        .question-text {
          height: 100px;
          max-width: 900px;
          margin: 0 auto;
          display: block;
          text-align: center;
          padding-top: 20px;
          color: var(--bg-secondary);
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          font-weight: 700;
          line-height: 1.5;
          text-transform: none !important;
          letter-spacing: -0.01em;
        }

        .question-text i {
          font-style: italic;
          font-weight: 800;
          color: var(--brand-pale);
          display: inline;
          white-space: nowrap;
          border: none !important;
          text-decoration: none !important;
          padding: 0 2px;
        }

        .question-text i, .question-text em {
          text-decoration: none;
        }

        .service-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(136, 179, 198, 0.1);
          border-radius: 12px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 320px;
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--brand-orange);
        }

        .service-title-container {
          background-color: var(--brand-orange);
          width: 100%;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-title-text {
          color: #ffffff;
          font-size: 1.1rem;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .content-area {
          flex-grow: 1;
          display: flex;
          align-items: center;
          padding: 20px 30px;
        }

        .service-list {
          list-style: none;
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .service-item {
          font-size: 0.9rem;
          font-weight: 400;
          color: var(--text-main);
          text-transform: none;
          letter-spacing: 0.01em;
          position: relative;
          padding-left: 18px;
          margin-bottom: 18px;
          line-height: 1.5;
        }

        .service-item:last-child {
          margin-bottom: 0;
        }

        .service-item::before {
          content: "•";
          color: var(--brand-orange);
          position: absolute;
          left: 0;
          font-weight: 900;
          font-size: 1rem;
          line-height: 1.5;
        }

        .services-cta {
          margin-top: 90px;
          padding: 60px 0;
          border-top: 1px solid rgba(136, 179, 198, 0.15);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          flex-wrap: wrap;
        }

        .services-cta-text {
          font-size: clamp(1.2rem, 2.5vw, 1.6rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.3;
          margin: 0;
          max-width: 540px;
        }

        .services-cta-text em {
          font-style: normal;
          color: var(--brand-pale);
        }

        .services-cta-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          background-color: var(--brand-orange);
          color: #fff;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 16px 32px;
          border-radius: 4px;
          white-space: nowrap;
          transition: all 0.25s ease;
          flex-shrink: 0;
        }

        .services-cta-link:hover {
          background-color: #fff;
          color: var(--brand-orange);
          transform: translateY(-2px);
        }

        .services-cta-arrow {
          font-size: 1rem;
          transition: transform 0.2s ease;
        }

        .services-cta-link:hover .services-cta-arrow {
          transform: translateX(4px);
        }

        .services-ticker {
          width: 100vw;
          margin-left: calc(-8%);
          margin-top: 30px;
          overflow: hidden;
          border-top: 1px solid rgba(136, 179, 198, 0.15);
          border-bottom: 1px solid rgba(136, 179, 198, 0.15);
          padding: 20px 0;
          position: relative;
        }

        .ticker-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: tickerScroll 18s linear infinite;
        }

        .ticker-track:hover {
          animation-play-state: paused;
        }

        .ticker-item {
          display: flex;
          align-items: center;
          gap: 0;
          white-space: nowrap;
        }

        .ticker-label {
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.45);
          padding: 0 40px;
          transition: color 0.3s ease;
        }

        .ticker-label:hover {
          color: var(--brand-orange);
        }

        .ticker-sep {
          color: var(--brand-orange);
          font-size: 1rem;
          opacity: 0.5;
          flex-shrink: 0;
        }

        @keyframes tickerScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-cta {
            flex-direction: column;
            align-items: flex-start;
            gap: 28px;
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
          }
          .services-ticker {
            margin-left: calc(-6%);
          }
        }
      `}</style>

      <div className="services-header">
        <span className="services-eyebrow">SERVICES</span>
        <h2 className="services-main-title">
          CHAQUE PROJET COMMENCE PAR UNE QUESTION.
        </h2>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-column">
            <p className="question-text">{service.question}</p>
            <div className="service-card">
              <div className="service-title-container">
                <span className="service-title-text">{service.title}</span>
              </div>
              <div className="content-area">
                <ul className="service-list">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="service-item">{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA block */}
      {/*}<div className="services-cta">
        <p className="services-cta-text">
          Un besoin précis ?{' '}
          <em>On commence par en parler.</em>
        </p>
        <a href="#contact" className="services-cta-link">
          Démarrer un projet
          <span className="services-cta-arrow">→</span>
        </a>
      </div>*/}

      {/* Scrolling ticker */}
      <div className="services-ticker">
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="ticker-item">
              <span className="ticker-label">{item}</span>
              <span className="ticker-sep">—</span>
            </span>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Services;