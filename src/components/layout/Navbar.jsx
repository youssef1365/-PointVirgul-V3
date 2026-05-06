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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);
    return () => document.body.classList.remove('menu-open');
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@900&display=swap');

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
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }

        .main-header.glass-active {
          padding: 12px 3rem;
          background: rgba(33, 54, 81, 0.01);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logo { justify-self: start; }

        .logo a {
          display: inline-block;
          line-height: 0;
        }

        .logo img {
          height: 55px;
          width: 150px;
          display: block;
          transition: opacity 0.3s ease;
        }

        .desktop-nav { justify-self: center; }

        .desktop-nav ul {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
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
          transition: color 0.3s ease;
        }

        .deep-link {
          opacity: 0;
          transform: translateX(-5px);
          transition: all 0.3s ease;
          color: var(--orange);
          display: flex;
        }

        .nav-item-group:hover .deep-link {
          opacity: 1;
          transform: translateX(0);
        }

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
          transition: color 0.3s ease;
        }

        .nav-item-group:hover .portfolio-flip .lang,
        .nav-item-group:hover .scroll-link {
          color: var(--orange);
        }

        .portfolio-flip .lang.arabic {
          font-family: 'Tajawal', sans-serif;
          letter-spacing: 0;
          font-size: 1.1rem;
          padding-bottom: 2px;
        }

        .header-right { justify-self: end; }

        .menu-toggle {
          display: none;
          flex-direction: column;
          gap: 8px;
          cursor: pointer;
          position: relative;
          z-index: 1001;
          background: none;
          border: none;
          padding: 0;
        }

        .menu-toggle .line {
          width: 28px;
          height: 2px;
          background-color: #fff;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .menu-toggle.active .line:nth-child(1) {
          transform: translateY(5px) rotate(45deg);
        }

        .menu-toggle.active .line:nth-child(2) {
          transform: translateY(-5px) rotate(-45deg);
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--charcoal);
          z-index: 999;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-100%);
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .mobile-menu.active {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .mobile-nav {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
          padding: 0 10%;
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
          letter-spacing: 0.05em;
        }

        .mobile-portfolio-link {
          font-family: 'Tajawal', sans-serif;
        }

        .mobile-deep-link {
          color: var(--orange);
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border: 1px solid var(--orange);
          border-radius: 50%;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        body.menu-open { overflow: hidden; }

        @media (max-width: 1024px) {
          .main-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
          }
          .logo img { height: 32px; width: auto; }
          .desktop-nav { display: none; }
          .menu-toggle { display: flex; }
        }
      `}</style>

      <header className="main-header" ref={headerRef} id="main-header">
        <div className="logo">
          <a href="/"><div style={{width: '150px', height: '55px'}} /></a>
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
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <div className="line" />
            <div className="line" />
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <div className="mobile-nav-item" key={item.slug}>
              <a
                href={`#${item.slug}`}
                className={`mobile-scroll-link${item.slug === 'portfolio' ? ' mobile-portfolio-link' : ''}`}
                onClick={closeMenu}
              >
                {item.name}
              </a>
              <a href={`/${item.slug}`} className="mobile-deep-link" onClick={closeMenu}>
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M7 7h10v10M7 17L17 7" />
                </svg>
              </a>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}