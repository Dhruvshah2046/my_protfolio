"use client";

import { useState, useEffect } from "react";

export default function CustomCursor() {
  const [cursorType, setCursorType] = useState("default");
  const [isTouch, setIsTouch] = useState(true); // default true to avoid flicker

  useEffect(() => {
    // Only show custom cursor on devices with a fine pointer (mouse)
    const isMouseDevice = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setIsTouch(!isMouseDevice);
  }, []);

  // Spring simulation using requestAnimationFrame
  const [outerPos, setOuterPos] = useState({ x: -200, y: -200 });
  const [innerPos, setInnerPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (isTouch) return;

    let outerX = -200, outerY = -200;
    let innerX = -200, innerY = -200;
    let mouseX = -200, mouseY = -200;
    let rafId;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      innerX = e.clientX;
      innerY = e.clientY;
      setInnerPos({ x: e.clientX, y: e.clientY });

      const el = e.target;
      if (el.closest(".view-trigger")) {
        setCursorType("view");
      } else if (el.closest("a") || el.closest("button")) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    const animate = () => {
      outerX += (mouseX - outerX) * 0.12;
      outerY += (mouseY - outerY) * 0.12;
      setOuterPos({ x: outerX, y: outerY });
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, [isTouch]);

  if (isTouch) return null;

  const ringDim = cursorType === "view" ? 120 : cursorType === "hover" ? 48 : 36;

  return (
    <>
      {/* Outer ring */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: ringDim,
          height: ringDim,
          transform: `translate(${outerPos.x - ringDim / 2}px, ${outerPos.y - ringDim / 2}px)`,
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
          transition: "width 0.45s cubic-bezier(0.23,1,0.32,1), height 0.45s cubic-bezier(0.23,1,0.32,1), border 0.3s ease",
        }}
      >
        {cursorType === "view" && (
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", animation: "spin 7s linear infinite" }}
            viewBox="0 0 100 100"
          >
            <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
            <path id="cp" fill="none" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1,-72,0" />
            <text fill="rgba(112,0,255,1)" fontSize="8.5" fontFamily="'JetBrains Mono',monospace" fontWeight="700" letterSpacing="2.5">
              <textPath href="#cp">VIEW PROJECT • VIEW PROJECT •</textPath>
            </text>
          </svg>
        )}
      </div>

      {/* Inner dot */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: cursorType === "view" ? 5 : 7,
          height: cursorType === "view" ? 5 : 7,
          transform: `translate(${innerPos.x - (cursorType === "view" ? 2.5 : 3.5)}px, ${innerPos.y - (cursorType === "view" ? 2.5 : 3.5)}px)`,
          borderRadius: "50%",
          background: cursorType === "view" ? "#7000FF" : "#ffffff",
          boxShadow: cursorType === "view"
            ? "0 0 10px 2px rgba(112,0,255,0.9)"
            : "0 0 8px 2px rgba(255,255,255,0.75)",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
