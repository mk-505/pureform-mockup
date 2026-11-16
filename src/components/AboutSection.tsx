import { motion } from "framer-motion";
import studioImg from "@/assets/Website Photos/studio_equipment_web.jpg";
import reformerImg from "@/assets/Website Photos/pilates_reformer_form_web.jpg";
import studioVideo from "@/assets/Website Photos/pilates_promo.mov";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.7 },
};

const AboutSection = () => (
  <section className="section-spacing section-padding bg-background">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Studio video and photos */}
        <motion.div {...fadeInUp} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-muted">
            <video src={studioVideo} poster={studioImg} muted loop playsInline controls preload="metadata" className="w-full h-[28rem] object-cover" aria-label="Pureform Movement studio and classes" />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-8 w-40 h-40 md:w-52 md:h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-background">
            <img src={reformerImg} alt="Reformer Pilates at Pureform Movement" className="w-full h-full object-cover" loading="lazy" width={800} height={1000} />
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div {...fadeInUp} transition={{ duration: 0.7, delay: 0.15 }}>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Welcome to Pureform</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-6">
            A Studio Built for
            <br />
            <span className="italic">Intentional Movement</span>
          </h2>
          <p className="font-body text-base text-muted-foreground font-light leading-relaxed mb-6">
            Pureform Movement is a boutique pilates and movement studio offering reformer pilates,
            mat classes, yoga, and barre — all in a beautifully designed, calming space. Whether you're
            new to movement or a seasoned practitioner, our classes are designed to help you feel
            stronger, more connected, and completely at ease.
          </p>
          <p className="font-body text-base text-muted-foreground font-light leading-relaxed">
            With two locations in Bolton and Caledon, we invite you to experience movement that's
            thoughtful, effective, and always welcoming.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
