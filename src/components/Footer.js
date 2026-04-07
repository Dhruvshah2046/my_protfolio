"use client";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-surface-border glass mt-20">
      <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="text-2xl font-bold glow-text mb-2">DS.</div>
          <p className="text-sm text-secondary">© 2026 Dhruv Shah. All rights reserved.</p>
        </div>
        
        <div className="flex gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-accent-primary transition-colors">About</a>
          <a href="#projects" className="hover:text-accent-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-accent-primary transition-colors">Privacy</a>
        </div>
      </div>
      
      <style jsx>{`
        .py-12 { padding-top: 3rem; padding-bottom: 3rem; }
        .mt-20 { margin-top: 5rem; }
        .gap-8 { gap: 2rem; }
        .gap-6 { gap: 1.5rem; }
        .container { margin: 0 auto; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .flex { display: flex; }
        .flex-col { flex-direction: column; }
        .justify-between { justify-content: space-between; }
        .items-center { align-items: center; }
        .font-bold { font-weight: 700; }
        .font-medium { font-weight: 500; }
        .text-sm { font-size: 0.875rem; }
        .text-2xl { font-size: 1.5rem; }
        .text-secondary { color: var(--text-secondary); }
        .rounded-full { border-radius: 9999px; }
        
        @media (min-width: 768px) {
          .flex-row { flex-direction: row; }
        }
      `}</style>
    </footer>
  );
}
