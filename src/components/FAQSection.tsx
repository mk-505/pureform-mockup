import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Where do I start as a beginner?",
    a: "If you're new to reformer Pilates, we recommend starting with a 1:1 private session or a 2:1 semi-private class. In the private session, we'll guide you through the fundamentals and ensure you're prepared for group classes. If you already have some fitness experience, you can drop in and join any group class. For group classes, please arrive 10 minutes early to get an introduction to the machine and inform the instructor that it's your first time.",
  },
  {
    q: "Should I book group or private classes?",
    a: "Private classes are one-on-one sessions with the instructor, while semi-privates involve 2–3 people with the instructor. Private classes are perfect for those who prefer personalized attention, beginners, individuals with specific goals, those dealing with injuries or limitations, and advanced practitioners.",
  },
  {
    q: "What should I bring with me for my first class?",
    a: "Please wear something comfortable to move in, and grip socks if you are a beginner. Grip socks are available to purchase at the studio for $15. Please also bring your water bottle or a beverage to hydrate with.",
  },
  {
    q: "What type of equipment is used in class?",
    a: "At our studio, we offer Balanced Body Allegro 2 Reformers, considered by many to be the top choice in the industry. We are dedicated to providing the highest-quality equipment to ensure a safe and effective Pilates experience.",
  },
  {
    q: "What are the studio amenities?",
    a: "We offer free parking on site, a water station, common washroom and changing area (no shower), hooks and shoe racks, and wipes and sanitizing equipment.",
  },
];

const policies = [
  {
    title: "Class Cancellation Policy",
    content: "To give others the chance to attend, we kindly ask that you cancel at least 12 hours before the start of class. Cancellations within 12 hours: you will forfeit the class credit. For monthly memberships, a $15 fee will apply. No-show: if you do not cancel and fail to attend the class, you will lose your credit. For monthly memberships, a $30 no-show fee will be charged. If you are in the full year commitment, a $500 cancellation fee will apply.",
  },
  {
    title: "Monthly Memberships",
    content: "Monthly memberships are auto-renewed. If you need to pause or cancel your membership, please reach out to us at info@pureformmovement.ca. You must reach out a week before your renewal date for the cancellation to process. If a yearly membership needs to be cancelled, there will be a $500 cancellation fee.",
  },
  {
    title: "Refunds",
    content: "We do not provide refunds for single classes, class packages, memberships, workshops, events, gift cards, merchandise, or late cancellation/no-show fees. We do not extend class packages.",
  },
  {
    title: "Waitlists",
    content: "Adding yourself to the waitlist does work. If you get notified about a spot opening, please add yourself to the class or remove yourself. You will have 3 hours to add yourself to the class. If you do not add yourself, you will be removed.",
  },
  {
    title: "Phone and Filming Policy",
    content: "Phones are welcome inside the studio but please have them on silent. If you want to film yourself during class, please ask the instructor. You must not have any other members in the video.",
  },
  {
    title: "Personal Belongings",
    content: "Pureform Movement is not liable for any loss, theft, or damage to items, valuables, or personal belongings brought into the studio. Clients bring their belongings at their own risk.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-spacing section-padding bg-background">
    <div className="max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">FAQ</p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
          Frequently Asked <span className="italic">Questions</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:bg-muted/50 transition-colors">
              <AccordionTrigger className="font-display text-base md:text-lg font-medium text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="font-body text-sm text-muted-foreground font-light leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>

      {/* Policies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="font-display text-2xl md:text-3xl font-light text-foreground text-center mb-10">
          Studio <span className="italic">Policies</span>
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {policies.map((p) => (
            <div key={p.title} className="rounded-xl border border-border p-6 bg-card hover:shadow-sm transition-shadow">
              <h4 className="font-display text-base font-medium text-foreground mb-2">{p.title}</h4>
              <p className="font-body text-xs text-muted-foreground font-light leading-relaxed">{p.content}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
