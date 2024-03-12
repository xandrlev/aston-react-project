import { ReactNode, createContext, useEffect } from "react";

import { useSaveGetData } from "../../hooks";

export interface ThemeContextProps {
  theme?: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined,
);

export interface Props {
  children: ReactNode;
}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const { value: theme, setValue: setTheme } = useSaveGetData<string>(
    "theme",
    "light",
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
