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
    <section className="methodology-section">
      <style>{`
        .methodology-section {
          background-color: var(--brand-primary);
          color: #ffffff;
          padding: 80px 20px;
          font-family: sans-serif;
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .step-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .icon-wrapper {
          color: #ffffff;
          margin-bottom: 2rem;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .step-title {
          font-size: 1.5rem;
          font-weight: 800;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
        }
        .step-desc {
          font-size: 1rem;
          line-height: 1.4;
          opacity: 0.8;
          max-width: 240px;
        }
      `}</style>

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
    </section>
  );
}