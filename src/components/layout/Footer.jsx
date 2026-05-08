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
          background: var(--brand-primary);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
          margin-top: 40px;
        }

        .pv-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 48px;
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 1fr;
          gap: 60px;
          position: relative;
        }

        .pv-brand-col {
          border-right: 1px solid rgba(255,255,255,0.07);
          padding-right: 20px;
        }

        .pv-tagline {
          font-size: 0.7rem;
          font-weight: 300;
          color: rgba(255,255,255,0.4);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 12px 0 24px;
        }

        .pv-label {
          font-size: 0.6rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #ff6e1e;
          margin: 0 0 10px;
        }

        .pv-address {
          font-size: 0.8rem;
          font-weight: 300;
          color: rgba(255,255,255,0.65);
          line-height: 1.6;
          margin-bottom: 20px;
          display: block;
          text-decoration: none;
        }

        .pv-phone-link {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.9rem;
          color: #fff;
          text-decoration: none;
          transition: color 0.2s;
        }

        .pv-phone-link:hover { color: #ff6e1e; }

        .pv-nav-list { list-style: none; padding: 0; margin: 0; }
        .pv-nav-list li { border-bottom: 1px solid rgba(255,255,255,0.06); }
        .pv-nav-list a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          font-size: 0.85rem;
          transition: all 0.2s;
        }
        .pv-nav-list a:hover { color: #fff; padding-left: 5px; }

        .pv-right-col {
          display: flex;
          flex-direction: column;
          gap: 25px;
          align-items: flex-start;
        }

        .pv-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 12px 20px;
          border-radius: 4px;
          text-decoration: none;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          border: 1px solid #ff6e1e;
          color: #ff6e1e;
          transition: all 0.3s;
          width: 100%;
          justify-content: center;
        }

        .pv-download-btn:hover {
          background: #ff6e1e;
          color: #fff;
        }

        .pv-social-grid {
          display: flex;
          gap: 12px;
        }

        .pv-social-link {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s;
          border-radius: 4px;
        }

        .pv-social-link:hover {
          border-color: #ff6e1e;
          color: #ff6e1e;
          transform: translateY(-3px);
        }

        .pv-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 15px 48px;
          background: rgba(0,0,0,0.1);
        }
        .pv-bottom-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .pv-copy { font-size: 0.6rem; color: rgba(255,255,255,0.3); letter-spacing: 0.1em; }

        .pv-legal a {
          font-size: 0.6rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          margin-left: 15px;
        }

        @media (max-width: 1024px) {
          .pv-main { grid-template-columns: 1fr; gap: 40px; }
          .pv-brand-col { border-right: none; padding-right: 0; }
        }
      `}</style>

      <div className="pv-main">
        {/* Column 1: Branding & Contact */}
        <div className="pv-brand-col">
          <img src="/STACK.webp" alt="Point Virgul" style={{ height: 70, width: 'auto', marginBottom: '1rem' }} />
          <p className="pv-tagline">Design de précision & Stratégie</p>

          <p className="pv-label">Localisation</p>
          <a href="https://maps.google.com/?q=Rue+Reine+Elisabeth+Moulay+Abdellah+Kenitra"
             target="_blank"
             rel="noopener noreferrer"
             className="pv-address">
            Angle Rue Reine Elisabeth & Moulay Abdellah<br />
            Bureau 14 – Étage 5 — Kénitra
          </a>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <a href="mailto:hello@pointvirgul.com" className="pv-phone-link">hello@pointvirgul.com</a>
            <a href="tel:+212661613471" className="pv-phone-link">+212 6 61 61 34 71</a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="pv-nav-col">
          <p className="pv-label">Menu</p>
          <ul className="pv-nav-list">
            {quickLinks.map((link) => (
              <li key={link.slug}><a href={`#${link.slug}`}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: Actions & Socials */}
        <div className="pv-right-col">
          <div style={{ width: '100%' }}>
            <p className="pv-label">Ressources</p>
            <a href="/brochure.pdf" download className="pv-download-btn">
               <span>Brochure PDF</span>
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                 <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
               </svg>
            </a>
          </div>

          <div>
            <p className="pv-label">Suivez-nous</p>
            <div className="pv-social-grid">
              <a href="https://ma.linkedin.com/company/pointvirgul" target="_blank" rel="noopener noreferrer" className="pv-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://www.instagram.com/agence.virgul/" target="_blank" rel="noopener noreferrer" className="pv-social-link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pv-bottom">
        <div className="pv-bottom-inner">
          <p className="pv-copy">© 2026 POINT VIRGUL. KENITRA, MA.</p>
          <div className="pv-legal">
            {legalLinks.map((link) => (
              <a key={link.slug} href={`#${link.slug}`}>{link.name}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;