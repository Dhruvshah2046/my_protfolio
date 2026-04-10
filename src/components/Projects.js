"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

/* ─── project data with exact yasio-style positioning ─── */
const projects = [
  {
    num: "00",
    title: "AI SaaS\nPlatform",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "42%",
    mt: 0,
    ml: 40,
  },
  {
    num: "01",
    title: "Fintech\nDashboard",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "33%",
    mt: 120,
    ml: -40,
  },
  {
    num: "02",
    title: "E-Commerce\nStore",
    img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "v",
    colWidth: "25%",
    mt: 60,
    ml: 10,
  },
  {
    num: "03",
    title: "Creative\nPortfolio",
    img: "https://images.unsplash.com/photo-1510784722466-f2aa9c52dee6?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "50%",
    mt: 30,
    ml: 20,
  },
  {
    num: "04",
    title: "Architecture\nVisualization",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "50%",
    mt: 80,
    ml: 20,
  },
  {
    num: "05",
    title: "Mobile\nFitness App",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "33%",
    mt: 20,
    ml: 30,
  },
  {
    num: "06",
    title: "Social\nPlatform",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "v",
    colWidth: "25%",
    mt: 60,
    ml: 15,
  },
  {
    num: "07",
    title: "Brand\nIdentity",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "v",
    colWidth: "25%",
    mt: 40,
    ml: 15,
  },
];

/* ─── Tilt effect hook (replicates data-tilt) ─── */
function useTilt(ref) {
  const [transform, setTransform] = useState(
    "perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [glare, setGlare] = useState({ opacity: 0, rotate: 180 });

  const onMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 12;
    const rotateY = (x - 0.5) * 12;
    const angle = Math.atan2(e.clientX - (rect.left + rect.width / 2), -(e.clientY - (rect.top + rect.height / 2))) * (180 / Math.PI);

    setTransform(
      `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.05,1.05,1.05)`
    );
    setGlare({ opacity: 0.18, rotate: angle });
  }, [ref]);

  const onLeave = useCallback(() => {
    setTransform("perspective(700px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlare({ opacity: 0, rotate: 180 });
  }, []);

  return { transform, glare, onMove, onLeave };
}

/* ─── Block Reveal component ─── */
function BlockReveal({ children, delay = 0, inView }) {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* The sliding block */}
      <motion.span
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(112,0,255,0.85)",
          zIndex: 2,
          transformOrigin: "right",
        }}
        initial={{ scaleX: 1 }}
        animate={
          inView
            ? { scaleX: [1, 1, 0], transformOrigin: ["left", "left", "right"] }
            : { scaleX: 1 }
        }
        transition={{
          duration: 0.75,
          delay,
          times: [0, 0.4, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      {/* Content behind the block */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.25, duration: 0.01 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

/* ─── Single Project Card ─── */
function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const tiltRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const { transform, glare, onMove, onLeave } = useTilt(tiltRef);

  const isVertical = project.type === "v";
  const imgAspect = isVertical ? "3/4.5" : "16/10";
  const baseDelay = index * 0.04;

  return (
    <div
      ref={ref}
      style={{
        width: project.colWidth,
        flexShrink: 0,
        display: "flex",
        justifyContent: "center",
        padding: "0 12px",
        boxSizing: "border-box",
      }}
    >
      <div
        ref={tiltRef}
        className="view-trigger"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          position: "relative",
          marginTop: project.mt + "px",
          marginLeft: project.ml + "px",
          width: "100%",
          willChange: "transform",
          transform,
          transition: "transform 0.35s cubic-bezier(0.23,1,0.32,1)",
        }}
      >
        {/* ── Image with block-reveal ── */}
        <BlockReveal delay={baseDelay} inView={inView}>
          <a href={project.href} style={{ display: "block", textDecoration: "none" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: imgAspect,
                backgroundImage: `url(${project.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "2px",
              }}
            />
          </a>
        </BlockReveal>

        {/* ── Glare overlay (like data-tilt-glare) ── */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none",
            borderRadius: "inherit",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "820px",
              height: "820px",
              pointerEvents: "none",
              backgroundImage:
                "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
              transform: `rotate(${glare.rotate}deg) translate(-50%, -50%)`,
              transformOrigin: "0% 0%",
              opacity: glare.opacity,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>

        {/* ── Project meta (title + divider + number) ── */}
        <div style={{ marginTop: "14px" }}>
          {/* Title with block-reveal */}
          <BlockReveal delay={baseDelay + 0.2} inView={inView}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(14px, 1.6vw, 20px)",
                letterSpacing: "-0.02em",
                color: "white",
                lineHeight: 1.15,
                margin: 0,
                whiteSpace: "pre-line",
              }}
            >
              {project.title}
            </h3>
          </BlockReveal>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            style={{ transformOrigin: "left" }}
            transition={{
              duration: 0.4,
              delay: baseDelay + 0.35,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div
              style={{
                height: "1px",
                background: "rgba(255,255,255,0.12)",
                margin: "10px 0",
              }}
            />
          </motion.div>

          {/* Number + Arrow with block-reveal */}
          <BlockReveal delay={baseDelay + 0.4} inView={inView}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "rgba(255,255,255,0.25)",
                  letterSpacing: "0.05em",
                }}
              >
                {project.num}
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.25)",
                  marginTop: "2px",
                }}
              >
                →
              </span>
            </div>
          </BlockReveal>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "140px 0 200px",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Left rail */}
      <div
        style={{
          position: "absolute",
          left: "24px",
          top: 0,
          bottom: 0,
          width: "1px",
          background:
            "linear-gradient(transparent, rgba(112,0,255,0.25) 15%, rgba(112,0,255,0.25) 85%, transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: "17px",
          top: "140px",
          width: "15px",
          height: "15px",
          border: "1px solid rgba(112,0,255,0.6)",
          borderRadius: "50%",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "3px",
            background: "#7000FF",
            borderRadius: "50%",
            boxShadow: "0 0 12px rgba(112,0,255,0.9)",
          }}
        />
      </div>

      {/* Content */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 48px" }}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "24px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Work <span style={{ color: "#7000FF", fontWeight: 700 }}>/&gt;</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(20px, 2.5vw, 32px)",
            letterSpacing: "-0.02em",
            color: "rgba(255,255,255,0.5)",
            lineHeight: 1.4,
            marginBottom: "80px",
            maxWidth: "600px",
          }}
        >
          Selected web, mobile, video projects...
        </motion.h2>
      </div>

      {/* ── Flex-wrap scattered grid (exactly like yasio) ── */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "center",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
