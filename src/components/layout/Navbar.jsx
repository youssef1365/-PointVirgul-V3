import { useEffect, useRef, useState } from 'react';

const navItems = [
  { name: 'Home', slug: 'home' },
  { name: 'بورتفوليو', slug: 'portfolio' },
  { name: 'Services', slug: 'services' },
  { name: '.Virgul', slug: 'virgul' },
  { name: 'Contact', slug: 'contact' },
];

export default function Navbar() {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      headerRef.current?.classList.toggle('glass-active', window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
      const handleScroll = () => {
        // Glass effect logic
        headerRef.current?.classList.toggle('glass-active', window.scrollY > 50);

        // Progress bar logic
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = winScroll / height;

        // Update the CSS variable for performance
        headerRef.current?.style.setProperty('--scroll-progress', scrolled);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open on mobile
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@900&display=swap');

        /* FIXED HEADER WRAPPER */
        .main-header {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          padding: 1.5rem 3rem;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: transparent;
          transition: padding 0.4s ease, background 0.4s ease;
        }

        .main-header.glass-active {
          padding: 12px 3rem;
          background: rgba(11, 28, 30, 0.8); /* Fixed background color */
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo { justify-self: start; }
        .logo img {
          height: 55px;
          width: auto;
          display: block;
        }

        .desktop-nav { justify-self: center; }
        .desktop-nav ul {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

                .scroll-progress-bar {
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  width: 100%;
                  height: 2px;
                  background: linear-gradient(90deg, transparent, #ff4d00, transparent);
                  transform: scaleX(var(--scroll-progress, 0));
                  transform-origin: left;
                  transition: transform 0.1s linear;
                  pointer-events: none;
                }

                .main-header.glass-active .scroll-progress-bar {
                  background: #ff4d00;
                  height: 1px;
                  opacity: 0.8;
                }

        .nav-item-group {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .scroll-link {
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          color: #fff;
          text-decoration: none;
        }

        /* YOUR ORIGINAL PORTFOLIO FLIP */
        .portfolio-flip {
          display: inline-block;
          width: 105px;
          height: 1.5rem;
          overflow: hidden;
          vertical-align: middle;
          position: relative;
          text-decoration: none;
        }

        .portfolio-flip .lang-wrap {
          display: flex;
          flex-direction: column;
          transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }

        .nav-item-group:hover .portfolio-flip .lang-wrap {
          transform: translateY(-50%);
        }

        .portfolio-flip .lang {
          display: flex;
          align-items: center;
          height: 1.5rem;
          font-weight: 900;
          letter-spacing: 0.15em;
          font-size: 0.8rem;
          color: #fff;
          white-space: nowrap;
        }

        .portfolio-flip .lang.arabic {
          font-family: 'Tajawal', sans-serif;
          letter-spacing: 0;
          font-size: 1.1rem;
        }

        /* ORANGE HOVER COLOR */
        .nav-item-group:hover .scroll-link,
        .nav-item-group:hover .lang,
        .nav-item-group:hover .deep-link {
          color: #ff4d00; /* Your brand orange */
        }

        .deep-link {
          opacity: 0;
          transform: translateX(-5px);
          transition: all 0.3s ease;
          color: #fff;
          display: flex;
        }

        .nav-item-group:hover .deep-link {
          opacity: 1;
          transform: translateX(0);
        }

        /* MOBILE OVERLAY FIXED */
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: #0b1c1e; /* Solid background for mobile */
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 0 10%;
          transform: translateY(-100%);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu.active {
          transform: translateY(0);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .mobile-nav-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding-bottom: 1rem;
        }

        .mobile-scroll-link {
          font-size: 1.8rem;
          font-weight: 900;
          text-transform: uppercase;
          color: #fff;
          text-decoration: none;
        }

        .header-right { justify-self: end; }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 8px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 10px;
          z-index: 1001;
        }

        .menu-toggle .line {
          width: 28px;
          height: 2px;
          background-color: #fff;
          transition: 0.3s ease;
        }

        .menu-toggle.active .line:nth-child(1) { transform: translateY(5px) rotate(45deg); }
        .menu-toggle.active .line:nth-child(2) { transform: translateY(-5px) rotate(-45deg); }

        @media (max-width: 1024px) {
          .main-header { display: flex; justify-content: space-between; padding: 1.5rem 2rem; }
          .desktop-nav { display: none; }
          .menu-toggle { display: flex; }
          .logo img { height: 35px; }
        }
      `}</style>

      <header className="main-header" ref={headerRef}>
        <div className="logo">
          <a href="#"><img src="/SHORT.webp" alt="Point Virgul" /></a>
        </div>

        <nav className="desktop-nav">
          <ul>
            {navItems.map((item) => (
              <li className="nav-item-group" key={item.slug}>
                {item.slug === 'portfolio' ? (
                  <a href="#portfolio" className="portfolio-flip">
                    <span className="lang-wrap">
                      <span className="lang arabic">بورتفوليو</span>
                      <span className="lang">PORTFOLIO</span>
                    </span>
                  </a>
                ) : (
                  <a href={`#${item.slug}`} className="scroll-link">
                    {item.name}
                  </a>
                )}
                <a href={`#${item.slug}`} className="deep-link">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M7 7h10v10M7 17L17 7" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-right">
          <button
            className={`menu-toggle ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="line" />
            <div className="line" />
          </button>
        </div>
        <div className="scroll-progress-bar" />
      </header>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <div className="mobile-nav-item" key={item.slug}>
              <a href={`#${item.slug}`} className="mobile-scroll-link" onClick={closeMenu}>
                {item.name}
              </a>
              <div style={{ color: '#ff4d00' }}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 7h10v10M7 17L17 7" />
                </svg>
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}