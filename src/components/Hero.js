"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section flex flex-col justify-center items-center text-center">
      <div className="glow-bg" style={{ width: '40vw', height: '40vw', top: '-10%', left: '30%', backgroundColor: 'var(--accent-primary)' }}></div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="text-sm uppercase tracking-widest text-accent-primary font-bold mb-4 block">
          Creative Developer & Designer
        </span>
        <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
          Crafting <span className="glow-text">Digital</span><br />
          Experiences
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-secondary mb-10">
          I build high-performance, beautiful, and interactive web applications 
          that merge design with engineering excellence.
        </p>
        
        <div className="flex gap-4 justify-center">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="px-8 py-4 bg-accent rounded-full font-semibold shadow-lg shadow-accent-primary/20 flex items-center gap-2"
          >
            View Projects <ArrowRight size={18} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-4 border border-surface-border rounded-full font-semibold glass"
          >
            Let's Talk
          </motion.a>
        </div>
      </motion.div>

      <style jsx>{`
        .hero-section {
          min-height: 100vh;
          position: relative;
        }
        .text-sm { font-size: 0.875rem; }
        .text-lg { font-size: 1.125rem; }
        .text-6xl { font-size: 3.5rem; }
        .text-8xl { font-size: 5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .block { display: block; }
        .rounded-full { border-radius: 9999px; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .bg-accent { background: var(--accent-primary); color: white; }
        .text-secondary { color: var(--text-secondary); }
        .gap-2 { gap: 0.5rem; }
        .shadow-lg { box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); }
        .shadow-accent-primary\\/20 { box-shadow: 0 10px 20px rgba(59, 130, 246, 0.2); }
        .mx-auto { margin-left: auto; margin-right: auto; }
        
        @media (min-width: 768px) {
          .text-6xl { font-size: 4rem; }
          .text-8xl { font-size: 6rem; }
        }
      `}</style>
    </section>
  );
}
