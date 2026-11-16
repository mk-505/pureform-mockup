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
            <div className="space-y-4 font-body text-sm font-light text-background/60">
              <div>
                <p className="text-background/80">Bolton</p>
                <a href="https://www.google.com/maps/search/?api=1&query=2%20Marconi%20Ct%20Unit%2016%2C%20Bolton%2C%20ON%20L7E%201E5" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  2 Marconi Ct, Unit 16, Bolton, ON L7E 1E5
                </a>
              </div>
              <div>
                <p className="text-background/80">Southfields, Caledon</p>
                <a href="https://www.google.com/maps/search/?api=1&query=439%20Dougall%20Ave%20Unit%20101%2C%20Caledon%2C%20ON%20L7C%204A6" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">
                  439 Dougall Ave, Unit 101, Caledon, ON L7C 4A6
                </a>
              </div>
              <a href="tel:+16479247700" className="block hover:text-background transition-colors">(647) 924-7700</a>
              <a href="mailto:info@pureformmovement.ca" className="block hover:text-background transition-colors">info@pureformmovement.ca</a>
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
