import React from 'react';

const Footer = () => {
  const menuLinks = [
    { name: "À Propos", slug: "virgul" },
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
          background: var(--brand-primary, #1a1a1a);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          overflow: hidden;
          position: relative;
          margin-top: 30px;
        }

        .pv-main {
          max-width: 1450px;
          margin: 0 auto;
          padding: 60px 48px 50px;
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1fr 1fr;
          gap: 65px;
          align-items: start;
          position: relative;
        }

        .pv-label {
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #ff6e1e;
          margin: 0 0 14px;
          line-height: 1;
        }

        /* Column separators — min-width:0 prevents grid blowout */
        .pv-main > div:not(:first-child) {
          border-left: 1px solid rgba(255, 255, 255, 0.07);
          padding-left: 36px;
          min-width: 0;
        }

        .pv-brand-col { padding-right: 12px; }

        .pv-tagline {
          font-size: 0.68rem;
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin: 14px 0 28px;
          opacity: 0.8;
        }

        .pv-address {
          font-size: 0.78rem;
          font-weight: 300;
          color: rgba(255,255,255,0.8);
          line-height: 1.65;
          display: block;
          text-decoration: none;
          transition: color 0.3s;
        }
        .pv-address:hover { color: #ff6e1e; }

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
          transition: all 0.3s;
        }
        .pv-nav-list a:hover { color: #fff; padding-left: 5px; }

        /* Manifeste button: fit its text, never overflow column */
        .pv-download-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 18px;
          border-radius: 5px;
          text-decoration: none;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          border: 1px solid #ff6e1e;
          color: #ff6e1e;
          transition: all 0.3s;
          width: fit-content;
          max-width: 100%;
          box-sizing: border-box;
          white-space: nowrap;
          margin-top: 0;
        }
        .pv-download-btn:hover { background: #ff6e1e; color: #fff; }

        .pv-contact-col { display: flex; flex-direction: column; gap: 6px; }

        .pv-contact-link {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: #fff;
          text-decoration: none;
          transition: color 0.3s;
          display: block;
        }
        .pv-contact-link:hover { color: #ff6e1e; }

        .pv-social-grid { display: flex; gap: 10px; margin-top: 4px; }

        .pv-social-link {
          width: 34px; height: 34px;
          border: 1px solid rgba(255,255,255,0.1);
          display: flex; align-items: center; justify-content: center;
          color: #fff; text-decoration: none;
          transition: all 0.3s; border-radius: 4px;
        }
        .pv-social-link:hover { border-color: #ff6e1e; color: #ff6e1e; transform: translateY(-3px); }

        .pv-bottom {
          border-top: 1px solid rgba(255,255,255,0.07);
          padding: 14px 48px;
          background: rgba(0,0,0,0.12);
        }
        .pv-bottom-inner {
          max-width: 1280px; margin: 0 auto;
          display: flex; justify-content: space-between; align-items: center;
        }
        .pv-copy {
          font-size: 0.58rem; color: rgba(255,255,255,0.3);
          letter-spacing: 0.12em; text-align: center; flex: 1;
        }
        .pv-legal { display: flex; }
        .pv-legal a {
          font-size: 0.58rem; color: rgba(255,255,255,0.3);
          text-decoration: none; margin-left: 16px; transition: color 0.3s;
        }
        .pv-legal a:hover { color: rgba(255,255,255,0.7); }

        /* ── Tablet ── */
        @media (max-width: 1024px) {
          .pv-main { grid-template-columns: 1fr 1fr; gap: 0; }
          .pv-main > div:nth-child(odd) {
            border-left: none; padding-left: 0; padding-right: 28px;
          }
          .pv-main > div:nth-child(even) { padding-left: 28px; }
          .pv-main > div:nth-child(3),
          .pv-main > div:nth-child(4) {
            border-top: 1px solid rgba(255,255,255,0.07);
            padding-top: 28px; margin-top: 28px;
          }
          .pv-main > div:nth-child(3) { border-left: none; padding-left: 0; }
        }

        /* ── Mobile ── */
        @media (max-width: 640px) {
          .pv-main { grid-template-columns: 1fr; padding: 40px 24px 36px; gap: 0; }
          .pv-main > div:not(:first-child) {
            border-left: none; padding-left: 0; min-width: unset;
            border-top: 1px solid rgba(255,255,255,0.07);
            padding-top: 24px; margin-top: 24px;
          }
          .pv-main > div:nth-child(odd),
          .pv-main > div:nth-child(even) { padding-right: 0; }
          .pv-main > div:nth-child(3),
          .pv-main > div:nth-child(4) { margin-top: 0; }
          /* Full-width on mobile */
          .pv-download-btn { width: 100%; justify-content: center; }
          .pv-bottom { padding: 14px 24px; }
          .pv-bottom-inner { flex-direction: column; gap: 8px; text-align: center; }
          .pv-legal { justify-content: center; }
          .pv-legal a:first-child { margin-left: 0; }
        }
      `}</style>

      <div className="pv-main">

        {/* Column 1: LOCALISATION */}
        <div className="pv-brand-col">
          <img src="/STACK.webp" alt="Point Virgul" style={{ height: 70, width: 'auto' }} />
          <p className="pv-tagline">Design de précision &amp; Stratégie</p>
          <p className="pv-label">Localisation</p>
          <a
            href="https://maps.google.com/?q=Rue+Reine+Elisabeth+Moulay+Abdellah+Kenitra"
            target="_blank" rel="noopener noreferrer"
            className="pv-address"
          >
            Angle Rue Reine Elisabeth &amp; Moulay Abdellah<br />
            Bureau 14 – Étage 5 — Kénitra
          </a>
        </div>

        {/* Column 2: MENU */}
        <div>
          <p className="pv-label">Index</p>
          <ul className="pv-nav-list">
            {menuLinks.map((link) => (
              <li key={link.slug}><a href={`#${link.slug}`}>{link.name}</a></li>
            ))}
          </ul>
        </div>

        {/* Column 3: EXPLORATION */}
        <div>
          <p className="pv-label">Exploration</p>
          <a href="/brochure.pdf" download className="pv-download-btn">
            <span>Manifeste Point Virgul</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
          </a>

          <div style={{ marginTop: 28 }}>
            <p className="pv-label">Suivez-nous</p>
            <div className="pv-social-grid">
              <a href="https://ma.linkedin.com/company/pointvirgul" target="_blank" rel="noopener noreferrer" className="pv-social-link" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="https://www.instagram.com/agence.virgul/" target="_blank" rel="noopener noreferrer" className="pv-social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Column 4: CONTACT */}
        <div className="pv-contact-col">
          <p className="pv-label">Contact</p>
          <a href="mailto:hello@pointvirgul.com" className="pv-contact-link">hello@pointvirgul.com</a>
          <a href="tel:+212661613471" className="pv-contact-link">+212 6 61 61 34 71</a>
        </div>

      </div>

      <div className="pv-bottom">
        <div className="pv-bottom-inner">
          <p className="pv-copy">© 2026 POINT VIRGUL</p>
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