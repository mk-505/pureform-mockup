const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Classes", href: "#classes" },
  { label: "Memberships", href: "#memberships" },
  { label: "Privates", href: "#privates" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background/80 section-padding py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-display text-2xl font-semibold text-background mb-3">Pureform Movement</p>
            <p className="font-body text-sm font-light leading-relaxed text-background/50">
              Elevated pilates, mindful movement, and beautiful spaces.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-background/40 mb-4">Quick Links</p>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block font-body text-sm font-light text-background/60 hover:text-background transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-background/40 mb-4">Contact</p>
            <div className="space-y-2 font-body text-sm font-light text-background/60">
              <p>2 Marconi Crt, Unit 16, Bolton</p>
              <p>647-924-7700</p>
              <p>info@pureformmovement.ca</p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-background/40 mb-4">Follow Us</p>
            <div className="space-y-2 font-body text-sm font-light">
              <a href="https://www.instagram.com/pureformmovement/?hl=en" target="_blank" rel="noopener noreferrer" className="block text-background/60 hover:text-background transition-colors">Instagram</a>
              <a href="https://www.facebook.com/p/Pureform-Movement-61568273111270/?_rdr" target="_blank" rel="noopener noreferrer" className="block text-background/60 hover:text-background transition-colors">Facebook</a>
              <a href="https://www.tiktok.com/@pilatesbydil" target="_blank" rel="noopener noreferrer" className="block text-background/60 hover:text-background transition-colors">TikTok</a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-xs text-background/30">
            © {new Date().getFullYear()} Pureform Movement. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
