import React from 'react';
/*import logoImage from '../../assets/agencylogo.png';*/

const Footer = () => {
  const quickLinks = [
    "About Us",
    "Services",
    "Portfolio",
    "Contact"
  ];

  const legalLinks = [
    "Privacy Policy",
    "Terms & Conditions",
    "Cookie Policy",
    "Refund Policy"
  ];

  return (
    <footer className="main-footer">
      <style>{`
        .main-footer {
          background-color: var(--charcoal);
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.5;
          margin-top: 60px;
        }

        .footer-main-section {
          padding: 100px 5% 80px 5%;
          max-width: 1600px;
          margin: 0 auto;
        }

        .footer-brand img {
          height: 110px;
          width: auto;
          display: block;
          margin-bottom: 1.5rem;
          transition: opacity 0.3s ease;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr; /* Adjusted to 2 columns */
          gap: 0;
        }

        .footer-brand {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding-right: 80px;
          padding-bottom: 40px;
        }

        .footer-links {
          padding-left: 80px;
          padding-bottom: 40px;
        }

        .footer-contact p {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 15px;
          text-transform: uppercase;
        }

        .footer-contact a {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-contact a:hover {
          color: var(--brand-orange);
        }

        .footer-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          background-color: #ffffff;
          color: #000000;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          font-weight: 700;
          font-size: 0.85rem;
          margin-top: 30px;
          width: fit-content;
          min-width: 240px;
          transition: all 0.3s ease;
        }

        .footer-cta-btn:hover {
          background-color: var(--brand-orange);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .footer-column-title {
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          letter-spacing: 0.05em;
          color: var(--brand-orange);
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr 1fr; /* Split links into two sub-columns */
          gap: 10px 40px;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-size: 0.95rem;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: var(--brand-orange);
        }

        .footer-bottom-section {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 30px 5%;
        }

        .footer-bottom-content {
          max-width: 1600px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.5);
        }

        .social-links {
          display: flex;
          gap: 25px;
        }

        .social-links a {
          color: #fff;
          text-decoration: none;
          letter-spacing: 0.05em;
          transition: 0.3s;
        }

        .social-links a:hover {
          color: var(--brand-orange);
        }

        .separator {
          margin: 0 8px;
          opacity: 0.3;
        }

        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand {
            border-right: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            padding-right: 0;
            padding-bottom: 50px;
          }
          .footer-links { padding-left: 0; padding-top: 50px; }
        }

        @media (max-width: 768px) {
          .footer-links ul { grid-template-columns: 1fr; }
          .footer-bottom-content {
            flex-direction: column-reverse;
            gap: 25px;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-main-section">
        <div className="footer-grid">
          <div className="footer-brand">
            {/*<img src={logoImage} alt="Point Virgul Logo" />*/}
            <p className="footer-tagline">Authentic digital experiences crafted with precision.</p>

            <div className="footer-contact">
              <p className="location">BASÉ À KENITRA, MAROC</p>
              <p className="phone"><a href="tel:+212...">(+212) ...</a></p>
              <p className="email"><a href="mailto:hello@pointvirgul.com">HELLO@POINTVIRGUL.COM</a></p>
            </div>

            <a href="/contact" className="footer-cta-btn">
              <span>LET'S WORK TOGETHER</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="footer-links">
            <h3 className="footer-column-title">QUICK LINKS</h3>
            <ul>
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom-section">
        <div className="footer-bottom-content">
          <div className="social-links">
            <a href="#facebook">FACEBOOK</a>
            <a href="#instagram">INSTAGRAM</a>
            <a href="#youtube">YOUTUBE</a>
            <a href="#linkedin">LINKEDIN</a>
          </div>

          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link}>
                <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>{link}</a>
                {index < legalLinks.length - 1 && <span className="separator">·</span>}
              </React.Fragment>
            ))}
          </div>

          <p className="copyright">&copy; 2026 POINTVIRGUL. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;