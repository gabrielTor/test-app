import { getRandomColor } from "@/utils/getRandomColor";
import { createContext, useState, useContext, ReactNode } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export type Theme = {
  background: string;
  text: string;
};

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getRandomColor());

  const toggleTheme = () => {
    setTheme(getRandomColor());
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
