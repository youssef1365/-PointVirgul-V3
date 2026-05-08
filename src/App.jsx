import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import Methodology from '@/components/sections/Methodology';
import Portfolio from '@/components/sections/Portfolio';
import Services from '@/components/sections/Services';
import FAQ from '@/components/sections/FAQs';
import Contact from '@/components/sections/Contact';

const ProjectStatement = () => (
  <section className="project-statement-wrap">
    <style>{`
      .project-statement-wrap {
        background-color: var(--brand-primary);
        padding: 40px 0 160px 0;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .statement-text {
        color: #ffffff;
        font-size: clamp(1rem, 6vw, 4rem);
        font-weight: 900;
        letter-spacing: -0.02em;
        text-transform: uppercase;
        max-width: 1200px;
        line-height: 1.05;
        margin: 0;
        padding: 0 8%;
        text-align: center;
      }
      .statement-text span {
        color: #ff4d00;
        display: block;
        margin-top: 0.1em;
      }
    `}</style>
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <p className="statement-text">
        Chaque projet est différent.
        <span>Notre exigence reste la même.</span>
      </p>
    </motion.div>
  </section>
);

const SectionDivider = () => (
  <div className="global-divider">
    <style>{`
      .global-divider {
        width: 100%;
        background-color: var(--brand-primary);
        display: flex;
        justify-content: center;
      }
      .divider-line {
        width: 90%;
        height: 1px;
        background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
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

const BrandTransition = () => (
  <section className="brand-transition-wrap">
    <style>{`
      .brand-transition-wrap {
        background-color: var(--brand-primary);
        padding: 140px 8%;
        text-align: center;
        width: 100%;
      }
      .transition-tagline {
        font-size: clamp(0.9rem, 2vw, 1.2rem);
        font-weight: 800;
        color: rgba(255, 255, 255, 0.4);
        margin-bottom: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 0.4em;
      }
      .transition-main {
        font-size: clamp(2.5rem, 7vw, 5rem);
        font-weight: 900;
        text-transform: uppercase;
        color: #ffffff;
        line-height: 0.95;
        margin: 0;
      }
      .transition-highlight {
        color: var(--brand-pale);
        display: block;
        margin-top: 0.2em;
      }
    `}</style>
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <p className="transition-tagline">Peu importe le point de départ.</p>
      <h2 className="transition-main">
        On fait avancer votre marque,
        <span className="transition-highlight">virgule après virgule.</span>
      </h2>
    </motion.div>
  </section>
);


export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    const targetId = pathname.replace("/", "").toLowerCase();

    const scrollTask = setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 150);

    return () => clearTimeout(scrollTask);
  }, [pathname]);

  return (
    <div className="site-wrapper">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        html, body {
          width: 100%;
          min-height: 100%;
          background-color: #0b1c1e;
          overflow-x: hidden;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .site-wrapper {
          width: 100%;
          background-color: #0b1c1e;
          position: relative;
        }

        main {
          width: 100%;
          position: relative;
        }

        /* Target the internal padding of Methodology specifically within this ID */
        #StrategicApproach .methodology-section {
          padding-bottom: 20px !important;
        }
      `}</style>

      <Navbar />

      <main>
        <div id="home"><HeroSection /></div>

        <div id="StrategicApproach">
          <Methodology />
          <ProjectStatement />
        </div>

        <SectionDivider />

        <div id="portfolio"><Portfolio /></div>

        <div id="services"><Services /></div>

        <SectionDivider />
        <BrandTransition />
        <SectionDivider />

        <div id="faq"><FAQ /></div>

        <div id="contact"><Contact /></div>

        <Routes>
          <Route path="/StrategicApproach" element={null} />
          <Route path="/" element={null} />
          <Route path="/home" element={null} />
          <Route path="/Portfolio" element={null} />
          <Route path="/Services" element={null} />
          <Route path="/virgul" element={null} />
          <Route path="/faq" element={null} />
          <Route path="/Contact" element={null} />
        </Routes>
      </main>

      <SectionDivider />
      <Footer />
    </div>
  );
}