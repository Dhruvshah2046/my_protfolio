"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold glow-text"
        >
          DS.
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-accent-primary transition-colors uppercase tracking-wider"
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden glass"
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium hover:text-accent-primary"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}

      <style jsx>{`
        .container {
          margin: 0 auto;
        }
        .flex {
          display: flex;
        }
        .justify-between {
          justify-content: space-between;
        }
        .items-center {
          align-items: center;
        }
        .gap-8 {
          gap: 2rem;
        }
        .gap-4 {
          gap: 1rem;
        }
        .mx-auto {
          margin-left: auto;
          margin-right: auto;
        }
        .px-6 {
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        .py-3 {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }
        .py-5 {
          padding-top: 1.25rem;
          padding-bottom: 1.25rem;
        }
        .hidden {
          display: none;
        }
        .md\\:flex {
          display: flex;
        }
        .md\\:hidden {
          display: none;
        }
        @media (min-width: 768px) {
          .hidden {
            display: none !important;
          }
          .md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .md\\:flex {
            display: none !important;
          }
          .md\\:hidden {
            display: block !important;
          }
        }
      `}</style>
    </nav>
  );
}
