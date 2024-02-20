import React, { createContext, useContext, useEffect } from 'react';
import { createLocalStorageContext } from '@incomplete/ui.hooks';

/**
 * Creates a theme context with a provider that stores the theme in local storage.
 * 
 * @param {string} defaultTheme - The default theme to use. Defaults to 'light'.
 * 
 * @returns {Object} An object containing the ThemedAppProvider component and the useTheme hook.
 */
export const createThemeContext = (defaultTheme = 'light') => {
  // Create a local storage context for the theme
  const {
    LocalStorageProvider: ThemeStorageProvider,
    useLocalStorage: useThemeStorage
  } = createLocalStorageContext('theme', defaultTheme);

  // Create a context for the theme
  const ThemeContext = createContext<{ theme: string, toggleTheme: () => void } | undefined>(undefined);

  /**
   * Hook to use the theme context.
   * 
   * This hook allows you to access the theme context from any component.
   * It must be used within a ThemeProvider.
   * 
   * @throws {Error} If the hook is not used within a ThemeProvider.
   * 
   * @returns {Object} The theme context.
   */
  const useTheme = () => {
    // Get the theme context
    const context = useContext(ThemeContext);

    // If the context is undefined, it means that this hook was called outside a ThemeProvider
    if (!context) {
      throw new Error('useTheme must be used within a ThemeProvider');
    }

    // Return the theme context
    return context;
  };

  /**
   * Provides the theme context to its children.
   * 
   * @param {Object} props - The properties passed to the component.
   * @param {React.ReactNode} props.children - The children to render.
   * 
   * @returns {JSX.Element} The ThemeContext provider.
   */
  const BaseThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // Use the theme from local storage
    const [theme, setTheme] = useThemeStorage();

    // Listen to system theme changes, but prioritize the theme from local storage
    useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
        // If there's no theme in local storage, use the system theme
        if (!window.localStorage.getItem('theme')) {
          setTheme(mediaQuery.matches ? 'dark' : 'light');
        }
      };

      // Add the change listener to the media query
      mediaQuery.addEventListener("change", handleChange);
      // Remove the change listener when the component unmounts
      return () => mediaQuery.removeEventListener("change", handleChange);
    }, [setTheme]);

    // Function to toggle the theme
    const toggleTheme = () => {
      setTheme((prevTheme: string) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Provide the theme and the toggle function to the children
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };

  /**
   * Provides the theme context with local storage to its children.
   * 
   * @param {Object} props - The properties passed to the component.
   * @param {React.ReactNode} props.children - The children to render.
   * 
   * @returns {JSX.Element} The ThemeProvider component.
   */
  const ThemeProvider = ({ children }: { children: React.ReactNode }) => (
    <ThemeStorageProvider>
      <BaseThemeProvider>
        {children}
      </BaseThemeProvider>
    </ThemeStorageProvider>
  );

  return { ThemeProvider, useTheme };
};

export default createThemeContext;