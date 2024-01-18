import type { ReactNode } from 'react';

import { createContext, useContext } from 'react';

export type VariantContext<V extends (...args: any) => any> = {
  useVariantContext: () => VariantContextValue<V>;
  VariantProvider: (props: { value: VariantContextValue<V>; children: ReactNode }) => JSX.Element;
};

export type VariantStyles<V extends (...args: any) => any> = ReturnType<V>;

export type VariantContextValue<V extends (...args: any) => any> = {
  styles: VariantStyles<V>;
}

export type VariantProviderProps<V extends (...args: any) => any> = {
  value: VariantContextValue<V>;
  children: ReactNode;
};

export const createVariantContext = <V extends (...args: any) => any>(): VariantContext<V> => {

  const VariantContext = createContext<VariantContextValue<V>>({
    styles: undefined as ReturnType<V>,
  });

  function useVariantContext(): VariantContextValue<V> {
    const context = useContext(VariantContext);
    if (!context.styles) {
      throw new Error('useVariantContext must be used within a VariantProvider');
    }
    return context;
  }

  const VariantProvider = ({ value, children }: VariantProviderProps<V>) => (
    <VariantContext.Provider value={value}>
      {children}
    </VariantContext.Provider>
  );

  return { useVariantContext, VariantProvider };
}

export default createVariantContext;