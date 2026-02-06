import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bomb } from "lucide-react";

const ExplosiveOrbie = () => {
  const navigate = useNavigate();
  const [isExploding, setIsExploding] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleClick = () => {
    if (isExploding) return;
    setIsExploding(true);

    // After explosion animation, navigate to 404
    setTimeout(() => {
      navigate("/oops-orbie-broke-it");
    }, 1200);
  };

  return (
    <div className="relative inline-block">
      {/* Warning on hover */}
      {showWarning && !isExploding && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 px-4 py-2 bg-card border border-destructive/50 rounded-lg shadow-[0_0_20px_hsl(0_70%_50%/0.3)] animate-scale-in whitespace-nowrap z-50">
          <p className="text-xs font-bold text-destructive">⚠️ DON'T CLICK ME!</p>
          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-card border-r border-b border-destructive/50 rotate-45 -mt-1" />
        </div>
      )}

      {/* Explosion effect */}
      {isExploding && (
        <div className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center">
          {/* Flash */}
          <div className="absolute inset-0 bg-destructive/80 animate-[flash_0.3s_ease-out]" />
          {/* Expanding ring */}
          <div className="w-20 h-20 rounded-full border-4 border-destructive animate-[explode-ring_0.8s_ease-out_forwards]" />
          {/* Particles */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-primary rounded-full"
              style={{
                animation: `explode-particle_0.8s ease-out forwards`,
                animationName: 'explode-particle',
                transform: `rotate(${i * 36}deg) translateY(-20px)`,
              }}
            />
          ))}
          {/* Cracking text */}
          <div className="absolute text-6xl font-black text-destructive animate-bounce">
            💥
          </div>
        </div>
      )}

      {/* The Orbie itself */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowWarning(true)}
        onMouseLeave={() => setShowWarning(false)}
        className={`group relative w-10 h-10 rounded-full transition-all duration-300 ${
          isExploding
            ? "scale-[3] opacity-0"
            : "opacity-40 hover:opacity-100 hover:scale-125 hover:rotate-12"
        }`}
        aria-label="Explosive Orbie - definitely don't click this"
      >
        {/* Danger glow */}
        <div className="absolute inset-0 bg-destructive/40 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />

        {/* Orbie body - red tinted */}
        <div className="relative w-full h-full bg-gradient-to-br from-destructive to-destructive/70 rounded-full border-2 border-card shadow-lg flex items-center justify-center overflow-visible">
          {/* Eyes - mischievous */}
          <div className="absolute top-2 left-2 flex gap-2">
            <div className="w-2 h-1.5 bg-card rounded-full transform -rotate-12" />
            <div className="w-2 h-1.5 bg-card rounded-full transform rotate-12" />
          </div>
          {/* Evil grin */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-2 border-2 border-card rounded-t-full border-t-0 rotate-180" />
          
          {/* Tiny bomb icon */}
          <Bomb className="absolute -top-1 -right-1 w-3 h-3 text-destructive group-hover:animate-bounce" />
        </div>

        {/* Fuse spark */}
        <div className="absolute -top-2 right-0 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
          🔥
        </div>
      </button>
    </div>
  );
};

export default ExplosiveOrbie;
