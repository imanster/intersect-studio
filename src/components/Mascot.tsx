import { useState, useEffect, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, Sparkles } from "lucide-react";

interface MascotMessage {
  text: string;
  action?: "wave" | "point" | "excited" | "thinking" | "love";
  link?: string;
  linkText?: string;
}

const Mascot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState<MascotMessage | null>(null);
  const [mascotState, setMascotState] = useState<"idle" | "wave" | "point" | "excited" | "thinking" | "love">("wave");
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Different messages for different pages
  const getPageMessages = useCallback((): MascotMessage[] => {
    switch (location.pathname) {
      case "/":
        return [
          { text: "OMG you're here!! 🎉 Welcome to Ishaan's portfolio!", action: "excited" },
          { text: "Psst... Ishaan is literally AMAZING at what he does!", action: "love" },
          { text: "Did you know Ishaan works across like 8 different disciplines? Genius level stuff!", action: "thinking" },
          { text: "You HAVE to check out his projects! Trust me! 👇", action: "point", link: "#work", linkText: "See Projects" },
          { text: "Ishaan built a game that ACTUALLY helps people with ADHD focus. How cool is that?!", action: "excited" },
          { text: "His design thinking skills? *Chef's kiss* 💋", action: "love" },
          { text: "Seriously though, you should see his resume. It's impressive!", action: "point", link: "/resume", linkText: "View Resume" },
          { text: "I'm not saying Ishaan's a genius... but I'm also not NOT saying it! 🧠", action: "thinking" },
          { text: "Fun fact: Ishaan collects playing cards! A person of culture! 🎴", action: "excited" },
        ];
      case "/work":
        return [
          { text: "Welcome to the HALL OF AMAZINGNESS! 🏆", action: "excited" },
          { text: "Each of these projects? Absolute bangers! Click one!", action: "point" },
          { text: "The Spark literally helps people with ADHD concentrate. Ishaan's out here changing lives!", action: "love" },
          { text: "Look at all this creative work! Can you feel the talent radiating?! ✨", action: "excited" },
          { text: "Ishaan approaches every project with curiosity and care. What a legend!", action: "thinking" },
          { text: "Pro tip: Click on any project to see the full genius in action! 👆", action: "point" },
          { text: "These aren't just projects, they're masterpieces!", action: "love" },
          { text: "I could stare at this portfolio all day... and I DO! 😍", action: "excited" },
        ];
      case "/resume":
        return [
          { text: "BEHOLD! The resume of dreams! 📄✨", action: "excited" },
          { text: "Multi-disciplinary designer? More like SUPERHERO if you ask me!", action: "love" },
          { text: "Look at those skills! Game Design, UX, Business Design... is there anything he CAN'T do?!", action: "thinking" },
          { text: "You should definitely download this resume. Frame it. Put it on your wall!", action: "point" },
          { text: "Ishaan's experience section is *chef's kiss* 💋", action: "love" },
          { text: "Hiring managers: This is the candidate you've been looking for!", action: "excited" },
          { text: "Did you see his coursework? Business and tech combined! 🔥", action: "thinking" },
          { text: "If you're not impressed yet, you're not reading carefully enough!", action: "point" },
        ];
      default:
        return [
          { text: "Hey! Let me take you back to the good stuff!", action: "wave", link: "/", linkText: "Go Home" },
          { text: "Ishaan's portfolio is waiting for you! 🏠", action: "point", link: "/", linkText: "Visit Portfolio" },
        ];
    }
  }, [location.pathname]);

  // Cycle through messages
  useEffect(() => {
    const messages = getPageMessages();
    setCurrentMessage(messages[0]);
    setMascotState(messages[0].action || "wave");
    setMessageIndex(0);

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        const nextIndex = (prev + 1) % messages.length;
        setCurrentMessage(messages[nextIndex]);
        setMascotState(messages[nextIndex].action || "idle");
        return nextIndex;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [location.pathname, getPageMessages]);

  // Bounce animation on first load
  useEffect(() => {
    if (!hasInteracted) {
      const timeout = setTimeout(() => {
        setHasInteracted(true);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [hasInteracted]);

  const handleLinkClick = () => {
    if (currentMessage?.link) {
      if (currentMessage.link.startsWith("#")) {
        document.querySelector(currentMessage.link)?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate(currentMessage.link);
      }
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-500 ${
        hasInteracted ? "animate-fade-in" : "translate-y-4 opacity-0"
      }`}
    >
      {/* Speech Bubble */}
      {!isMinimized && currentMessage && (
        <div 
          className="relative max-w-xs bg-card border-2 border-primary/50 rounded-2xl rounded-br-sm p-4 shadow-[0_0_30px_hsl(var(--primary)/0.3)] animate-scale-in"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Close button */}
          <button
            onClick={() => setIsMinimized(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors"
          >
            <X className="w-3 h-3" />
          </button>

          <p className="text-sm text-foreground leading-relaxed">
            {currentMessage.text}
          </p>
          
          {currentMessage.link && (
            <button
              onClick={handleLinkClick}
              className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all"
            >
              <Sparkles className="w-3 h-3" />
              {currentMessage.linkText}
            </button>
          )}

          {/* Bubble tail */}
          <div className="absolute -bottom-2 right-4 w-4 h-4 bg-card border-r-2 border-b-2 border-primary/50 transform rotate-45" />
        </div>
      )}

      {/* Mascot Character */}
      <button
        onClick={() => setIsMinimized(!isMinimized)}
        className={`relative group transition-transform duration-300 ${
          mascotState === "excited" ? "animate-bounce" : 
          mascotState === "wave" ? "hover:rotate-6" :
          mascotState === "love" ? "scale-110" : ""
        }`}
      >
        {/* Glow ring */}
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
        
        {/* Mascot body */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-card shadow-[0_0_30px_hsl(var(--primary)/0.4)] flex items-center justify-center overflow-hidden">
          {/* Face */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Eyes */}
            <div className="absolute top-4 left-3 flex gap-3">
              <div className={`w-2.5 h-2.5 bg-card rounded-full ${mascotState === "love" ? "animate-pulse" : ""}`}>
                <div className="w-1 h-1 bg-card/50 rounded-full ml-0.5 mt-0.5" />
              </div>
              <div className={`w-2.5 h-2.5 bg-card rounded-full ${mascotState === "love" ? "animate-pulse" : ""}`}>
                <div className="w-1 h-1 bg-card/50 rounded-full ml-0.5 mt-0.5" />
              </div>
            </div>
            
            {/* Blush */}
            <div className="absolute top-6 left-1 w-3 h-1.5 bg-pink-400/40 rounded-full blur-[2px]" />
            <div className="absolute top-6 right-1 w-3 h-1.5 bg-pink-400/40 rounded-full blur-[2px]" />
            
            {/* Mouth */}
            <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 ${
              mascotState === "excited" || mascotState === "love" 
                ? "w-4 h-3 border-2 border-card rounded-t-full border-t-0 rotate-180" 
                : mascotState === "thinking"
                ? "w-2 h-2 bg-card rounded-full"
                : "w-4 h-2 border-2 border-card rounded-full border-t-0"
            }`} />
          </div>

          {/* Sparkle effects */}
          {(mascotState === "excited" || mascotState === "love") && (
            <>
              <div className="absolute -top-1 -right-1 text-yellow-400 animate-ping">✨</div>
              <div className="absolute -top-2 left-0 text-yellow-400 animate-ping" style={{ animationDelay: "0.3s" }}>⭐</div>
            </>
          )}
        </div>

        {/* Pointing arm */}
        {mascotState === "point" && (
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 animate-bounce">
            <span className="text-2xl">👉</span>
          </div>
        )}

        {/* Waving arm */}
        {mascotState === "wave" && (
          <div className="absolute -right-4 -top-2 animate-[wiggle_0.5s_ease-in-out_infinite]">
            <span className="text-xl">👋</span>
          </div>
        )}

        {/* Heart for love state */}
        {mascotState === "love" && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xl animate-bounce">
            💜
          </div>
        )}

        {/* Thinking bubble */}
        {mascotState === "thinking" && (
          <div className="absolute -top-4 -right-2 text-lg">
            💭
          </div>
        )}
      </button>

      {/* Minimized hint */}
      {isMinimized && (
        <span className="text-xs text-muted-foreground animate-pulse">Click me!</span>
      )}
    </div>
  );
};

export default Mascot;
