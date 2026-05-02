"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CodeBiography from "@/components/CodeBiography";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

function SectionLabel({ label }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "11px",
        letterSpacing: "0.15em",
        color: "rgba(255,255,255,0.4)",
        marginBottom: "32px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}
    >
      {label}
      <span style={{ color: "#7000FF", fontWeight: 700 }}>/&gt;</span>
    </motion.div>
  );
}

function SectionHeading({ main, italic }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.23, 1, 0.32, 1] }}
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 900,
        fontSize: "clamp(32px, 7vw, 110px)",
        lineHeight: 1,
        letterSpacing: "-0.05em",
        color: "white",
        marginBottom: "60px",
      }}
    >
      {main}
      {italic && (
        <>
          <br />
          <span style={{
            fontFamily: "'Newsreader', serif",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(255,255,255,0.28)",
            fontSize: "0.72em",
            letterSpacing: "-0.02em",
          }}>
            {italic}
          </span>
        </>
      )}
    </motion.h2>
  );
}

export default function Home() {
  return (
    <main style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <style>{`
        /* Force CSS update over HMR by including key responsive rules in the React tree */
        .hero-section {
          min-height: 100vh;
          padding: 0 48px;
          position: relative;
          display: flex;
          align-items: center;
          overflow: hidden;
        }
        .about-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 70px; align-items: start; }
        .projects-grid { display: flex; flex-wrap: wrap; align-items: flex-start; justify-content: flex-start; max-width: 1400px; margin: 0 auto; padding: 0 48px; }
        .project-card-wrapper { flex-shrink: 0; display: flex; justify-content: center; padding: 0 12px; box-sizing: border-box; position: relative; }
        .stats-row { display: flex; gap: 40px; }
        
        @media (max-width: 768px) {
          section { padding-left: 24px !important; padding-right: 24px !important; padding-top: 80px !important; padding-bottom: 80px !important; }
          .hero-section { min-height: auto; padding: 140px 24px 80px; align-items: flex-start; }
          .about-grid { display: flex; flex-direction: column; gap: 40px; }
          .projects-grid { flex-direction: column; padding: 0 24px; }
          .project-card-wrapper { width: 100% !important; padding: 0 0 48px !important; margin-left: 0 !important; margin-top: 0 !important; }
          .stats-row { flex-wrap: wrap; gap: 24px; }
          .section-rail, .scroll-indicator { display: none !important; }
        }
      `}</style>
      <Navbar />

      {/* 1. HERO */}
      <Hero />

      {/* 2. WORK */}
      <Projects />

      {/* 3. ABOUT */}
      <section id="about" style={{ position: "relative", padding: "120px 48px 140px" }}>
        {/* Rail — hidden on mobile via CSS */}
        <div
          className="section-rail"
          style={{
            position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px",
            background: "linear-gradient(transparent, rgba(112,0,255,0.2) 20%, rgba(112,0,255,0.2) 80%, transparent)",
            pointerEvents: "none",
          }}
        />
        <div
          className="section-rail"
          style={{
            position: "absolute", left: "17px", top: "120px",
            width: "15px", height: "15px",
            border: "1px solid rgba(112,0,255,0.6)", borderRadius: "50%",
          }}
        >
          <div style={{ position: "absolute", inset: "3px", background: "#7000FF", borderRadius: "50%", boxShadow: "0 0 12px rgba(112,0,255,0.9)" }} />
        </div>

        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionLabel label="About" />
          <SectionHeading main="Who I am" italic="& what I do" />

          {/* about-grid toggles to block on mobile via CSS */}
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
            >
              <CodeBiography />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
              style={{ paddingTop: "32px" }}
            >
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(15px, 1.5vw, 18px)",
                fontWeight: 500,
                color: "rgba(255,255,255,0.7)",
                lineHeight: 1.65,
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}>
                I believe that code is more than just instructions for a machine — it&apos;s a way to bridge the gap between imagination and reality.
              </p>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(14px, 1.3vw, 16px)",
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.75,
                letterSpacing: "-0.01em",
              }}>
                My approach is deeply rooted in design thinking and technical precision. Every project is an opportunity to push the boundaries of what&apos;s possible on the web.
              </p>

              {/* Stats */}
              <div className="stats-row" style={{ marginTop: "48px", display: "flex", gap: "40px" }}>
                {[
                  { num: "3+", label: "Years exp." },
                  { num: "20+", label: "Projects" },
                  { num: "∞", label: "Curiosity" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(28px, 3vw, 42px)",
                      letterSpacing: "-0.05em",
                      color: "white",
                      lineHeight: 1,
                    }}>
                      <span style={{ color: "#7000FF" }}>{num}</span>
                    </div>
                    <div style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "10px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      marginTop: "8px",
                    }}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SKILLS */}
      <Skills />

      {/* 5. CONTACT */}
      <Contact />

      <Footer />
    </main>
  );
}
