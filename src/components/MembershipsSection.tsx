import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

type Category = "memberships" | "reformer-packs" | "mat-packs" | "drop-ins";

const categories: { key: Category; label: string }[] = [
  { key: "memberships", label: "Memberships" },
  { key: "reformer-packs", label: "Reformer Packs" },
  { key: "mat-packs", label: "Mat Packs" },
  { key: "drop-ins", label: "Drop-Ins" },
];

interface PricingCard {
  name: string;
  price: string;
  period?: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const data: Record<Category, PricingCard[]> = {
  memberships: [
    {
      name: "Essentials",
      price: "$138",
      period: "/month",
      features: ["6 classes/month", "Reformer + mat", "No commitment", "Flexible schedule", "Valid at both locations"],
      cta: "Join Now",
    },
    {
      name: "Reformer",
      price: "$229",
      period: "/month",
      features: ["Unlimited reformer classes", "No mat classes", "No commitment", "1 guest pass/month", "Valid at both locations"],
      cta: "Join Now",
    },
    {
      name: "Unlimited",
      price: "$245",
      period: "/month",
      features: ["Unlimited movement classes", "Reformer + mat", "No commitment", "1 guest pass/month", "Valid at both locations"],
      cta: "Join Now",
      highlight: true,
    },
    {
      name: "Committed",
      price: "$229",
      period: "/month",
      features: ["Unlimited movement classes", "Reformer + mat", "1-year commitment", "1 guest pass/month", "Valid at both locations"],
      cta: "Join Now",
    },
  ],
  "reformer-packs": [
    {
      name: "4 Class Pack",
      price: "$135",
      features: ["4 reformer classes", "Valid 2 months", "Valid at both locations"],
      cta: "Buy Pack",
    },
    {
      name: "8 Class Pack",
      price: "$265",
      features: ["8 reformer classes", "Valid 4 months", "Valid at both locations"],
      cta: "Buy Pack",
      highlight: true,
    },
    {
      name: "12 Class Pack",
      price: "$389",
      features: ["12 reformer classes", "Valid 5 months", "Valid at both locations"],
      cta: "Buy Pack",
    },
  ],
  "mat-packs": [
    {
      name: "4 Class Pack",
      price: "$85",
      features: ["4 mat classes", "Valid 2 months", "Valid at both locations"],
      cta: "Buy Pack",
    },
    {
      name: "8 Class Pack",
      price: "$160",
      features: ["8 mat classes", "Valid 4 months", "Valid at both locations"],
      cta: "Buy Pack",
      highlight: true,
    },
    {
      name: "12 Class Pack",
      price: "$230",
      features: ["12 mat classes", "Valid 5 months", "Valid at both locations"],
      cta: "Buy Pack",
    },
  ],
  "drop-ins": [
    {
      name: "Reformer",
      price: "$38",
      features: ["1 reformer class", "Valid 1 month from purchase"],
      cta: "Purchase Drop-In",
    },
    {
      name: "Mat",
      price: "$25",
      features: ["1 mat class", "Valid 1 month from purchase"],
      cta: "Purchase Drop-In",
    },
  ],
};

const MembershipsSection = () => {
  const [active, setActive] = useState<Category>("memberships");
  const cards = data[active];

  return (
    <section id="memberships" className="section-spacing section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Memberships & <span className="italic">Packages</span>
          </h2>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className={`px-5 py-2.5 rounded-full font-body text-sm tracking-wide transition-all ${
                active === cat.key
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cards */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`grid gap-6 ${
            cards.length === 2
              ? "sm:grid-cols-2 max-w-2xl mx-auto"
              : cards.length === 3
              ? "sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto"
              : "sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {cards.map((card) => (
            <div
              key={card.name + card.price}
              className={`relative rounded-2xl p-7 flex flex-col border transition-shadow hover:shadow-md ${
                card.highlight
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border bg-card"
              }`}
            >
              {card.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-body font-medium tracking-wide">
                  <Star size={12} /> Best Value
                </div>
              )}
              <h3 className="font-display text-xl font-medium text-foreground mb-1">{card.name}</h3>
              <div className="mb-5">
                <span className="font-display text-3xl font-semibold text-foreground">{card.price}</span>
                {card.period && <span className="font-body text-sm text-muted-foreground">{card.period}</span>}
              </div>
              <ul className="flex-1 space-y-2.5 mb-6">
                {card.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-body text-sm text-muted-foreground font-light">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              {/* Momence outlink placeholder */}
              <a
                href="#"
                className={`text-center px-5 py-2.5 rounded-full font-body text-sm font-medium tracking-wide transition-opacity hover:opacity-90 ${
                  card.highlight
                    ? "bg-primary text-primary-foreground"
                    : "bg-foreground/90 text-background"
                }`}
              >
                {card.cta}
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipsSection;
