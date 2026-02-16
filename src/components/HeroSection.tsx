import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="text-center z-10 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-primary font-body text-sm sm:text-base tracking-[0.3em] uppercase mb-4"
        >
          Welcome to the cosmos of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black glow-text leading-tight mb-6"
        >
          TUSHAR
          <br />
          CHAUDHARY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-lg sm:text-xl md:text-2xl font-body text-foreground/80 mb-2 font-light"
        >
          Software Development Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-sm sm:text-base text-muted-foreground font-body italic"
        >
          "Building digital universes, one line of code at a time"
        </motion.p>

        {/* Floating planet decoration */}
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-16 h-16 sm:w-24 sm:h-24 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle at 30% 30%, hsl(270 80% 65%), hsl(270 60% 30%))",
            boxShadow: "0 0 40px hsl(270 80% 65% / 0.3)",
          }}
        />

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[8%] w-8 h-8 sm:w-12 sm:h-12 rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle at 30% 30%, hsl(195 100% 60%), hsl(195 80% 30%))",
            boxShadow: "0 0 30px hsl(195 100% 60% / 0.3)",
          }}
        />
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
      >
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
