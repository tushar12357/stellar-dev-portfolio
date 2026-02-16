import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" ref={ref} className="relative py-24 sm:py-32 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="section-heading glow-text mb-4"
        >
          LAUNCH BASE
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground mb-12 tracking-widest text-sm uppercase"
        >
          Education
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="glass glow-border rounded-2xl p-8 sm:p-10 inline-block"
        >
          <GraduationCap className="w-10 h-10 text-primary mx-auto mb-4" />
          <h3 className="font-display text-lg sm:text-xl font-bold text-primary text-glow mb-2">
            B.Tech in Computer Science
          </h3>
          <p className="text-foreground/80 font-body">
            Guru Gobind Singh Indraprastha University (GGSIPU)
          </p>
          <p className="text-muted-foreground text-sm mt-1">Batch of 2025</p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
