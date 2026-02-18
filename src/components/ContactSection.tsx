import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Github, Linkedin, Mail, Phone } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    company_name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus("Message sent successfully 🚀");
      setForm({
        name: "",
        email: "",
        subject: "",
        company_name: "",
        message: "",
      });
    } catch (err: any) {
      setStatus(err.message || "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

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
          <form onSubmit={handleSubmit} className="space-y-5 mb-8">
            {/* Name */}
            <input
              type="text"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3"
            />

            {/* Email */}
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3"
            />

            {/* Subject */}
            <input
              type="text"
              required
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3"
            />

            {/* Company */}
            <input
              type="text"
              required
              placeholder="Company Name"
              value={form.company_name}
              onChange={(e) =>
                setForm({ ...form, company_name: e.target.value })
              }
              className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3"
            />

            {/* Message */}
            <textarea
              required
              rows={5}
              placeholder="Your Message..."
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-background/50 border border-border/60 rounded-lg px-4 py-3 resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary/15 border border-primary/40 text-primary font-display text-sm tracking-wider hover:bg-primary/25 transition-all duration-300 disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "Transmitting..." : "TRANSMIT"}
            </button>

            {/* Status Message */}
            {status && (
              <p className="text-center text-sm text-muted-foreground mt-2">
                {status}
              </p>
            )}
          </form>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-border/30">
            {[
              { icon: Github, href: "https://github.com/tushar12357" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/tushar-chaudhary-4a49621a3/",
              },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=tusharcdry@gmail.com&su=Let's%20Work%20Together&body=Hi%20Tushar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding...%0A%0ARegards,",
              },
              {
                icon: Phone,
                href: "https://wa.me/919821985448?text=Hi%20Tushar%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20a%20project/opportunity.",
              },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      <p className="text-center text-muted-foreground/50 text-xs mt-16">
        © 2025 Tushar Chaudhary · Crafted among the stars ✦
      </p>
    </section>
  );
};

export default ContactSection;
