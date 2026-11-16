import { motion } from "framer-motion";
import privatesImg from "@/assets/privates.jpg";

const PrivatesSection = () => (
  <section id="privates" className="section-spacing section-padding bg-muted/50">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Private Sessions</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight mb-8">
            Personalized <span className="italic">Attention</span>
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Private Sessions</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Private sessions are one-on-one experiences tailored entirely to your needs and goals — perfect for focused attention, personalized instruction, or celebrating a special occasion.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Semi-Private Sessions</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Small group classes for 2–4 people, ideal for friends, family, or colleagues who want a more intimate, personalized class while enjoying the energy of a group.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Private Events</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Our venue is also available for private event rentals, offering a unique and versatile space perfect for celebrations, corporate gatherings, and special occasions. Contact us for customized packages.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {/* Momence outlink placeholders */}
            <a href="#" className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
              Book a Private
            </a>
            <a href="#" className="px-6 py-2.5 rounded-full border border-primary text-primary font-body text-sm font-medium tracking-wide hover:bg-primary/5 transition-colors">
              Book a Semi-Private
            </a>
            <a href="#" className="px-6 py-2.5 rounded-full border border-border text-foreground font-body text-sm font-medium tracking-wide hover:bg-muted transition-colors">
              Inquire About Events
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-lg order-first md:order-last"
        >
          <img src={privatesImg} alt="Private pilates session" className="w-full h-80 md:h-[28rem] object-cover" loading="lazy" width={1200} height={900} />
          {/* Momence embed placeholder */}
          <div className="bg-sage-lighter p-6 text-center">
            <p className="font-body text-xs text-muted-foreground tracking-wider uppercase">Momence Booking Embed Area</p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default PrivatesSection;
