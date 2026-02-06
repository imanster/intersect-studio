import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Sparkles, Home, ArrowLeft } from "lucide-react";

const orbieDialogues = [
  { text: "Whoa! You've wandered into the void! 🌌 Even I'm a little scared...", mood: "scared" },
  { text: "404?! I didn't hide HERE! This isn't part of the game! 😰", mood: "panic" },
  { text: "Okay okay, deep breaths Orbie... let me help you find your way back! 🧭", mood: "thinking" },
  { text: "Plot twist: maybe the REAL page was the friends we made along the way? 🤔", mood: "thinking" },
  { text: "I've searched every pixel. This page simply doesn't exist! 🔍", mood: "detective" },
  { text: "Wait... is this a secret level?! No? Just a broken link? Aw. 😔", mood: "sad" },
  { text: "If you click my belly, I'll take you home! Just kidding. Use the button. 😄", mood: "excited" },
  { text: "Fun fact: 404 in binary is 110010100. You're welcome! 🤓", mood: "thinking" },
];

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [orbiePosition, setOrbiePosition] = useState({ x: 0, y: 0 });
  const [isFloating, setIsFloating] = useState(true);
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  // Cycle dialogue
  useEffect(() => {
    const interval = setInterval(() => {
      setDialogueIndex((prev) => (prev + 1) % orbieDialogues.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Floating animation
  useEffect(() => {
    const interval = setInterval(() => {
      setOrbiePosition({
        x: Math.sin(Date.now() / 1000) * 20,
        y: Math.cos(Date.now() / 800) * 15,
      });
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleOrbieClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    if (newCount >= 5) {
      setShowEasterEgg(true);
    }
    setIsFloating(false);
    setTimeout(() => setIsFloating(true), 600);
  };

  const current = orbieDialogues[dialogueIndex];

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background overflow-hidden relative px-4">
      {/* Floating particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{
            top: `${10 + (i * 7) % 80}%`,
            left: `${5 + (i * 11) % 90}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${2 + (i % 3)}s`,
          }}
        />
      ))}

      {/* Glowing "404" background text */}
      <div className="absolute select-none pointer-events-none">
        <span className="text-[12rem] sm:text-[16rem] font-black text-primary/5 leading-none tracking-tighter">
          404
        </span>
      </div>

      {/* Orbie character */}
      <button
        onClick={handleOrbieClick}
        className="relative mb-8 z-10 focus:outline-none"
        style={{
          transform: `translate(${isFloating ? orbiePosition.x : 0}px, ${isFloating ? orbiePosition.y : 0}px)`,
          transition: isFloating ? "none" : "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        {/* Glow ring */}
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-150 animate-pulse" />

        {/* Orbie body - bigger version */}
        <div className={`relative w-28 h-28 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-card shadow-[0_0_50px_hsl(var(--primary)/0.4)] flex items-center justify-center overflow-visible transition-transform duration-300 ${
          !isFloating ? "scale-125" : "hover:scale-110"
        }`}>
          {/* Face */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Eyes - change based on mood */}
            <div className="absolute top-7 left-5 flex gap-5">
              {current.mood === "scared" || current.mood === "panic" ? (
                <>
                  <div className="w-4 h-5 bg-card rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-foreground/80 rounded-full" />
                  </div>
                  <div className="w-4 h-5 bg-card rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-foreground/80 rounded-full" />
                  </div>
                </>
              ) : current.mood === "detective" ? (
                <>
                  <div className="w-4 h-2 bg-card rounded-full" />
                  <div className="w-5 h-5 bg-card rounded-full border-2 border-card flex items-center justify-center">
                    <div className="w-2 h-2 bg-foreground/80 rounded-full" />
                  </div>
                </>
              ) : (
                <>
                  <div className={`w-4 h-4 bg-card rounded-full ${current.mood === "excited" ? "animate-pulse" : ""}`}>
                    <div className="w-1.5 h-1.5 bg-card/50 rounded-full ml-0.5 mt-0.5" />
                  </div>
                  <div className={`w-4 h-4 bg-card rounded-full ${current.mood === "excited" ? "animate-pulse" : ""}`}>
                    <div className="w-1.5 h-1.5 bg-card/50 rounded-full ml-0.5 mt-0.5" />
                  </div>
                </>
              )}
            </div>

            {/* Blush */}
            <div className="absolute top-10 left-2 w-4 h-2 bg-pink-400/40 rounded-full blur-[2px]" />
            <div className="absolute top-10 right-2 w-4 h-2 bg-pink-400/40 rounded-full blur-[2px]" />

            {/* Mouth */}
            <div className={`absolute bottom-5 left-1/2 -translate-x-1/2 ${
              current.mood === "excited"
                ? "w-5 h-4 border-2 border-card rounded-t-full border-t-0 rotate-180"
                : current.mood === "sad"
                ? "w-5 h-3 border-2 border-card rounded-b-full border-b-0"
                : current.mood === "scared" || current.mood === "panic"
                ? "w-4 h-4 bg-card rounded-full"
                : current.mood === "thinking"
                ? "w-3 h-3 bg-card rounded-full"
                : "w-5 h-2 border-2 border-card rounded-full border-t-0"
            }`} />
          </div>

          {/* Mood-specific effects */}
          {current.mood === "panic" && (
            <>
              <div className="absolute -top-3 left-3 text-lg animate-ping">💦</div>
              <div className="absolute -top-2 right-2 text-sm animate-ping" style={{ animationDelay: "0.2s" }}>💦</div>
            </>
          )}
          {current.mood === "detective" && (
            <div className="absolute -right-4 top-2 text-2xl">🔍</div>
          )}
          {current.mood === "thinking" && (
            <div className="absolute -top-5 -right-3 text-xl">💭</div>
          )}
          {current.mood === "excited" && (
            <>
              <div className="absolute -top-2 -right-2 text-yellow-400 animate-ping">✨</div>
              <div className="absolute -top-3 left-1 text-yellow-400 animate-ping" style={{ animationDelay: "0.3s" }}>⭐</div>
            </>
          )}
        </div>
      </button>

      {/* Speech bubble */}
      <div className="relative z-10 max-w-sm bg-card border-2 border-primary/30 rounded-2xl p-5 shadow-[0_0_30px_hsl(var(--primary)/0.15)] mb-8 animate-scale-in" key={dialogueIndex}>
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 bg-card border-l-2 border-t-2 border-primary/30 transform rotate-45" />
        <p className="text-sm text-foreground text-center leading-relaxed">
          {current.text}
        </p>
      </div>

      {/* Easter egg message */}
      {showEasterEgg && (
        <p className="text-xs text-primary/60 mb-4 animate-fade-in text-center">
          🎉 You found a secret! You clicked Orbie {clickCount} times! You really ARE a completionist!
        </p>
      )}

      {/* Navigation buttons */}
      <div className="flex gap-4 z-10">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted text-foreground text-sm font-medium rounded-full hover:bg-muted/80 transition-all hover:scale-105"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </button>
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all hover:scale-105"
        >
          <Home className="w-4 h-4" />
          Take Me Home
        </button>
      </div>

      {/* Attempted path display */}
      <p className="mt-8 text-xs text-muted-foreground/50 font-mono z-10">
        Lost at: {location.pathname}
      </p>
    </div>
  );
};

export default NotFound;
