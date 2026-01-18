import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useOrbieGame } from "@/contexts/OrbieGameContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Trophy, Sparkles, Heart, Star, Gamepad2, Music, Coffee, Palette } from "lucide-react";

const Secret = () => {
  const { isUnlocked, resetGame } = useOrbieGame();
  const navigate = useNavigate();

  // Redirect if not unlocked
  useEffect(() => {
    if (!isUnlocked) {
      navigate("/");
    }
  }, [isUnlocked, navigate]);

  if (!isUnlocked) return null;

  const secrets = [
    {
      icon: Gamepad2,
      title: "Game I'm Obsessed With",
      content: "Currently deep into The Binding of Isaac. The  roguelike has consumed way too many hours of my life, and I regret nothing.",
    },
    {
      icon: Music,
      title: "My Music Taste",
      content: "My top song in my 2025 Spotify wrapped was Homesick by MICO, which i played a total of 122 times last year.",
    },
    {
      icon: Coffee,
      title: "Fuel of Choice",
      content: "Insanely fascinated with Espresso Redbull. Tastes horrible, but does the job better than anything else.",
    },
    {
      icon: Palette,
      title: "Design Inspiration",
      content: "My main motto is that if someone else can do it, let them. I'd rather do something that nobody else can.",
    },
  ];

  const funFacts = [
    "I once stopped by shower halfway to write down the rules for an interhouse event in my university",
    "I used to keep poker chips on my deck to fidget with",
    "I have seen almost 120 hours worth of anime",
    "I once donated my hair after growing it to around 12 inches",
    "My favourite poem is the Cold Within",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center relative overflow-hidden px-6 pt-24">
        {/* Animated background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.2),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--secondary)/0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.15),transparent_50%)]" />
        
        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}

        <div className="text-center relative z-10 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Secret Unlocked!</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            You found all the
            <br />
            <span className="text-gradient">Orbies!</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Welcome to the secret corner of my portfolio. Here's some stuff I don't usually share publicly.
            Consider yourself a VIP 🎉
          </p>

          <div className="flex justify-center gap-2">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secret Content */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Behind the Scenes <Heart className="inline w-6 h-6 text-secondary ml-2" />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secrets.map((secret, index) => (
              <div
                key={secret.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <secret.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {secret.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {secret.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="py-20 px-6 md:px-12 bg-card/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12 text-center">
            Ultra Secret Facts <Star className="inline w-6 h-6 text-yellow-400 ml-2" />
          </h2>

          <div className="space-y-4">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/30 transition-all animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                  {index + 1}
                </span>
                <p className="text-foreground">{fact}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Play Again */}
      <section className="py-20 px-6 text-center">
        <button
          onClick={() => {
            resetGame();
            navigate("/");
          }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-muted text-foreground rounded-full hover:bg-muted/80 transition-colors"
        >
          <Sparkles className="w-4 h-4" />
          Reset & Play Again
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default Secret;
