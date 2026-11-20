import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: "service_ygtofuo",
          template_id: "template_uleh0mj",
          user_id: "fj2XubDt5j0RqP-XG",
          template_params: form,
        }),
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "EmailJS could not send your message.");
      }

      setSubmitMessage("Thank you for your message! We'll be in touch soon.");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS contact form error:", error);
      setSubmitMessage("Sorry, your message couldn't be sent. Please try again or email info@pureformmovement.ca.");
    } finally {
      setIsSending(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  const locations = [
    {
      name: "Bolton",
      address: "2 Marconi Ct, Unit 16, Bolton, ON L7E 1E5",
      mapQuery: "2 Marconi Ct Unit 16, Bolton, ON L7E 1E5",
    },
    {
      name: "Southfields, Caledon",
      address: "439 Dougall Ave, Unit 101, Caledon, ON L7C 4A6",
      mapQuery: "439 Dougall Ave Unit 101, Caledon, ON L7C 4A6",
    },
  ];

  return (
    <section id="contact" className="section-spacing section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 font-medium">Get In Touch</p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            Contact <span className="italic">Us</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="font-display text-xl font-medium text-foreground mb-6">Pureform Movement</h3>
            <div className="space-y-6 mb-8">
              {locations.map((location) => (
                <div key={location.name} className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary mt-0.5 shrink-0" />
                  <div className="font-body text-sm text-muted-foreground font-light">
                    <h4 className="font-medium text-foreground">{location.name}</h4>
                    <p>{location.address}</p>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-primary hover:underline"
                    >
                      View directions
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <a href="tel:+16479247700" className="font-body text-sm text-muted-foreground font-light hover:text-primary transition-colors">(647) 924-7700</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:info@pureformmovement.ca" className="font-body text-sm text-muted-foreground font-light hover:text-primary transition-colors">info@pureformmovement.ca</a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {locations.map((location) => (
                <div key={location.name} className="overflow-hidden rounded-2xl border border-border bg-muted">
                  <iframe
                    title={`${location.name} studio map`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`}
                    className="h-56 w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <p className="bg-background px-4 py-3 font-body text-xs font-medium text-foreground">{location.name}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Full Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
              <input
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClass}
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="Message"
              rows={5}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-3.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
            >
              {isSending ? "Sending…" : "Send Message"}
            </button>
            <p role="status" aria-live="polite" className="font-body text-sm text-muted-foreground">
              {submitMessage}
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
