import React, { useState, useEffect, useRef } from 'react';

const BESOIN_OPTIONS = [
  'Stratégie de marque', 'Identité visuelle & Branding', 'Site web',
  'E-commerce', 'SEO & Performance digitale', 'Social Media & Contenu',
  'Direction Artistique', 'Photo & Vidéo', 'Développement sur-mesure',
  'Accompagnement complet 360°'
];

const MATURITE_OPTIONS = [
  { value: 'idee',       label: "J'ai une idée" },
  { value: 'lancement',  label: "Je lance mon activité" },
  { value: 'evolution',  label: "J'ai une marque existante à faire évoluer" },
  { value: 'rebranding', label: "Je veux un rebranding complet" },
  { value: 'partenaire', label: "Je cherche un partenaire long terme" }
];

const BUDGET_OPTIONS = [
  { value: '10-30k',    label: '10–30k MAD' },
  { value: '30-80k',    label: '30–80k MAD' },
  { value: '80k+',      label: '80k+ MAD' },
  { value: 'a-definir', label: 'À définir ensemble' }
];

const ChevronIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ff4d00" strokeWidth="3" style={{ flexShrink: 0 }}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const CheckIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4">
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

const Req = () => (
  <span style={{ color: '#ff4d00', marginLeft: 4, fontSize: '0.7rem', verticalAlign: 'middle' }}>✦</span>
);

const CustomSelect = ({ label, options, value, onChange, placeholder = 'Sélectionner...', helpText, required }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const selected = options.find(o => o.value === value);

  return (
    <div className="input-group" ref={ref}>
      <label>{label}{required && <Req />}</label>
      <div className="custom-trigger" onClick={() => setOpen(o => !o)}>
        <span style={{ color: selected ? '#fff' : 'rgba(255,255,255,0.3)' }}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronIcon />
      </div>
      {helpText && <p className="field-help">{helpText}</p>}
      {open && (
        <div className="dropdown-list">
          {options.map(opt => {
            const active = opt.value === value;
            return (
              <div
                key={opt.value}
                className={`dropdown-item ${active ? 'active' : ''}`}
                onClick={() => { onChange(opt.value); setOpen(false); }}
              >
                <div className="custom-check">{active && <CheckIcon />}</div>
                {opt.label}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const MultiSelect = ({ label, options, value, onChange, placeholder = 'Sélectionner...', required }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggle = (opt) =>
    onChange(value.includes(opt) ? value.filter(b => b !== opt) : [...value, opt]);

  return (
    <div className="input-group" ref={ref}>
      <label>{label}{required && <Req />}</label>
      <div className="custom-trigger" onClick={() => setOpen(o => !o)}>
        <div className="selected-pills">
          {value.length > 0
            ? value.map(b => <span key={b} className="pill">{b}</span>)
            : <span style={{ opacity: 0.3 }}>{placeholder}</span>}
        </div>
        <ChevronIcon />
      </div>
      {open && (
        <div className="dropdown-list">
          {options.map(opt => {
            const active = value.includes(opt);
            return (
              <div
                key={opt}
                className={`dropdown-item ${active ? 'active' : ''}`}
                onClick={() => toggle(opt)}
              >
                <div className="custom-check">{active && <CheckIcon />}</div>
                {opt}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '', email: '', entreprise: '',
    besoins: [], maturite: '', budget: '', message: '', source: ''
  });
  const [swapped, setSwapped] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setSwapped(rect.top + rect.height / 2 <= window.innerHeight / 2);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const set = (field) => (val) => setFormData(prev => ({ ...prev, [field]: val }));
  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/contact-handler.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (result.success) setSubmitted(true);
  };

  return (
    <section id="contact" className="compact-full-screen" ref={sectionRef}>
      <style>{`
        .compact-full-screen {
          background-color: #0b1c1e;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          padding: 40px 4%;
          box-sizing: border-box;
        }
        .contact-card {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          width: 100%;
          max-width: 1450px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.05);
          overflow: visible;
        }
        .brand-sidebar {
          background-color: #ff4d00;
          padding: 60px 40px;
          display: flex;
          flex-direction: column;
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
          font-size: clamp(2.2rem, 4.5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.05;
          text-transform: uppercase;
          margin: 0;
        }
        .title-primary, .title-secondary {
          display: block;
          transition: color 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .form-area {
          padding: 60px 8%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: #0b1c1e;
        }
        .form-header-text {
          font-size: 2rem;
          font-weight: 800;
          margin-bottom: 8px;
          color: #fff;
          line-height: 1.2;
        }
        .form-legend {
          font-size: 1rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.05em;
          margin-bottom: 32px;
        }
        .form-legend span { color: #ff4d00; margin-right: 4px; }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px 40px;
        }
        .input-group {
          display: flex;
          flex-direction: column;
          gap: 10px;
          position: relative;
        }
        .input-group label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: #ff4d00;
          letter-spacing: 0.2em;
        }
        .input-group input,
        .input-group textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 16px;
          font-size: 1rem;
          color: #ffffff;
          outline: none;
          font-family: inherit;
          border-radius: 0;
          width: 100%;
          box-sizing: border-box;
          transition: border-color 0.2s;
          caret-color: #ff4d00;
        }
        .input-group input::placeholder,
        .input-group textarea::placeholder { color: rgba(255,255,255,0.28); }
        .input-group input:focus,
        .input-group textarea:focus { border-color: rgba(255,77,0,0.5); }

        .input-group select {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0 40px 0 16px;
          min-height: 56px;
          font-size: 1rem;
          color: #ffffff;
          outline: none;
          font-family: inherit;
          border-radius: 0;
          width: 100%;
          box-sizing: border-box;
          cursor: pointer;
          transition: border-color 0.2s;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23ff4d00' stroke-width='3' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          -webkit-text-fill-color: #fff;
        }
        .input-group select:hover { border-color: rgba(255,255,255,0.2); }
        .input-group select:focus { border-color: rgba(255,77,0,0.5); }
        .input-group select option { background-color: #0d2224; color: #fff; }
        .input-group select option[disabled] {
          color: rgba(255,255,255,0.28);
          -webkit-text-fill-color: rgba(255,255,255,0.28);
        }

        .custom-trigger {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 0 16px;
          min-height: 56px;
          font-size: 1rem;
          color: #fff;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          box-sizing: border-box;
          transition: border-color 0.2s;
          user-select: none;
        }
        .custom-trigger:hover { border-color: rgba(255,255,255,0.2); }

        .selected-pills { display: flex; flex-wrap: wrap; gap: 6px; padding: 8px 0; }
        .pill {
          background: #ff4d00;
          color: #fff;
          padding: 3px 10px;
          font-size: 0.68rem;
          font-weight: 800;
          text-transform: uppercase;
        }

        .dropdown-list {
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          background: #0d2224;
          border: 1px solid rgba(255,255,255,0.18);
          z-index: 999;
          max-height: 280px;
          overflow-y: auto;
          box-shadow:
            0 16px 48px rgba(0,0,0,0.75),
            0 4px 16px rgba(0,0,0,0.5),
            0 0 0 1px rgba(255,77,0,0.12);
          scrollbar-width: thin;
          scrollbar-color: rgba(255,77,0,0.4) transparent;
          right: 0;
            width: auto;
            max-width: 100%;
        }
        .dropdown-list::-webkit-scrollbar { width: 4px; }
        .dropdown-list::-webkit-scrollbar-track { background: transparent; }
        .dropdown-list::-webkit-scrollbar-thumb {
          background: rgba(255,77,0,0.4);
          border-radius: 2px;
        }
        .dropdown-list::-webkit-scrollbar-thumb:hover { background: #ff4d00; }

        .dropdown-item {
          padding: 14px 18px;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: background 0.15s;
        }
        .dropdown-item:hover { background: rgba(255,255,255,0.06); }
        .dropdown-item.active { color: #ff4d00; }
        .custom-check {
          width: 16px; height: 16px;
          border: 1.5px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .dropdown-item.active .custom-check { background: #ff4d00; border-color: #ff4d00; }

        .field-help {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.35);
          margin: 0;
          line-height: 1.5;
          font-style: italic;
          letter-spacing: 0.01em;
        }

        .full-width { grid-column: span 2; }

        .btn-submit {
          background-color: #ff4d00;
          color: #fff;
          border: none;
          padding: 22px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          cursor: pointer;
          width: 100%;
          margin-top: 20px;
          font-size: 1rem;
          border-radius: 0;
          font-family: inherit;
          transition: background 0.2s;
        }
        .btn-submit:hover { background: #e04400; }
        .form-promise {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 25px;
          color: #88b3c6;
          font-size: 1.1rem;
          font-weight: 600;
          text-align: center;
        }
        .form-rgpd {
          margin-top: 15px;
          font-size: 0.75rem;
          color: rgba(255,255,255,0.3);
          text-align: center;
        }

        @media (max-width: 1024px) {
          .compact-full-screen { padding: 0; align-items: flex-start; }
          .contact-card { grid-template-columns: 1fr; }
          .brand-sidebar { padding: 40px 24px; text-align: center; }
          .brand-sidebar h2 { font-size: clamp(1.8rem, 7vw, 2.5rem); }
          .form-area { padding: 40px 24px; }
          .form-header-text { font-size: 1.5rem; margin-bottom: 6px; }
          .input-grid { grid-template-columns: 1fr; gap: 20px; }
          .full-width { grid-column: span 1; }
          .dropdown-list { max-height: 220px; }
          .btn-submit { padding: 18px; font-size: 0.9rem; letter-spacing: 0.2em; }
          .form-promise { font-size: 0.95rem; }
        }

        @media (max-width: 480px) {
          .brand-sidebar { padding: 32px 20px; }
          .form-area { padding: 32px 16px; }
          .form-header-text { font-size: 1.3rem; }
          .custom-trigger, .input-group input, .input-group textarea { font-size: 0.95rem; }
          .dropdown-item { font-size: 0.88rem; padding: 12px 14px; }
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
              ET UNE VIRGULE <br /> À VOS SUCCÈS,
            </span>
          </h2>
        </div>

        {submitted ? (
          <div className="form-area" style={{ textAlign: 'center', alignItems: 'center' }}>
            <h3 style={{ fontSize: '3rem', color: '#fff', fontWeight: '900' }}>C'est parti.</h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', margin: '20px 0' }}>
              On revient vers vous sous 24h avec une première lecture de votre projet.
            </p>
            <a href="#portfolio" style={{ color: '#88b3c6', fontWeight: '800', textDecoration: 'none', borderBottom: '2px solid' }}>
              Explorez nos projets →
            </a>
          </div>
        ) : (
          <div className="form-area">
            <h3 className="form-header-text">Votre prochain chapitre commence ici.</h3>
            <p className="form-legend"><span>✦</span> Champs obligatoires</p>

            <form className="input-grid" onSubmit={handleSubmit}>

              <div className="input-group">
                <label>Prénom / Nom <Req /></label>
                <input type="text" name="nom" placeholder="Nom Complet" required onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Email <Req /></label>
                <input type="email" name="email" placeholder="votre@email.com" required onChange={handleChange} />
              </div>

              <div className="input-group">
                <label>Entreprise</label>
                <input type="text" name="entreprise" placeholder="Nom de structure" onChange={handleChange} />
              </div>

              <MultiSelect
                label="Besoin"
                options={BESOIN_OPTIONS}
                value={formData.besoins}
                onChange={set('besoins')}
                required
              />

              <CustomSelect
                label="Où en êtes-vous ?"
                options={MATURITE_OPTIONS}
                value={formData.maturite}
                onChange={set('maturite')}
              />

              <CustomSelect
                label="Budget (MAD)"
                options={BUDGET_OPTIONS}
                value={formData.budget}
                onChange={set('budget')}
                helpText="Cette information nous permet d'ajuster l'envergure de nos recommandations."
              />

              <div className="input-group full-width">
                <label>Comment avez-vous découvert Point Virgul ?</label>
                <select name="source" onChange={handleChange} defaultValue="">
                  <option value="" disabled>Sélectionner...</option>
                  <option value="social">Réseaux sociaux (Instagram / LinkedIn)</option>
                  <option value="reco">Recommandation d'un proche</option>
                  <option value="google">Recherche Google</option>
                  <option value="client">Un client Point Virgul</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div className="input-group full-width">
                <label>Message <Req /></label>
                <textarea name="message" rows="3" placeholder="Parlez-nous de votre projet..." required onChange={handleChange} />
              </div>

              <div className="full-width">
                <button type="submit" className="btn-submit">Démarrer mon projet →</button>
                <div className="form-promise">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  On revient vers vous sous 24h avec une première lecture de votre projet.
                </div>
                <p className="form-rgpd">Vos informations sont confidentielles et ne seront jamais partagées.</p>
              </div>

            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;