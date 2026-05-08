import React, { useState, useEffect, useRef } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    besoins: [],
    maturite: '',
    budget: '',
    message: '',
    source: ''
  });

  const [swapped, setSwapped] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isBesoinOpen, setIsBesoinOpen] = useState(false);

  const sectionRef = useRef(null);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click OR touch (mobile)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsBesoinOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside, { passive: true });
    document.addEventListener('touchstart', handleClickOutside, { passive: true });
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Scroll-based color swap — uses pageYOffset fallback for older Safari
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionMidpoint = rect.top + rect.height / 2;
      const screenMidpoint = viewportHeight / 2;
      setSwapped(sectionMidpoint <= screenMidpoint);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleBesoin = (option) => {
    setFormData((prev) => ({
      ...prev,
      besoins: prev.besoins.includes(option)
        ? prev.besoins.filter((b) => b !== option)
        : [...prev.besoins, option]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const besoinsOptions = [
    'Stratégie de marque', 'Identité visuelle & Branding', 'Site web',
    'E-commerce', 'SEO & Performance digitale', 'Social Media & Contenu',
    'Direction Artistique', 'Photo & Vidéo', 'Développement sur-mesure',
    'Accompagnement complet 360°'
  ];

  const maturiteOptions = [
    { value: 'idee', label: "J'ai une idée" },
    { value: 'lancement', label: "Je lance mon activité" },
    { value: 'evolution', label: "J'ai une marque existante à faire évoluer" },
    { value: 'rebranding', label: "Je veux un rebranding complet" },
    { value: 'partenaire', label: "Je cherche un partenaire long terme" }
  ];

  return (
    <section id="contact" className="compact-full-screen" ref={sectionRef}>
      <style>{`
        .compact-full-screen {
          background-color: #0b1c1e;
          background-color: var(--brand-primary, #0b1c1e);
          display: -webkit-flex;
          display: flex;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-align-items: center;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          min-height: -webkit-fill-available;
          padding: 40px 4%;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        .contact-card {
          display: -ms-grid;
          display: grid;
          -ms-grid-columns: 0.8fr 1.2fr;
          grid-template-columns: 0.8fr 1.2fr;
          width: 100%;
          max-width: 1450px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .brand-sidebar {
          background-color: #ff4d00;
          background-color: var(--brand-orange, #ff4d00);
          padding: 60px 40px;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: column;
          flex-direction: column;
          -webkit-justify-content: center;
          justify-content: center;
          color: #fff;
        }

        .sidebar-agency {
          font-weight: 900;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .brand-sidebar h2 {
          font-size: 3.5rem;
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.05;
          text-transform: uppercase;
          margin: 0;
        }

        .title-primary, .title-secondary {
          display: block;
          -webkit-transition: color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transition: color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .form-area {
          padding: 60px 8%;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: column;
          flex-direction: column;
          -webkit-justify-content: center;
          justify-content: center;
        }

        .form-header-text {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 40px;
          color: #fff;
          line-height: 1.2;
        }

        .input-grid {
          display: -ms-grid;
          display: grid;
          -ms-grid-columns: 1fr 1fr;
          grid-template-columns: 1fr 1fr;
          gap: 25px 40px;
        }

        .input-group {
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: column;
          flex-direction: column;
          gap: 10px;
          position: relative;
        }

        .input-group label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #ff4d00;
          color: var(--brand-orange, #ff4d00);
          letter-spacing: 0.2em;
        }

        .input-group input,
        .input-group select,
        .input-group textarea,
        .multi-select-trigger {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px;
          font-size: 1rem;
          color: #fff;
          /* iOS Safari fix: select/input text color requires this */
          -webkit-text-fill-color: #fff;
          -webkit-transition: border-color 0.3s, background 0.3s;
          transition: border-color 0.3s, background 0.3s;
          outline: none;
          font-family: inherit;
          /* Prevent iOS zoom on focus (font-size must be >= 16px equivalent) */
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          border-radius: 0;
        }

        /* Restore placeholder opacity killed by -webkit-text-fill-color */
        .input-group input::-webkit-input-placeholder,
        .input-group textarea::-webkit-input-placeholder { -webkit-text-fill-color: rgba(255,255,255,0.3); }
        .input-group input::-moz-placeholder,
        .input-group textarea::-moz-placeholder { color: rgba(255,255,255,0.3); opacity: 1; }
        .input-group input::placeholder,
        .input-group textarea::placeholder { color: rgba(255,255,255,0.3); -webkit-text-fill-color: rgba(255,255,255,0.3); }

        /* Select arrow re-add after appearance:none */
        .input-group select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ffffff' stroke-width='3'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }

        /* Fix select option colors on supported browsers */
        .input-group select option {
          background-color: #0d1e21;
          color: #fff;
        }

        .input-group textarea {
          resize: vertical;
          min-height: 80px;
        }

        .multi-select-trigger {
          cursor: pointer;
          display: -webkit-flex;
          display: flex;
          -webkit-justify-content: space-between;
          justify-content: space-between;
          -webkit-align-items: center;
          align-items: center;
          min-height: 56px;
          /* Override -webkit-text-fill-color for the trigger div */
          -webkit-text-fill-color: initial;
          color: #fff;
        }

        .selected-pills {
          display: -webkit-flex;
          display: flex;
          -webkit-flex-wrap: wrap;
          flex-wrap: wrap;
          gap: 6px;
        }

        .pill {
          background: #ff4d00;
          background: var(--brand-orange, #ff4d00);
          color: #fff;
          padding: 2px 10px;
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .dropdown-list {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: #0d1e21;
          border: 1px solid rgba(255, 255, 255, 0.2);
          z-index: 50;
          margin-top: 5px;
          max-height: 280px;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
          box-shadow: 0 15px 35px rgba(0,0,0,0.4);
        }

        .dropdown-item {
          padding: 14px 18px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          gap: 12px;
          /* Prevent iOS text-size-adjust on tap */
          -webkit-tap-highlight-color: transparent;
        }

        .dropdown-item:hover { background: rgba(255, 255, 255, 0.05); color: #fff; }
        .dropdown-item.active { color: #ff4d00; color: var(--brand-orange, #ff4d00); }

        .custom-check {
          width: 16px;
          height: 16px;
          -webkit-flex-shrink: 0;
          flex-shrink: 0;
          border: 1.5px solid rgba(255, 255, 255, 0.3);
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          -webkit-justify-content: center;
          justify-content: center;
        }

        .dropdown-item.active .custom-check {
          background: #ff4d00;
          background: var(--brand-orange, #ff4d00);
          border-color: #ff4d00;
          border-color: var(--brand-orange, #ff4d00);
        }

        .full-width { grid-column: span 2; }

        .btn-submit {
          background-color: #ff4d00;
          background-color: var(--brand-orange, #ff4d00);
          color: #fff;
          -webkit-text-fill-color: #fff;
          border: none;
          padding: 22px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          cursor: pointer;
          -webkit-transition: background-color 0.4s, color 0.4s;
          transition: background-color 0.4s, color 0.4s;
          width: 100%;
          margin-top: 20px;
          font-size: 1rem;
          font-family: inherit;
          border-radius: 0;
          -webkit-appearance: none;
          appearance: none;
          /* Prevent tap highlight on mobile */
          -webkit-tap-highlight-color: transparent;
        }

        .btn-submit:hover { background-color: #fff; color: #000; -webkit-text-fill-color: #000; }

        .form-promise {
          display: -webkit-flex;
          display: flex;
          -webkit-align-items: center;
          align-items: center;
          -webkit-justify-content: center;
          justify-content: center;
          gap: 12px;
          margin-top: 25px;
          color: #88b3c6;
          color: var(--brand-pale, #88b3c6);
          font-size: 1.1rem;
          font-weight: 600;
        }

        .form-rgpd {
          margin-top: 15px;
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.3);
          text-align: center;
        }

        .confirmation-box {
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: column;
          flex-direction: column;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-align-items: flex-start;
          align-items: flex-start;
          gap: 25px;
          padding: 60px 8%;
        }

        .confirmation-title {
          font-size: 4.5rem;
          font-size: clamp(3rem, 6vw, 4.5rem);
          font-weight: 900;
          color: #fff;
          margin: 0;
        }

        .confirmation-body {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
          max-width: 550px;
        }

        .confirmation-link {
          color: #88b3c6;
          color: var(--brand-pale, #88b3c6);
          font-weight: 800;
          text-transform: uppercase;
          text-decoration: none;
          border-bottom: 2px solid;
          padding-bottom: 4px;
          font-size: 1rem;
          -webkit-transition: color 0.3s;
          transition: color 0.3s;
        }

        .confirmation-link:hover { color: #fff; }

        @media (max-width: 1024px) {
          .contact-card {
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
          }
          .input-grid {
            -ms-grid-columns: 1fr;
            grid-template-columns: 1fr;
          }
          .full-width { grid-column: span 1; }
        }
      `}</style>

      <div className="contact-card">
        <div className="brand-sidebar">
          <span className="sidebar-agency">Point Virgul</span>
          <h2>
            <span className="title-primary" style={{ color: swapped ? 'rgba(255,255,255,0.3)' : '#fff' }}>
              METTEZ UN <br /> POINT FINAL <br /> À VOS DOUTES.
            </span>
            <span className="title-secondary" style={{ color: swapped ? '#fff' : 'rgba(255,255,255,0.3)' }}>
              ET UNE VIRGULE À VOS SUCCÈS,
            </span>
          </h2>
        </div>

        {submitted ? (
          <div className="confirmation-box">
            <h3 className="confirmation-title">C'est parti.</h3>
            <p className="confirmation-body">
              On revient vers vous sous 24h avec une première lecture de votre projet.<br /><br />
              Pas de call à froid, pas de pitch générique — on arrive préparés.
            </p>
            <a href="#portfolio" className="confirmation-link">
              En attendant, explorez nos projets →
            </a>
          </div>
        ) : (
          <div className="form-area">
            <h3 className="form-header-text">Votre prochain chapitre commence ici.</h3>

            <form className="input-grid" onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Prénom / Nom</label>
                <input type="text" name="nom" placeholder="Nom Complet" required onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="votre@email.com" required onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Entreprise</label>
                <input type="text" name="entreprise" placeholder="Nom de structure" onChange={handleChange} />
              </div>

              <div className="input-group" ref={dropdownRef}>
                <label>Besoin</label>
                <div className="multi-select-trigger" onClick={() => setIsBesoinOpen(!isBesoinOpen)}>
                  <div className="selected-pills">
                    {formData.besoins.length > 0 ? (
                      formData.besoins.map(b => <span key={b} className="pill">{b}</span>)
                    ) : (
                      <span style={{ opacity: 0.3, WebkitTextFillColor: 'initial' }}>Sélectionner...</span>
                    )}
                  </div>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </div>
                {isBesoinOpen && (
                  <div className="dropdown-list">
                    {besoinsOptions.map(opt => (
                      <div
                        key={opt}
                        className={`dropdown-item ${formData.besoins.includes(opt) ? 'active' : ''}`}
                        onClick={() => toggleBesoin(opt)}
                        onTouchEnd={(e) => { e.preventDefault(); toggleBesoin(opt); }}
                      >
                        <div className="custom-check">
                          {formData.besoins.includes(opt) && (
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
                              <path d="M20 6L9 17l-5-5" />
                            </svg>
                          )}
                        </div>
                        {opt}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="input-group">
                <label>Où en êtes-vous ?</label>
                <select name="maturite" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Sélectionner...</option>
                  {maturiteOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
              </div>

              <div className="input-group">
                <label>Budget (MAD)</label>
                <select name="budget" onChange={handleChange} defaultValue="">
                  <option value="" disabled>Sélectionner...</option>
                  <option value="10-30k">10–30k</option>
                  <option value="30-80k">30–80k</option>
                  <option value="80k+">80k+</option>
                </select>
              </div>

              <div className="input-group full-width">
                <label>Message</label>
                <textarea
                  name="message"
                  rows="3"
                  placeholder="Parlez-nous de votre projet, vos objectifs, vos contraintes, votre deadline si vous en avez une..."
                  onChange={handleChange}
                />
              </div>

              <div className="input-group full-width">
                <label>Comment nous avez-vous trouvés ?</label>
                <select name="source" onChange={handleChange} defaultValue="">
                  <option value="" disabled>Sélectionner...</option>
                  <option value="social">Réseaux sociaux (Instagram / LinkedIn)</option>
                  <option value="reco">Recommandation d'un proche</option>
                  <option value="google">Recherche Google</option>
                  <option value="client">Un client Point Virgul</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="full-width">
                <button type="submit" className="btn-submit">Démarrer mon projet →</button>

                <div className="form-promise">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  On revient vers vous sous 24h avec une première lecture de votre projet.
                </div>

                <p className="form-rgpd">
                  Vos informations sont confidentielles et ne seront jamais partagées.
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;