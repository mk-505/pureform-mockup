import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "Memberships", href: "#memberships" },
  { label: "Privates", href: "#privates" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between section-padding py-4">
        <button
          onClick={() => scrollTo("#home")}
          className={`font-display text-2xl md:text-3xl font-semibold tracking-wide ${
            scrolled ? "text-foreground" : "text-cream"
          }`}
        >
          Pureform Movement
        </button>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`font-body text-sm font-light tracking-wide transition-colors ${
                scrolled ? "text-foreground/70 hover:text-primary" : "text-cream/90 hover:text-cream"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#classes")}
            className="ml-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity"
          >
            Book a Class
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-cream"}`}
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
            className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border overflow-hidden"
          >
            <div className="flex flex-col items-center gap-5 py-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-base font-light tracking-wide text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#classes")}
                className="mt-2 px-8 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm font-medium tracking-wide"
              >
                Book a Class
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
