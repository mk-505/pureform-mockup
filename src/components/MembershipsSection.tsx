import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

type Category = "intro" | "memberships" | "reformer-packs" | "mat-packs" | "combined-packs" | "drop-ins";
const categories: { key: Category; label: string }[] = [
  { key: "intro", label: "Intro Offers" },
  { key: "memberships", label: "Memberships" },
  { key: "reformer-packs", label: "Reformer Packs" },
  { key: "mat-packs", label: "Mat Packs" },
  { key: "combined-packs", label: "Combined Packs" },
  { key: "drop-ins", label: "Drop-Ins" },
];

interface PricingCard { name: string; price: string; period?: string; features: string[]; url: string; highlight?: boolean }
const bothLocations = "Valid at both locations";
const data: Record<Category, PricingCard[]> = {
  intro: [
    { name: "2 Week Unlimited", price: "$99", period: " for 14 days", features: ["Intro offer", "Unlimited Classes", "Reformer + mat", "Valid for 14 days", bothLocations], url: "https://momence.com/m/559645" },
    { name: "2 Week Unlimited (Return Clients)", price: "$129", period: " for 14 days", features: ["Unlimited Classes", "Reformer + mat", "2 weeks", "Valid for 14 days", bothLocations], url: "https://momence.com/m/721848" },
  ],
  memberships: [
    { name: "Essentials (6)", price: "$149", period: "/month", features: ["6 classes/month", "Reformer + mat", "No commitment", "Flexible schedule", bothLocations], url: "https://momence.com/m/557094" },
    { name: "Essentials (8)", price: "$179", period: "/month", features: ["8 classes/month", "Reformer + mat", "No commitment", "Flexible schedule", bothLocations], url: "https://momence.com/m/759505" },
    { name: "Reformer", price: "$229", period: "/month", features: ["Unlimited reformer classes", "No mat classes", "No commitment", "1 guest pass/month", bothLocations], url: "https://momence.com/m/557095" },
    { name: "Unlimited Mat & Reformer", price: "$249", period: "/month", features: ["Unlimited movement classes", "Reformer + mat", "No commitment", "1 guest pass/month", bothLocations], url: "https://momence.com/m/557092", highlight: true },
    { name: "Committed", price: "$215", period: "/month", features: ["Unlimited movement classes", "Reformer + mat", "1-year commitment", "1 guest pass/month", bothLocations], url: "https://momence.com/m/565831" },
  ],
  "reformer-packs": [
    { name: "4 Class Pack", price: "$129", features: ["4 reformer classes", "Valid 2 months", bothLocations], url: "https://momence.com/m/557099" },
    { name: "8 Class Pack", price: "$265", features: ["8 reformer classes", "Valid 4 months", bothLocations], url: "https://momence.com/m/557100" },
  ],
  "mat-packs": [
    { name: "4 Class Pack", price: "$89", features: ["4 mat classes", "Valid 2 months", bothLocations], url: "https://momence.com/m/557102" },
    { name: "8 Class Pack", price: "$169", features: ["8 mat classes", "Valid 4 months", bothLocations], url: "https://momence.com/m/961296" },
  ],
  "combined-packs": [
    { name: "10 Class Pack Combined", price: "$279", features: ["8 mat or reformer classes", "Valid 4 months", bothLocations], url: "https://momence.com/m/961295" },
  ],
  "drop-ins": [
    { name: "Reformer", price: "$38", features: ["1 reformer class", "Valid 1 month from purchase"], url: "https://momence.com/m/962066" },
    { name: "Mat", price: "$25", features: ["1 mat class", "Valid 1 month from purchase"], url: "https://momence.com/m/982912" },
  ],
};

const MembershipsSection = () => {
  const [active, setActive] = useState<Category>("intro");
  const cards = data[active];

  return (
    <section id="memberships" className="section-spacing section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Intro Offers &amp; Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">Memberships &amp; <span className="italic">Packages</span></h2>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => <button key={cat.key} onClick={() => setActive(cat.key)} className={`px-5 py-2.5 rounded-full font-body text-sm tracking-wide transition-all ${active === cat.key ? "bg-primary text-primary-foreground font-medium" : "bg-muted text-muted-foreground hover:text-foreground"}`}>{cat.label}</button>)}
        </div>
        <motion.div key={active} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className={`grid gap-6 ${cards.length === 1 ? "max-w-md mx-auto" : cards.length === 2 ? "sm:grid-cols-2 max-w-3xl mx-auto" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {cards.map((card) => <div key={card.name} className={`relative rounded-2xl p-7 flex flex-col border transition-shadow hover:shadow-md ${card.highlight ? "border-primary bg-primary/5 shadow-sm" : "border-border bg-card"}`}>
            {card.highlight && <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-body font-medium tracking-wide"><Star size={12} /> Popular</div>}
            <h3 className="font-display text-xl font-medium text-foreground mb-1">{card.name}</h3>
            <div className="mb-5"><span className="font-display text-3xl font-semibold text-foreground">{card.price}</span>{card.period && <span className="font-body text-sm text-muted-foreground">{card.period}</span>}</div>
            <ul className="flex-1 space-y-2.5 mb-6">{card.features.map((feature) => <li key={feature} className="flex items-start gap-2 font-body text-sm text-muted-foreground font-light"><Check size={15} className="text-primary mt-0.5 shrink-0" />{feature}</li>)}</ul>
            <a href={card.url} target="_blank" rel="noopener noreferrer" className={`text-center px-5 py-2.5 rounded-full font-body text-sm font-medium tracking-wide transition-opacity hover:opacity-90 ${card.highlight ? "bg-primary text-primary-foreground" : "bg-foreground/90 text-background"}`}>View offer</a>
          </div>)}
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipsSection;
