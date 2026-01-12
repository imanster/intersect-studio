import { useState } from "react";
import { useOrbieGame } from "@/contexts/OrbieGameContext";
import { Sparkles } from "lucide-react";

interface HiddenOrbieProps {
  id: string;
  className?: string;
  hint?: string;
}

const HiddenOrbie = ({ id, className = "", hint = "You found me!" }: HiddenOrbieProps) => {
  const { foundOrbies, findOrbie, totalOrbies, isUnlocked } = useOrbieGame();
  const [isRevealing, setIsRevealing] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  const isFound = foundOrbies.includes(id);

  const handleClick = () => {
    if (isFound) return;
    
    setIsRevealing(true);
    findOrbie(id);
    
    setTimeout(() => {
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
        setIsRevealing(false);
      }, 3000);
    }, 500);
  };

  // Already found - show faded version
  if (isFound && !isRevealing) {
    return (
      <div className={`${className} opacity-30 cursor-default`}>
        <div className="w-8 h-8 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full flex items-center justify-center">
          <span className="text-xs">✓</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`${className} relative`}>
      {/* Hidden Orbie - very subtle until hovered */}
      <button
        onClick={handleClick}
        className={`
          group relative w-8 h-8 rounded-full transition-all duration-300
          ${isRevealing 
            ? "scale-150 animate-bounce" 
            : "opacity-20 hover:opacity-100 hover:scale-110"
          }
        `}
        aria-label="Hidden Orbie"
      >
        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-primary/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Mini Orbie face */}
        <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full border-2 border-card shadow-lg flex items-center justify-center overflow-hidden">
          {/* Eyes */}
          <div className="absolute top-2 left-1.5 flex gap-1.5">
            <div className="w-1.5 h-1.5 bg-card rounded-full" />
            <div className="w-1.5 h-1.5 bg-card rounded-full" />
          </div>
          {/* Smile */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-2 h-1 border border-card rounded-full border-t-0" />
        </div>

        {/* Sparkle on reveal */}
        {isRevealing && (
          <>
            <Sparkles className="absolute -top-2 -right-2 w-4 h-4 text-yellow-400 animate-ping" />
            <Sparkles className="absolute -bottom-2 -left-2 w-3 h-3 text-yellow-400 animate-ping" style={{ animationDelay: "0.2s" }} />
          </>
        )}
      </button>

      {/* Found message */}
      {showMessage && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-card border border-primary rounded-lg shadow-[0_0_20px_hsl(var(--primary)/0.4)] animate-scale-in whitespace-nowrap z-50">
          <p className="text-sm font-medium text-foreground">{hint}</p>
          <p className="text-xs text-muted-foreground mt-1">
            {foundOrbies.length}/{totalOrbies} found
            {isUnlocked && " - Secret unlocked! 🎉"}
          </p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-r border-b border-primary rotate-45 -mt-1" />
        </div>
      )}
    </div>
  );
};

export default HiddenOrbie;
