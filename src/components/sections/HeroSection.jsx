import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const slideRef = useRef(null);

  useEffect(() => {
    const slideEl = slideRef.current;
    if (slideEl) slideEl.classList.add('is-visible');
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;700&display=swap');

        .hero-section {
          width: 100vw;
          min-height: 100vh;
          background: var(--brand-primary);
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          overflow: hidden;
        }

        .mesh-gradient {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 0% 0%, rgba(232,98,42,0.12) 0px, transparent 55%),
            radial-gradient(ellipse at 100% 100%, rgba(30,60,70,0.4) 0px, transparent 55%),
            radial-gradient(ellipse at 60% 40%, rgba(20,45,55,0.3) 0px, transparent 50%);
          z-index: 1;
        }

        .bg-text {
          position: absolute;
          right: 2vw;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1;
          pointer-events: none;
          user-select: none;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          line-height: 0.85;
          opacity: 0;
          animation: fadeInBg 1.4s ease 0.3s forwards;
        }

        .bg-text span {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(16vw, 22vw, 26vw);
          color: #ffffff;
          opacity: 0.04;
          letter-spacing: -0.02em;
          display: block;
          filter: blur(1px);
        }

        @keyframes fadeInBg {
          to { opacity: 1; }
        }

        .accent-bar {
          position: absolute;
          left: 5%;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 0;
          background: linear-gradient(to bottom, transparent, rgba(232,98,42,0.6), transparent);
          z-index: 2;
          animation: growBar 1.2s ease 0.2s forwards;
        }

        @keyframes growBar {
          to { height: 35vh; }
        }

        .slide {
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0 8%;
          padding-top: 80px; /* offset for fixed header */
          position: relative;
          z-index: 2;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 700px;
        }

        .hero-title {
          font-family: 'Bebas Neue', sans-serif;
          font-size: clamp(2.8rem, 8vw, 8rem);
          font-weight: 400;
          line-height: 0.95;
          color: #fff;
          letter-spacing: -0.01em;
          margin: 0;
          opacity: 0;
          transform: translateY(30px);
          animation: slideUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.4s forwards;
        }

        .hero-title .accent-line {
          color: var(--brand-accent);
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          opacity: 0;
          transform: translateY(16px);
          animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.85s forwards;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.7rem;
          padding: 1.1rem 2.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          white-space: nowrap;
          border-radius: 0;
          display: inline-block;
          transition: background 0.35s ease, color 0.35s ease, border-color 0.35s ease, transform 0.25s ease;
        }

        .btn-primary {
          background: var(--brand-accent);
          color: #fff;
          border: 1px solid var(--brand-accent);
        }

        .btn-primary:hover {
          background: #fff;
          color: var(--brand-primary);
          border-color: #fff;
          transform: translateY(-1px);
        }

        .btn-secondary {
          background: transparent;
          color: var(--brand-pale);
          border: 1px solid rgba(255,255,255,0.25);
        }

        .btn-secondary:hover {
          background: rgba(255,255,255,0.07);
          color: #fff;
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-1px);
        }

        .credibility-line {
          font-family: 'DM Sans', sans-serif;
          font-size: 0.65rem;
          font-weight: 300;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          opacity: 0;
          animation: fadeInCred 1s ease 1.2s forwards;
        }

        @keyframes slideUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInCred {
          to { opacity: 1; }
        }

        @media (max-width: 768px) {
          .slide {
            padding: 0 6%;
            padding-top: 80px;
          }
          .hero-title {
            font-size: clamp(2.4rem, 10vw, 3.8rem);
            line-height: 0.92;
          }
          .bg-text span {
            font-size: 35vw;
          }
          .hero-actions {
            flex-direction: column;
            width: 100%;
          }
          .btn-primary,
          .btn-secondary {
            text-align: center;
            font-size: 0.65rem;
            padding: 1rem 1.8rem;
            width: 100%;
          }
          .accent-bar {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2.2rem;
          }
          .slide {
            padding-top: 80px;
          }
        }
      `}</style>

      <section className="hero-section" id="heroSection">
        <div className="mesh-gradient" />

        <div className="bg-text" aria-hidden="true">
          <span>POINT</span>
          <span>VIRGUL</span>
        </div>

        <div className="accent-bar" />

        <div className="slide" ref={slideRef}>
          <div className="hero-content">

            <h1 className="hero-title">
              LES MARQUES<br />
              <span className="accent-line">FORTES</span><br />
              NE NAISSENT<br />
              PAS PAR HASARD.
            </h1>

            <div className="hero-actions">
              <div className="hero-actions">
                <Link to="/Contact" className="btn-primary">Démarrer un Projet &nbsp;→</Link>
                <Link to="/strategicapproach" className="btn-secondary">Découvrir Notre Approche</Link>
              </div>
            </div>

            <p className="credibility-line">
              Branding &nbsp;•&nbsp; Digital &nbsp;•&nbsp; Stratégie &nbsp;•&nbsp; Expériences Web
            </p>

          </div>
        </div>
      </section>
    </>
  );
}