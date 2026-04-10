"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default");

  // Outer ring — heavy spring = lag effect
  const rx = useSpring(0, { stiffness: 65, damping: 16, mass: 0.9 });
  const ry = useSpring(0, { stiffness: 65, damping: 16, mass: 0.9 });
  // Inner dot — snap fast
  const dx = useSpring(0, { stiffness: 800, damping: 50 });
  const dy = useSpring(0, { stiffness: 800, damping: 50 });

  useEffect(() => {
    const onMove = (e) => {
      rx.set(e.clientX);
      ry.set(e.clientY);
      dx.set(e.clientX);
      dy.set(e.clientY);

      const el = e.target;
      if (el.closest(".view-trigger")) {
        setCursorType("view");
      } else if (el.closest("a") || el.closest("button") || el.tagName === "INPUT") {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [rx, ry, dx, dy]);

  const ringDim = cursorType === "view" ? 120 : cursorType === "hover" ? 48 : 36;

  return (
    <>
      {/* Outer ring — always a perfect circle */}
      <motion.div
        className="cursor-ring"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: ringDim,
          height: ringDim,
          x: rx,
          y: ry,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          border: cursorType === "view"
            ? "1.5px solid rgba(112,0,255,0.85)"
            : "1px solid rgba(255,255,255,0.55)",
          background: cursorType === "view" ? "rgba(112,0,255,0.06)" : "transparent",
          boxShadow: cursorType === "view" ? "0 0 24px rgba(112,0,255,0.2)" : "none",
          pointerEvents: "none",
          zIndex: 99998,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          transition: "width 0.45s cubic-bezier(0.23,1,0.32,1), height 0.45s cubic-bezier(0.23,1,0.32,1), border 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {cursorType === "view" && (
          <motion.svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
          >
            <path
              id="cp"
              fill="none"
              d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1,-72,0"
            />
            <text fill="rgba(112,0,255,1)" fontSize="8.5" fontFamily="'JetBrains Mono',monospace" fontWeight="700" letterSpacing="2.5">
              <textPath href="#cp">VIEW PROJECT • VIEW PROJECT •</textPath>
            </text>
          </motion.svg>
        )}
      </motion.div>

      {/* Inner dot */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: cursorType === "view" ? 5 : 7,
          height: cursorType === "view" ? 5 : 7,
          x: dx,
          y: dy,
          translateX: "-50%",
          translateY: "-50%",
          borderRadius: "50%",
          background: cursorType === "view" ? "#7000FF" : "#ffffff",
          boxShadow: cursorType === "view"
            ? "0 0 10px 2px rgba(112,0,255,0.9)"
            : "0 0 8px 2px rgba(255,255,255,0.75)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s ease, height 0.2s ease, background 0.2s ease",
        }}
      />
    </>
  );
}
