"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const linkStyle = {
    fontFamily: "'Space Grotesk', sans-serif",
    fontSize: "14px",
    fontWeight: 500,
    color: "rgba(255,255,255,0.5)",
    letterSpacing: "-0.01em",
    textDecoration: "none",
    transition: "color 0.2s ease",
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: scrolled ? "16px 24px" : "28px 24px",
        background: scrolled ? "rgba(10,10,10,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
      }}
    >
      {/* Brand */}
      <a
        href="#"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 700,
          fontSize: "16px",
          letterSpacing: "-0.02em",
          color: "white",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: "1px",
        }}
      >
        <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>&lt;</span>
        <span style={{ color: "#7000FF" }}>DHRUV</span>
        <span style={{ color: "rgba(255,255,255,0.35)", fontWeight: 300 }}>/&gt;</span>
      </a>

      {/* Desktop nav links */}
      <div className="nav-links">
        {[
          { label: "Start", href: "#" },
          { label: "Work", href: "#projects" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            style={linkStyle}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.95)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            {label}{" "}
            <span style={{ color: "#7000FF", fontWeight: 700 }}>/&gt;</span>
          </a>
        ))}
      </div>

      {/* Mobile CTA — shown via CSS */}
      <a
        href="#contact"
        className="nav-cta"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "11px",
          color: "#7000FF",
          border: "1px solid rgba(112,0,255,0.4)",
          padding: "8px 16px",
          borderRadius: "100px",
          letterSpacing: "0.05em",
        }}
      >
        Let&apos;s talk
      </a>
    </nav>
  );
}
