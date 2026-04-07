"use client";

import { motion } from "framer-motion";
import { Code, Layout, Server, Database, Smartphone, Palette } from "lucide-react";

const skills = [
  { name: "Frontend Dev", icon: <Layout />, tags: ["React", "Next.js", "Vue"] },
  { name: "Backend Dev", icon: <Server />, tags: ["Node.js", "Express", "PostgreSQL"] },
  { name: "UI/UX Design", icon: <Palette />, tags: ["Figma", "Adobe XD", "Prototyping"] },
  { name: "Database", icon: <Database />, tags: ["MongoDB", "MySQL", "Prisma"] },
  { name: "Mobile App", icon: <Smartphone />, tags: ["React Native", "Flutter"] },
  { name: "Core", icon: <Code />, tags: ["JavaScript", "TypeScript", "Python"] },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
        <div className="mx-auto w-20 h-1 bg-accent-primary rounded-full"></div>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10, borderColor: 'var(--accent-primary)' }}
            className="glass p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="mb-4 text-accent-primary">{skill.icon}</div>
            <h3 className="text-xl font-bold mb-3">{skill.name}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 bg-surface-border/20 rounded-full text-secondary">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Hover subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.div>
        ))}
      </motion.div>
      
      <style jsx>{`
        .grid {
          display: grid;
          gap: 1.5rem;
        }
        .text-4xl { font-size: 2.25rem; }
        .text-center { text-align: center; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-16 { margin-bottom: 4rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .w-20 { width: 5rem; }
        .h-1 { height: 0.25rem; }
        .rounded-full { border-radius: 9999px; }
        .rounded-2xl { border-radius: 1rem; }
        .p-8 { padding: 2rem; }
        .flex-wrap { flex-wrap: wrap; }
        .text-xs { font-size: 0.75rem; }
        .px-3 { padding-left: 0.75rem; padding-right: 0.75rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .text-secondary { color: var(--text-secondary); }
        .bg-surface-border\\/20 { background: rgba(255, 255, 255, 0.05); }
        .group:hover .group-hover\\:opacity-100 { opacity: 1; }
        .transition-opacity { transition: opacity 0.3s ease; }
        .relative { position: relative; }
        .overflow-hidden { overflow: hidden; }
        
        @media (min-width: 768px) {
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
}
