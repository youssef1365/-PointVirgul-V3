import { useEffect, useRef } from 'react';

const slide = {
  title: "<strong>Nous construisons des marques qui avancent.</strong>",
  subtitle: "Stratégie, branding et expériences digitales pour faire grandir votre business.",
  cta1: "Démarrer un Projet",
  cta2: "Découvrez notre approche"
};

export default function HeroSection() {
  const slideRef = useRef(null);

  useEffect(() => {
    const slideEl = slideRef.current;
    slideEl.classList.add('is-visible');
  }, []);

  return (
    <>
      <style>{`
        .hero-section {
          width: 100vw;
          height: 100vh;
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
            radial-gradient(at 0% 0%, var(--brand-accent) 0px, transparent 50%),
            radial-gradient(at 100% 0%, #c0dfe2 0px, transparent 50%),
            radial-gradient(at 50% 100%, #2a3f44 0px, transparent 50%);
          filter: blur(80px);
          opacity: 0.3;
          z-index: 1;
        }

        .slide {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0 8%;
          position: relative;
          z-index: 2;
        }

        .hero-content {
          width: 100%;
          max-width: 100%;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-title {
          font-size: clamp(1.8rem, 4vw, 3.5rem);
          font-weight: 400;
          line-height: 1.15;
          color: #fff;
          text-transform: uppercase;
          margin: 0;
          width: 100%;
          max-width: 90%;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.2s;
        }

        .hero-title strong {
          font-weight: 900;
          color: var(--brand-light);
        }

        .hero-title em {
          font-style: italic;
          font-weight: 400;
          color: var(--brand-accent);
        }

        .hero-subtitle {
          color: var(--brand-pale);
          font-size: clamp(0.9rem, 1.8vw, 1rem);
          max-width: 700px;
          line-height: 1.5;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s ease 0.5s;
          margin: 0;
          align-self: flex-start;
          margin-left: auto;
          margin-right: 0;
        }

        .hero-actions {
          display: flex;
          gap: 1.2rem;
          opacity: 0;
          transition: all 0.8s ease 0.7s;
          margin-top: 0.5rem;
        }

        .slide.is-visible .hero-title {
          opacity: 1;
          transform: translateY(0);
        }

        .slide.is-visible .hero-subtitle {
          opacity: 1;
          transform: translateY(0);
        }

        .slide.is-visible .hero-actions {
          opacity: 1;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          font-weight: 700;
          font-size: 0.75rem;
          padding: 1rem 2rem;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          white-space: nowrap;
          border-radius: 0;
        }

        .btn-primary {
          background: var(--brand-accent);
          color: var(--brand-primary);
        }

        .btn-primary:hover {
          background: #fff;
          color: var(--brand-primary);
        }

        .btn-secondary {
          color: var(--brand-pale);
          border: 1px solid var(--brand-pale);
          background: transparent;
        }

        .btn-secondary:hover {
          background: var(--brand-pale);
          color: var(--brand-primary);
        }

        @media (max-width: 1024px) {
          .hero-title {
            font-size: clamp(1.6rem, 4vw, 3rem);
            line-height: 1.2;
            max-width: 100%;
          }

          .hero-subtitle {
            font-size: 0.95rem;
            max-width: 600px;
          }

          .hero-content {
            gap: 1.2rem;
          }
        }

        @media (max-width: 768px) {
          .slide {
            padding: 0 6%;
            padding-top: 20vh;
          }

          .hero-content {
            gap: 1rem;
          }

          .hero-title {
            font-size: clamp(1.4rem, 5.5vw, 2rem);
            line-height: 1.25;
            max-width: 100%;
          }

          .hero-subtitle {
            font-size: 0.85rem;
            line-height: 1.4;
            max-width: 100%;
          }

          .hero-actions {
            flex-direction: column;
            width: 100%;
            gap: 0.8rem;
            margin-top: 0.3rem;
          }

          .btn-primary,
          .btn-secondary {
            text-align: center;
            width: 100%;
            font-size: 0.65rem;
            padding: 0.85rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .slide {
            padding-top: 18vh;
          }

          .hero-title {
            font-size: 1.3rem;
          }

          .hero-subtitle {
            font-size: 0.8rem;
          }
        }
      `}</style>

      <section className="hero-section" id="heroSection">
        <div className="mesh-gradient" />
        <div className="slide" ref={slideRef}>
          <div className="hero-content">
            <h1
              className="hero-title"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <p className="hero-subtitle">{slide.subtitle}</p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">{slide.cta1} →</a>
              <a href="#methodology" className="btn-secondary">{slide.cta2}</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}