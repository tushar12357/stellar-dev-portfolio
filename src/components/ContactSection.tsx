import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading glow-text text-center mb-4"
        >
          TRANSMIT SIGNAL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 tracking-widest text-sm uppercase"
        >
          Send a signal across the cosmos
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass glow-border rounded-2xl p-8 sm:p-10"
        >
          <div className="space-y-5 mb-8">
            <div>
              <label className="block text-sm font-display text-muted-foreground tracking-wider mb-2">IDENTIFIER</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300 font-body"
              />
            </div>
            <div>
              <label className="block text-sm font-display text-muted-foreground tracking-wider mb-2">FREQUENCY</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="your@email.com"
                className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300 font-body"
              />
            </div>
            <div>
              <label className="block text-sm font-display text-muted-foreground tracking-wider mb-2">TRANSMISSION</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Your message..."
                rows={5}
                className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/60 focus:shadow-[0_0_15px_hsl(var(--primary)/0.15)] transition-all duration-300 font-body resize-none"
              />
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary/15 border border-primary/40 text-primary font-display text-sm tracking-wider hover:bg-primary/25 hover:border-primary/60 hover:shadow-[0_0_25px_hsl(var(--primary)/0.2)] transition-all duration-300">
            <Send className="w-4 h-4" />
            TRANSMIT
          </button>

          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-border/30">
            {[
              { icon: Github, href: "https://github.com/tushar-c23" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/tushar-chaudhary-b96004200/" },
              { icon: Mail, href: "mailto:tusharchaudhary2307@gmail.com" },
              { icon: Phone, href: "tel:+918826814709" },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <p className="text-center text-muted-foreground/50 text-xs mt-16 font-body">
        © 2025 Tushar Chaudhary · Crafted among the stars ✦
      </p>
    </section>
  );
};

export default ContactSection;
