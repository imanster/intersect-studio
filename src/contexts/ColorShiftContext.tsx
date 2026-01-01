import { createContext, useContext, useState, ReactNode } from 'react';

interface ColorShiftContextType {
  isColorShiftEnabled: boolean;
  toggleColorShift: () => void;
}

const ColorShiftContext = createContext<ColorShiftContextType | undefined>(undefined);

export const ColorShiftProvider = ({ children }: { children: ReactNode }) => {
  const [isColorShiftEnabled, setIsColorShiftEnabled] = useState(true);

  const toggleColorShift = () => {
    setIsColorShiftEnabled(prev => !prev);
  };

  return (
    <ColorShiftContext.Provider value={{ isColorShiftEnabled, toggleColorShift }}>
      {children}
    </ColorShiftContext.Provider>
  );
};

export const useColorShift = () => {
  const context = useContext(ColorShiftContext);
  if (!context) {
    throw new Error('useColorShift must be used within a ColorShiftProvider');
  }
  return context;
};
