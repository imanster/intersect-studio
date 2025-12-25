const Footer = () => {
  const socials = [
    { label: "LinkedIn", href: "#" },
    { label: "Behance", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <footer className="py-16 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <h3 className="font-display text-3xl font-bold mb-4">
              Let's create<br />
              <span className="text-gradient">something unexpected</span>
            </h3>
            <a
              href="mailto:hello@portfolio.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-lg"
            >
              hello@portfolio.com
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-between">
            <div className="flex gap-6 mb-8">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="font-display text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} — Designed & built with curiosity
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
