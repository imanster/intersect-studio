import { useState, useEffect, useCallback, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X, Sparkles, MousePointer2 } from "lucide-react";

interface MascotMessage {
  text: string;
  action?: "wave" | "point" | "excited" | "thinking" | "love" | "drag";
  link?: string;
  linkText?: string;
  targetSelector?: string;
  shouldMove?: boolean;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "center";
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
  const highlightTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Safe positions with proper margins (mascot is ~80px, bubble is ~200px)
  const getPositions = useCallback(() => ({
    "bottom-right": { x: Math.min(window.innerWidth - 280, window.innerWidth - 100), y: window.innerHeight - 200 },
    "bottom-left": { x: 100, y: window.innerHeight - 200 },
    "top-right": { x: Math.min(window.innerWidth - 280, window.innerWidth - 100), y: 150 },
    "top-left": { x: 100, y: 150 },
    "center": { x: window.innerWidth / 2 - 40, y: window.innerHeight / 2 - 60 },
  }), []);

  // Different messages - only some trigger movement
  const getPageMessages = useCallback((): MascotMessage[] => {
    switch (location.pathname) {
      case "/":
        return [
          { text: "OMG you're HERE!! 🎉 Welcome to Ishaan's portfolio!", action: "excited" },
          { text: "Psst... Ishaan is literally AMAZING at what he does!", action: "love" },
          { text: "Let me show you around! 👀", action: "wave" },
          { text: "LOOK AT THIS NAME! Ishaan Karnani! Remember it! 💜", action: "love", targetSelector: ".text-gradient" },
          { text: "Did you know Ishaan works across 8 different disciplines?!", action: "thinking" },
          { text: "See those skills down there? EIGHT of them! 🤯", action: "point", targetSelector: ".flex.flex-wrap.gap-3", shouldMove: true, position: "bottom-left" },
          { text: "You NEED to check out his projects! 👇", action: "drag", targetSelector: "a[href='#work']" },
          { text: "*grows dramatically* HE HELPS ADHD PATIENTS FOCUS!", action: "excited" },
          { text: "His resume is incredible! Want to see? 🚀", action: "drag", link: "/resume", linkText: "View Resume!" },
          { text: "Look at these beautiful project cards! 😍", action: "love", targetSelector: "#work", shouldMove: true, position: "bottom-right" },
          { text: "I could talk about Ishaan all day! He's the best! 💜", action: "love" },
        ];
      case "/work":
        return [
          { text: "THE HALL OF AMAZINGNESS! 🏆", action: "excited" },
          { text: "Each of these projects? Absolute masterpieces!", action: "love" },
          { text: "CLICK ONE! ANY ONE! THEY'RE ALL INCREDIBLE! 👆", action: "point" },
          { text: "*grows huge* THE SPARK HELPS REAL PEOPLE! 💜", action: "love" },
          { text: "I can't contain my excitement! Look at all this work!", action: "excited" },
          { text: "You should hire Ishaan RIGHT NOW! 📧", action: "drag" },
          { text: "Each project shows different skills! So versatile!", action: "thinking" },
          { text: "Check the resume too! I'LL TAKE YOU!", action: "drag", link: "/resume", linkText: "Resume Time!", shouldMove: true, position: "top-right" },
        ];
      case "/resume":
        return [
          { text: "BEHOLD! THE RESUME OF LEGENDS! 📄✨", action: "excited" },
          { text: "Multi-disciplinary GENIUS right here!", action: "love" },
          { text: "*grows massive* HIRE THIS PERSON!", action: "excited" },
          { text: "Look at those skills! Amazing! 👀", action: "point" },
          { text: "Download this resume! Print it! Frame it! 🖼️", action: "point" },
          { text: "*shrinks and grows* I'm SO proud of Ishaan!", action: "excited" },
          { text: "Go see the projects if you haven't! 🎨", action: "drag", link: "/work", linkText: "See Work!", shouldMove: true, position: "bottom-left" },
        ];
      default:
        return [
          { text: "Wrong page! Let me take you back! 🏠", action: "drag", link: "/", linkText: "Go Home!" },
        ];
    }
  }, [location.pathname]);

  // Animate fake cursor to a target
  const animateCursorTo = useCallback((targetX: number, targetY: number, duration: number = 2000) => {
    setIsDraggingCursor(true);
    const startX = fakeCursorPos?.x || window.innerWidth / 2;
    const startY = fakeCursorPos?.y || window.innerHeight / 2;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      const currentX = startX + (targetX - startX) * eased;
      const currentY = startY + (targetY - startY) * eased;

      setFakeCursorPos({ x: currentX, y: currentY });

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => setIsDraggingCursor(false), 800);
      }
    };

    animate();
  }, [fakeCursorPos]);

  // Highlight an element on the page
  const highlightElement = useCallback((selector: string) => {
    // Clear any existing timeout
    if (highlightTimeoutRef.current) {
      clearTimeout(highlightTimeoutRef.current);
    }

    const element = document.querySelector(selector) as HTMLElement;
    if (element) {
      setHighlightedElement(element);
      const rect = element.getBoundingClientRect();
      animateCursorTo(rect.left + rect.width / 2, rect.top + rect.height / 2, 2500);

      highlightTimeoutRef.current = setTimeout(() => {
        setHighlightedElement(null);
      }, 5000);
    }
  }, [animateCursorTo]);

  // Move mascot to a position
  const moveMascotTo = useCallback((positionKey: string) => {
    const positions = getPositions();
    const pos = positions[positionKey as keyof typeof positions];
    if (pos) {
      setMascotPosition(pos);
    }
  }, [getPositions]);

  // Size animations - less frequent
  useEffect(() => {
    if (currentMessage?.text.includes("*grows")) {
      setIsGrowing(true);
      setMascotSize(1.4);
      const timeout = setTimeout(() => {
        setMascotSize(1);
        setIsGrowing(false);
      }, 1500);
      return () => clearTimeout(timeout);
    } else if (currentMessage?.text.includes("*shrinks")) {
      setMascotSize(0.7);
      const timeout = setTimeout(() => setMascotSize(1), 1200);
      return () => clearTimeout(timeout);
    }
  }, [currentMessage]);

  // Cycle through messages - SLOWER
  useEffect(() => {
    const messages = getPageMessages();
    const positions = getPositions();
    
    // Set initial state
    setCurrentMessage(messages[0]);
    setMascotState(messages[0].action || "wave");
    setMessageIndex(0);
    setMascotPosition(positions["bottom-right"]);

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        const nextIndex = (prev + 1) % messages.length;
        const msg = messages[nextIndex];
        setCurrentMessage(msg);
        setMascotState(msg.action || "idle");

        // Only move if explicitly told to
        if (msg.shouldMove && msg.position) {
          moveMascotTo(msg.position);
        }

        // Highlight element if specified
        if (msg.targetSelector) {
          setTimeout(() => highlightElement(msg.targetSelector!), 500);
        }

        // Gentle size pulse for excitement
        if (msg.action === "excited" || msg.action === "love") {
          setMascotSize(1.15);
          setTimeout(() => setMascotSize(1), 600);
        }

        return nextIndex;
      });
    }, 7000); // Much slower - 7 seconds between messages

    return () => {
      clearInterval(interval);
      if (highlightTimeoutRef.current) {
        clearTimeout(highlightTimeoutRef.current);
      }
    };
  }, [location.pathname, getPageMessages, getPositions, moveMascotTo, highlightElement]);

  // Initial animation
  useEffect(() => {
    if (!hasInteracted) {
      const timeout = setTimeout(() => {
        setHasInteracted(true);
        setFakeCursorPos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [hasInteracted]);

  // Update positions on resize
  useEffect(() => {
    const handleResize = () => {
      const positions = getPositions();
      setMascotPosition(positions["bottom-right"]);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getPositions]);

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
          <div 
            className="absolute inset-0 bg-black/50 transition-all duration-700"
            style={{
              clipPath: `polygon(
                0% 0%, 
                0% 100%, 
                ${highlightedElement.getBoundingClientRect().left - 15}px 100%, 
                ${highlightedElement.getBoundingClientRect().left - 15}px ${highlightedElement.getBoundingClientRect().top - 15}px, 
                ${highlightedElement.getBoundingClientRect().right + 15}px ${highlightedElement.getBoundingClientRect().top - 15}px, 
                ${highlightedElement.getBoundingClientRect().right + 15}px ${highlightedElement.getBoundingClientRect().bottom + 15}px, 
                ${highlightedElement.getBoundingClientRect().left - 15}px ${highlightedElement.getBoundingClientRect().bottom + 15}px, 
                ${highlightedElement.getBoundingClientRect().left - 15}px 100%, 
                100% 100%, 
                100% 0%
              )`
            }}
          />
          <div 
            className="absolute border-4 border-primary rounded-xl shadow-[0_0_40px_hsl(var(--primary)),0_0_80px_hsl(var(--primary)/0.5)] transition-all duration-500"
            style={{
              left: highlightedElement.getBoundingClientRect().left - 15,
              top: highlightedElement.getBoundingClientRect().top - 15,
              width: highlightedElement.getBoundingClientRect().width + 30,
              height: highlightedElement.getBoundingClientRect().height + 30,
            }}
          />
        </div>
      )}

      {/* Fake Cursor */}
      {fakeCursorPos && isDraggingCursor && (
        <div 
          className="fixed z-[60] pointer-events-none"
          style={{ 
            left: fakeCursorPos.x, 
            top: fakeCursorPos.y,
            transform: "translate(-50%, -50%)",
            transition: "left 0.1s, top 0.1s"
          }}
        >
          <div className="relative">
            <MousePointer2 className="w-8 h-8 text-primary fill-primary drop-shadow-[0_0_10px_hsl(var(--primary))]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-ping" />
            <span className="absolute left-10 top-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full whitespace-nowrap font-bold">
              Look here! 👀
            </span>
          </div>
        </div>
      )}

      {/* Mascot Container */}
      <div 
        ref={mascotRef}
        className={`fixed z-50 flex flex-col items-end gap-3 ${
          hasInteracted ? "opacity-100" : "translate-y-4 opacity-0"
        }`}
        style={{
          left: mascotPosition.x,
          top: mascotPosition.y,
          transform: `scale(${mascotSize})`,
          transition: "left 1.5s ease-out, top 1.5s ease-out, transform 0.5s ease-out, opacity 0.5s"
        }}
      >
        {/* Speech Bubble */}
        {!isMinimized && currentMessage && (
          <div 
            className={`relative max-w-[220px] bg-card border-2 border-primary/50 rounded-2xl rounded-br-sm p-4 shadow-[0_0_30px_hsl(var(--primary)/0.3)] ${
              isGrowing ? "animate-pulse" : ""
            }`}
          >
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

            <div className="absolute -bottom-2 right-4 w-4 h-4 bg-card border-r-2 border-b-2 border-primary/50 transform rotate-45" />
          </div>
        )}

        {/* Mascot Character */}
        <button
          onClick={() => setIsMinimized(!isMinimized)}
          className={`relative group transition-all duration-500 ${
            mascotState === "excited" ? "animate-bounce" : 
            mascotState === "wave" ? "hover:rotate-6" :
            mascotState === "drag" ? "" : ""
          }`}
        >
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse" />
          
          {(mascotState === "excited" || mascotState === "love") && (
            <div className="absolute -inset-4 bg-primary/20 rounded-full blur-2xl animate-pulse" />
          )}
          
          <div className={`relative w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-card shadow-[0_0_30px_hsl(var(--primary)/0.4)] flex items-center justify-center overflow-hidden transition-all duration-300`}>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute top-4 left-3 flex gap-3">
                <div className={`w-2.5 h-2.5 bg-card rounded-full ${mascotState === "love" ? "animate-pulse" : ""}`}>
                  <div className="w-1 h-1 bg-card/50 rounded-full ml-0.5 mt-0.5" />
                </div>
                <div className={`w-2.5 h-2.5 bg-card rounded-full ${mascotState === "love" ? "animate-pulse" : ""}`}>
                  <div className="w-1 h-1 bg-card/50 rounded-full ml-0.5 mt-0.5" />
                </div>
              </div>
              
              <div className="absolute top-6 left-1 w-3 h-1.5 bg-pink-400/40 rounded-full blur-[2px]" />
              <div className="absolute top-6 right-1 w-3 h-1.5 bg-pink-400/40 rounded-full blur-[2px]" />
              
              <div className={`absolute bottom-3 left-1/2 -translate-x-1/2 ${
                mascotState === "excited" || mascotState === "love" || mascotState === "drag"
                  ? "w-4 h-3 border-2 border-card rounded-t-full border-t-0 rotate-180" 
                  : mascotState === "thinking"
                  ? "w-2 h-2 bg-card rounded-full"
                  : "w-4 h-2 border-2 border-card rounded-full border-t-0"
              }`} />
            </div>

            {(mascotState === "excited" || mascotState === "love" || mascotState === "drag") && (
              <>
                <div className="absolute -top-1 -right-1 text-yellow-400 animate-ping">✨</div>
                <div className="absolute -top-2 left-0 text-yellow-400 animate-ping" style={{ animationDelay: "0.3s" }}>⭐</div>
              </>
            )}
          </div>

          {mascotState === "point" && (
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 animate-bounce">
              <span className="text-2xl">👉</span>
            </div>
          )}

          {mascotState === "wave" && (
            <div className="absolute -right-4 -top-2 animate-[wiggle_0.5s_ease-in-out_infinite]">
              <span className="text-xl">👋</span>
            </div>
          )}

          {mascotState === "love" && (
            <>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xl animate-bounce">💜</div>
              <div className="absolute -top-2 -left-3 text-sm animate-ping">💜</div>
              <div className="absolute -top-2 -right-3 text-sm animate-ping" style={{ animationDelay: "0.5s" }}>💜</div>
            </>
          )}

          {mascotState === "thinking" && (
            <div className="absolute -top-4 -right-2 text-lg">💭</div>
          )}

          {mascotState === "drag" && (
            <div className="absolute -left-8 top-1/2 -translate-y-1/2">
              <MousePointer2 className="w-6 h-6 text-primary animate-bounce" />
            </div>
          )}
        </button>

        {isMinimized && (
          <span className="text-xs text-muted-foreground animate-pulse">Click me!</span>
        )}
      </div>

      {/* Floating particles - only on excitement */}
      {(mascotState === "excited" || mascotState === "love") && hasInteracted && (
        <div className="fixed inset-0 pointer-events-none z-40">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute text-xl animate-float"
              style={{
                left: mascotPosition.x + (i % 2 === 0 ? -50 : 80) + Math.random() * 40,
                top: mascotPosition.y + (i < 2 ? -40 : 60) + Math.random() * 30,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${3 + Math.random()}s`,
              }}
            >
              {["✨", "💜", "⭐", "🌟"][i]}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Mascot;
