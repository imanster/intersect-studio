import { useOrbieGame } from "@/contexts/OrbieGameContext";
import { useNavigate } from "react-router-dom";
import { Trophy, RotateCcw } from "lucide-react";

const OrbieGameStatus = () => {
  const { foundOrbies, totalOrbies, isUnlocked, resetGame } = useOrbieGame();
  const navigate = useNavigate();

  if (foundOrbies.length === 0) return null;

  return (
    <div className="fixed top-20 right-6 z-40 animate-fade-in">
      <div className="bg-card/90 backdrop-blur-sm border border-border rounded-xl p-3 shadow-lg">
        <div className="flex items-center gap-3">
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {Array.from({ length: totalOrbies }).map((_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i < foundOrbies.length
                    ? "bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.6)]"
                    : "bg-muted"
                }`}
              />
            ))}
          </div>

          <span className="text-xs text-muted-foreground">
            {foundOrbies.length}/{totalOrbies}
          </span>

          {/* Secret page button when unlocked */}
          {isUnlocked && (
            <button
              onClick={() => navigate("/secret")}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-semibold rounded-full hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all animate-bounce"
            >
              <Trophy className="w-3 h-3" />
              Secret!
            </button>
          )}

          {/* Reset button */}
          <button
            onClick={resetGame}
            className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
            title="Reset game"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrbieGameStatus;
