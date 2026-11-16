import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/Website Photos/studio_equipment_web.jpg";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Studio photo background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Pureform Movement Studio" className="w-full h-full object-cover" width={1920} height={1080} />
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-neutral-900/60" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto section-padding translate-y-8 md:translate-y-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-cream leading-tight mb-6"
        >
          MORE THAN MOVEMENT.
          <br />
          <span className="italic">A WAY OF FEELING.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-body text-sm md:text-base text-cream/80 font-light mb-10 max-w-lg mx-auto"
        >
          Discover intentional Pilates, mindful movement, and a community that moves with you. Reformer and Mat Pilates in Bolton &amp; Southfields, Caledon.
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
            Book a class
          </button>
          <button
            onClick={() => scrollTo("#memberships")}
            className="px-8 py-3.5 rounded-full border border-cream/50 text-cream font-body text-sm font-medium tracking-wide hover:bg-cream/10 transition-colors"
          >
            view membership
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
