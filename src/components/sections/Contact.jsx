import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    entreprise: '',
    natureBesoin: '',
    maturite: '',
    budget: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="compact-full-screen">
      <style>{`
        .compact-full-screen {
          background-color: var(--brand-primary);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          min-height: calc(100vh - 80px);
          padding: 2% 4%; /* Reduced outer padding by 10% */
          box-sizing: border-box;
        }

        .contact-card {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          width: 100%;
          max-width: 1450px;
          height: auto;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          overflow: hidden;
        }

        .brand-sidebar {
          background-color: var(--brand-orange);
          padding: 50px 45px; /* Scaled down internal padding */
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
        }

        .sidebar-agency {
          font-weight: 900;
          font-size: 0.95rem; /* Scaled font size */
          text-transform: uppercase;
          letter-spacing: 0.35em;
          margin-bottom: 1.8rem;
        }

        .brand-sidebar h2 {
          font-size: clamp(2rem, 4vw, 3.2rem); /* Scaled title size */
          font-weight: 900;
          line-height: 1.05;
          text-transform: uppercase;
          margin: 0;
        }

        /* --- Form Area --- */
        .form-area {
          padding: 50px 7%; /* Reduced internal horizontal padding */
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .form-header-text {
          font-size: 1.9rem; /* Scaled header */
          font-weight: 800;
          margin-bottom: 35px;
          color: #fff;
        }

        .input-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px 40px; /* Tightened grid gaps */
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .input-group label {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          color: var(--brand-orange);
          letter-spacing: 0.18em;
        }

        .input-group input,
        .input-group select,
        .input-group textarea {
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 14px; /* Reduced field height */
          font-size: 0.95rem;
          color: #fff;
          transition: 0.3s ease;
        }

        .input-group select option {
          background-color: #0b1c1e;
          color: #fff;
        }

        .input-group input:focus,
        .input-group select:focus,
        .input-group textarea:focus {
          outline: none;
          border-color: #fff;
          background: rgba(255, 255, 255, 0.08);
        }

        .full-width { grid-column: span 2; }

        .btn-submit {
          background-color: var(--brand-orange);
          color: #fff;
          border: none;
          padding: 18px; /* Slightly more compact button */
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          cursor: pointer;
          transition: 0.3s;
          width: 100%;
          margin-top: 15px;
        }

        .btn-submit:hover {
          background-color: #fff;
          color: #000;
        }

        .form-follow-up {
          margin-top: 20px;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          text-align: center;
          line-height: 1.4;
        }

        .form-follow-up strong {
          color: var(--brand-orange);
          font-weight: 700;
        }

        @media (max-width: 1024px) {
          .contact-card { grid-template-columns: 1fr; width: 100%; }
          .form-area, .brand-sidebar { padding: 40px; }
        }

        @media (max-width: 768px) {
          .input-grid { grid-template-columns: 1fr; gap: 15px; }
          .full-width { grid-column: span 1; }
        }
      `}</style>

      <div className="contact-card">
        <div className="brand-sidebar">
          <span className="sidebar-agency">Point Virgul</span>
          <h2>
            METTEZ UN <br />
            POINT FINAL <br />
            À VOS DOUTES.
            <br />
            <span style={{opacity: 0.4}}>ET UNE VIRGULE À VOS SUCCÈS,</span>
          </h2>
        </div>

        <div className="form-area">
          <h3 className="form-header-text">On en parle ?</h3>

          <form className="input-grid" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>Prénom / Nom</label>
              <input type="text" name="nom" placeholder="Nom Complet" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" name="email" placeholder="votre@email.com" onChange={handleChange} required />
            </div>

            <div className="input-group">
              <label>Entreprise</label>
              <input type="text" name="entreprise" placeholder="Nom de structure" onChange={handleChange} />
            </div>

            <div className="input-group">
              <label>Besoin</label>
              <select name="natureBesoin" onChange={handleChange} required>
                <option value="">Sélectionner...</option>
                <option value="branding">Branding</option>
                <option value="web">Web / Digital</option>
                <option value="social">Social Media</option>
                <option value="seo">SEO / Performance</option>
              </select>
            </div>

            <div className="input-group">
              <label>Maturité</label>
              <select name="maturite" onChange={handleChange} required>
                <option value="">Sélectionner...</option>
                <option value="idee">Idée exploratoire</option>
                <option value="structuration">En cours</option>
                <option value="urgent">Besoin urgent</option>
              </select>
            </div>

            <div className="input-group">
              <label>Budget (MAD)</label>
              <select name="budget" onChange={handleChange}>
                <option value="">Sélectionner...</option>
                <option value="10-30k">10–30k</option>
                <option value="30-80k">30–80k</option>
                <option value="80k+">80k+</option>
              </select>
            </div>

            <div className="input-group full-width">
              <label>Message</label>
              <textarea name="message" rows="3" placeholder="Décrivez vos objectifs..." onChange={handleChange}></textarea>
            </div>

            <div className="full-width">
              <button type="submit" className="btn-submit">
                Envoyer ma demande
              </button>
              <p className="form-follow-up">
                <strong>"Nous revenons vers vous avec une première lecture de votre projet avant le call."</strong>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;