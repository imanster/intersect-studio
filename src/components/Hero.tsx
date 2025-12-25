const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-border/20 rounded-full animate-rotate-slow" />
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <p className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 animate-fade-in">
          Inter-disciplinary Designer
        </p>
        
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 animate-slide-up">
          Where{" "}
          <span className="text-gradient">disciplines</span>
          <br />
          collide & create
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          I work at the intersection of design, technology, and human experience. 
          Each project is a new exploration—a blend of mediums, ideas, and unexpected connections.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="#work"
            className="px-8 py-4 bg-primary text-primary-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:scale-105 transition-transform duration-300"
          >
            View Projects
          </a>
          <a
            href="mailto:hello@portfolio.com"
            className="px-8 py-4 border border-border text-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
