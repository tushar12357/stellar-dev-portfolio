import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const sections = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Mission Log" },
  { id: "techstack", label: "Arsenal" },
  { id: "projects", label: "Expeditions" },
  { id: "education", label: "Base" },
  { id: "contact", label: "Transmit" },
];

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const offsets = sections.map((s) => {
        const el = document.getElementById(s.id);
        return { id: s.id, top: el ? el.offsetTop - 120 : 0 };
      });
      const current = offsets.filter((o) => window.scrollY >= o.top).pop();
      if (current) setActive(current.id);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass shadow-lg shadow-primary/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-2 text-primary font-display text-lg font-bold">
          <Rocket className="w-5 h-5" />
          <span className="hidden sm:inline">TC</span>
        </button>
        <div className="flex items-center gap-1 sm:gap-2">
          {sections.slice(1).map((s) => (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`px-2 sm:px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === s.id
                  ? "bg-primary/15 text-primary text-glow"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
