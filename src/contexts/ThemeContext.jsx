import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Obtener preferencia guardada o usar dark por defecto
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // Aplicar tema inicial al cargar
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const initialIsDark = saved ? saved === 'dark' : true;
    document.documentElement.classList.toggle('light-mode', !initialIsDark);
  }, []);

  useEffect(() => {
    // Guardar preferencia en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Aplicar tema al documento
    // isDark = true → modo oscuro (sin clase light-mode)
    // isDark = false → modo claro (con clase light-mode)
    document.documentElement.classList.toggle('light-mode', !isDark);
    
    // Tema aplicado correctamente
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 