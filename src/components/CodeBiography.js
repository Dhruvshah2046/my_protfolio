"use client";

import { motion } from "framer-motion";

// Exact color theme from yasio's about section
const C = {
  bg: "#0d1117",          // GitHub dark bg
  lineNum: "#3d4451",     // dim line numbers
  keyword: "#ff7b72",     // red — class, this
  func: "#d2a8ff",        // purple — constructor, workExperience
  string: "#a5d6ff",      // blue strings (single-quote values)
  str2: "#7ee787",        // green — dates/numbers
  comment: "#8b949e",     // gray comments
  base: "#e6edf3",        // main text
  punct: "#f0883e",       // brackets/operators in orange
};

const lines = [
  { num: "01", tokens: [{ t: "class", c: C.keyword }, { t: " DhruvShah ", c: C.base }, { t: "{", c: C.base }] },
  { num: "02", tokens: [{ t: "  // I can, because I did.", c: C.comment }] },
  { num: "03", tokens: [{ t: "  // My skills continuously expand.", c: C.comment }] },
  { num: "04", tokens: [] },
  { num: "05", tokens: [{ t: "  ", c: C.base }, { t: "constructor", c: C.func }, { t: "() {", c: C.base }] },
  { num: "06", tokens: [{ t: "    ", c: C.base }, { t: "this", c: C.keyword }, { t: ".name", c: C.base }, { t: " = ", c: C.punct }, { t: "'Dhruv Shah'", c: C.string }] },
  { num: "07", tokens: [{ t: "    ", c: C.base }, { t: "this", c: C.keyword }, { t: ".role", c: C.base }, { t: " = ", c: C.punct }, { t: "'Creative Developer & Designer'", c: C.string }] },
  { num: "08", tokens: [{ t: "    ", c: C.base }, { t: "this", c: C.keyword }, { t: ".email", c: C.base }, { t: " = ", c: C.punct }, { t: "'hello@dhruvshah.com'", c: C.string }] },
  { num: "09", tokens: [{ t: "    ", c: C.base }, { t: "this", c: C.keyword }, { t: ".based", c: C.base }, { t: " = ", c: C.punct }, { t: "'India'", c: C.string }] },
  { num: "10", tokens: [{ t: "  }", c: C.base }] },
  { num: "11", tokens: [] },
  { num: "12", tokens: [{ t: "  ", c: C.base }, { t: "workExperience", c: C.func }, { t: "() {", c: C.base }] },
  { num: "13", tokens: [{ t: "    return [", c: C.base }] },
  { num: "14", tokens: [{ t: "      { ", c: C.base }, { t: "'2024-now'", c: C.str2 }, { t: " : ", c: C.base }, { t: "'Freelance Full-stack Developer'", c: C.string }, { t: " },", c: C.base }] },
  { num: "15", tokens: [{ t: "      { ", c: C.base }, { t: "'2022-2024'", c: C.str2 }, { t: " : ", c: C.base }, { t: "'UI/UX Designer @ Creative Studio'", c: C.string }, { t: " },", c: C.base }] },
  { num: "16", tokens: [{ t: "      { ", c: C.base }, { t: "'2020-2022'", c: C.str2 }, { t: " : ", c: C.base }, { t: "'Frontend Dev @ Startup'", c: C.string }, { t: " }",  c: C.base }] },
  { num: "17", tokens: [{ t: "    ]", c: C.base }] },
  { num: "18", tokens: [{ t: "  }", c: C.base }] },
  { num: "19", tokens: [] },
  { num: "20", tokens: [{ t: "  ", c: C.base }, { t: "skills", c: C.func }, { t: "() {", c: C.base }] },
  { num: "21", tokens: [{ t: "    return [", c: C.base }] },
  { num: "22", tokens: [{ t: "      ", c: C.base }, { t: "'React'", c: C.string }, { t: ", ", c: C.base }, { t: "'Next.js'", c: C.string }, { t: ", ", c: C.base }, { t: "'TypeScript'", c: C.string }, { t: ", ", c: C.base }, { t: "'Node.js'", c: C.string }, { t: ", ", c: C.base }, { t: "'Figma'", c: C.string }] },
  { num: "23", tokens: [{ t: "      ", c: C.base }, { t: "'Three.js'", c: C.string }, { t: ", ", c: C.base }, { t: "'Framer Motion'", c: C.string }, { t: ", ", c: C.base }, { t: "'PostgreSQL'", c: C.string }] },
  { num: "24", tokens: [{ t: "    ]", c: C.base }] },
  { num: "25", tokens: [{ t: "  }", c: C.base }] },
  { num: "26", tokens: [{ t: "}", c: C.base }] },
];

export default function CodeBiography() {
  return (
    <div
      style={{
        background: C.bg,
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "8px",
        overflow: "auto",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "13px",
        lineHeight: "1.75",
        padding: "32px 0",
        boxShadow: "0 24px 80px -12px rgba(0,0,0,0.7)",
        maxHeight: "620px",
      }}
    >
      {/* Fake tab bar */}
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "0 24px 12px",
        marginBottom: "16px",
        marginTop: "-16px",
      }}>
        {["#ff5f56","#ffbd2e","#27c93f"].map((c, i) => (
          <div key={i} style={{ width: 10, height: 10, borderRadius: "50%", background: c, marginRight: 6 }} />
        ))}
        <span style={{
          marginLeft: "16px",
          fontSize: "10px",
          color: "rgba(255,255,255,0.25)",
          letterSpacing: "0.05em",
        }}>
          DhruvShah.ts
        </span>
      </div>

      {lines.map((line, li) => (
        <motion.div
          key={li}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: li * 0.025, duration: 0.35 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            alignItems: "flex-start",
            minHeight: "1.75em",
            paddingLeft: 0,
          }}
        >
          {/* Line number gutter */}
          <span
            style={{
              width: "52px",
              minWidth: "52px",
              textAlign: "right",
              paddingRight: "24px",
              color: C.lineNum,
              fontSize: "12px",
              userSelect: "none",
              borderRight: "1px solid rgba(255,255,255,0.05)",
              marginRight: "24px",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {line.num}
          </span>

          {/* Token line */}
          <span>
            {line.tokens.map((tok, ti) => (
              <span key={ti} style={{ color: tok.c }}>
                {tok.t}
              </span>
            ))}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
