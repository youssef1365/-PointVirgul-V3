import React from 'react';
import { motion } from 'framer-motion';

const SemicolonSearch = () => (
  <svg width="70" height="70" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g
      variants={{ hover: { rotate: 180 } }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
      style={{ originX: "50%", originY: "35%", transformBox: "fill-box" }}
    >
      <path
        d="M26 8 C26 2 34 2 34 8 C34 14 28 20 25 24"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        fill="rgba(255,102,0,0.15)"
      />
      <line x1="25" y1="24" x2="18" y2="31" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </motion.g>
    <circle cx="26" cy="42" r="4" fill="currentColor" />
  </svg>
);

const SemicolonTarget = () => (
  <svg width="70" height="70" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="14" r="9" stroke="currentColor" strokeWidth="5"/>
    <circle cx="26" cy="14" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="26" cy="14" r="1.5" fill="currentColor"/>
    <line x1="26" y1="5" x2="26" y2="2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="26" y1="24" x2="26" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="35" y1="14" x2="39" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="13" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <motion.path
      d="M22 41 C22 37 30 37 30 41 C30 45 26 49 24 51"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      variants={{ hover: { rotate: 180 } }}
      style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
    />
  </svg>
);

const SemicolonZap = () => (
  <svg width="70" height="70" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="26" cy="13" r="5.5" fill="currentColor"/>
    <motion.path
      d="M29 24 L23 33 L27 33 L24 43 L34 30 L29 30 L33 24 Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.5"
      strokeLinejoin="round"
      variants={{ hover: { rotate: 180 } }}
      style={{ originX: "50%", originY: "50%", transformBox: "fill-box" }}
      transition={{ type: "spring", stiffness: 260, damping: 25 }}
    />
  </svg>
);

const steps = [
  { title: "ON COMPREND", icon: <SemicolonSearch />, description: "ON POSE LES BONNES QUESTIONS POUR STRUCTURER CE QUI NE L'EST PAS." },
  { title: "ON ALIGNE", icon: <SemicolonTarget />, description: "ON TRANSFORME VOS ENJEUX EN UNE VISION CLAIRE ET ACTIONNABLE." },
  { title: "ON EXÉCUTE", icon: <SemicolonZap />, description: "ON CONCRÉTISE VOS IDÉES EN RÉSULTATS, RAPIDEMENT ET EFFICACEMENT." }
];

export default function Methodology() {
  return (
    <section className="section-container methodology-section">
      <style>{`
        .methodology-section {
          background-color: var(--brand-primary);
          color: var(--text-main);
          padding: 100px 0;
          overflow: hidden;
        }

        .header-line {
          width: 60px;
          height: 2px;
          background: var(--brand-orange);
          margin-bottom: 2rem;
        }

        .main-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          font-weight: 900;
          text-transform: uppercase;
          margin: 0 0 6rem 0;
          line-height: 1.1;
        }

        .main-title span {
          color: var(--brand-orange);
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 3rem; /* Reduced to bring footer closer */
        }

        .step-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .icon-wrapper {
          color: var(--brand-orange);
          margin-bottom: 2rem;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .step-title {
          font-weight: 900;
          letter-spacing: 0.1em;
          margin-bottom: 1.2rem;
        }

        .step-desc {
          font-size: 0.85rem;
          color: var(--brand-pale);
          max-width: 250px;
        }

        .footer-statement {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 3rem; /* Tighter padding to sit higher */
          text-align: center;
          max-width: 900px;
          margin: 0 auto;
        }

        .footer-statement p {
          font-weight: 900;
          font-size: clamp(1rem, 1.8vw, 1.2rem); /* Slightly smaller for single line */
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-main);
          line-height: 1.2;
          margin: 0;
          white-space: nowrap; /* Forces one line */
        }

        @media (max-width: 1024px) {
          .steps-grid {
            grid-template-columns: 1fr;
          }
          .footer-statement p {
            white-space: normal; /* Allows wrap on mobile only */
          }
        }
      `}</style>

      <div className="container">
        <div className="header-line" />
        <h2 className="main-title">PENSER <span>JUSTE</span>. <br/> EXÉCUTER <span>MIEUX</span>.</h2>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="step-wrapper"
              whileHover="hover"
              initial="initial"
            >
              <div className="icon-wrapper">{step.icon}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}