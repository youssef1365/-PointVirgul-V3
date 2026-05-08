import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Methodology from '@/components/sections/Methodology';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import FAQ from '@/components/sections/FAQs';
import Contact from '@/components/sections/Contact';

const ProjectStatement = () => {
  return (
    <section className="transition-wrapper">
      <style>{`
        .transition-wrapper {
          background-color: var(--brand-primary);
          padding: 120px 0;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .statement-text {
          color: #ffffff;
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          max-width: 1100px;
          line-height: 1.1;
          margin: 0;
          padding: 0 6%;
          text-align: center;
        }
        .statement-text span {
          color: var(--brand-orange);
          display: block;
        }
      `}</style>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="statement-text">
          Chaque projet est différent.
          <span>Notre exigence reste la même.</span>
        </p>
      </motion.div>
    </section>
  );
};

const SectionDivider = () => (
    <div className="divider-container">
      <style>{`
        .divider-container { width: 100%; background-color: var(--brand-primary); }
        .divider-line {
          width: 90%;
          margin: 0 auto;
          height: 1px;
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
        }
      `}</style>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="divider-line"
      />
    </div>
  );

const BrandTransition = () => {
  return (
    <section className="brand-transition">
      <style>{`
        .brand-transition {
          background-color: var(--brand-primary);
          padding: 100px 6%;
          text-align: center;
        }
        .tagline {
          font-size: clamp(0.85rem, 2vw, 1.1rem);
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.3em;
        }
        .main-text {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 900;
          text-transform: uppercase;
          color: #ffffff;
        }
        .highlight-blue { color: var(--brand-pale); display: block; }
      `}</style>
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
        <p className="tagline">Peu importe le point de départ.</p>
        <h2 className="main-text">On fait avancer votre marque, <span className="highlight-blue">virgule après virgule.</span></h2>
      </motion.div>
    </section>
  );
};

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div id="home"><HeroSection /></div>
        <Methodology />
        <ProjectStatement />
        <SectionDivider />
        <div id="portfolio"><Portfolio /></div>
        <div id="services"><Services /></div>
        <SectionDivider />
        <BrandTransition />
        <SectionDivider />
        <div id="faq"><FAQ /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </>
  );
}