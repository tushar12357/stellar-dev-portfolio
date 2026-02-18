import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Payment Gateway Service",
    description:
      "Scalable payment processing microservice with multi-provider integration, transaction management, webhook handling, and real-time status tracking with comprehensive error recovery.",
    tech: ["Node.js", "Express", "MongoDB", "Docker", "AWS", "REST API"],
    github: "https://github.com/tushar12357/payment_gateway",
    demo: "https://payment-gateway-amber.vercel.app/",
  },
  {
    title: "Private Knowledge AI",
    description:
      "AI-powered document intelligence system that allows users to upload PDFs and interact with them conversationally. Implements semantic search using embeddings with vector storage, enabling contextual Q&A grounded strictly in user-uploaded documents.",
    tech: [
      "Next.js",
      "Node.js",
      "Hugging Face",
      "Supabase",
      "Vector Database",
      "Embeddings",
      "PDF Parsing",
    ],
    github: "https://github.com/tushar12357/private_knowledge", // update if different
    demo: "https://private-knowledge-pied.vercel.app/", // add deployed link if available
  },

  {
    title: "AI Support SaaS Platform",
    description:
      "End-to-end conversational AI platform with real-time voice & chat support. Features custom AI workflows, intent recognition, sentiment analysis, and automated ticket creation. Handles thousands of concurrent sessions.",
    tech: [
      "React",
      "Next.js",
      "Node.js",
      "LiveKit",
      "OpenAI",
      "Redis",
      "BullMQ",
      "MongoDB",
      "WebSockets",
    ],
    github: "https://github.com/tushar12357/ai_support_saas",
    demo: "#",
  },
  {
    title: "Real-Time Chat Backend",
    description:
      "Scalable chat application backend supporting real-time messaging, typing indicators, online presence, and message persistence. Designed with WebSockets, Redis pub/sub for horizontal scaling, and JWT-based authentication.",
    tech: [
      "Node.js",
      "Express",
      "WebSockets",
      "Redis",
      "MongoDB",
      "JWT",
      "Docker",
    ],
    github: "https://github.com/tushar12357/socialize_backend", // update if needed
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading glow-text text-center mb-4"
        >
          EXPEDITIONS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-center text-muted-foreground mb-16 tracking-widest text-sm uppercase"
        >
          Featured Projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
              className="group glass glow-border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_hsl(var(--primary)/0.15)]"
            >
              <h3 className="font-display text-xl font-bold text-primary text-glow mb-3">
                {project.title}
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-accent/15 text-accent border border-accent/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
