import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Star } from "lucide-react";

const experiences = [
  {
    company: "Ravan.ai",
    role: "Software Development Engineer - 1",
    period: "Feb 2025 – Present",
    promoted: true,
    prevRole: "SDE Intern (Jan 2025 – Feb 2025)",
    achievements: [
      "Built AI support SaaS platform with real-time voice/chat using LiveKit, WebSockets & React",
      "Designed RESTful APIs with Node.js, Express.js, MongoDB; integrated OpenAI, Gemini, Claude",
      "Implemented BullMQ job queues + Redis caching → 40% faster response times",
      "Developed custom AI workflows: intent recognition, sentiment analysis, auto-ticket creation",
      "Led frontend architecture with Next.js, TypeScript, Tailwind CSS",
    ],
  },
  {
    company: "Shanture",
    role: "Software Developer Intern",
    period: "Jul 2024 – Sept 2024",
    achievements: [
      "Engineered real-time features with WebSockets; improved engagement by 30%",
      "Implemented responsive UI components with React.js and Material UI",
    ],
  },
  {
    company: "Dimitra",
    role: "Frontend Developer Intern",
    period: "Jan 2024 – Feb 2024",
    achievements: [
      "Developed data visualization dashboards for agricultural analytics using React.js",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading glow-text text-center mb-4"
        >
          MISSION LOG
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-16 tracking-widest text-sm uppercase"
        >
          Professional Expeditions
        </motion.p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              className="relative pl-12 sm:pl-20 mb-12 last:mb-0"
            >
              {/* Node */}
              <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-primary animate-pulse-glow border-2 border-background" />

              <div className="glass glow-border rounded-xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-primary text-glow">{exp.company}</h3>
                    <p className="text-foreground/90 font-semibold text-sm sm:text-base">{exp.role}</p>
                    {exp.promoted && (
                      <div className="flex items-center gap-1 mt-1">
                        <Star className="w-3.5 h-3.5 text-cosmic-gold fill-cosmic-gold" />
                        <span className="text-xs text-cosmic-gold font-medium">Promoted from {exp.prevRole}</span>
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground font-mono tracking-wider whitespace-nowrap">{exp.period}</span>
                </div>

                <ul className="space-y-2 mt-4">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex gap-2 text-sm text-foreground/75">
                      <ArrowUpRight className="w-4 h-4 text-primary/60 shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
