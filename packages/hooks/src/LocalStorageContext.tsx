import { createContext, useContext, useState } from 'react';

export const createLocalStorageContext = (key: string, defaultValue: any) => {
  const LocalStorageContext = createContext<any | undefined>(undefined);

  const useLocalStorage = () => useContext(LocalStorageContext);

  const LocalStorageProvider = ({ children }: { children: React.ReactNode }) => {
    const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
      } catch (error) {
        console.log(error);
        return defaultValue;
      }
    });

    const setValue = (value: any) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <LocalStorageContext.Provider value={[storedValue, setValue]}>
        {children}
      </LocalStorageContext.Provider>
    );
  };

  return { LocalStorageProvider, useLocalStorage };
};
