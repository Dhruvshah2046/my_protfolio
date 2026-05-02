"use client";

import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ─── project data ─── */
const projects = [
  {
    num: "01",
    title: "Epic Eats\nPlatform",
    img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "42%",
    mt: 0,
    ml: 40,
    brief: "A modern food delivery platform with real-time tracking, seamless payments, and an intuitive user interface for both customers and restaurants.",
    demoUrl: "https://example.com",
    tech: ["Next.js", "Tailwind", "Node.js"]
  },
  {
    num: "02",
    title: "Defensys\nTool",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "33%",
    mt: 120,
    ml: -40,
    brief: "An advanced cybersecurity monitoring tool that visualizes network traffic and detects anomalies in real-time.",
    demoUrl: "https://example.com",
    tech: ["React", "D3.js", "Python"]
  },
  {
    num: "03",
    title: "Sync\nManagement Site",
    img: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "v",
    colWidth: "25%",
    mt: 60,
    ml: 10,
    brief: "A collaborative project management portal designed for creative teams to sync workflows and track milestones effectively.",
    demoUrl: "https://example.com",
    tech: ["TypeScript", "GraphQL", "PostgreSQL"]
  },
  {
    num: "04",
    title: "E-Commerce\nWebsite",
    img: "https://images.unsplash.com/photo-1510784722466-f2aa9c52dee6?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "50%",
    mt: 30,
    ml: 20,
    brief: "A high-performance headless e-commerce storefront with dynamic filtering, cart management, and seamless checkout.",
    demoUrl: "https://example.com",
    tech: ["Next.js", "Shopify", "Framer Motion"]
  },
  {
    num: "05",
    title: "Hackathon\nProject",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "50%",
    mt: 80,
    ml: 20,
    brief: "A prototype built in 24 hours that solves local community issues by matching volunteers with real-time needs.",
    demoUrl: "https://example.com",
    tech: ["React", "Firebase", "Mapbox"]
  },
  {
    num: "06",
    title: "Fitness\nApp",
    img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "h",
    colWidth: "33%",
    mt: 20,
    ml: 30,
    brief: "A comprehensive fitness tracking dashboard that integrates with wearable APIs to display rich health metrics.",
    demoUrl: "https://example.com",
    tech: ["Vue.js", "Chart.js", "Express"]
  },
  {
    num: "07",
    title: "Social\nPlatform",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "v",
    colWidth: "25%",
    mt: 60,
    ml: 15,
    brief: "A niche community platform featuring real-time chat, threaded discussions, and user-generated content curation.",
    demoUrl: "https://example.com",
    tech: ["React Native", "WebSockets", "MongoDB"]
  },
  {
    num: "08",
    title: "Brand\nIdentity",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
    href: "#",
    type: "v",
    colWidth: "25%",
    mt: 40,
    ml: 15,
    brief: "A visual design overhaul for a modern tech startup, including a new design system, typography, and logo exploration.",
    demoUrl: "https://example.com",
    tech: ["Figma", "Illustrator", "After Effects"]
  },
];

/* ─── Tilt effect hook ─── */
function useTilt(ref) {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)"
  );
  const [glare, setGlare] = useState({ opacity: 0, rotate: 180 });

  const onMove = useCallback((e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;
    const angle = Math.atan2(
      e.clientX - (rect.left + rect.width / 2),
      -(e.clientY - (rect.top + rect.height / 2))
    ) * (180 / Math.PI);

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`
    );
    setGlare({ opacity: 0.15, rotate: angle });
  }, [ref]);

  const onLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)");
    setGlare({ opacity: 0, rotate: 180 });
  }, []);

  return { transform, glare, onMove, onLeave };
}

/* ─── Single Project Card ─── */
function ProjectCard({ project, index, onSelect }) {
  const ref = useRef(null);
  const tiltRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Alternating parallax for desktop depth effect
  const parallaxOffset = index % 2 === 0 ? 40 : -40;
  const y = useTransform(scrollYProgress, [0, 1], [parallaxOffset, -parallaxOffset]);
  const smoothY = useSpring(y, { stiffness: 90, damping: 20 });

  const { transform, glare, onMove, onLeave } = useTilt(tiltRef);

  const isVertical = project.type === "v";
  const imgAspect = isVertical ? "3/4" : "16/10";

  return (
    <motion.div
      ref={ref}
      className="project-card-wrapper"
      style={{
        width: project.colWidth,
        y: smoothY,
      }}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 1.0,
          ease: [0.22, 1, 0.36, 1],
          delay: index * 0.08,
        },
      }}
      viewport={{ once: true, margin: "-5%" }}
    >
      <div
        ref={tiltRef}
        className="project-tilt-container view-trigger"
        onMouseMove={(e) => { onMove(e); setIsHovered(true); }}
        onMouseLeave={() => { onLeave(); setIsHovered(false); }}
        style={{
          position: "relative",
          marginTop: `${project.mt}px`,
          marginLeft: `${project.ml}px`,
          width: "100%",
          willChange: "transform",
          transform,
          transition: "transform 0.4s cubic-bezier(0.23,1,0.32,1)",
          cursor: "pointer",
        }}
      >
        {/* Image */}
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "2px" }}>
          <motion.div
            onClick={() => onSelect(project)}
            style={{ display: "block" }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <div
              style={{
                width: "100%",
                aspectRatio: imgAspect,
                backgroundImage: `url(${project.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transition: "filter 0.4s ease",
                filter: isHovered ? "brightness(1.1)" : "brightness(0.85)",
              }}
            />
          </motion.div>
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
              pointerEvents: "none",
              opacity: isHovered ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          />
        </div>

        {/* Glare */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" }}>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: "150%",
              height: "150%",
              backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
              transform: `rotate(${glare.rotate}deg) translate(-50%, -50%)`,
              opacity: glare.opacity,
              transition: "opacity 0.3s ease",
            }}
          />
        </div>

        {/* Meta */}
        <div style={{ marginTop: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <h3
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(15px, 1.6vw, 20px)",
                letterSpacing: "-0.01em",
                color: isHovered ? "white" : "rgba(255,255,255,0.65)",
                lineHeight: 1.2,
                margin: 0,
                whiteSpace: "pre-line",
                transition: "color 0.3s ease",
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "10px",
                color: isHovered ? "#7000FF" : "rgba(255,255,255,0.2)",
                letterSpacing: "0.1em",
                transition: "color 0.3s ease",
                flexShrink: 0,
                marginLeft: "12px",
              }}
            >
              {project.num}
            </span>
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
            style={{ transformOrigin: "left" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <div style={{ height: "1px", background: "rgba(112,0,255,0.4)", marginTop: "10px" }} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Split-Screen Project Modal ─── */
function ProjectModal({ project, onClose }) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(10, 10, 10, 0.95)",
        backdropFilter: "blur(20px)",
        display: "flex",
        flexDirection: "row", // default row for desktop
      }}
      className="project-modal-container"
    >
      <style>{`
        .project-modal-container {
          flex-direction: row;
        }
        .project-modal-iframe {
          width: 70%;
          height: 100%;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .project-modal-details {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        @media (max-width: 1024px) {
          .project-modal-container {
            flex-direction: column;
          }
          .project-modal-iframe {
            width: 100%;
            height: 60%;
            border-right: none;
            border-bottom: 1px solid rgba(255,255,255,0.1);
          }
          .project-modal-details {
            width: 100%;
            height: 40%;
          }
        }
      `}</style>
      
      {/* Left side: Iframe (Website itself) */}
      <motion.div 
        className="project-modal-iframe"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ position: "relative", background: "#000" }}
      >
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "'JetBrains Mono', monospace", fontSize: "12px", color: "rgba(255,255,255,0.4)"
        }}>
          Loading environment...
        </div>
        <iframe 
          src={project.demoUrl} 
          title={project.title}
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            height: "100%",
            border: "none",
            background: "white",
          }}
        />
      </motion.div>

      {/* Right side: Project Details */}
      <motion.div 
        className="project-modal-details"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{
          background: "#0a0a0a",
          position: "relative",
        }}
      >
        {/* Header / Close button */}
        <div style={{
          padding: "32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          borderBottom: "1px solid rgba(255,255,255,0.05)"
        }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "#7000FF",
            textTransform: "uppercase"
          }}>
            Project {project.num}
          </div>
          <button 
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.1)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.05)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: "40px 32px", overflowY: "auto", flex: 1 }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(32px, 3vw, 48px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "white",
            marginBottom: "32px",
            whiteSpace: "pre-line",
            letterSpacing: "-0.03em"
          }}>
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ textDecoration: 'none', color: 'inherit', transition: "color 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#7000FF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
            >
              {project.title}
            </a>
          </h2>

          <div style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "16px",
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.6)",
            marginBottom: "48px"
          }}>
            {project.brief}
          </div>

          <div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              marginBottom: "16px"
            }}>
              Tech Stack
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {project.tech.map(t => (
                <div key={t} style={{
                  padding: "6px 14px",
                  background: "rgba(112,0,255,0.1)",
                  border: "1px solid rgba(112,0,255,0.3)",
                  borderRadius: "100px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.8)"
                }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      style={{
        position: "relative",
        padding: "140px 0 200px",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
      }}
    >
      {/* Left rail — hidden on mobile via CSS class */}
      <div
        className="section-rail"
        style={{
          position: "absolute",
          left: "24px",
          top: 0,
          bottom: 0,
          width: "1px",
          background: "linear-gradient(transparent, rgba(112,0,255,0.2) 15%, rgba(112,0,255,0.2) 85%, transparent)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        className="section-rail"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "backOut" }}
        style={{
          position: "absolute",
          left: "17px",
          top: "140px",
          width: "15px",
          height: "15px",
          border: "1px solid rgba(112,0,255,0.6)",
          borderRadius: "50%",
          zIndex: 5,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "4px",
            background: "#7000FF",
            borderRadius: "50%",
            boxShadow: "0 0 15px rgba(112,0,255,1)",
          }}
        />
      </motion.div>

      {/* Content header */}
      <div className="section-inner" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 4vw, 42px)",
            letterSpacing: "-0.03em",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.2,
            marginBottom: "80px",
            maxWidth: "680px",
          }}
        >
          Pushing boundaries through{" "}
          <span style={{ color: "white" }}>digital experiences</span>{" "}
          and engineering excellence.
        </motion.h2>
      </div>

      {/* Project grid */}
      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard 
            key={project.num} 
            project={project} 
            index={i} 
            onSelect={setSelectedProject} 
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
