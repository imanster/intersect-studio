import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const fadeStart = 50;
      const fadeEnd = 200;
      const scrollY = window.scrollY;
      
      if (scrollY <= fadeStart) {
        setScrollOpacity(1);
      } else if (scrollY >= fadeEnd) {
        setScrollOpacity(0);
      } else {
        setScrollOpacity(1 - (scrollY - fadeStart) / (fadeEnd - fadeStart));
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const values = [
    {
      title: "Building from Zero",
      description: "I’m comfortable starting where structure doesn’t yet exist, often working through ambiguity to turn early ideas into functional systems.",
    },
    {
      title: "Working Across Disciplines",
      description: "I work across disciplines, drawing from design, technology, and systems thinking depending on what a project demands.",
    },
    {
      title: "Curiosity as Method",
      description: "I use curiosity deliberately, questioning assumptions and testing ideas early to explore directions beyond linear approaches.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden px-6 md:px-12">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1),transparent_50%)]" />
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-[15%] w-96 h-96 bg-accent/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: "2s" }} />

        <div className="max-w-7xl mx-auto w-full relative z-10 pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <p className="font-display text-sm uppercase tracking-[0.4em] text-primary mb-6 animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                Ishaan
                <br />
                <span className="text-gradient">Karnani</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                Multi-disciplinary designer crafting experiences at the intersection of various fields.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300"
                >
                  View Projects 
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
                <Link
                  to="/resume"
                  className="px-8 py-4 border border-border text-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300"
                >
                  View Resume
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="lg:col-span-5 relative order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.15s" }}>
              <div className="relative">
                {/* Glow behind image */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-2xl blur-2xl" />
                
                <div className="relative aspect-[3/4] max-w-sm mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format"
                    alt="Portrait"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                </div>
                
                {/* Decorative corner accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary rounded-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-3 transition-opacity duration-300"
          style={{ opacity: scrollOpacity }}
        >
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* Statement Section */}
      <section className="min-h-[60vh] lg:min-h-[70vh] flex items-center py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Inter-disciplinary Explorer
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] mb-6">
                Designer, maker,
                <br />
                <span className="text-gradient">building from ideas</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                I work across design and technology, using projects to explore systems,
                test concepts, and understand how ideas translate into real-world use.
              </p>
            </div>

            {/* Flowing Tags */}
            <div className="flex flex-wrap gap-3 lg:gap-4">
              {[
                "Game Design",
                "Computer Science",
                "Marketing",
                "Design Thinking",
                "UX/UI",
                "Business Design",
                "Information Design",
                "Prompt Engineering",
              ].map((field, index) => (
                <span
                  key={field}
                  className="px-4 py-2 lg:px-5 lg:py-3 rounded-full bg-card border border-border text-sm lg:text-base font-medium text-foreground hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {field}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-[70vh] lg:min-h-[80vh] flex items-center py-16 md:py-24 lg:py-32 px-6 md:px-12 bg-card/50">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-2">
                About Me
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Working at the edges
              </h2>
              <div className="space-y-4 text-muted-foreground text-base md:text-lg">
                <p>
                  I'm currently a student exploring how ideas move from early concepts to workable systems.
                  I'm drawn to problems that aren't fully defined and enjoy figuring out structure as part of the process.
                </p>
                <p>
                  My work spans multiple disciplines.
                  I draw from design, technology, and systems thinking, choosing tools based on what the problem needs rather than staying within a single field.
                </p>
                <p>
                  I approach projects through experimentation and making; testing assumptions, iterating, and letting curiosity guide direction.
                  Outside of coursework, I experiment with tools, study existing systems, and observe how people interact with products, spaces, and narratives.
                </p>
              </div>
            </div>

            {/* Approach Cards */}
            <div className="space-y-4 lg:space-y-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 lg:p-8 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                      <span className="font-display text-sm lg:text-base font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg lg:text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm md:text-base">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <ProjectsGrid />

      {/* Fun Facts Section */}
      <section className="min-h-[60vh] lg:min-h-[70vh] flex items-center py-16 md:py-24 lg:py-32 px-6 md:px-12">
        <div className="max-w-6xl mx-auto w-full">
          <div className="py-12 md:py-16 lg:py-20 px-8 md:px-12 lg:px-16 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.3em] text-secondary mb-2">
                  Beyond Work
                </p>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8">
                  A few things about me
                </h2>
                <ul className="space-y-4 lg:space-y-5">
                  {[
                    "Obsessed with building systems",
                    "Collect decks of playing cards",
                    "Default mode is to think out of the box",
                    "Chess and cricket enthusiast",
                    "Tattoo fanatic (maybe too much)",
                  ].map((fact, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground text-base md:text-lg"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 lg:gap-6 items-center">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&auto=format"
                    alt="Sketchbook"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&auto=format"
                    alt="Books"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
