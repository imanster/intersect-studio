import { useEffect, useRef, useCallback } from 'react';

const COLOR_HUES = [270, 300, 330, 200, 180, 240]; // Purple, Magenta, Pink, Cyan, Teal, Blue

export const useDynamicColors = () => {
  const currentIndex = useRef(0);
  const isTransitioning = useRef(false);

  const updateColors = useCallback(() => {
    if (isTransitioning.current) return;
    
    isTransitioning.current = true;
    currentIndex.current = (currentIndex.current + 1) % COLOR_HUES.length;
    
    const hue = COLOR_HUES[currentIndex.current];
    const root = document.documentElement;
    
    // Update CSS custom properties with new hue
    root.style.setProperty('--primary', `${hue} 100% 70%`);
    root.style.setProperty('--secondary', `${(hue + 30) % 360} 100% 65%`);
    root.style.setProperty('--accent', `${(hue - 30 + 360) % 360} 100% 75%`);
    root.style.setProperty('--ring', `${hue} 100% 70%`);
    root.style.setProperty('--muted', `${hue} 15% 15%`);
    
    // Update gradient and glow effects
    root.style.setProperty('--gradient-hero', 
      `linear-gradient(135deg, hsl(${hue} 100% 70% / 0.15) 0%, hsl(${(hue + 30) % 360} 100% 65% / 0.15) 50%, hsl(${(hue - 30 + 360) % 360} 100% 75% / 0.1) 100%)`
    );
    root.style.setProperty('--gradient-card', 
      `linear-gradient(180deg, hsl(${hue} 30% 12%) 0%, hsl(${hue} 20% 8%) 100%)`
    );
    root.style.setProperty('--shadow-glow', `0 0 80px hsl(${hue} 100% 70% / 0.35)`);
    root.style.setProperty('--shadow-glow-sm', `0 0 30px hsl(${hue} 100% 70% / 0.25)`);
    root.style.setProperty('--shadow-glow-accent', `0 0 60px hsl(${(hue + 30) % 360} 100% 65% / 0.3)`);
    root.style.setProperty('--text-glow', `0 0 40px hsl(${hue} 100% 70% / 0.5)`);

    // Reset transition lock after animation
    setTimeout(() => {
      isTransitioning.current = false;
    }, 500);
  }, []);

  useEffect(() => {
    // Add CSS transition for smooth color changes
    const style = document.createElement('style');
    style.textContent = `
      :root {
        transition: --primary 0.5s ease, --secondary 0.5s ease, --accent 0.5s ease;
      }
      * {
        transition: color 0.5s ease, background-color 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
      }
    `;
    document.head.appendChild(style);

    // Click handler
    const handleClick = () => updateColors();
    
    // Scroll handler with throttle
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(updateColors, 150);
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, [updateColors]);

  return { updateColors };
};
