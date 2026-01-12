import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface OrbieGameContextType {
  foundOrbies: string[];
  findOrbie: (id: string) => void;
  totalOrbies: number;
  isUnlocked: boolean;
  resetGame: () => void;
}

const OrbieGameContext = createContext<OrbieGameContextType | undefined>(undefined);

const STORAGE_KEY = "orbie-found-list";
const TOTAL_ORBIES = 3;

export const OrbieGameProvider = ({ children }: { children: ReactNode }) => {
  const [foundOrbies, setFoundOrbies] = useState<string[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const isUnlocked = foundOrbies.length >= TOTAL_ORBIES;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(foundOrbies));
  }, [foundOrbies]);

  const findOrbie = (id: string) => {
    if (!foundOrbies.includes(id)) {
      setFoundOrbies((prev) => [...prev, id]);
    }
  };

  const resetGame = () => {
    setFoundOrbies([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <OrbieGameContext.Provider
      value={{
        foundOrbies,
        findOrbie,
        totalOrbies: TOTAL_ORBIES,
        isUnlocked,
        resetGame,
      }}
    >
      {children}
    </OrbieGameContext.Provider>
  );
};

export const useOrbieGame = () => {
  const context = useContext(OrbieGameContext);
  if (!context) {
    throw new Error("useOrbieGame must be used within OrbieGameProvider");
  }
  return context;
};
