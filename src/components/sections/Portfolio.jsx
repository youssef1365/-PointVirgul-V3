import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: "01",
    name: "RIAD ZYO",
    desc: "HOTEL BOUTIQUE ART - Rabat",
    details: "Repositionner un riad en une expérience premium,  et convertir en direct booking.",
    tags: "Branding — Site web (réservation) — Photo / Vidéo",
    category: "+67% de réservations directes en 90 jours"
  },
  {
    id: "02",
    name: "JNAN ZAGORA",
    desc: "Artisanat & Produits Naturels",
    details: "Construire une marque premium à partir d'un savoir-faire local, de l'identité jusqu'au digital.",
    tags: "Branding — Packaging — E-commerce — Direction Artistique",
    category: "0 à 2 100 abonnés Instagram en 4 mois"
  },
  {
    id: "03",
    name: "CLINIQUE IBN KHALDOUN",
    desc: "Santé — Secteur Médical",
    details: "Donner à une clinique établie une présence digitale à la hauteur de son niveau de soin.",
    tags: "Site web — UX/UI — SEO — Optimisation Google Business",
    category: "+89% de vues Google Business en 60 jours"
  },
  {
    id: "04",
    name: "WINK",
    desc: "Plateforme B2B — Business Matchmaking",
    details: "Restructurer un écosystème digital fragmenté en système de croissance scalable.",
    tags: "Identité Visuelle — Site web — Landing Pages — Architecture Data",
    category: "+54% de conversion sur les landing pages"
  },
  {
    id: "05",
    name: "MAISON KAÏNA",
    desc: "Lifestyle & E-commerce",
    details: "De l'idée au naming, de l'identité à la boutique en ligne — une marque construite de zéro.",
    tags: "Brand Naming — Identité Visuelle — Direction Artistique — Site E-commerce",
    category: "Premières ventes en ligne dans les 72h suivant le lancement"
  },
  {
    id: "06",
    name: "TAQÈS",
    desc: " Immobilier — Rabat",
    details: "Transformer une ambition immobilière forte en architecture de marque claire et activable.",
    tags: "Positionnement — Rebranding — Digital — Campagnes Résidentielles",
    category: "Projet en cours — Lancement Q3 2025"
  }
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewHeight = window.innerHeight;

      const scrollDistance = -rect.top;
      const progress = scrollDistance / (sectionHeight - viewHeight);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const newIndex = Math.round(clampedProgress * (projects.length - 1));

      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const scrollToProject = (index) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
    const targetScroll = sectionTop + (index * (totalScrollable / (projects.length - 1)));

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
  };

  return (
    <section
      id="portfolio"
      className="portfolio-section"
      ref={sectionRef}
      style={{ height: `${projects.length * 100}vh` }}
    >
      <style>{`
        .portfolio-section {
          position: relative;
          background: var(--brand-primary);
        }

        .sticky-wrapper {
          position: sticky;
          top: 0;
          width: 100%;
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
          transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
          will-change: transform, opacity;
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
          -webkit-backdrop-filter: blur(5px);
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
          const xTranslate = index > activeIndex ? 100 : 0;
          const opacity = index < activeIndex ? 0 : 1;

          return (
            <div
              key={project.id}
              className="slide-layer"
              style={{
                transform: `translate3d(${xTranslate}%, 0, 0)`,
                opacity: opacity,
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
                <p className="slide-category">{project.category}</p>
                <div className="slide-id">{project.id}</div>
              </div>

              <div className="visual-comp">
                <div className="frame frame-1" />
                <div className="frame frame-2" />
              </div>
            </div>
          );
        })}

        <div className="nav-indicators">
          {projects.map((_, i) => (
            <div
              key={i}
              role="button"
              tabIndex={0}
              aria-label={`Aller au projet ${i + 1}`}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => scrollToProject(i)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && scrollToProject(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;