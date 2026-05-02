"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiFramer, SiThreedotjs,
  SiNodedotjs, SiPostgresql, SiMongodb,
  SiFigma, SiGit, SiVercel, SiDocker
} from "react-icons/si";
import { FaCodeBranch } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { TbApi } from "react-icons/tb";

const iconMap = {
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "TypeScript": <SiTypescript />,
  "Framer Motion": <SiFramer />,
  "Three.js": <SiThreedotjs />,
  "Node.js": <SiNodedotjs />,
  "PostgreSQL": <SiPostgresql />,
  "MongoDB": <SiMongodb />,
  "REST": <TbApi />,
  "Figma": <SiFigma />,
  "Design Systems": <MdDesignServices />,
  "Git": <SiGit />,
  "Vercel": <SiVercel />,
  "Docker": <SiDocker />,
  "CI/CD": <FaCodeBranch />
};

const skills = [
  { cat: "Frontend", items: ["React", "Next.js", "TypeScript", "Framer Motion", "Three.js"] },
  { cat: "Backend", items: ["Node.js", "PostgreSQL", "MongoDB", "REST"] },
  { cat: "Design", items: ["Figma", "Design Systems"] },
  { cat: "Tools", items: ["Git", "Vercel", "Docker", "CI/CD"] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", padding: "120px 48px", overflow: "hidden" }}>
      {/* Rail */}
      <div className="section-rail" style={{
        position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px",
        background: "linear-gradient(transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
      }} />
      <div className="section-rail" style={{
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
            fontSize: "clamp(36px, 6vw, 96px)",
            lineHeight: 0.95,
            letterSpacing: "-0.05em",
            color: "white",
            marginBottom: "80px",
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

        {/* skills-grid — CSS handles column count on each breakpoint */}
        <div className="skills-grid">
          {skills.map(({ cat, items }, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ background: "#0a0a0a", padding: "60px 40px" }}
            >
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#7000FF",
                marginBottom: "32px",
              }}>
                {cat}
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {items.map((item) => (
                  <div key={item} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    color: "rgba(255,255,255,0.65)",
                    transition: "color 0.2s ease"
                  }}
                  className="skill-item"
                  >
                    <span style={{ fontSize: "24px", display: "flex" }}>
                      {iconMap[item]}
                    </span>
                    <span style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: "18px",
                      fontWeight: 500,
                      letterSpacing: "-0.01em",
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
