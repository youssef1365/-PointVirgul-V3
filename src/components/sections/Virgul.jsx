import React from 'react';

const Virgul = () => {
  const stats = [
    { num: "0", text: "COMPROMIS SUR LA QUALITÉ." },
    { num: "1", text: "OBSESSION : VOTRE RÉSULTAT." },
    { num: "∞", text: "VIRGULES À VOTRE SUCCÈS." },
    { num: "360°", text: "NOTRE SIGNATURE." },
    { num: "+30", text: "MARQUES EN MOUVEMENT." },
    { num: ";", text: "NOTRE POINT DE DÉPART." },
  ];

  return (
    <div style={{ backgroundColor: 'var(--brand-primary)', color: 'var(--color-white)' }}>
      {/* CSS Block for Cross-Platform Conformity */}
      <style>{`
        .virgul-section {
          width: 100%;
          overflow: hidden;
        }

        /* Desktop: Matching the 'extended line' pillar look */
        @media (min-width: 901px) {
          .stats-grid-conformity {
            display: grid !important;
            grid-template-columns: repeat(3, 1fr) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.1); /* The horizontal T-intersection */
          }
        }

        /* Mobile: Prevents desktop breakage */
        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .hero-divider {
            display: none !important;
          }
          .stats-grid-conformity {
            grid-template-columns: 1fr !important;
          }
          .stat-box-conformity {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding: 40px 20px !important;
          }
          .stat-text-conformity {
            white-space: normal !important;
          }
        }
      `}</style>

      <section style={styles.container} className="virgul-section">
        <div style={styles.content} className="hero-content">
          <div style={styles.leftColumn}>
            <div style={styles.brandBadge}>
               <span style={styles.dash}>—</span> POINT VIRGUL
            </div>
            <h1 style={styles.headline}>
              Every brand <br />
              has a next <br />
              chapter. <br />
              <span style={styles.highlightText}>We're here to write it.</span>
            </h1>
          </div>

          <div style={styles.divider} className="hero-divider"></div>

          <div style={styles.rightColumn}>
            <p style={styles.description}>
              We speak <strong>Designish</strong> — strategy, <br />
              tech, and operations.
            </p>
            <p style={styles.description}>
              We know how to move brands and <br />
              people forward, <em style={styles.italicMint}>ensemble.</em>
            </p>
            <p style={styles.description}>
              From local startups to established <br />
              brands, in Morocco or abroad — <br />
              <em style={styles.italicMint}>même exigence, toujours.</em>
            </p>
          </div>
        </div>
      </section>

      <section style={styles.statsSection}>
        <div style={styles.statsGrid} className="stats-grid-conformity">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-box-conformity"
              style={{
                ...styles.statBox,
                // These borders create the structural pillars seen in your images
                borderRight: (index + 1) % 3 === 0 ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                borderBottom: index < 3 ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
              }}
            >
              <h2 style={styles.number}>{stat.num}</h2>
              <div style={styles.statUnderline}></div>
              <p style={styles.statText} className="stat-text-conformity">{stat.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 10% 60px 10%',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 1px 1fr',
    gap: '60px',
    maxWidth: '1200px',
    width: '100%',
  },
  brandBadge: {
    color: 'var(--brand-orange)',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '2px',
    marginBottom: '30px',
  },
  dash: {
    marginRight: '8px',
    color: 'var(--brand-orange)',
  },
  headline: {
    fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive text
    lineHeight: '1.1',
    fontWeight: '800',
    margin: 0,
    color: 'var(--color-white)',
  },
  highlightText: {
    color: 'var(--brand-pale)',
    fontStyle: 'italic',
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '1px',
    height: '100%',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '24px',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: 'var(--text-main)',
    margin: 0,
  },
  italicMint: {
    color: 'var(--brand-pale)',
    fontStyle: 'italic',
  },
  statsSection: {
    padding: '0 10% 100px 10%',
    display: 'flex',
    justifyContent: 'center',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    maxWidth: '1200px',
    width: '100%',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '60px 20px',
  },
  number: {
    color: 'var(--text-main)',
    fontSize: 'clamp(3rem, 8vw, 5.5rem)',
    fontWeight: '900',
    margin: '0',
    lineHeight: '1',
    textShadow: '0px 0px 15px rgba(242, 107, 56, 0.15)',
  },
  statUnderline: {
    width: '30px',
    height: '2px',
    backgroundColor: 'var(--brand-orange)',
    margin: '15px 0',
    opacity: '0.6',
  },
  statText: {
    color: 'var(--brand-pale)',
    fontSize: '0.85rem',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    margin: 0,
    whiteSpace: 'nowrap',
    opacity: '0.8',
  },
};

export default Virgul;