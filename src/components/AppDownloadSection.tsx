import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const AppDownloadSection = () => (
  <section className="section-spacing section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center"
        >
          <div className="w-64 md:w-72 rounded-3xl overflow-hidden shadow-xl">
            <img src={appMockup} alt="Pureform Movement app" className="w-full h-auto object-cover" loading="lazy" width={800} height={1200} />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <Smartphone className="text-primary mb-4" size={28} />
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
            Download the <span className="italic">Pureform Movement</span> App
          </h2>
          <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-8 max-w-md">
            Book classes, manage your membership, and stay connected with the studio — all from your phone. Your movement journey, always in your pocket.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://apps.apple.com/ca/app/pureform-movement/id6754384447"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-foreground text-background font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              Download on the App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ribbon.pureformmovement&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-foreground text-foreground font-body text-sm font-medium tracking-wide hover:bg-foreground/5 transition-colors"
            >
              Get it on Google Play
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AppDownloadSection;
