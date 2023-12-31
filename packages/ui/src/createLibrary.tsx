import { ComponentType } from 'react';

import { createConfig } from './createConfig';
import { createPlugins } from './createPlugins';

import type { UILibrary, UILibraryConfig, UILibraryPlugin } from './types';

export const createLibrary = <TPlugins extends {} = {}, TConfig extends {} = {}>(
  config?: UILibraryConfig<TPlugins, TConfig>
): UILibrary<TPlugins> => {
  const options = createConfig<TPlugins, TConfig>(config);

  const cachedPlugins = createPlugins(options);

  const library = new Proxy(
    (component: ComponentType) => {
      const createComponent = cachedPlugins.get("createComponent");
      
      return createComponent(component)},
    {
      get: (_target, name) => {
        const plugin: UILibraryPlugin = cachedPlugins.get(name.toString() as any) ?? cachedPlugins.get("createTemplate");

        if (!plugin) throw new Error(`Plugin "${name.toString()}" not found.`);

        return plugin(name);
      },
    },
  ) as UILibrary<TPlugins>;

  return library;
}
