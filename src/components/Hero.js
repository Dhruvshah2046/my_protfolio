"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ScrambleText from "./ScrambleText";

const verbs = ["websites", "experiences", "solutions", "interfaces", "systems"];

// Fade-up helper
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
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        padding: "0 48px",
      }}
    >
      {/* Geometric starfield background like yasio */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        {/* Triangular mesh */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.12 }}>
          <defs>
            <pattern id="tri" width="120" height="120" patternUnits="userSpaceOnUse">
              <path d="M 0 120 L 60 0 L 120 120 Z" fill="none" stroke="rgba(112,0,255,0.4)" strokeWidth="0.5" />
              <path d="M 60 0 L 120 120 L 180 0 Z" fill="none" stroke="rgba(112,0,255,0.3)" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#tri)" />
        </svg>
        {/* Radial glow */}
        <div style={{
          position: "absolute",
          top: "40%", left: "55%",
          width: "600px", height: "500px",
          background: "radial-gradient(ellipse, rgba(112,0,255,0.08) 0%, transparent 70%)",
          transform: "translate(-50%,-50%)",
        }} />
      </div>

      {/* Left vertical progress rail — yasio's signature */}
      <div style={{
        position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px",
        background: "linear-gradient(transparent 0%, rgba(112,0,255,0.3) 30%, rgba(112,0,255,0.3) 70%, transparent 100%)",
        pointerEvents: "none",
      }} />

      {/* Purple dot on the rail */}
      <div style={{
        position: "absolute", left: "17px", top: "50%",
        width: "15px", height: "15px",
        border: "1px solid rgba(112,0,255,0.6)",
        borderRadius: "50%",
        transform: "translateY(-50%)",
      }}>
        <div style={{
          position: "absolute", inset: "3px",
          background: "#7000FF", borderRadius: "50%",
          boxShadow: "0 0 10px rgba(112,0,255,0.8)",
        }} />
      </div>

      {/* Vertical SCROLL text — like yasio's left rail */}
      <div style={{
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

      {/* Scroll mouse icon */}
      <div style={{
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

      {/* Main content — left-aligned, vertically centered */}
      <div style={{ position: "relative", zIndex: 2, paddingLeft: "40px" }}>
        {/* Section label */}
        <motion.div {...fadeUp(0)} style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "rgba(255,255,255,0.4)",
          marginBottom: "32px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}>
          Start
          <span style={{ color: "#7000FF", fontWeight: 700 }}>/&gt;</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1 {...fadeUp(0.1)} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(38px, 5.5vw, 82px)",
          lineHeight: 1.12,
          letterSpacing: "-0.04em",
          color: "white",
          marginBottom: "16px",
          margin: 0,
        }}>
          Hi, my name is{" "}
          <span style={{ color: "#7000FF" }}>Dhruv Shah</span>
        </motion.h1>

        <motion.h1 {...fadeUp(0.2)} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 800,
          fontSize: "clamp(38px, 5.5vw, 82px)",
          lineHeight: 1.12,
          letterSpacing: "-0.04em",
          color: "white",
          marginBottom: "32px",
          marginTop: "4px",
        }}>
          i{" "}
          <span style={{
            fontFamily: "'Newsreader', serif",
            fontStyle: "italic",
            fontWeight: 400,
            color: "rgba(255,255,255,0.55)",
            fontSize: "0.9em",
          }}>
            design
          </span>
          {" "}and develop{" "}
          <span style={{ color: "#7000FF", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
            <ScrambleText text={verbs[idx]} />
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p {...fadeUp(0.35)} style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: "16px",
          color: "rgba(255,255,255,0.35)",
          letterSpacing: "0.01em",
          marginTop: "40px",
        }}>
          Let me show You...
        </motion.p>
      </div>

      {/* Down arrow — bottom right */}
      <motion.div
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
