import Navbar from "@/components/Navbar";
import ProjectsGrid from "@/components/ProjectsGrid";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const values = [
    {
      title: "Cross-Pollination",
      description: "The best ideas emerge when disciplines collide. I actively seek connections between seemingly unrelated fields.",
    },
    {
      title: "Process as Product",
      description: "The journey matters as much as the destination. I document, share, and learn from every step of the creative process.",
    },
    {
      title: "Human-Centered",
      description: "Technology should serve people, not the other way around. Every project starts with understanding human needs and experiences.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden px-6 md:px-12 pt-24">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4 animate-fade-in">
                Hello, I'm
              </p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 animate-slide-up">
                Alex Chen
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6 animate-slide-up" style={{ animationDelay: "0.1s" }}>
                I'm a multi-disciplinary designer and creative technologist based in San Francisco. 
                I craft thoughtful digital experiences that bridge the gap between human needs and 
                technological possibilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
                With a background spanning UX design, creative coding, and spatial design, I bring 
                a unique perspective to every project. I believe in the power of cross-disciplinary 
                thinking and the magic that happens when different fields collide.
              </p>

              <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:scale-105 transition-transform duration-300"
                >
                  View Projects <ArrowDown className="w-4 h-4" />
                </a>
                <Link
                  to="/resume"
                  className="px-6 py-3 border border-border text-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  View Resume
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2 animate-fade-in">
              <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-lg overflow-hidden bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format"
                  alt="Portrait"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-primary rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float hidden md:block">
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-muted-foreground rounded-full" />
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4">
                Inter-disciplinary Explorer
              </p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.1] mb-6">
                Designer, maker,
                <br />
                <span className="text-gradient">curious explorer</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                I work at the intersection of design, technology, and human experience. 
                Each project is a new exploration—a blend of mediums, ideas, and unexpected connections.
              </p>
            </div>

            {/* Orbital Constellation */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
                <span className="font-display font-bold text-primary text-xs text-center leading-tight">
                  Me
                </span>
              </div>

              {/* Orbital rings */}
              <div className="absolute inset-8 rounded-full border border-border/30" />
              <div className="absolute inset-0 rounded-full border border-border/20" />

              {/* Connecting lines and nodes */}
              {[
                { label: "Game Design", angle: 0 },
                { label: "Computer Science", angle: 40 },
                { label: "Marketing", angle: 80 },
                { label: "Design Thinking", angle: 120 },
                { label: "UX/UI", angle: 160 },
                { label: "Creative Coding", angle: 200 },
                { label: "Psychology", angle: 240 },
                { label: "Business", angle: 280 },
                { label: "Film", angle: 320 },
              ].map((field, index) => {
                const radius = 42; // percentage from center
                const angleRad = (field.angle * Math.PI) / 180;
                const x = 50 + radius * Math.cos(angleRad);
                const y = 50 + radius * Math.sin(angleRad);
                
                return (
                  <div key={field.label}>
                    {/* Connecting line */}
                    <svg
                      className="absolute inset-0 w-full h-full pointer-events-none"
                      style={{ zIndex: 1 }}
                    >
                      <line
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke="hsl(var(--primary))"
                        strokeWidth="1"
                        strokeOpacity="0.3"
                      />
                    </svg>
                    
                    {/* Node */}
                    <div
                      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-default"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        zIndex: 5,
                      }}
                    >
                      <div className="w-16 h-16 rounded-full bg-card border border-border group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300 flex items-center justify-center">
                        <span className="font-display text-[10px] font-medium text-center leading-tight px-1 group-hover:text-primary transition-colors">
                          {field.label}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 bg-card/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-2">
                About Me
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Working at the edges
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I'm an inter-disciplinary designer who believes the most interesting work happens 
                  at the edges—where design meets technology, where art meets function, where the 
                  expected meets the unexpected.
                </p>
                <p>
                  My practice spans UX design, creative coding, spatial design, and everything in 
                  between. I don't believe in silos. Every project is an opportunity to pull from 
                  different disciplines and create something that couldn't exist within any single one.
                </p>
                <p>
                  When I'm not designing, you'll find me experimenting with new tools, collecting 
                  unusual materials, or getting lost in a museum somewhere.
                </p>
              </div>
            </div>

            {/* Approach Cards */}
            <div className="space-y-4">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                      <span className="font-display text-sm font-bold text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
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
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="py-16 px-8 md:px-16 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-display text-sm uppercase tracking-[0.3em] text-secondary mb-2">
                  Beyond Work
                </p>
                <h2 className="font-display text-3xl font-bold mb-6">
                  A few things about me
                </h2>
                <ul className="space-y-4">
                  {[
                    "Currently obsessed with generative typography",
                    "Collect vintage design books from the 60s & 70s",
                    "Believe every designer should know how to code",
                    "Coffee in the morning, tea in the afternoon",
                    "Always have a sketchbook within arm's reach",
                  ].map((fact, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4 items-center">
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
