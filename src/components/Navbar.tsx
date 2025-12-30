import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 transition-all duration-300 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" 
          : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <Link 
          to="/" 
          className="font-display text-xl font-bold tracking-tight hover:text-primary transition-colors duration-300"
        >
          PORTFOLIO
        </Link>
        
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative font-display text-sm uppercase tracking-widest transition-colors duration-300 ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
