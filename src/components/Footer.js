"use client";

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "40px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "16px",
      }}
    >
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.2)",
        }}
      >
        © {new Date().getFullYear()} Dhruv Shah
      </span>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "10px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.12)",
        }}
      >
        Designed & Built by Dhruv Shah
      </span>
    </footer>
  );
}
