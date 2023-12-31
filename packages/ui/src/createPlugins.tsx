import { UILibraryConfig, UILibraryPlugin, UILibraryPluginInitFunction, UILibraryPlugins } from './types';

export type UILibraryCachedPlugins<TPlugins extends {} = {}> = Map<keyof TPlugins, UILibraryPlugin>

export const createPlugins = <TPlugins extends {} = {}, TConfig extends {} = {}>(
  config: UILibraryConfig<TPlugins, TConfig>
): UILibraryCachedPlugins<TPlugins> => {

  const plugins = new Map<keyof TPlugins, UILibraryPlugin>();

  return Object.entries<UILibraryPluginInitFunction<TConfig>>(config.plugins ?? {}).reduce((plugins, [pluginName, pluginInit]) => {
    plugins.set(pluginName as keyof TPlugins, pluginInit(config));
    return plugins;
  }, plugins);
}

