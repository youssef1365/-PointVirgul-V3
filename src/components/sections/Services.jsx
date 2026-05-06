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

const Services = () => {
  return (
    <section className="services-section">
      <style>{`
        .services-section {
          background-color: var(--brand-primary);
          padding: 120px 8%;
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
          padding: 20px 40px; /* Extra padding for bullets */
        }

        .service-list {
          list-style: none; /* Custom bullets for better control */
          padding: 0;
          margin: 0;
          width: 100%;
        }

        .service-item {
          font-size: 0.85rem;
          font-weight: 700;
          line-height: 2;
          color: var(--text-main);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          position: relative;
          padding-left: 20px;
          margin-bottom: 8px;
        }

        /* The bullet point */
        .service-item::before {
          content: "•";
          color: var(--brand-orange);
          position: absolute;
          left: 0;
          font-weight: 900;
          font-size: 1.2rem;
        }

        .services-footer {
          margin-top: 100px;
          text-align: center;
        }

        .footer-tagline {
          font-size: 1.2rem;
          font-weight: 900;
          color: var(--brand-pale);
          margin-bottom: 0.8rem;
          text-transform: uppercase;
        }

        .footer-main-text {
          font-size: clamp(1.4rem, 3vw, 2.2rem);
          font-weight: 900;
          text-transform: uppercase;
          color: var(--text-main);
        }

        @media (max-width: 1100px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .services-grid {
            grid-template-columns: 1fr;
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
                    <li key={idx} className="service-item">
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default Services;