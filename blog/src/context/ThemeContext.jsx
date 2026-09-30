import { createContext, useState, useContext, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    console.log(theme);
    function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme])
    return(
        <ThemeContext.Provider value={{ theme, toggleTheme,}}>

            {children}

        </ThemeContext.Provider>
    )
}

export function useTheme() {
  return useContext(ThemeContext);
}
