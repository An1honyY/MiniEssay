import { createContext, useState } from 'react';

export const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} });

export  default function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState(localStorage.theme ? localStorage.theme : 'light');

  const toggleTheme = () => {
    setTheme((theme: string) => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}