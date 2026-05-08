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
          padding-bottom: 40px;
          padding-top : 1px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .statement-text {
          color: #ffffff;
          font-size: clamp(2.5rem, 5vw, 2.5rem);
          font-weight: 800;
          letter-spacing: 0.01em;
          text-transform: uppercase;
          max-width: 1100px;
          line-height: 1.2;
          margin: 0;
          padding: 0 40px;
          text-align: center;
        }

        .statement-text span {
          color: var(--brand-orange);
          display: block;
          margin-top: 0.1em;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <p className="statement-text">
          Chaque projet est différent. &nbsp;
          <span>Notre exigence reste la même.</span>
        </p>
      </motion.div>
    </section>
  );
};

const SectionDivider = () => (
    <div className="divider-container">
      <style>{`
        .divider-container {
          width: 100%;
          display: flex;
          justify-content: center;
          background-color: var(--brand-primary);
          padding: 0 5%;
        }

        .divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0) 0%,
            rgba(255,255,255,0.1) 50%,
            rgba(255,255,255,0) 100%
          );
        }
      `}</style>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
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
          width: 100%;
          height: 40vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          margin: 0;
          padding: 0 5%;
        }

        .transition-container {
          max-width: 1400px;
        }

        .tagline {
          font-size: clamp(1rem, 2vw, 1.4rem);
          font-weight: 800;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 2rem;
          text-transform: uppercase;
          letter-spacing: 0.4em;
        }

        .main-text {
          font-size: clamp(2.5rem, 5vw, 2rem);
          font-weight: 900;
          text-transform: uppercase;
          color: #ffffff;
          line-height: 1.1;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .highlight-blue {
          color: var(--brand-pale);
          display: block; /* Keeps the signature phrase as a focal point on its own line */
          margin-top: 0.2em;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="transition-container"
      >
        <p className="tagline">Peu importe le point de départ.</p>
        <h2 className="main-text">
          On fait avancer votre marque,
          <span className="highlight-blue">virgule après virgule.</span>
        </h2>
      </motion.div>
    </section>
  );
};

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <main>
        <section id="home">
          <HeroSection />
        </section>

        <Methodology />

        <ProjectStatement />

        <SectionDivider />

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="services">
          <Services />
        </section>
        <SectionDivider />
        <BrandTransition />
        <SectionDivider />
        <section id="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
        <SectionDivider />

      <Footer />
    </div>
  );
}