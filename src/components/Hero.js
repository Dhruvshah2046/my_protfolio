"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";

const verbs = ["websites", "experiences", "solutions", "interfaces", "systems"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.75, ease: [0.23, 1, 0.32, 1] },
});

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % verbs.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="hero-section">
      {/* Geometric starfield background */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.1 }}>
          <defs>
            <pattern id="tri" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 0 120 L 60 0 L 120 120 Z" fill="none" stroke="rgba(112,0,255,0.4)" strokeWidth="0.5" />
              <path d="M 60 0 L 120 120 L 180 0 Z" fill="none" stroke="rgba(112,0,255,0.3)" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tri)" />
        </svg>
        <div style={{
          position: "absolute",
          top: "40%", left: "55%",
          width: "600px", height: "500px",
          background: "radial-gradient(ellipse, rgba(112,0,255,0.08) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
        }} />
      </div>

      {/* Left rail — desktop only */}
      <div className="scroll-indicator section-rail" style={{
        position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px",
        background: "linear-gradient(transparent 0%, rgba(112,0,255,0.3) 30%, rgba(112,0,255,0.3) 70%, transparent 100%)",
        pointerEvents: "none",
      }} />
      <div className="scroll-indicator section-rail" style={{
        position: "absolute", left: "17px", top: "50%",
        width: "15px", height: "15px",
        border: "1px solid rgba(112,0,255,0.6)",
        borderRadius: "50%",
        transform: "translateY(-50%)",
      }}>
        <div style={{ position: "absolute", inset: "3px", background: "#7000FF", borderRadius: "50%", boxShadow: "0 0 10px rgba(112,0,255,0.8)" }} />
      </div>

      {/* SCROLL text — desktop only */}
      <div className="scroll-indicator" style={{
        position: "absolute", left: "8px", bottom: "80px",
        writingMode: "vertical-rl",
        textOrientation: "mixed",
        transform: "rotate(180deg)",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "9px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: "#7000FF",
        opacity: 0.7,
      }}>
        SCROLL
      </div>
      <div className="scroll-indicator" style={{
        position: "absolute", left: "18px", bottom: "130px",
        width: "18px", height: "28px",
        border: "1.5px solid rgba(112,0,255,0.5)",
        borderRadius: "9px",
        display: "flex",
        justifyContent: "center",
        paddingTop: "5px",
      }}>
        <motion.div
          style={{ width: "2px", height: "6px", borderRadius: "1px", background: "#7000FF" }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main content */}
      <div className="hero-content" style={{ position: "relative", zIndex: 2, width: "100%" }}>
        <motion.div {...fadeUp(0)} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.4)",
          marginBottom: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          Start <span style={{ color: "#7000FF", fontWeight: 700 }}>/&gt;</span>
        </motion.div>

        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px, 6vw, 82px)",
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
          color: "white",
          margin: 0,
        }}>
          Hi, my name is{" "}
          <span style={{ color: "#7000FF" }}>Dhruv Shah</span>
        </motion.h1>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(28px, 6vw, 82px)",
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
          color: "white",
          marginBottom: "32px",
          marginTop: "4px",
        }}>
          I{" "}
          <span style={{
            fontFamily: "'Newsreader', serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#7c5dbbee",
            fontSize: "0.9em",
          }}>
            design
          </span>
          {" "}and develop{" "}
          <span style={{ color: "#7000FF", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
            <ScrambleText text={verbs[idx]} />
          </span>
        </motion.h1>

        <motion.p {...fadeUp(0.35)} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "clamp(14px, 1.5vw, 16px)",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.01em",
          marginTop: "24px",
        }}>
          Let me show you...
        </motion.p>
      </div>

      {/* Down arrow — desktop only */}
      <motion.div
        className="scroll-indicator"
        style={{
          position: "absolute", right: "48px", bottom: "40px",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "18px",
          color: "rgba(255,255,255,0.3)",
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        ↓
      </motion.div>
    </section>
  );
}
