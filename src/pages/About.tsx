import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
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

      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
            {/* Image */}
            <div className="relative animate-fade-in">
              <div className="aspect-[4/5] rounded-lg overflow-hidden bg-muted">
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

            {/* Content */}
            <div className="flex flex-col justify-center">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-4 animate-fade-in">
                About Me
              </p>
              <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 animate-slide-up">
                Designer, maker,<br />
                <span className="text-muted-foreground">curious explorer</span>
              </h1>
              <div className="space-y-4 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
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

              <div className="flex gap-4 mt-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:scale-105 transition-transform duration-300"
                >
                  View Resume <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="mailto:hello@portfolio.com"
                  className="px-6 py-3 border border-border text-foreground font-display font-semibold uppercase tracking-wider text-sm rounded-full hover:border-primary hover:text-primary transition-colors duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Values/Approach Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary mb-2">
                My Approach
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">
                How I think about design
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors duration-500 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <span className="font-display text-xl font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Fun Facts / Personal Touch */}
          <section className="py-16 px-8 md:px-16 rounded-2xl bg-gradient-to-br from-card to-muted/20 border border-border">
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
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?w=400&auto=format"
                    alt="Sketchbook"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden bg-muted mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&auto=format"
                    alt="Books"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
