import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    id: "01",
    name: "RIAD ZYO",
    desc: "HOTEL BOUTIQUE ART - Rabat",
    details: "Repositionner un riad en une expérience premium, et convertir en direct booking.",
    tags: "Branding — Site web (réservation) — Photo / Vidéo",
    category: "+67% de réservations directes en 90 jours",
    images: ['/zyo-1.webp', '/frame-placeholder.webp', '/frame-placeholder.webp']
  },
  {
    id: "02",
    name: "JNAN ZAGORA",
    desc: "Artisanat & Produits Naturels",
    details: "Construire une marque premium à partir d'un savoir-faire local, de l'identité jusqu'au digital.",
    tags: "Branding — Packaging — E-commerce — Direction Artistique",
    category: "0 à 2 100 abonnés Instagram en 4 mois",
    images: ['/zagoura-web.webp', '/JZ-1.webp', '/frame-placeholder.webp']
  },
  {
    id: "03",
    name: "CLINIQUE IBN KHALDOUN",
    desc: "Santé — Secteur Médical",
    details: "Donner à une clinique établie une présence digitale à la hauteur de son niveau de soin.",
    tags: "Site web — UX/UI — SEO — Optimisation Google Business",
    category: "+89% de vues Google Business en 60 jours",
    images: ['/CIK-1.webp', '/CIK-2.webp', '/CIK-4.webp']
  },
  {
    id: "04",
    name: "WINK",
    desc: "Plateforme B2B — Business Matchmaking",
    details: "Restructurer un écosystème digital fragmenté en système de croissance scalable.",
    tags: "Identité Visuelle — Site web — Landing Pages — Architecture Data",
    category: "+54% de conversion sur les landing pages",
    images: ['/wink-1.webp', '/wink-2.webp', '/wink-3.webp']
  },
  {
    id: "05",
    name: "MAISON KAÏNA",
    desc: "Lifestyle & E-commerce",
    details: "De l'idée au naming, de l'identité à la boutique en ligne — une marque construite de zéro.",
    tags: "Brand Naming — Identité Visuelle — Direction Artistique — Site E-commerce",
    category: "Premières ventes en ligne dans les 72h suivant le lancement",
    images: ['/Kaina-4.webp', '/kaina-3.webp', '/Kaina-1.webp']
  },
  {
    id: "06",
    name: "TAQÈS",
    desc: " Immobilier — Rabat",
    details: "Transformer une ambition immobilière forte en architecture de marque claire et activable.",
    tags: "Positionnement — Rebranding — Digital — Campagnes Résidentielles",
    category: "Projet en cours — Lancement Q3 2025",
    images: ['/TAQES.webp', '/TAQES-3.webp', '/TAQES-2.webp']
  }
];

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = -rect.top / (rect.height - window.innerHeight);
      const clampedProgress = Math.max(0, Math.min(1, progress));
      const newIndex = Math.min(Math.floor(clampedProgress * projects.length), projects.length - 1);
      if (newIndex !== activeIndex && newIndex >= 0) setActiveIndex(newIndex);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  const scrollToProject = (index) => {
    if (!sectionRef.current) return;
    const sectionTop = sectionRef.current.offsetTop;
    const totalScrollable = sectionRef.current.offsetHeight - window.innerHeight;
    const targetScroll = sectionTop + (index * (totalScrollable / (projects.length - 1)));
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="portfolio-section" ref={sectionRef} style={{ height: `${projects.length * 100}vh` }}>
      <style>{`
        .portfolio-section { position: relative; background: var(--brand-primary); }
        .sticky-wrapper { position: sticky; top: 0; width: 100%; height: 100vh; overflow: hidden; display: flex; align-items: center; }

        .slide-layer {
          position: absolute; inset: 0; width: 100%; height: 100%; display: flex; align-items: center; padding: 0 5% 0 10%;
          background: var(--brand-primary); transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease;
        }

        .slide-content { flex: 0 0 40%; z-index: 10; }
        .eyebrow-container { display: flex; align-items: center; gap: 1.2rem; margin-bottom: 2rem; }
        .accent-bar { width: 40px; height: 4px; background: var(--brand-orange); }
        .eyebrow { font-size: 0.8rem; letter-spacing: 0.4em; color: var(--brand-pale); text-transform: uppercase; font-weight: 700; }
        .slide-name { font-size: clamp(2.5rem, 6vw, 5.5rem); font-weight: 900; color: #fff; line-height: 0.99; margin: 0; text-transform: uppercase; }
        .slide-desc { font-size: 1rem; font-weight: 800; color: var(--brand-orange); margin-top: 1.2rem; text-transform: uppercase; letter-spacing: 0.15em; }
        .slide-details { font-size: 0.95rem; line-height: 1.6; color: var(--brand-light); margin: 2rem 0 1.5rem 0; max-width: 90%; }
        .slide-tags { font-size: 0.8rem; color: var(--brand-pale); margin-bottom: 2rem; border-left: 3px solid var(--brand-orange); padding-left: 1.2rem; }
        .slide-category { font-size: 0.85rem; font-weight: 900; letter-spacing: 0.15em; color: var(--brand-orange); text-transform: uppercase; }
        .slide-id { margin-top: 2rem; font-size: 2rem; font-weight: 900; color: rgba(242, 253, 253, 0.1); }

        .visual-comp {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          grid-template-rows: 1fr 1fr;
          gap: 1.5rem;
          height: 70vh;
          padding: 2rem;
          perspective: 1000px;
        }

        .image-stack {
          display: flex;
          flex-direction: column;
          gap: 20px;
          width: 300px;
        }

        .single-image-right {
          width: 350px;
          height: 100%;
        }

        .frame {
          position: relative;
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(0, 0, 0, 0.2);
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
        }

        .frame:nth-child(3) {
          grid-column: 2;
          grid-row: 1 / span 2;
        }

        .frame-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
          transition: transform 0.5s ease;
        }

        .nav-indicators { position: absolute; bottom: 4rem; right: 5%; display: flex; flex-direction: column; gap: 1.2rem; z-index: 100; }
        .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--brand-pale); opacity: 0.2; transition: all 0.4s ease; cursor: pointer; }
        .dot.active { background: var(--brand-orange); opacity: 1; transform: scale(2.2); }

        @media (max-width: 1024px) {
          .slide-layer { flex-direction: column; padding: 40px 8%; overflow-y: auto; }
          .slide-content { flex: none; width: 100%; margin-bottom: 30px; }
          .visual-comp { flex-direction: column; width: 100%; align-items: center; }
          .image-stack, .single-image-right { width: 100%; }
        }
      `}</style>

      <div className="sticky-wrapper">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="slide-layer"
            style={{
              transform: `translate3d(${index > activeIndex ? 100 : 0}%, 0, 0)`,
              opacity: index < activeIndex ? 0 : 1,
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
              {/* Original pair stacked vertically */}
              <div className="image-stack">
                <div className="frame">
                  <img src={project.images[0]} alt="" className="frame-image" />
                </div>
                <div className="frame">
                  <img src={project.images[1]} alt="" className="frame-image" />
                </div>
              </div>

              {/* New third image on the right side of them */}
              <div className="single-image-right">
                <div className="frame">
                  <img src={project.images[2]} alt="" className="frame-image" />
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="nav-indicators">
          {projects.map((_, i) => (
            <div key={i} className={`dot ${i === activeIndex ? 'active' : ''}`} onClick={() => scrollToProject(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;