import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/preview.png";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image (placeholder for video) */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Pureform Movement Studio" className="w-full h-full object-cover" width={1920} height={1080} />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-foreground/40" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto section-padding">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-cream mb-6 font-light"
        >
          Reformer Pilates · Mat · Yoga · Barre
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6"
        >
          Movement That Feels
          <br />
          <span className="italic">As Good As It Looks</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-sm md:text-base text-cream/80 font-light mb-10 max-w-lg mx-auto"
        >
          Elevated pilates, mindful movement, and beautiful spaces — designed to help you feel your best.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6"
        >
          <button
            onClick={() => scrollTo("#classes")}
            className="px-8 py-3.5 rounded-full bg-cream text-foreground font-body text-sm font-medium tracking-wide hover:bg-cream-dark transition-colors"
          >
            Book a Class
          </button>
          <button
            onClick={() => scrollTo("#memberships")}
            className="px-8 py-3.5 rounded-full border border-cream/50 text-cream font-body text-sm font-medium tracking-wide hover:bg-cream/10 transition-colors"
          >
            View Memberships
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => scrollTo("#privates")}
          className="font-body text-xs tracking-wider text-cream/60 hover:text-cream/90 transition-colors underline underline-offset-4"
        >
          Explore Privates
        </motion.button>

        {/* Trust points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-cream/50"
        >
          {["Reformer + Mat Classes", "Beginner Friendly", "Valid at Both Locations"].map((item) => (
            <span key={item} className="font-body text-xs tracking-wider uppercase">{item}</span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="text-cream/40 animate-bounce" size={24} />
      </motion.div>
    </section>
  );
};

export default HeroSection;
