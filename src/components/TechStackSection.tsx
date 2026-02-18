import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCN", "HTML/CSS"],
  },
  {
    title: "Backend",
    techs: ["Node.js", "Express.js", "Redis", "BullMQ", "WebSockets", "REST APIs"],
  },
  {
    title: "AI / ML",
    techs: ["OpenAI", "Gemini", "Claude", "LiveKit", "NLP", "Prompt Engineering"],
  },
  {
    title: "Database",
    techs: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose"],
  },
  {
    title: "DevOps & Tools",
    techs: ["Docker", "AWS (S3, EC2)", "Git", "GitHub", "Linux"],
  },
];

const TechStackSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="techstack" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading glow-text text-center mb-4"
        >
          ARSENAL
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-16 tracking-widest text-sm uppercase"
        >
          Technologies & Tools
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="glass glow-border rounded-xl p-6 hover:scale-[1.03] transition-transform duration-300"
            >
              <h3 className="font-display text-sm font-bold text-primary tracking-wider mb-4 text-glow">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.techs.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
