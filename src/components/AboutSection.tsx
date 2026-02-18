import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-heading glow-text text-center mb-4"
        >
          MISSION BRIEFING
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-12 tracking-widest text-sm uppercase"
        >
          About the astronaut
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="glass glow-border rounded-2xl p-8 sm:p-10"
        >
          <p className="text-foreground/85 font-body text-base sm:text-lg leading-relaxed mb-6">
            Full-Stack Software Developer with 1.5+ years of experience building
            scalable web applications. Currently engineering real-time
            AI-powered systems at{" "}
            <span className="text-primary font-semibold">Ravan.ai</span>, where
            I build conversational AI SaaS platforms handling thousands of
            concurrent sessions.
          </p>
          <p className="text-foreground/85 font-body text-base sm:text-lg leading-relaxed mb-8">
            When I'm not debugging microservices at 2 AM, you'll find me
            stargazing — obsessed with
            <span className="text-cosmic-purple font-semibold">
              {" "}
              black holes
            </span>
            ,
            <span className="text-cosmic-cyan font-semibold">
              {" "}
              neutron stars
            </span>
            , and the mysteries of
            <span className="text-cosmic-gold font-semibold"> dark matter</span>
            . I believe the best code, like the universe, is elegant, scalable,
            and endlessly expanding.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            {[
              {
                icon: Github,
                href: "https://github.com/tushar12357",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/tushar-chaudhary-4a49621a3/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "https://mail.google.com/mail/?view=cm&fs=1&to=tusharcdry@gmail.com&su=Let's%20Work%20Together&body=Hi%20Tushar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding...%0A%0ARegards,",
                label: "Email",
              },
              {
                icon: Phone,
                href: "https://wa.me/919821985448?text=Hi%20Tushar%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%20regarding%20a%20project/opportunity.",
                label: "WhatsApp",
              },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass glow-border text-sm text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-105"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
