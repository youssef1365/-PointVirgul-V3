import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: "01",
    name: "RIAD ZYO",
    desc: "HOTEL BOUTIQUE ART",
    details: "Repositionner un riad en une expérience premium, en constante évolution, pensée pour créer de l'impact et convertir en ligne.",
    tags: "Branding — Site web (réservation) — Photo / Vidéo",
    category: "HOSPITALITY / TOURISME"
  },
  {
    id: "02",
    name: "JNAN ZAGORA",
    desc: "FOOD / PRODUITS DU TERROIR",
    details: "Construire une marque du terroir forte et déployée sur tous ses canaux digitaux.",
    tags: "Branding — Packaging — E-commerce — Social Media — Ads — Contenu",
    category: "FOOD / PRODUITS DU TERROIR"
  },
  {
    id: "03",
    name: "CLINIQUE IBN KHALDOUN",
    desc: "SANTÉ",
    details: "Moderniser la présence digitale d’un établissement de santé reconnu.",
    tags: "Site web vitrine — UX/UI",
    category: "SANTÉ"
  },
  {
    id: "04",
    name: "WINK",
    desc: "TECH / B2B",
    details: "Accompagner la transformation digitale et Structurer une plateforme de networking B2B et ses données en pleine expansion.",
    tags: "Branding — Web — Développement sur-mesure — UX — Social Media — Automatisation",
    category: "TECH / B2B"
  },
  {
    id: "05",
    name: "MAISON KAÏNA",
    desc: "LIFESTYLE / RETAIL",
    details: "Créer une marque élégante où le storytelling structure l’identité et l’expérience, au service d’un univers cohérent et désirable.",
    tags: "Branding — E-commerce",
    category: "LIFESTYLE / RETAIL"
  },
  {
    id: "06",
    name: "TAQÈS",
    desc: "IMMOBILIER",
    details: "Structurer une marque immobilière ambitieuse en alignant stratégie, image et présence digitale pour soutenir sa croissance.",
    tags: "Stratégie — Branding — Web — Social Media — Maintenance",
    category: "IMMOBILIER"
  }
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isAnimating = useRef(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const isVisible = rect.top <= 10 && rect.bottom >= window.innerHeight - 10;

      if (!isVisible) return;

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      if ((activeIndex === 0 && isScrollingUp) || (activeIndex === projects.length - 1 && isScrollingDown)) {
        return;
      }

      if (e.cancelable) e.preventDefault();
      if (isAnimating.current) return;

      if (isScrollingDown && activeIndex < projects.length - 1) {
        isAnimating.current = true;
        setActiveIndex(prev => prev + 1);
        setTimeout(() => { isAnimating.current = false; }, 850);
      } else if (isScrollingUp && activeIndex > 0) {
        isAnimating.current = true;
        setActiveIndex(prev => prev - 1);
        setTimeout(() => { isAnimating.current = false; }, 850);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex]);

  return (
    <section className="portfolio-section" ref={sectionRef}>
      <style>{`
        .portfolio-section {
          position: relative;
          background: var(--brand-primary);
          height: 400vh;
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .slide-layer {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          padding: 0 10%;
          background: var(--brand-primary);
          will-change: transform;
          transition: transform 0.85s cubic-bezier(0.65, 0, 0.35, 1);
        }

        .slide-content {
          flex: 0 0 45%;
          z-index: 10;
        }

        .eyebrow-container {
          display: flex;
          align-items: center;
          gap: 1.2rem;
          margin-bottom: 2rem;
        }

        .accent-bar {
          width: 40px;
          height: 4px;
          background: var(--brand-orange);
        }

        .eyebrow {
          font-size: 0.8rem;
          letter-spacing: 0.4em;
          color: var(--brand-pale);
          text-transform: uppercase;
          font-weight: 700;
        }

        .slide-name {
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 900;
          color: var(--text-main);
          line-height: 0.99;
          margin: 0;
          text-transform: uppercase;
        }

        .slide-desc {
          font-size: 1rem;
          font-weight: 800;
          color: var(--brand-orange);
          margin-top: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
        }

        .slide-details {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--brand-light);
          margin: 2rem 0 1.5rem 0;
          max-width: 90%;
        }

        .slide-tags {
          font-size: 0.8rem;
          color: var(--brand-pale);
          margin-bottom: 2rem;
          border-left: 3px solid var(--brand-orange);
          padding-left: 1.2rem;
        }

        .slide-category {
          font-size: 0.85rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          color: var(--brand-orange);
          text-transform: uppercase;
        }

        .slide-id {
          margin-top: 2rem;
          font-size: 2rem;
          font-weight: 900;
          color: rgba(242, 253, 253, 0.1);
        }

        .visual-comp {
          flex: 1;
          position: relative;
          height: 60vh;
          perspective: 1200px;
        }

        .frame {
          position: absolute;
          border: 1px solid rgba(136, 179, 198, 0.4);
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(5px);
          transition: transform 0.5s ease;
          box-shadow: 0 30px 60px rgba(0,0,0,0.4);
        }

        .frame-1 {
          width: 280px;
          height: 380px;
          left: 10%;
          bottom: 0;
          z-index: 5;
          transform: rotateX(5deg) rotateY(12deg);
        }

        .frame-2 {
          width: 440px;
          height: 540px;
          right: 0;
          top: -5%;
          z-index: 2;
          transform: rotateX(-5deg) rotateY(-12deg);
        }

        .nav-indicators {
          position: absolute;
          bottom: 4rem;
          right: 5%;
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
          z-index: 100;
        }

        .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--brand-pale);
          opacity: 0.2;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .dot.active {
          background: var(--brand-orange);
          opacity: 1;
          transform: scale(2.2);
          box-shadow: 0 0 15px rgba(255, 102, 0, 0.4);
        }
      `}</style>

      <div className="sticky-wrapper">
        {projects.map((project, index) => {
          let xTranslate = index > activeIndex ? 100 : 0;

          return (
            <div
              key={project.id}
              className="slide-layer"
              style={{
                transform: `translate3d(${xTranslate}%, 0, 0)`,
                zIndex: index + 10
              }}
            >
              <div className="slide-content">
                <div className="eyebrow-container">
                  <div className="accent-bar" />
                  <span className="eyebrow">PORTFOLIO</span>
                </div>
                <h2 className="slide-name">{project.name}</h2>
                <h3 className="slide-desc">{project.desc}</h3>
                <p className="slide-details">{project.details}</p>
                <p className="slide-tags">{project.tags}</p>
                <div className="slide-id">{project.id}</div>
              </div>

              <div className="visual-comp">
                <div className="frame frame-1"></div>
                <div className="frame frame-2"></div>
              </div>
            </div>
          );
        })}

        <div className="nav-indicators">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;