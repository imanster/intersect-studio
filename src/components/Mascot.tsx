import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, Sparkles, MousePointer2 } from "lucide-react";

interface MascotMessage {
  text: string;
  action?: "wave" | "point" | "excited" | "thinking" | "love" | "drag";
  link?: string;
  linkText?: string;
  targetSelector?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "center" | "follow-highlight";
}

interface Position {
  x: number;
  y: number;
}

const Mascot = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [currentMessage, setCurrentMessage] = useState<MascotMessage | null>(null);
  const [mascotState, setMascotState] = useState<"idle" | "wave" | "point" | "excited" | "thinking" | "love" | "drag">("wave");
  const [isMinimized, setIsMinimized] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [mascotSize, setMascotSize] = useState(1);
  const [mascotPosition, setMascotPosition] = useState<Position>({ x: 0, y: 0 });
  const [highlightedElement, setHighlightedElement] = useState<HTMLElement | null>(null);
  const [fakeCursorPos, setFakeCursorPos] = useState<Position | null>(null);
  const [isDraggingCursor, setIsDraggingCursor] = useState(false);
  const [isGrowing, setIsGrowing] = useState(false);
  const mascotRef = useRef<HTMLDivElement>(null);

  // Positions the mascot can move to
  const positions: Record<string, Position> = {
    "bottom-right": { x: window.innerWidth - 100, y: window.innerHeight - 120 },
    "bottom-left": { x: 20, y: window.innerHeight - 120 },
    "top-right": { x: window.innerWidth - 100, y: 100 },
    "top-left": { x: 20, y: 100 },
    "center": { x: window.innerWidth / 2 - 40, y: window.innerHeight / 2 },
  };

  // Different messages for different pages with movement and highlighting
  const getPageMessages = useCallback((): MascotMessage[] => {
    switch (location.pathname) {
      case "/":
        return [
          { text: "OMG you're HERE!! 🎉 Welcome to Ishaan's portfolio!", action: "excited", position: "center" },
          { text: "Let me show you around! Follow me! 👀", action: "drag", position: "top-left" },
          { text: "LOOK AT THIS NAME! Ishaan Karnani! Remember it! 💜", action: "love", position: "top-left", targetSelector: ".text-gradient" },
          { text: "Psst... see those skills? EIGHT disciplines! EIGHT! 🤯", action: "excited", position: "bottom-left", targetSelector: ".flex.flex-wrap.gap-3" },
          { text: "You NEED to click this! DO IT! 👇", action: "drag", position: "bottom-right", targetSelector: "a[href='#work']" },
          { text: "*grows dramatically* DID YOU KNOW HE HELPS ADHD PATIENTS?!", action: "excited", position: "center" },
          { text: "Check out his resume! I'll take you there! 🚀", action: "drag", link: "/resume", linkText: "GO NOW!" },
          { text: "Look at these beautiful project cards! 😍", action: "love", position: "bottom-left", targetSelector: "#work" },
          { text: "*shrinks cutely* okay I'll be quiet... JK LOOK AT THIS! 👆", action: "point", position: "top-right" },
        ];
      case "/work":
        return [
          { text: "THE HALL OF AMAZINGNESS! 🏆", action: "excited", position: "center" },
          { text: "Let me drag you to the best project! 🖱️", action: "drag", position: "top-left" },
          { text: "CLICK ONE! ANY ONE! THEY'RE ALL INCREDIBLE! 👆", action: "point", position: "bottom-left" },
          { text: "*grows huge* THE SPARK HELPS REAL PEOPLE! 💜", action: "love", position: "center" },
          { text: "I can't contain my excitement! Look at all this work!", action: "excited", position: "bottom-right" },
          { text: "You should hire Ishaan RIGHT NOW! 📧", action: "drag", position: "top-right" },
          { text: "*bounces around* Each project is a masterpiece!", action: "excited", position: "bottom-left" },
          { text: "Go back home or check the resume! I'LL TAKE YOU!", action: "drag", link: "/resume", linkText: "Resume Time!" },
        ];
      case "/resume":
        return [
          { text: "BEHOLD! THE RESUME OF LEGENDS! 📄✨", action: "excited", position: "center" },
          { text: "Let me highlight the good parts... ALL OF IT! 💜", action: "love", position: "top-left" },
          { text: "*grows massive* HIRE THIS PERSON!", action: "excited", position: "center" },
          { text: "Look at those skills! I'll show you! 👀", action: "drag", position: "bottom-left" },
          { text: "Multi-disciplinary GENIUS right here!", action: "love", position: "top-right" },
          { text: "Download this resume! Print it! Frame it! 🖼️", action: "point", position: "bottom-right" },
          { text: "*shrinks and grows* I'm SO proud of Ishaan!", action: "excited", position: "center" },
          { text: "Go see the projects if you haven't! 🎨", action: "drag", link: "/work", linkText: "See Work!" },
        ];
      default:
        return [
          { text: "Wrong page! Let me take you back! 🏠", action: "drag", link: "/", linkText: "Go Home!", position: "center" },
        ];
    }
  }, [location.pathname]);

  // Animate fake cursor to a target
  const animateCursorTo = useCallback((targetX: number, targetY: number, duration: number = 1500) => {
    setIsDraggingCursor(true);
    const startX = fakeCursorPos?.x || window.innerWidth / 2;
    const startY = fakeCursorPos?.y || window.innerHeight / 2;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease out cubic

      const currentX = startX + (targetX - startX) * eased;
      const currentY = startY + (targetY - startY) * eased;

      setFakeCursorPos({ x: currentX, y: currentY });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsDraggingCursor(false), 500);
      }
    };

    animate();
  }, [fakeCursorPos]);

  // Highlight an element on the page
  const highlightElement = useCallback((selector: string) => {
    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      setHighlightedElement(element);
      const rect = element.getBoundingClientRect();
      animateCursorTo(rect.left + rect.width / 2, rect.top + rect.height / 2);

      // Clear highlight after a while
      setTimeout(() => setHighlightedElement(null), 4000);
    }
  }, [animateCursorTo]);

  // Move mascot to a position
  const moveMascotTo = useCallback((positionKey: string) => {
    const pos = positions[positionKey];
    if (pos) {
      setMascotPosition(pos);
    }
  }, []);

  // Size animations
  useEffect(() => {
    const sizeInterval = setInterval(() => {
      if (mascotState === "excited" || currentMessage?.text.includes("*grows")) {
        setIsGrowing(true);
        setMascotSize(1.5);
        setTimeout(() => {
          setMascotSize(1);
          setIsGrowing(false);
        }, 1000);
      } else if (currentMessage?.text.includes("*shrinks")) {
        setMascotSize(0.6);
        setTimeout(() => setMascotSize(1), 800);
      }
    }, 3000);

    return () => clearInterval(sizeInterval);
  }, [mascotState, currentMessage]);

  // Cycle through messages with actions
  useEffect(() => {
    const messages = getPageMessages();
    setCurrentMessage(messages[0]);
    setMascotState(messages[0].action || "wave");
    setMessageIndex(0);

    // Initial position
    setMascotPosition(positions["bottom-right"]);

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        const nextIndex = (prev + 1) % messages.length;
        const msg = messages[nextIndex];
        setCurrentMessage(msg);
        setMascotState(msg.action || "idle");

        // Move mascot based on message
        if (msg.position && msg.position !== "follow-highlight") {
          moveMascotTo(msg.position);
        }

        // Highlight element if specified
        if (msg.targetSelector) {
          highlightElement(msg.targetSelector);
        }

        // Random size changes for excitement
        if (msg.action === "excited" || msg.action === "love") {
          setMascotSize(1.3);
          setTimeout(() => setMascotSize(1), 500);
        }

        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [location.pathname, getPageMessages, moveMascotTo, highlightElement]);

  // Initial animation
  useEffect(() => {
    if (!hasInteracted) {
      const timeout = setTimeout(() => {
        setHasInteracted(true);
        setFakeCursorPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [hasInteracted]);

  // Update positions on resize
  useEffect(() => {
    const handleResize = () => {
      setMascotPosition(positions["bottom-right"]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <>
      {/* Highlight Overlay */}
      {highlightedElement && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {/* Dark overlay with hole */}
          <div 
            className="absolute inset-0 bg-black/60 transition-all duration-500"
            style={{
              clipPath: `polygon(
                0% 0%, 
                0% 100%, 
                ${highlightedElement.getBoundingClientRect().left - 10}px 100%, 
                ${highlightedElement.getBoundingClientRect().left - 10}px ${highlightedElement.getBoundingClientRect().top - 10}px, 
                ${highlightedElement.getBoundingClientRect().right + 10}px ${highlightedElement.getBoundingClientRect().top - 10}px, 
                ${highlightedElement.getBoundingClientRect().right + 10}px ${highlightedElement.getBoundingClientRect().bottom + 10}px, 
                ${highlightedElement.getBoundingClientRect().left - 10}px ${highlightedElement.getBoundingClientRect().bottom + 10}px, 
                ${highlightedElement.getBoundingClientRect().left - 10}px 100%, 
                100% 100%, 
                100% 0%
              )`
            }}
          />
          {/* Glowing border */}
          <div 
            className="absolute border-4 border-primary rounded-lg animate-pulse shadow-[0_0_40px_hsl(var(--primary)),0_0_80px_hsl(var(--primary)/0.5)]"
            style={{
              left: highlightedElement.getBoundingClientRect().left - 10,
              top: highlightedElement.getBoundingClientRect().top - 10,
              width: highlightedElement.getBoundingClientRect().width + 20,
              height: highlightedElement.getBoundingClientRect().height + 20,
            }}
          />
        </div>
      )}

      {/* Fake Cursor */}
      {fakeCursorPos && isDraggingCursor && (
        <div 
          className="fixed z-[60] pointer-events-none transition-all duration-100"
          style={{ 
            left: fakeCursorPos.x, 
            top: fakeCursorPos.y,
            transform: "translate(-50%, -50%)"
          }}
        >
          <div className="relative">
            <MousePointer2 className="w-8 h-8 text-primary fill-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
            <span className="absolute left-8 top-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap font-bold animate-bounce">
              Look here! 👀
            </span>
          </div>
        </div>
      )}

      {/* Mascot Container */}
      <div 
        ref={mascotRef}
        className={`fixed z-50 flex flex-col items-end gap-3 transition-all duration-700 ease-out ${
          hasInteracted ? "opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          left: mascotPosition.x,
          top: mascotPosition.y,
          transform: `scale(${mascotSize})`,
        }}
      >
        {/* Speech Bubble */}
        {!isMinimized && currentMessage && (
          <div 
            className={`relative max-w-xs bg-card border-2 border-primary/50 rounded-2xl rounded-br-sm p-4 shadow-[0_0_30px_hsl(var(--primary)/0.3)] animate-scale-in ${
              isGrowing ? "animate-pulse" : ""
            }`}
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
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)] transition-all animate-bounce"
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
          className={`relative group transition-all duration-300 ${
            mascotState === "excited" ? "animate-bounce" : 
            mascotState === "wave" ? "hover:rotate-6" :
            mascotState === "love" ? "" :
            mascotState === "drag" ? "animate-pulse" : ""
          }`}
        >
          {/* Glow ring */}
          <div className={`absolute inset-0 bg-primary/30 rounded-full blur-xl ${
            isGrowing ? "animate-ping" : "animate-pulse"
          }`} />
          
          {/* Extra glow for excitement */}
          {(mascotState === "excited" || mascotState === "love") && (
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          )}
          
          {/* Mascot body */}
          <div className={`relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-card shadow-[0_0_30px_hsl(var(--primary)/0.4)] flex items-center justify-center overflow-hidden transition-all duration-300 ${
            mascotState === "drag" ? "animate-[wiggle_0.3s_ease-in-out_infinite]" : ""
          }`}>
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
                mascotState === "excited" || mascotState === "love" || mascotState === "drag"
                  ? "w-4 h-3 border-2 border-card rounded-t-full border-t-0 rotate-180" 
                  : mascotState === "thinking"
                  ? "w-2 h-2 bg-card rounded-full"
                  : "w-4 h-2 border-2 border-card rounded-full border-t-0"
              }`} />
            </div>

            {/* Sparkle effects */}
            {(mascotState === "excited" || mascotState === "love" || mascotState === "drag") && (
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
            <>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xl animate-bounce">💜</div>
              <div className="absolute -top-2 -left-3 text-sm animate-ping">💜</div>
              <div className="absolute -top-2 -right-3 text-sm animate-ping" style={{ animationDelay: "0.5s" }}>💜</div>
            </>
          )}

          {/* Thinking bubble */}
          {mascotState === "thinking" && (
            <div className="absolute -top-4 -right-2 text-lg">💭</div>
          )}

          {/* Dragging cursor indicator */}
          {mascotState === "drag" && (
            <div className="absolute -left-8 top-1/2 -translate-y-1/2">
              <MousePointer2 className="w-6 h-6 text-primary animate-bounce" />
            </div>
          )}
        </button>

        {/* Minimized hint */}
        {isMinimized && (
          <span className="text-xs text-muted-foreground animate-pulse">Click me!</span>
        )}
      </div>

      {/* Random floating particles around mascot */}
      {(mascotState === "excited" || mascotState === "love") && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-float"
              style={{
                left: mascotPosition.x + Math.random() * 200 - 100,
                top: mascotPosition.y + Math.random() * 200 - 100,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            >
              {["✨", "⭐", "💜", "🌟", "💫", "🎉"][i]}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Mascot;
