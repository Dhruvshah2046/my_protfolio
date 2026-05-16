"use client";

import { useRef, useState, useCallback, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Epic Eats\nPlatform",
    img: "/images/epic-eats.svg",
    href: "#",
    type: "h",
    colWidth: "55%",
    mt: 0,
    ml: 0,
    briefSections: [
      { title: "Overview", body: "Epic Eats is a high-performance food delivery web application that fuses immersive brand storytelling with a fully functional e-commerce pipeline. The platform targets a digital-first food and beverage audience, delivering a cinematic browsing experience that feels closer to a premium brand site than a typical takeout app. Every interaction — from login to checkout — has been crafted to feel tactile, fast, and visually distinctive." },
      { title: "Authentication & Onboarding", body: "The entry point is an animated login interface built with custom SVG manipulation. The brand mascot's eyes follow the cursor in real time, and the password field triggers a playful peek animation. Signup and forgot-password flows maintain the same motion language, ensuring a seamless and memorable onboarding journey. The entire auth flow is backed by secure server-side credential hashing and session management." },
      { title: "3D Product Experience", body: "At the heart of Epic Eats is a bespoke 3D-modeled Juice Can designed from scratch as the primary interactive focal point. Users can rotate it a full 360 degrees, inspect label details, and watch it animate into the cart. The asset is optimised for web delivery, maintaining smooth 60fps performance even on mid-range devices without sacrificing visual fidelity." },
      { title: "Animation Engine & Motion Design", body: "The animation system is powered by GSAP (GreenSock Animation Platform). Scroll-triggered timelines reveal content in a cinematic sequence, while page transitions use coordinated GSAP timelines to eliminate jarring cuts. Micro-interactions — hover states, button presses, loading indicators — are all orchestrated through the same engine, creating a unified motion vocabulary across every screen." },
      { title: "Backend & Data Architecture", body: "Epic Eats relies on a MySQL relational database managed via phpMyAdmin. The schema is normalised to handle complex relationships between users, restaurants, menu items, order history, and delivery tracking. The backend exposes clean REST endpoints consumed by the frontend, keeping data access predictable, secure, and fully auditable." },
      { title: "Responsive & Cross-Platform", body: "Every animated element — including the 3D viewer and GSAP timelines — sits inside a fluid, responsive grid that adapts from ultrawide monitors down to 375px mobile screens. JavaScript detects device capability and gracefully degrades heavy animations on lower-powered devices to maintain a consistent, accessible experience across all platforms." },
    ],
    demoUrl: "https://epiceats-flame.vercel.app/login.html",
    tech: ["HTML", "CSS", "JavaScript", "GSAP", "MySQL", "phpMyAdmin"],
  },
  {
    num: "02",
    title: "Sync\nManagement Site",
    img: "/images/sync-cover.png",
    href: "#",
    type: "v",
    colWidth: "35%",
    mt: 180,
    ml: 120,
    briefSections: [
      { title: "Overview", body: "Sync is a collaborative project management portal built for modern software teams who need more than a basic task board. It combines a type-safe TypeScript frontend with a GraphQL API layer and a PostgreSQL data store to deliver a fast, reliable, and deeply integrated workspace — from sprint planning to deployment tracking — all in one cohesive product." },
      { title: "TypeScript-First Frontend", body: "Every component, hook, and utility in Sync is written in strict TypeScript, eliminating entire categories of runtime errors at compile time. Shared type definitions are auto-generated from the GraphQL schema using code-gen tooling, meaning the frontend and backend always share a single source of truth for data shapes — making refactoring safe and the codebase scalable as features grow." },
      { title: "GraphQL API & Optimised Querying", body: "Sync's API is built with GraphQL, letting the frontend request exactly the fields it needs — no over-fetching, no under-fetching. Queries are co-located with the components that consume them. Mutations handle task creation, assignment, status transitions, and comment threads with optimistic UI updates so the interface feels instantaneous even on slower connections." },
      { title: "Kanban, Sprints & Roadmap Views", body: "Teams can switch between three primary views: a drag-and-drop Kanban board for daily workflow, a sprint planner with velocity tracking, and a high-level roadmap timeline for quarterly planning. All three views read from the same underlying data model, so changes made in one view are immediately reflected across the others with zero sync delay." },
      { title: "Real-Time Collaboration", body: "Sync uses GraphQL subscriptions over WebSockets to push live updates to all connected team members. When a colleague moves a task, posts a comment, or changes a deadline, every other open session reflects the change within milliseconds — no manual refresh needed. Presence indicators show who is currently viewing a board, reducing duplicate work and promoting async coordination." },
      { title: "PostgreSQL Data Model", body: "The relational schema is built on PostgreSQL, leveraging foreign keys, indexes, and row-level security to keep data consistent and access scoped correctly. Projects, sprints, tasks, subtasks, labels, and comments are all first-class entities. Database migrations are versioned and fully reversible, keeping schema evolution auditable across all deployment environments." },
    ],
    demoUrl: "https://frontend-seven-orpin-60.vercel.app/home",
    tech: ["TypeScript", "GraphQL", "PostgreSQL", "React", "WebSockets", "Node.js"],
  },
  {
    num: "03",
    title: "Trafix",
    img: "/images/raspberry-pi.png",
    href: "#",
    type: "h",
    colWidth: "45%",
    mt: -40,
    ml: 0,
    briefSections: [
      { title: "Overview", body: "Trafix is an AI-driven proactive traffic management system designed to transition urban traffic control from a static, timer-based model to a dynamic, demand-responsive ecosystem. By leveraging real-time computer vision at the edge, Trafix optimizes signal timing to reduce congestion and improve urban mobility." },
      { title: "Computer Vision with YOLOv8", body: "The core of the system is a custom-trained YOLOv8 (You Only Look Once) model capable of detecting and classifying vehicles (cars, buses, trucks, motorcycles) with high precision. The model processes live video feeds directly on edge hardware, ensuring low latency and data privacy by analyzing frames locally without cloud dependency." },
      { title: "Vehicle Density Estimation", body: "Beyond simple detection, the system implements a density estimation algorithm that calculates the volume of traffic across multiple lanes in real time. It factors in vehicle count, classification, and proximity to the intersection to provide a high-fidelity 'demand score' for each direction of travel." },
      { title: "Dynamic Signal Control", body: "The control logic uses a weighted algorithm to dynamically adjust green light durations. Instead of fixed cycles, the system allocates more time to directions with higher demand scores, significantly reducing idle time at red lights and smoothing the overall flow of traffic through complex intersections." },
      { title: "Edge Computing & Connectivity", body: "Deployed on Raspberry Pi hardware, the system utilizes MQTT for low-overhead messaging between the vision engine and the signal controllers. A lightweight dashboard provides administrators with live telemetry, historical traffic trends, and system health status over secured HTTP endpoints." },
      { title: "Scalability & Urban Integration", body: "Designed for seamless integration into existing smart city infrastructure, Trafix uses standard communication protocols and modular hardware. The system is built to be horizontally scalable, allowing multiple intersections to coordinate their timing via a centralized traffic management hub for city-wide flow optimization." },
    ],
    demoUrl: "/documents/trafix.pdf",
    tech: ["YOLOv8", "Python", "Raspberry Pi", "MQTT", "OpenCV", "SQLite"],
  },
  {
    num: "04",
    title: "Virtual Painter\nProject",
    img: "/images/virtual-painter.png",
    href: "#",
    type: "h",
    colWidth: "45%",
    mt: 120,
    ml: 80,
    briefSections: [
      { title: "Overview", body: "Virtual Painter is a real-time computer vision application that turns a standard webcam into a digital canvas. By tracking hand gestures with sub-pixel precision using MediaPipe and OpenCV, users can draw, paint, and erase on a transparent overlay placed over the live camera feed — no stylus, touch screen, or additional hardware required. The result is an intuitive, contactless painting experience running at full webcam frame rates on a standard laptop." },
      { title: "Hand Tracking with MediaPipe", body: "Gesture detection is powered by Google's MediaPipe Hands model, which identifies 21 3D landmarks across the hand skeleton on every frame. The app tracks the index fingertip (landmark 8) and middle fingertip (landmark 12) to determine mode: index finger only enters drawing mode; both fingers raised enters selection or erase mode. Landmark positions are smoothed with a rolling average filter to eliminate jitter and produce clean, continuous brush strokes." },
      { title: "OpenCV Rendering Pipeline", body: "Each webcam frame is read into a NumPy array and passed through the MediaPipe inference pipeline. The drawing layer is maintained as a separate NumPy array the same size as the frame. Brush strokes are painted onto it using cv2.line calls between consecutive fingertip positions. At display time the drawing layer is alpha-composited over the live camera feed using addWeighted, creating the illusion of painting directly onto the real world." },
      { title: "Colour Selection & Brush Controls", body: "A colour palette bar rendered at the top of the frame lets users switch between eight preset colours — red, blue, green, purple, yellow, and white — by hovering the index finger over the desired swatch for a half-second dwell time. Brush thickness is adjustable through a pinch gesture, scaling from a 5px fine line up to a 50px broad stroke. An eraser mode clears a circular region matching the current brush size for intuitive correction." },
      { title: "Performance & Latency", body: "The entire pipeline — capture, inference, compositing, and display — runs in a single Python process targeting 30 frames per second. MediaPipe's lightweight model is optimised for CPU inference, avoiding any GPU dependency, keeping the app accessible on hardware without a discrete graphics card. Frame timing is monitored and resolution dynamically reduced if the pipeline falls below 24fps to maintain a smooth real-time feel." },
      { title: "Export & Session Recording", body: "At any point users can snapshot the current drawing layer as a transparent PNG, or merge it with the live frame to save a composite image. A session recording mode captures the entire painting process as an MP4 video using OpenCV's VideoWriter, producing a time-lapse from first stroke to finished artwork — ideal for sharing on social media or archiving creative work." },
    ],
    demoUrl: "/documents/virtualpainter.pdf",
    tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
  },
  {
    num: "05",
    title: "Roronoa Zoro\nLegend Experience",
    img: "/images/zoro-project.png",
    href: "#",
    type: "h",
    colWidth: "50%",
    mt: 80,
    ml: 40,
    briefSections: [
      { title: "The Legend's Path", body: "A cinematic tribute to Roronoa Zoro, the Pirate Hunter who vowed to become the World's Greatest Swordsman. This project explores the journey of a man who carries the dreams of a fallen friend and the weight of his own promise, manifested through a high-fidelity 3D digital experience." },
      { title: "Master of Santoryu", body: "The interface mirrors Zoro's discipline and strength. Using advanced Three.js rendering, users can interact with a detailed 3D model that showcases the iconic Three Sword Style. Every angle reflects the grit and intensity of a warrior who has survived countless battles on the Grand Line." },
      { title: "Breath of All Things", body: "Just as Zoro learns to cut through steel by sensing its rhythm, the site uses GSAP-driven scroll orchestration to reveal its story. The motion design is sharp and decisive, echoing the precision of a sword stroke, with fluid transitions that lead the viewer through the narrative." },
      { title: "Indomitable Will", body: "The aesthetic is dark, moody, and powerful. Custom shaders and post-processing effects create an atmosphere of high-stakes confrontation. The visual language captures the 'Ashura' spirit — a manifestation of willpower that defies the limits of the human body." },
      { title: "A Promise Beyond Death", body: "The project isn't just a technical showcase; it's a storytelling medium. It integrates character lore with cutting-edge web technology, proving that digital platforms can be as evocative as the greatest manga panels." },
    ],
    demoUrl: "https://dogstudio-zoro-clone.vercel.app/",
    tech: ["Three.js", "React", "GSAP", "Framer Motion", "GLSL"],
  },
];

/* ─── Brief Renderer ─── */
function BriefRenderer({ sections }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
      {sections.map((section, i) => (
        <div key={i}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7000FF",
            marginBottom: "10px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}>
            <span style={{ color: "rgba(112,0,255,0.5)", fontSize: "9px" }}>▸</span>
            {section.title}
          </div>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "14.5px",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.58)",
            margin: 0,
          }}>
            {section.body}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─── Tilt effect hook ─── */
function useTilt(ref) {
  const [transform, setTransform] = useState(
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  );
  const [glare, setGlare] = useState({ opacity: 0, rotate: 180 });

  const onMove = useCallback((e) => {
    if (!ref.current || window.innerWidth <= 1024) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (0.5 - y) * 10;
    const rotateY = (x - 0.5) * 10;
    const angle = Math.atan2(
      e.clientX - (rect.left + rect.width / 2),
      -(e.clientY - (rect.top + rect.height / 2))
    ) * (180 / Math.PI);
    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02,1.02,1.02)`);
    setGlare({ opacity: 0.15, rotate: angle });
  }, [ref]);

  const onLeave = useCallback(() => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
    setGlare({ opacity: 0, rotate: 180 });
  }, []);

  return { transform, glare, onMove, onLeave };
}

/* ─── Single Project Card ─── */
function ProjectCard({ project, index, onSelect }) {
  const ref = useRef(null);
  const tiltRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasPerspective, setHasPerspective] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1024) setHasPerspective(true);
  }, []);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
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
      style={{ width: project.colWidth, y: smoothY }}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0, transition: { duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 } }}
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
          perspective: hasPerspective ? "1000px" : "none",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "2px" }}>
          <motion.div
            onClick={() => onSelect(project)}
            style={{ display: "block" }}
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            <div style={{
              width: "100%",
              aspectRatio: imgAspect,
              backgroundImage: `url(${project.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "filter 0.4s ease",
              filter: isHovered ? "brightness(1.1)" : "brightness(0.85)",
            }} />
          </motion.div>
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 50%)",
            pointerEvents: "none",
            opacity: isHovered ? 0 : 1,
            transition: "opacity 0.4s ease",
          }} />
        </div>

        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", overflow: "hidden", pointerEvents: "none" }}>
          <div style={{
            position: "absolute", top: "50%", left: "50%", width: "150%", height: "150%",
            backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.1) 0%, transparent 70%)",
            transform: `rotate(${glare.rotate}deg) translate(-50%, -50%)`,
            opacity: glare.opacity,
            transition: "opacity 0.3s ease",
          }} />
        </div>

        <div style={{ marginTop: "16px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(15px, 1.6vw, 20px)",
              letterSpacing: "-0.01em",
              color: isHovered ? "white" : "rgba(255,255,255,0.65)",
              lineHeight: 1.2, margin: 0, whiteSpace: "pre-line",
              transition: "color 0.3s ease",
            }}>
              {project.title}
            </h3>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: isHovered ? "#7000FF" : "rgba(255,255,255,0.2)",
              letterSpacing: "0.1em",
              transition: "color 0.3s ease",
              flexShrink: 0, marginLeft: "12px",
            }}>
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

/* ─── Project Modal ─── */
function ProjectModal({ project, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(20px)",
        display: "flex", flexDirection: "row",
      }}
      className="project-modal-container"
    >
      <style>{`
        .project-modal-container { flex-direction: row; }
        .project-modal-iframe-container { width: 70%; height: 100%; border-right: 1px solid rgba(255,255,255,0.1); display: flex; }
        .project-modal-details { width: 30%; height: 100%; display: flex; flex-direction: column; }
        @media (max-width: 1024px) {
          .project-modal-container { flex-direction: column; overflow-y: auto; }
          .project-modal-iframe-container { 
            width: 100% !important; 
            height: 60vh !important; 
            border-right: none; 
            border-bottom: 1px solid rgba(255,255,255,0.1); 
            display: flex !important; 
            flex-shrink: 0;
          }
          .project-modal-details { 
            width: 100% !important; 
            height: auto !important; 
            min-height: 40vh;
          }
          .project-modal-header { padding: 20px 24px !important; }
          .project-modal-content { padding: 24px 20px !important; }
        }
      `}</style>

      <div className="project-modal-iframe-container" style={{ position: "relative", width: "70%", height: "100%" }}>
        <div style={{
          position: "absolute", inset: 0, display: "flex",
          alignItems: "center", justifyContent: "center",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "12px", color: "rgba(255,255,255,0.4)",
        }}>
          Loading environment...
        </div>
        <iframe
          src={project.demoUrl}
          title={project.title}
          style={{ position: "relative", zIndex: 2, width: "100%", height: "100%", border: "none", background: "white" }}
        />
      </div>

      <motion.div
        className="project-modal-details"
        initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        style={{ background: "#0a0a0a", position: "relative" }}
      >
        <div 
          className="project-modal-header"
          style={{
            padding: "32px",
            display: "flex", justifyContent: "space-between", alignItems: "flex-start",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            flexShrink: 0,
          }}
        >
          <div style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px", letterSpacing: "0.2em",
            color: "#7000FF", textTransform: "uppercase",
          }}>
            Project {project.num}
          </div>
          <button
            onClick={onClose}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%", width: "48px", height: "48px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "white", cursor: "pointer",
              transition: "background 0.2s, transform 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "scale(1.05)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "scale(1)"; }}
          >
            <X size={24} />
          </button>
        </div>

        <div 
          className="project-modal-content"
          style={{ padding: "clamp(24px, 4vw, 40px) clamp(20px, 3vw, 32px)", overflowY: "auto", flex: 1 }}
        >
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: "clamp(28px, 2.6vw, 44px)",
            fontWeight: 800, lineHeight: 1.1,
            color: "white", marginBottom: "8px",
            whiteSpace: "pre-line", letterSpacing: "-0.03em",
          }}>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit", transition: "color 0.2s" }}
              onMouseEnter={(e) => e.currentTarget.style.color = "#7000FF"}
              onMouseLeave={(e) => e.currentTarget.style.color = "inherit"}
            >
              {project.title}
            </a>
          </h2>

          {project.demoUrl && (
            <div style={{ marginBottom: "32px" }}>
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "14px 28px",
                  background: "#7000FF",
                  border: "none",
                  borderRadius: "100px",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "white",
                  textDecoration: "none",
                  transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                  boxShadow: "0 10px 25px rgba(112,0,255,0.4)",
                }}
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 15px 35px rgba(112,0,255,0.5)";
                }}
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 10px 25px rgba(112,0,255,0.4)";
                }}
              >
                {project.demoUrl.endsWith(".pdf") ? "Open Document" : "Visit Live Site"}
                <span style={{ fontSize: "16px" }}>↗</span>
              </a>
            </div>
          )}

          <div style={{ height: "1px", background: "rgba(112,0,255,0.15)", margin: "0 0 32px" }} />

          <BriefRenderer sections={project.briefSections} />

          <div style={{ marginTop: "40px" }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px", letterSpacing: "0.2em",
              color: "rgba(255,255,255,0.3)", textTransform: "uppercase",
              marginBottom: "16px",
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
                  fontSize: "13px", color: "rgba(255,255,255,0.8)",
                }}>
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div style={{ height: "48px" }} />
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Main Section ─── */
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" style={{ position: "relative", padding: "140px 0 200px", overflow: "hidden", backgroundColor: "#0a0a0a" }}>
      <div className="section-rail" style={{ position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(transparent, rgba(112,0,255,0.2) 15%, rgba(112,0,255,0.2) 85%, transparent)", pointerEvents: "none" }} />
      <motion.div
        className="section-rail"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "backOut" }}
        style={{ position: "absolute", left: "17px", top: "140px", width: "15px", height: "15px", border: "1px solid rgba(112,0,255,0.6)", borderRadius: "50%", zIndex: 5 }}
      >
        <div style={{ position: "absolute", inset: "4px", background: "#7000FF", borderRadius: "50%", boxShadow: "0 0 15px rgba(112,0,255,1)" }} />
      </motion.div>

      <div className="section-inner" style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.4)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "8px" }}
        >
          Work <span style={{ color: "#7000FF", fontWeight: 700 }}>/&gt;</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
          style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400, fontSize: "clamp(22px, 4vw, 42px)", letterSpacing: "-0.03em", color: "rgba(255,255,255,0.6)", lineHeight: 1.2, marginBottom: "80px", maxWidth: "680px" }}
        >
          Pushing boundaries through{" "}
          <span style={{ color: "white" }}>digital experiences</span>{" "}
          and engineering excellence.
        </motion.h2>
      </div>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} onSelect={setSelectedProject} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}