"use client";

import { motion } from "framer-motion";

const skills = [
  { cat: "Frontend", items: ["React", "Next.js", "TypeScript", "Framer Motion", "Three.js"] },
  { cat: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "REST", "GraphQL"] },
  { cat: "Design", items: ["Figma", "Motion Design", "Design Systems", "Prototyping"] },
  { cat: "Tools", items: ["Git", "Vercel", "Docker", "AWS", "CI/CD"] },
];

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ position: "relative", padding: "120px 48px", overflow: "hidden" }}
    >
      {/* Rail */}
      <div style={{
        position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px",
        background: "linear-gradient(transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
      }} />
      <div style={{
        position: "absolute", left: "20px", top: "120px", width: "9px", height: "9px",
        background: "#7000FF", borderRadius: "50%", boxShadow: "0 0 16px #7000FF",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px", letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#7000FF", marginBottom: "24px",
          }}
        >
          Stack /&gt;
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(42px, 6vw, 96px)",
            lineHeight: 0.9,
            letterSpacing: "-0.05em",
            color: "white",
            marginBottom: "100px",
          }}
        >
          Tools &<br />
          <span style={{
            fontFamily: "'Newsreader', serif",
            fontStyle: "italic",
            fontWeight: 300,
            color: "rgba(255,255,255,0.3)",
            fontSize: "0.75em",
          }}>
            technologies
          </span>
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
          {skills.map(({ cat, items }, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{
                background: "#0a0a0a",
                padding: "40px 32px",
              }}
            >
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7000FF",
                marginBottom: "24px",
              }}>
                {cat}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {items.map((item) => (
                  <span key={item} style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.65)",
                    letterSpacing: "-0.01em",
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
