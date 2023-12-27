import { ComponentType } from 'react';

import { createConfig } from './createConfig';
import { createComponent } from './createComponent';

import type { UIComponentConfig, UILibrary, UILibraryConfig } from './types';

export const createProxy = (config: UILibraryConfig = {}) => {
  const componentCache: Map<string | ComponentType, Function> = new Map();

  const defaultConfig = { cache: componentCache }

  const options = createConfig({ ...defaultConfig, ...config });

  const template = (component: string | ComponentType, config: UIComponentConfig) => {
    if (componentCache.has(component)) {
      return componentCache.get(component);
    }

    const newComponent = createComponent(component, { ...options, ...config });

    componentCache.set(component, newComponent);

    return newComponent;
  }

  const element = new Proxy(
    (component: ComponentType) => {
      const element = template(component, options);

      return element;
    },
    {
      get(_target, name) {
        const element = template(name as keyof React.JSX.IntrinsicElements, options);

        return element;
      },
    },
  ) as any as UILibrary;

  return element;
}