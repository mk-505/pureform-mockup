import { useEffect } from "react";
import { motion } from "framer-motion";

const ReviewsSection = () => {
  useEffect(() => {
    const container = document.getElementById("momence-plugin-reviews");
    if (!container || container.querySelector("script")) return;
    const script = document.createElement("script");
    script.type = "module";
    script.async = true;
    script.setAttribute("host_id", "123151");
    script.setAttribute("is_profile_picture_enabled", "true");
    script.setAttribute("is_text_only_enabled", "true");
    script.setAttribute("is_session_and_teacher_info_enabled", "true");
    script.setAttribute("layout", "vertical");
    script.setAttribute("signature", "dc5eac8eba2864f77ff7f9aa386954be69f9eedfea797ab84dae7e8e2b18da82");
    script.src = "https://momence.com/plugin/reviews/reviews.js";
    container.appendChild(script);
  }, []);

  return (
    <section className="section-spacing section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Kind Words</p>
          <h2 className="font-display text-3xl md:text-4xl font-light text-foreground">Reviews from <span className="italic">our community</span></h2>
        </motion.div>
        <div id="momence-plugin-reviews" />
      </div>
    </section>
  );
};

export default ReviewsSection;
