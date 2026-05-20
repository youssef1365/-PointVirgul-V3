import React, { useState, useEffect, useRef, useCallback } from 'react';

const projects = [
  {
    id: "01",
    name: "RIAD ZYO",
    desc: "HOTEL BOUTIQUE ART - Rabat",
    details: "Repositionner un riad en une expérience premium, et convertir en direct booking.",
    tags: "Branding — Site web (réservation) — Photo / Vidéo",
    category: "+67% de réservations directes en 90 jours",
    images: ['/zyo-1.webp', '/zyo-3.webp', '/ZYO-NEW.webp']
  },
  {
    id: "02",
    name: "JNAN ZAGORA",
    desc: "Artisanat & Produits Naturels",
    details: "Construire une marque premium à partir d'un savoir-faire local, de l'identité jusqu'au digital.",
    tags: "Branding — Packaging — E-commerce — Direction Artistique",
    category: "0 à 2 100 abonnés Instagram en 4 mois",
    images: ['/zagoura-web.webp', '/zagoura-1.webp', '/JZ-1.webp']
  },
  {
    id: "03",
    name: "CLINIQUE IBN KHALDOUN",
    desc: "Santé — Secteur Médical",
    details: "Donner à une clinique établie une présence digitale à la hauteur de son niveau de soin.",
    tags: "Site web — UX/UI — SEO — Optimisation Google Business",
    category: "+89% de vues Google Business en 60 jours",
    images: ['/IBN-KHALDOUN.webp', '/CIK-2.webp', '/CIK-4.webp']
  },
  {
    id: "04",
    name: "WINK",
    desc: "Plateforme B2B — Business Matchmaking",
    details: "Restructurer un écosystème digital fragmenté en système de croissance scalable.",
    tags: "Identité Visuelle — Site web — Landing Pages — Architecture Data",
    category: "+54% de conversion sur les landing pages",
    images: ['/wink-1.webp', '/wink-2.webp', '/WINK-LANDING.webp']
  },
  {
    id: "05",
    name: "MAISON KAÏNA",
    desc: "Lifestyle & E-commerce",
    details: "De l'idée au naming, de l'identité à la boutique en ligne — une marque construite de zéro.",
    tags: "Brand Naming — Identité Visuelle — Direction Artistique — Site E-commerce",
    category: "Premières ventes en ligne dans les 72h suivant le lancement",
    images: ['/KAINA.webp', '/KAINA-NAKED.webp', '/Kaina-1.webp']
  },
  {
    id: "06",
    name: "TAQÈS",
    desc: "Immobilier — Rabat",
    details: "Transformer une ambition immobilière forte en architecture de marque claire et activable.",
    tags: "Positionnement — Rebranding — Digital — Campagnes Résidentielles",
    category: "Projet en cours — Lancement Q3 2025",
    images: ['/TAQES.webp', '/taqes4.webp', '/TAQES-2.webp']
  }
];

// ─── Utility: detect touch/mobile ────────────────────────────────────────────
const isTouchDevice = () =>
  typeof window !== 'undefined' &&
  ('ontouchstart' in window || navigator.maxTouchPoints > 0);

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImg, setSelectedImg]   = useState(null);
  const [isMobile, setIsMobile]         = useState(false);

  // Refs that never trigger re-renders
  const sectionRef      = useRef(null);
  const activeIndexRef  = useRef(0);
  const rafRef          = useRef(null);
  const isScrollingRef  = useRef(false); // mobile: block double-fires during programmatic scroll

  // ── Responsive detection ───────────────────────────────────────────────────
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768 || isTouchDevice());
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // ── DESKTOP: scroll-based index via rAF throttle ───────────────────────────
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (rafRef.current) return; // already scheduled
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        if (!sectionRef.current) return;

        const rect      = sectionRef.current.getBoundingClientRect();
        const sectionH  = sectionRef.current.offsetHeight;
        const winH      = window.innerHeight;

        // Progress: 0 when section top hits viewport top → 1 when section bottom hits viewport bottom
        // We divide the section into `projects.length` equal buckets
        const scrolled  = -rect.top;                        // px scrolled into section
        const range     = sectionH - winH;                  // total scrollable range
        const progress  = Math.max(0, Math.min(1, scrolled / range));

        // Each project owns an equal slice of [0, 1]
        const sliceSize = 1 / projects.length;
        const newIndex  = Math.min(
          Math.floor(progress / sliceSize),
          projects.length - 1
        );

        if (newIndex !== activeIndexRef.current) {
          activeIndexRef.current = newIndex;
          setActiveIndex(newIndex);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount to sync if page was pre-scrolled
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isMobile]);

  // ── DESKTOP: click dot → scroll to exact position ─────────────────────────
  const scrollToProject = useCallback((index) => {
    if (!sectionRef.current) return;
    const sectionTop  = sectionRef.current.offsetTop;
    const sectionH    = sectionRef.current.offsetHeight;
    const winH        = window.innerHeight;
    const range       = sectionH - winH;
    const sliceSize   = 1 / projects.length;

    // Aim for the midpoint of each slice so the slide is fully settled
    const targetProgress = sliceSize * index + sliceSize * 0.5;
    // Clamp: last slide must reach progress=1 (end of range)
    const safeProgress = index === projects.length - 1 ? 1 : targetProgress;

    window.scrollTo({ top: sectionTop + safeProgress * range, behavior: 'smooth' });
  }, []);

  // ── MOBILE: swipe + keyboard navigation ───────────────────────────────────
  const touchStartY  = useRef(0);
  const touchStartX  = useRef(0);
  const swipeLock    = useRef(false); // debounce rapid swipes

  const goTo = useCallback((index) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    activeIndexRef.current = clamped;
    setActiveIndex(clamped);
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const onTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const onTouchEnd = (e) => {
      if (swipeLock.current) return;
      const dy = touchStartY.current - e.changedTouches[0].clientY;
      const dx = touchStartX.current - e.changedTouches[0].clientX;
      // Only act on predominantly vertical swipes larger than 40px
      if (Math.abs(dy) < 40 || Math.abs(dx) > Math.abs(dy)) return;

      swipeLock.current = true;
      goTo(activeIndexRef.current + (dy > 0 ? 1 : -1));
      setTimeout(() => { swipeLock.current = false; }, 600);
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend',   onTouchEnd,   { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend',   onTouchEnd);
    };
  }, [isMobile, goTo]);

  // ── Keyboard arrow navigation (works on both) ─────────────────────────────
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        if (isMobile) {
          goTo(activeIndexRef.current + 1);
        } else {
          scrollToProject(Math.min(activeIndexRef.current + 1, projects.length - 1));
        }
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        if (isMobile) {
          goTo(activeIndexRef.current - 1);
        } else {
          scrollToProject(Math.max(activeIndexRef.current - 1, 0));
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMobile, goTo, scrollToProject]);

  // ── Prevent body scroll on mobile while inside section ────────────────────
  // (We handle navigation ourselves via swipe)
  useEffect(() => {
    if (!isMobile) return;
    const prevent = (e) => {
      // Allow lightbox scrolling; block page scroll while portfolio is shown
      if (!selectedImg) e.preventDefault();
    };
    document.body.addEventListener('touchmove', prevent, { passive: false });
    return () => document.body.removeEventListener('touchmove', prevent);
  }, [isMobile, selectedImg]);

  return (
    <>
      {/* On mobile the section is NOT a tall scroll container — it's 100vh fixed */}
      <section
        id="portfolio"
        className="portfolio-section"
        ref={sectionRef}
        style={isMobile ? { height: '100dvh' } : { height: `${projects.length * 100}vh` }}
      >
        <style>{`
          .portfolio-section { position: relative; background: var(--brand-primary); }

          /* ── Sticky wrapper ── */
          .sticky-wrapper {
            position: sticky; top: 0;
            width: 100%; height: 100vh;
            overflow: hidden;
            display: flex; align-items: center;
          }

          /* On mobile there's nothing to stick to (section is 100vh) */
          @media (max-width: 768px) {
            .sticky-wrapper { position: relative; height: 100dvh; }
          }

          /* ── Slide layer ── */
          .slide-layer {
            position: absolute; inset: 0;
            width: 100%; height: 100%;
            display: flex; align-items: center;
            padding: 0 5% 0 10%;
            background: var(--brand-primary);
          }

          /* ── Text content ── */
          .slide-content { flex: 0 0 40%; z-index: 10; }
          .eyebrow-container { display: flex; align-items: center; gap: 1.2rem; margin-bottom: 2rem; }
          .accent-bar { width: 40px; height: 4px; background: var(--brand-orange); }
          .eyebrow {
            font-size: 0.8rem; letter-spacing: 0.4em;
            color: var(--brand-pale); text-transform: uppercase; font-weight: 700;
          }
          .slide-name {
            font-size: clamp(2rem, 6vw, 5.5rem);
            font-weight: 900; color: #fff;
            line-height: 0.99; margin: 0; text-transform: uppercase;
          }
          .slide-desc {
            font-size: 1rem; font-weight: 800;
            color: var(--brand-orange); margin-top: 1.2rem;
            text-transform: uppercase; letter-spacing: 0.15em;
          }
          .slide-details {
            font-size: 0.95rem; line-height: 1.6;
            color: var(--brand-light); margin: 2rem 0 1.5rem 0; max-width: 90%;
          }
          .slide-tags {
            font-size: 0.8rem; color: var(--brand-pale);
            margin-bottom: 2rem;
            border-left: 3px solid var(--brand-orange); padding-left: 1.2rem;
          }
          .slide-category {
            font-size: 0.85rem; font-weight: 900;
            letter-spacing: 0.15em; color: var(--brand-orange); text-transform: uppercase;
          }
          .slide-id {
            margin-top: 2rem; font-size: 2rem;
            font-weight: 900; color: rgba(242, 253, 253, 0.1);
          }

          /* ── Images ── */
          .visual-comp {
            flex: 1; display: flex; gap: 20px;
            height: 70vh; padding: 2rem;
          }
          .image-stack {
            display: flex; flex-direction: column;
            gap: 20px; width: 300px;
          }
          .single-image-right { flex: 1; height: 100%; }
          .frame {
            position: relative; border-radius: 24px;
            border: 1px solid rgba(255,255,255,0.1);
            background: rgba(0,0,0,0.2);
            overflow: hidden;
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.4);
            cursor: zoom-in; height: 100%;
          }
          .frame-image { width: 100%; height: 100%; object-fit: cover; display: block; }

          /* ── Lightbox ── */
          .lightbox-overlay {
            position: fixed; inset: 0;
            background: rgba(0,0,0,0.9);
            z-index: 1000;
            display: flex; align-items: center; justify-content: center;
            backdrop-filter: blur(10px);
            cursor: zoom-out;
          }
          .lightbox-img {
            max-width: 90%; max-height: 90vh;
            object-fit: contain; border-radius: 12px;
          }

          /* ── Nav dots ── */
          .nav-indicators {
            position: absolute; bottom: 4rem; right: 5%;
            display: flex; flex-direction: column; gap: 1.2rem; z-index: 100;
          }
          .dot {
            width: 6px; height: 6px; border-radius: 50%;
            background: var(--brand-pale); opacity: 0.2;
            transition: all 0.4s ease; cursor: pointer;
          }
          .dot.active { background: var(--brand-orange); opacity: 1; transform: scale(2.2); }

          /* ── Mobile swipe hint ── */
          .swipe-hint {
            display: none;
            position: absolute; bottom: 2rem; left: 50%;
            transform: translateX(-50%);
            font-size: 0.7rem; letter-spacing: 0.3em;
            color: var(--brand-pale); opacity: 0.4;
            text-transform: uppercase; z-index: 100;
          }

          /* ── Mobile layout ── */
          @media (max-width: 768px) {
            .slide-layer {
              flex-direction: column;
              padding: 5dvh 8% 8dvh;
              overflow: hidden; /* no nested scroll */
              justify-content: flex-start;
              gap: 0;
            }
            .slide-content { flex: none; width: 100%; margin-bottom: 1.5rem; }
            .slide-name { font-size: clamp(1.8rem, 9vw, 3rem); }
            .slide-details { margin: 1rem 0 1rem; font-size: 0.85rem; }
            .slide-id { margin-top: 1rem; font-size: 1.2rem; }
            .visual-comp {
              flex-direction: row;
              width: 100%; height: 30dvh;
              padding: 0; gap: 10px;
            }
            .image-stack { flex-direction: row; width: auto; flex: 1; gap: 10px; }
            .image-stack .frame { border-radius: 14px; }
            .single-image-right { flex: 1; height: 100%; }
            .single-image-right .frame { border-radius: 14px; }
            .nav-indicators {
              flex-direction: row;
              bottom: auto; right: auto;
              top: 2rem; left: 50%;
              transform: translateX(-50%);
              gap: 0.8rem;
            }
            .swipe-hint { display: block; }
          }
        `}</style>

        {selectedImg && (
          <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
            <img src={selectedImg} alt="Lightbox" className="lightbox-img" />
          </div>
        )}

        <div className="sticky-wrapper">
          {projects.map((project, index) => {
            const isActive  = index === activeIndex;
            const isLeaving = index === activeIndex - 1;
            const isPast    = index < activeIndex;
            const isFuture  = index > activeIndex;

            return (
              <div
                key={project.id}
                className="slide-layer"
                aria-hidden={!isActive}
                style={{
                  // Future slides wait off-screen to the right
                  // Past slides are hidden in-place (opacity 0, no translate to avoid layout flash)
                  transform: `translate3d(${isFuture ? 100 : 0}%, 0, 0)`,
                  opacity: isPast ? 0 : 1,
                  // Pointer events only on active slide
                  pointerEvents: isActive ? 'auto' : 'none',
                  zIndex: index + 10,
                  // Only animate the actively entering slide and the one just exited
                  transition: (isActive || isLeaving)
                    ? 'transform 0.72s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.35s ease'
                    : 'none',
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
                  <div className="image-stack">
                    <div className="frame" onClick={() => setSelectedImg(project.images[0])}>
                      <img src={project.images[0]} alt={project.name} className="frame-image" />
                    </div>
                    <div className="frame" onClick={() => setSelectedImg(project.images[1])}>
                      <img src={project.images[1]} alt={project.name} className="frame-image" />
                    </div>
                  </div>
                  <div className="single-image-right">
                    <div className="frame" onClick={() => setSelectedImg(project.images[2])}>
                      <img src={project.images[2]} alt={project.name} className="frame-image" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="nav-indicators">
            {projects.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === activeIndex ? 'active' : ''}`}
                role="button"
                aria-label={`Projet ${i + 1}`}
                tabIndex={0}
                onClick={() => isMobile ? goTo(i) : scrollToProject(i)}
                onKeyDown={(e) => e.key === 'Enter' && (isMobile ? goTo(i) : scrollToProject(i))}
              />
            ))}
          </div>

          {isMobile && (
            <p className="swipe-hint">Swipe pour naviguer</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Portfolio;