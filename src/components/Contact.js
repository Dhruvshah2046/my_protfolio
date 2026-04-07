"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <section id="contact">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-5xl font-bold mb-6">Let's build something <span className="glow-text">great</span> together.</h2>
          <p className="text-secondary mb-10 text-lg">
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 glass rounded-xl text-accent-primary"><Mail size={24} /></div>
              <div>
                <p className="text-xs text-secondary uppercase font-bold">Email</p>
                <p className="font-semibold">hello@dhruvshah.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 glass rounded-xl text-accent-primary"><MapPin size={24} /></div>
              <div>
                <p className="text-xs text-secondary uppercase font-bold">Location</p>
                <p className="font-semibold">San Francisco, CA</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 glass rounded-xl text-accent-primary"><Phone size={24} /></div>
              <div>
                <p className="text-xs text-secondary uppercase font-bold">Phone</p>
                <p className="font-semibold">+1 (555) 000-0000</p>
              </div>
            </div>
          </div>
        </div>

        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass p-10 rounded-3xl"
        >
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label className="text-xs font-bold uppercase tracking-wider">Full Name</label>
              <input type="text" className="w-full bg-surface-border/10 border border-surface-border p-4 rounded-xl focus:border-accent-primary outline-none transition-colors" placeholder="John Doe" required />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-bold uppercase tracking-wider">Email Address</label>
              <input type="email" className="w-full bg-surface-border/10 border border-surface-border p-4 rounded-xl focus:border-accent-primary outline-none transition-colors" placeholder="john@example.com" required />
            </div>
            <div className="grid gap-2">
              <label className="text-xs font-bold uppercase tracking-wider">Your Message</label>
              <textarea className="w-full bg-surface-border/10 border border-surface-border p-4 rounded-xl focus:border-accent-primary outline-none transition-colors min-h-[150px]" placeholder="Tell me about your project..." required />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl font-bold flex justify-center items-center gap-2 ${status === 'success' ? 'bg-green-500' : 'bg-accent-primary'}`}
              disabled={status === 'submitting'}
            >
              {status === 'idle' && <><Send size={18} /> Send Message</>}
              {status === 'submitting' && "Sending..."}
              {status === 'success' && "Message Sent!"}
            </motion.button>
          </div>
        </motion.form>
      </div>

      <style jsx>{`
        .grid { display: grid; }
        .gap-16 { gap: 4rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-2 { gap: 0.5rem; }
        .gap-4 { gap: 1rem; }
        .text-5xl { font-size: 3rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xs { font-size: 0.75rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .uppercase { text-transform: uppercase; }
        .tracking-wider { letter-spacing: 0.05em; }
        .font-bold { font-weight: 700; }
        .font-semibold { font-weight: 600; }
        .text-secondary { color: var(--text-secondary); }
        .text-accent-primary { color: var(--accent-primary); }
        .p-3 { padding: 0.75rem; }
        .p-4 { padding: 1rem; }
        .p-10 { padding: 2.5rem; }
        .rounded-xl { border-radius: 0.75rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .w-full { width: 100%; }
        .min-h-\\[150px\\] { min-height: 153px; }
        .bg-green-500 { background: #10b981; color: white; }
        .bg-accent-primary { background: var(--accent-primary); color: white; }
        
        @media (min-width: 768px) {
          .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
}
