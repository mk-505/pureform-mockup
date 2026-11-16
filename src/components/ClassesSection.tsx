import { motion } from "framer-motion";
import reformerImg from "@/assets/reformer-pilates.jpg";
import matImg from "@/assets/mat-pilates.jpg";
import yogaImg from "@/assets/yoga.jpg";
import barreImg from "@/assets/barre-pilates.jpg";

const classes = [
  {
    title: "Reformer Pilates",
    description: "Low-impact, strength-focused pilates on the reformer for a full-body workout that builds control, stability, and confidence.",
    image: reformerImg,
  },
  {
    title: "Mat Pilates",
    description: "Grounded, core-focused movement designed to improve strength, posture, and body awareness.",
    image: matImg,
  },
  {
    title: "Yoga (Stretch & Flow)",
    description: "A restorative, feel-good flow that combines stretch, breath, and mindful movement.",
    image: yogaImg,
  },
  {
    title: "Barre Pilates",
    description: "A sculpting, energizing class that blends pilates-inspired movement with barre-based burn.",
    image: barreImg,
  },
];

const ClassesSection = () => (
  <section id="classes" className="section-spacing bg-muted/50">
    <div className="max-w-7xl mx-auto section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Our Classes</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
          Find Your <span className="italic">Movement</span>
        </h2>
        <p className="font-body text-sm text-muted-foreground mt-4 max-w-md mx-auto font-light">
          All levels welcome — beginners, we're glad you're here.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {classes.map((cls, i) => (
          <motion.div
            key={cls.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group bg-background rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <div className="overflow-hidden h-56">
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width={800}
                height={1000}
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-medium text-foreground mb-2">{cls.title}</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-5">
                {cls.description}
              </p>
              {/* Momence outlink placeholder */}
              <a
                href="#"
                className="inline-block w-full text-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
              >
                Book This Class
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ClassesSection;
