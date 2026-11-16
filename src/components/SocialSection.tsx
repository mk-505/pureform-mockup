import { motion } from "framer-motion";

const socials = [
  {
    name: "Instagram",
    url: "https://www.instagram.com/pureformmovement/?hl=en",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/p/Pureform-Movement-61568273111270/?_rdr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@pilatesbydil",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.98a8.22 8.22 0 004.76 1.52V7.05a4.84 4.84 0 01-1-.36z" />
      </svg>
    ),
  },
  {
    name: "Google Reviews",
    url: "https://www.google.com/search?client=safari&sca_esv=2369d6cd51414d5b&rls=en&kgmid=/g/11w3p08ltf&q=Pureform+Movement+-+Reformer+Pilates&shndl=30&shem=dlvs1,lcuae,uaasie,shrtsdl&source=sh/x/loc/uni/m1/1&kgs=eb805378fe3541b2&utm_source=dlvs1,lcuae,uaasie,shrtsdl,sh/x/loc/uni/m1/1",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const SocialSection = () => (
  <section className="py-16 section-padding bg-muted/50">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mx-auto text-center"
    >
      <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Follow Along</p>
      <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-8">
        Connect With <span className="italic">Us</span>
      </h2>
      <div className="flex items-center justify-center gap-5">
        {socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.name}
            className="w-12 h-12 rounded-full border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            {s.icon}
          </a>
        ))}
      </div>
    </motion.div>
  </section>
);

export default SocialSection;
