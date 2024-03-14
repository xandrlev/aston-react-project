import { ReactNode, createContext, useEffect, useMemo } from "react";

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

  const toggleTheme = useMemo(
    () => () => {
      setTheme(theme === "light" ? "dark" : "light");
    },
    [theme, setTheme],
  );

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
