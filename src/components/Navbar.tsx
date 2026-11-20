import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "Memberships", href: "#memberships" },
  { label: "Privates", href: "#privates" },
  { label: "Reviews", href: "#reviews" },
  { label: "Gift Cards", href: "#gift-cards" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
const bookingUrl = "https://momence.com/u/pureform-movement-NryJ6D";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between section-padding py-4">
        <a
          href="#home"
          className={`shrink-0 whitespace-nowrap font-display text-2xl md:text-3xl font-semibold tracking-wide ${
            scrolled ? "text-foreground" : "text-cream"
          }`}
        >
          Pureform Movement
        </a>

        {/* Desktop */}
        <div className="hidden xl:flex shrink-0 items-center gap-4 2xl:gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 whitespace-nowrap font-body text-sm font-light tracking-wide transition-colors ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-cream/90 hover:text-cream"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 shrink-0 whitespace-nowrap px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Book a Class
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`xl:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`xl:hidden backdrop-blur-md border-b overflow-hidden max-h-[calc(100dvh-4rem)] overflow-y-auto ${
              scrolled
                ? "bg-background/98 border-border"
                : "bg-neutral-900/75 border-white/15"
            }`}
          >
            <div className="flex flex-col items-center gap-5 py-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-body text-base font-medium tracking-wide transition-colors ${
                    scrolled
                      ? "text-foreground hover:text-primary"
                      : "text-white hover:text-white/80"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide"
              >
                Book a Class
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
