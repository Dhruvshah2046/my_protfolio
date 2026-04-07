"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI SaaS Platform",
    desc: "A full-stack platform for AI-powered content generation.",
    tags: ["Next.js", "OpenAI", "Stripe"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Eco-Friendly E-commerce",
    desc: "Modern e-commerce for sustainable products.",
    tags: ["React", "Shopify", "Tailwind"],
    image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Fintech Dashboard",
    desc: "Real-time crypto and stock market visualization.",
    tags: ["D3.js", "Firebase", "WebSockets"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-4xl font-bold mb-4">Featured Work</h2>
          <p className="text-secondary max-w-md">
            Selection of my most challenging and impactful projects built with love.
          </p>
        </div>
        <a href="#" className="text-accent-primary font-medium border-b border-accent-primary">View All</a>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden glass aspect-[4/5]"
          >
            <img 
              src={project.image} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-color via-bg-color/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <div className="flex gap-2 mb-3">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-accent-primary/20 text-accent-primary rounded backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-secondary mb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.desc}
              </p>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="p-2 bg-text-primary text-bg-color rounded-full"><ExternalLink size={18} /></a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <style jsx>{`
        .grid {
          display: grid;
          gap: 2rem;
        }
        .text-4xl { font-size: 2.25rem; }
        .text-2xl { font-size: 1.5rem; }
        .flex { display: flex; }
        .justify-between { justify-content: space-between; }
        .items-end { align-items: flex-end; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-16 { margin-bottom: 4rem; }
        .max-w-md { max-width: 28rem; }
        .text-secondary { color: var(--text-secondary); }
        .text-accent-primary { color: var(--accent-primary); }
        .border-b { border-bottom: 1px solid currentColor; }
        .rounded-3xl { border-radius: 1.5rem; }
        .aspect-\\[4\\/5\\] { aspect-ratio: 4/5; }
        .p-8 { padding: 2rem; }
        .p-2 { padding: 0.5rem; }
        .bg-text-primary { background: var(--text-primary); }
        .text-bg-color { color: var(--bg-color); }
        .rounded-full { border-radius: 9999px; }
        .transform { transform: var(--tw-transform); }
        .translate-y-4 { --tw-translate-y: 1rem; transform: translateY(1rem); }
        .translate-y-0 { --tw-translate-y: 0px; transform: translateY(0); }
        .opacity-0 { opacity: 0; }
        .opacity-100 { opacity: 1; }
        .transition-opacity { transition: opacity 0.3s ease; }
        .transition-transform { transition: transform 0.5s ease; }
        
        @media (min-width: 768px) {
          .md\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
}
