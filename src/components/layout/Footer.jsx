import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: "À Propos", slug: "about-us" },
    { name: "Services", slug: "services" },
    { name: "Portfolio", slug: "portfolio" },
    { name: "Contact", slug: "contact" }
  ];

  const legalLinks = [
    { name: "Confidentialité", slug: "privacy-policy" },
    { name: "Mentions légales", slug: "terms-conditions" }
  ];

  return (
    <footer className="pv-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        .pv-footer {
          background: var(--brand-primary);;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
          margin-top: 60px;
        }

        .pv-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: var(--brand-primary);
          pointer-events: none;
        }

        .pv-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 48px 70px;
          display: grid;
          grid-template-columns: 1.6fr 1fr;
          gap: 0;
          position: relative;
        }

        .pv-brand-col {
          padding-right: 72px;
          border-right: 1px solid rgba(255,255,255,0.07);
        }

        .pv-wordmark {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 2.2rem;
          letter-spacing: -0.03em;
          color: #fff;
          margin: 0 0 6px;
          line-height: 2;
        }

        .pv-wordmark span {
          color: #ff6e1e;
        }

        .pv-tagline {
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin: 0 0 52px;
        }

        .pv-contact-block {
          margin-bottom: 44px;
        }

        .pv-label {
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ff6e1e;
          margin: 0 0 8px;
        }

        .pv-address {
          font-size: 0.875rem;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.7;
          margin: 0 0 24px;
        }

        .pv-phone-link {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 1.1rem;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.01em;
          transition: color 0.2s;
          display: inline-block;
          margin-bottom: 40px;
        }

        .pv-phone-link:hover {
          color: #ff6e1e;
        }

        .pv-email-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 14px 24px;
          border-radius: 4px;
          text-decoration: none;
          color: #fff;
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }

        .pv-email-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: #ff6e1e;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }

        .pv-email-btn:hover::before {
          transform: scaleX(1);
        }

        .pv-email-btn:hover {
          border-color: #ff6e1e;
        }

        .pv-email-btn-text {
          position: relative;
          z-index: 1;
        }

        .pv-arrow {
          position: relative;
          z-index: 1;
          font-size: 1rem;
          transition: transform 0.2s;
        }

        .pv-email-btn:hover .pv-arrow {
          transform: translateX(4px);
        }

        .pv-links-col {
          padding-left: 72px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pv-nav-section {
          margin-bottom: 48px;
        }

        .pv-divider {
          width: 32px;
          height: 2px;
          background: #ff6e1e;
          margin-bottom: 18px;
          border-radius: 1px;
        }

        .pv-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .pv-nav-list li {
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }

        .pv-nav-list a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 300;
          transition: all 0.2s;
          letter-spacing: 0.01em;
        }

        .pv-nav-list a:hover {
          color: #fff;
          padding-left: 6px;
        }

        .pv-nav-list a::after {
          content: '→';
          opacity: 0;
          transition: opacity 0.2s;
          font-size: 0.8rem;
          color: #ff6e1e;
        }

        .pv-nav-list a:hover::after {
          opacity: 1;
        }

        .pv-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 20px 48px;
        }

        .pv-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .pv-copy {
          font-size: 0.7rem;
          font-weight: 400;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.08em;
          margin: 0;
        }

        .pv-socials {
          display: flex;
          gap: 20px;
        }

        .pv-socials a {
          font-size: 0.68rem;
          font-weight: 500;
          letter-spacing: 0.15em;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          text-transform: uppercase;
          transition: color 0.2s;
          position: relative;
        }

        .pv-socials a::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1px;
          background: #ff6e1e;
          transition: width 0.25s;
        }

        .pv-socials a:hover {
          color: #fff;
        }

        .pv-socials a:hover::after {
          width: 100%;
        }

        .pv-legal {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .pv-legal a {
          font-size: 0.68rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s;
          letter-spacing: 0.04em;
        }

        .pv-legal a:hover {
          color: rgba(255,255,255,0.7);
        }

        .pv-dot {
          width: 2px;
          height: 2px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          display: inline-block;
        }

        @media (max-width: 1024px) {
          .pv-main {
            grid-template-columns: 1fr;
            padding: 70px 36px 60px;
          }
          .pv-brand-col {
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            padding-right: 0;
            padding-bottom: 56px;
            margin-bottom: 56px;
          }
          .pv-links-col {
            padding-left: 0;
          }
        }

        @media (max-width: 768px) {
          .pv-main {
            padding: 60px 24px 50px;
          }
          .pv-bottom {
            padding: 20px 24px;
          }
          .pv-bottom-inner {
            flex-direction: column-reverse;
            gap: 20px;
            text-align: center;
          }
          .pv-socials a::after,
          .pv-legal {
            justify-content: center;
          }
        }
      `}</style>

      <div className="pv-main">
        <div className="pv-brand-col">
          <img src="/STACK.webp" alt="Point Virgul" style={{ height: 150, width: 270, marginBottom: '1.5rem' }} />
          {/*<h2 className="pv-wordmark">POINT VIRGUL<span>;</span></h2>*/}
          <p className="pv-tagline">Expériences digitales &amp; design de précision</p>

          <div className="pv-contact-block">
            <p className="pv-label">Adresse</p>
            <a href="https://www.google.com/maps/dir//Agence+Point+Virgul,+Bureau+N%C2%BA14+%C3%89tage+5,+Angle+Rue+Reine+%C3%89lisabeth+Et,+Rue+Moulay+Abdellah,+K%C3%A9nitra+14000/@34.2668978,-6.6003798,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x646f8f7a260037e9:0xd2553625b905bcf4!2m2!1d-6.5831285!2d34.2609114?hl=fr-MA&entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="pv-address"
              style={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              Angle Rue Reine Elisabeth &amp; Rue Moulay Abdellah<br />
              Bureau 14 – Étage 5 — Kénitra, Maroc
            </a>

            <p className="pv-label">Téléphone</p>
            <a href="tel:+212661613471" className="pv-phone-link">+212 6 61 61 34 71</a>
          </div>

          <a href="mailto:hello@pointvirgul.com" className="pv-email-btn">
            <span className="pv-email-btn-text">hello@pointvirgul.com</span>
            <span className="pv-arrow">→</span>
          </a>
        </div>

        <div className="pv-links-col">
          <div className="pv-nav-section">
            <div className="pv-divider" />
            <p className="pv-label">Navigation</p>
            <ul className="pv-nav-list">
              {quickLinks.map((link) => (
                <li key={link.slug}>
                  <a href={`#${link.slug}`}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="pv-bottom">
        <div className="pv-bottom-inner">
          <p className="pv-copy">© 2026 POINT VIRGUL. TOUS DROITS RÉSERVÉS.</p>

          <div className="pv-socials">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>

          <div className="pv-legal">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.slug}>
                <a href={`#${link.slug}`}>{link.name}</a>
                {index < legalLinks.length - 1 && <span className="pv-dot" />}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;