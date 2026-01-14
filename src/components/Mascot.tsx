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
          { text: "Hi there! I'm Orbie, Ishaan's portfolio guide! 👋 Nice to meet you!", action: "wave" },
<<<<<<< HEAD
          { text: "Ishaan is a multi-disciplinary designer exploring game design, UX, and business design!", action: "thinking" },
          { text: "He's currently at FLAME University doing his Marketing MBA 🎓", action: "excited" },
=======
          { text: "Psst... wanna play a game? 🎮 There are hidden Orbies scattered across this site! Can you find them all?", action: "excited" },
          { text: "Hint: We love hiding in unexpected places... keep your eyes peeled! 👀", action: "thinking" },
>>>>>>> 72204df0c67283d261115d886294985171db093a
          { text: "Want to see what Ishaan's been working on? Check out his projects! 👇", action: "point", link: "#work", linkText: "See Projects" },
<<<<<<< HEAD
          { text: "From gamified productivity tools to interactive experiences — there's a lot to explore!", action: "love" },
          { text: "Fun fact: Ishaan loves playing cards, tattoos, and cricket! A truly cultured human! 🎴", action: "excited" },
=======
          { text: "Each hidden Orbie you find gets added to your collection. How many can you spot? ✨", action: "love" },
          { text: "Fun fact: Ishaan loves playing cards, bouldering, and crochet! A true Renaissance human! 🎴", action: "excited" },
>>>>>>> 72204df0c67283d261115d886294985171db093a
          { text: "Psst... his resume is pretty impressive. Just saying! 📄", action: "point", link: "/resume", linkText: "View Resume" },
          { text: "Good luck on your Orbie hunt! We're sneaky little things! 😏", action: "wave" },
        ];
      case "/work":
        return [
          { text: "Welcome to Ishaan's project gallery! 🖼️ Each one tells a story!", action: "excited" },
          { text: "Use the search bar or filter by discipline to find something cool!", action: "point" },
          { text: "The Spark is a gamified productivity app that helps people with ADHD focus. Pretty cool, right?", action: "love" },
          { text: "Click on any project card to dive deeper into the design process!", action: "thinking" },
          { text: "Ishaan works across game design, UX research, business design, and more!", action: "excited" },
          { text: "Every project here started with curiosity and a lot of sticky notes! 📝", action: "love" },
          { text: "Pro tip: Check out the different disciplines — there's variety! 🎨", action: "point" },
        ];
      case "/resume":
        return [
          { text: "Here's Ishaan's resume! 📄 Feel free to take a look around!", action: "wave" },
          { text: "He's got experience in game design, UX, and product design!", action: "thinking" },
          { text: "Skills include Figma, Unity, Unreal, and Davinci Resolve! 🛠️", action: "excited" },
          { text: "Relevant coursework spans both business and creative tech!", action: "love" },
          { text: "You can download, share, or frame this resume if you'd like! 📥", action: "point" },
          { text: "Ishaan's always learning and exploring new design challenges!", action: "thinking" },
        ];
      default:
        return [
          { text: "Hmm, looks like we wandered off the path! Let me guide you back!", action: "wave", link: "/", linkText: "Go Home" },
          { text: "Ishaan's portfolio is this way! Follow me! 🏠", action: "point", link: "/", linkText: "Visit Portfolio" },
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
