"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import CodeBiography from "@/components/CodeBiography";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Reusable section rail
function Rail({ topOffset = "140px" }) {
  return (
    <>
      <div style={{
        position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px",
        background: "linear-gradient(transparent, rgba(112,0,255,0.25) 20%, rgba(112,0,255,0.25) 80%, transparent)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", left: "17px", top: topOffset,
        width: "15px", height: "15px",
        border: "1px solid rgba(112,0,255,0.6)", borderRadius: "50%",
      }}>
        <div style={{
          position: "absolute", inset: "3px",
          background: "#7000FF", borderRadius: "50%",
          boxShadow: "0 0 12px rgba(112,0,255,0.9)",
        }} />
      </div>
    </>
  );
}

// Reusable section label
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
        marginBottom: "48px",
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

// Reusable section heading
function SectionHeading({ main, italic }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.23,1,0.32,1] }}
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        fontWeight: 900,
        fontSize: "clamp(44px, 7vw, 110px)",
        lineHeight: 0.9,
        letterSpacing: "-0.05em",
        color: "white",
        marginBottom: "100px",
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
    <main style={{ background: "#0a0a0a", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />

      {/* 1. HERO */}
      <Hero />

      {/* 2. WORK / PROJECTS */}
      <Projects />

      {/* 3. ABOUT — full-screen code editor, matching yasio */}
      <section
        id="about"
        style={{ position: "relative", padding: "140px 48px 160px" }}
      >
        <Rail topOffset="140px" />
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <SectionLabel label="About" />
          <SectionHeading main="Who I am" italic="& what I do" />

          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: "70px", alignItems: "start" }}>
            {/* Code editor — left */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.23,1,0.32,1] }}
            >
              <CodeBiography />
            </motion.div>

            {/* Text copy — right */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.23,1,0.32,1] }}
              style={{ paddingTop: "48px" }}
            >
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "18px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.65,
                marginBottom: "24px",
                letterSpacing: "-0.01em",
              }}>
                I believe that code is more than just instructions for a machine — it&apos;s a way to bridge the gap between imagination and reality.
              </p>
              <p style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "16px",
                color: "rgba(255,255,255,0.38)",
                lineHeight: 1.75,
                letterSpacing: "-0.01em",
              }}>
                My approach is deeply rooted in design thinking and technical precision. Every project is an opportunity to push the boundaries of what&apos;s possible on the web.
              </p>

              {/* Quick stats */}
              <div style={{ marginTop: "56px", display: "flex", gap: "48px" }}>
                {[
                  { num: "3+", label: "Years exp." },
                  { num: "20+", label: "Projects" },
                  { num: "∞", label: "Curiosity" },
                ].map(({ num, label }) => (
                  <div key={label}>
                    <div style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 900,
                      fontSize: "42px",
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
