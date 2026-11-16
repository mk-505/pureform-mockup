import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const GiftCardSection = () => (
  <section className="section-spacing section-padding bg-primary/5">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Gift className="mx-auto text-primary mb-4" size={32} />
        <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
          Give the Gift of <span className="italic">Movement</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground font-light mb-8 max-w-md mx-auto leading-relaxed">
          Share the experience of Pureform Movement with someone you love. Gift cards are perfect for birthdays, celebrations, or just because.
        </p>
      </motion.div>
    </div>
  </section>
);

export default GiftCardSection;
