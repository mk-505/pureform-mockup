import { motion } from "framer-motion";
import privatesImg from "@/assets/Website Photos/one_person_mat_pilates2_web.jpg";

const appointmentUrl = "https://momence.com/appointments/appointment-reservation/123151";

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
                Enjoy a personalized, one-on-one Pilates experience tailored to your goals, needs, and fitness level, with dedicated guidance and attention.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Semi-Private Sessions</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Move together in an intimate group of 2–4 people. Perfect for friends, family, or colleagues seeking a personalized Pilates experience in a shared setting.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-medium text-foreground mb-2">Private Events</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Celebrate, connect, and move in our beautiful studio space. Perfect for birthdays, bridal celebrations, corporate wellness events, and special occasions. Contact us to explore customized experiences and packages.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity">
              Book a Private
            </a>
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full border border-primary text-primary font-body text-sm font-medium tracking-wide hover:bg-primary/5 transition-colors">
              Book a Semi-Private
            </a>
            <a href={appointmentUrl} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 rounded-full border border-border text-foreground font-body text-sm font-medium tracking-wide hover:bg-muted transition-colors">
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
        </motion.div>
      </div>
    </div>
  </section>
);

export default PrivatesSection;
