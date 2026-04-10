"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

const socials = [
  { name: "LinkedIn", handle: "in/dhruv-shah", href: "#" },
  { name: "GitHub",   handle: "github/dhruvshah", href: "#" },
  { name: "Instagram", handle: "@dhruv.creates", href: "#" },
  { name: "Email",    handle: "hello@dhruvshah.com", href: "mailto:hello@dhruvshah.com" },
];

const steps = [
  {
    prompt: (data, set) => (
      <span>
        Hi, my name is{" "}
        <InlineInput
          placeholder="your name"
          value={data.name}
          onChange={(v) => set({ ...data, name: v })}
        />
        {" "}and I&apos;d love to reach out from{" "}
        <InlineInput
          placeholder="your@email.com"
          value={data.email}
          onChange={(v) => set({ ...data, email: v })}
        />
      </span>
    ),
  },
  {
    prompt: (data, set) => (
      <span>
        I need help with a{" "}
        <InlineInput
          placeholder="project type"
          value={data.project}
          onChange={(v) => set({ ...data, project: v })}
        />
        {" "}and my budget is around{" "}
        <InlineInput
          placeholder="$5k–$15k"
          value={data.budget}
          onChange={(v) => set({ ...data, budget: v })}
        />
      </span>
    ),
  },
];

function InlineInput({ placeholder, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: "transparent",
        border: "none",
        borderBottom: "1.5px solid rgba(255,255,255,0.2)",
        outline: "none",
        color: "white",
        fontFamily: "inherit",
        fontWeight: "inherit",
        fontSize: "inherit",
        letterSpacing: "inherit",
        padding: "0 6px 4px",
        width: value ? `${Math.max(value.length + 1, placeholder.length)}ch` : `${placeholder.length}ch`,
        transition: "border-color 0.3s ease",
      }}
      onFocus={(e) => (e.currentTarget.style.borderColor = "#7000FF")}
      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
    />
  );
}

export default function Contact() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: "", email: "", project: "", budget: "" });
  const [sent, setSent] = useState(false);

  const canNext = step === 0
    ? data.name.trim() && data.email.trim()
    : data.project.trim() && data.budget.trim();

  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setSent(true);
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: "relative",
        padding: "140px 48px 160px",
        overflow: "hidden",
      }}
    >
      {/* Rail */}
      <div style={{
        position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px",
        background: "linear-gradient(transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
      }} />
      <div style={{
        position: "absolute", left: "20px", top: "140px", width: "9px", height: "9px",
        background: "#7000FF", borderRadius: "50%", boxShadow: "0 0 16px #7000FF",
      }} />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px", letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#7000FF", marginBottom: "60px",
          }}
        >
          Contact /&gt;
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "80px", alignItems: "flex-start" }}>
          {/* Left — "Mad Libs" form */}
          <div>
            {!sent ? (
              <>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(28px, 4.5vw, 68px)",
                    lineHeight: 1.15,
                    letterSpacing: "-0.04em",
                    color: "white",
                    marginBottom: "60px",
                  }}
                >
                  {steps[step].prompt(data, setData)}
                </motion.div>

                <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
                  <button
                    onClick={handleNext}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "11px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "white",
                      background: canNext ? "#7000FF" : "rgba(255,255,255,0.06)",
                      border: "none",
                      padding: "14px 32px",
                      borderRadius: "100px",
                      cursor: canNext ? "auto" : "auto",
                      opacity: canNext ? 1 : 0.5,
                      transition: "background 0.3s ease, opacity 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                      boxShadow: canNext ? "0 12px 35px -8px rgba(112,0,255,0.55)" : "none",
                    }}
                    onMouseEnter={(e) => canNext && (e.currentTarget.style.transform = "translateY(-2px)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                  >
                    {step === steps.length - 1 ? "Send Message" : "Continue"}
                    <ArrowRight size={14} />
                  </button>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px", letterSpacing: "0.25em",
                    color: "rgba(255,255,255,0.2)", textTransform: "uppercase",
                  }}>
                    Step {step + 1} / {steps.length}
                  </span>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p style={{
                  fontFamily: "'Newsreader', serif",
                  fontStyle: "italic",
                  fontWeight: 300,
                  fontSize: "clamp(60px, 10vw, 120px)",
                  color: "#7000FF",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  marginBottom: "32px",
                }}>
                  Sent.
                </p>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "22px",
                  color: "rgba(255,255,255,0.45)",
                  fontWeight: 400,
                }}>
                  I'll be in touch within 24 hours.
                </p>
              </motion.div>
            )}
          </div>

          {/* Right — Social links */}
          <div style={{ paddingTop: "8px" }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              marginBottom: "32px",
            }}>
              Find me
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              {socials.map(({ name, handle, href }) => (
                <a
                  key={name}
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 0",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.45)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "white";
                    e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.45)";
                    e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.05)";
                  }}
                >
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    letterSpacing: "-0.01em",
                    color: "inherit",
                  }}>
                    {name}
                  </span>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,0.25)",
                  }}>
                    {handle} /&gt;
                  </span>
                </a>
              ))}
            </div>

            <div style={{ marginTop: "40px" }}>
              <p style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "9px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.15)",
                marginBottom: "8px",
              }}>
                Availability
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "6px", height: "6px", borderRadius: "50%",
                  background: "#27C93F", boxShadow: "0 0 8px #27C93F",
                  animation: "pulse 2s infinite",
                }} />
                <span style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                }}>
                  Open to new projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
