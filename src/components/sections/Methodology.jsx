import React from 'react';
import { motion } from 'framer-motion';

/**
 * ICON 1: ON COMPREND
 * Features a thick magnifying glass loop with a semicolon tail as the handle.
 */
const SemicolonSearch = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g variants={{ hover: { scale: 1.05 } }}>
      {/* Magnifying Glass Head */}
      <circle cx="45" cy="40" r="28" stroke="currentColor" strokeWidth="8" />
      {/* Semicolon Tail / Handle */}
      <path
        d="M68 62 C 85 75, 75 95, 65 95"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinecap="round"
        fill="none"
      />
    </motion.g>
  </svg>
);

/**
 * ICON 2: ON ALIGNE
 * A funnel/alignment shape with a semicolon as the input.
 */
const SemicolonAlign = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g variants={{ hover: { x: 5 } }}>
      {/* The Funnel Lines */}
      <path
        d="M40 35 L55 35 L75 45 L95 45 M40 55 L55 55 L75 45 M40 75 L55 75 L75 65 L95 65 M40 65 L55 65 L75 55 L95 55"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Semicolon Component */}
      <circle cx="20" cy="45" r="6" fill="currentColor" />
      <path
        d="M20 62 C 20 75, 14 82, 6 82"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
    </motion.g>
  </svg>
);

/**
 * ICON 3: ON EXÉCUTE
 * An arrowhead/play symbol integrated with a semicolon.
 */
const SemicolonExecute = () => (
  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.g variants={{ hover: { x: 8 } }}>
      {/* Arrow/Chevron Shape */}
      <path
        d="M60 15 L95 50 L60 85 L60 65 L80 50 L60 35 Z"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
      />
      {/* Semicolon Component */}
      <circle cx="35" cy="42" r="7" fill="currentColor" />
      <path
        d="M35 60 C 35 75, 28 85, 18 85"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
      />
    </motion.g>
  </svg>
);

const steps = [
  { title: "ON COMPREND", icon: <SemicolonSearch />, description: "Asking the right questions to structure the unstructured" },
  { title: "ON ALIGNE", icon: <SemicolonAlign />, description: "Transform challenges into a clear, actionable vision" },
  { title: "ON EXÉCUTE", icon: <SemicolonExecute />, description: "Delivers results quickly and effectively" }
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