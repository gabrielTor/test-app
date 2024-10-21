import { COLOR_SCHEMES, Theme } from "@/constants/Colors";
import { getRandomColor } from "@/utils/getRandomColor";
import { createContext, useState, useContext, ReactNode } from "react";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type ThemeProviderProps = {
  children: ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const deafultTheme = COLOR_SCHEMES[12];

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(deafultTheme);

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
