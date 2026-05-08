import React from 'react';

const StatsSection = () => {
  const stats = [
    { num: "0", text: "COMPROMIS SUR LA QUALITÉ." },
    { num: "1", text: "OBSESSION : VOTRE RÉSULTAT." },
    { num: "∞", text: "VIRGULES À VOTRE SUCCÈS." },
    { num: "360°", text: "NOTRE SIGNATURE." },
    { num: "+30", text: "MARQUES EN MOUVEMENT." },
    { num: ";", text: "NOTRE POINT DE DÉPART." },
  ];

  return (
    <section style={styles.section}>
      <div style={styles.grid}>
        {stats.map((stat, index) => (
          <div key={index} style={styles.statBox} className="stat-card">
            <h2 style={styles.number}>{stat.num}</h2>
            <div style={styles.underline}></div>
            <p style={styles.text}>{stat.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: 'var(--brand-primary)',
    padding: '120px 5%',
    display: 'flex',
    justifyContent: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0', // Removing gaps to use borders for a "grid" look
    maxWidth: '1200px',
    width: '100%',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    borderLeft: '1px solid rgba(255, 255, 255, 0.05)',
  },
  statBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '60px 20px',
    borderRight: '1px solid rgba(255, 255, 255, 0.05)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    cursor: 'default',
  },
  number: {
    color: 'var(--color-brand-orange)',
    fontSize: '6rem',
    fontWeight: '900',
    margin: '0',
    lineHeight: '1',
    filter: 'drop-shadow(0 0 10px rgba(242, 107, 56, 0.2))', // Subtle glow
  },
  underline: {
    width: '40px',
    height: '2px',
    backgroundColor: 'var(--color-brand-orange)',
    margin: '20px 0',
    opacity: '0.5',
  },
  text: {
    color: 'var(--color-white)',
    fontSize: '0.85rem',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    margin: 0,
    opacity: '0.8',
    whiteSpace: 'nowrap',
  },
};

export default StatsSection;