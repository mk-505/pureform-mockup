import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

const GiftCardSection = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const resizeGiftCardFrame = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== "object") return;

      const height = Number(data.height);
      const type = data.type;
      const iframe = iframeRef.current;
      if (
        !type ||
        !String(type).includes("iframe_gift_cards_123151_resize") ||
        !Number.isFinite(height) ||
        !iframe
      ) {
        return;
      }

      iframe.style.height = `${height}px`;
    };

    window.addEventListener("message", resizeGiftCardFrame);
    return () => window.removeEventListener("message", resizeGiftCardFrame);
  }, []);

  return (
    <section id="gift-cards" className="section-spacing section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <Gift className="mx-auto text-primary mb-4" size={32} />
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-4">
            Give the Gift of <span className="italic">Movement</span>
          </h2>
          <p className="font-body text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
            Share the experience of Pureform Movement with someone you love. Gift cards are perfect for birthdays, celebrations, or just because.
          </p>
        </motion.div>
        <iframe
          ref={iframeRef}
          id="iframe_gift_cards_123151"
          src="https://momence.com/gcc/123151"
          title="Pureform Movement gift cards"
          className="block w-full border-0 mix-blend-multiply"
          height="780"
          allowFullScreen
          scrolling="no"
        />
      </div>
    </section>
  );
};

export default GiftCardSection;
