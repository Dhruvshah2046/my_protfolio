"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="about" className="py-20 text-center">
        <section>
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="max-w-3xl mx-auto text-secondary text-lg">
            I am a passionate developer with a deep interest in building modern, scalable, and user-centric web applications. 
            With a background in both design and engineering, I specialize in creating experiences that are not only functional 
            but also beautiful and intuitive. My goal is to bridge the gap between technical complexity and simple, elegant design.
          </p>
        </section>
      </div>
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <style jsx>{`
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .text-center { text-align: center; }
        .text-4xl { font-size: 2.25rem; }
        .text-lg { font-size: 1.125rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .max-w-3xl { max-width: 48rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        .text-secondary { color: var(--text-secondary); }
      `}</style>
    </main>
  );
}
