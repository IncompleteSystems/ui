import { classNameFeature, elementTagFeature, propertiesFeature } from './features';
import { createComponentPlugin, componentTemplatePlugin, componentVariantsPlugin, componentContextPlugin } from './plugins';
import { UILibraryConfig } from './types';

export const createConfig = <
  TPlugins extends {},
  TConfig extends UILibraryConfig<TPlugins, {}>
>(config?: TConfig) => {

  const defaultPlugins = {
    createComponent: createComponentPlugin,
    createTemplate: componentTemplatePlugin,
    variants: componentVariantsPlugin,
    context: componentContextPlugin,
  };

  const plugins = {
    ...defaultPlugins,
    ...(config?.plugins || {}),
  };

  const features = [
    elementTagFeature,
    classNameFeature,
    propertiesFeature,
    ...(config?.features ?? []),
  ];

  return {
    ...config,
    features,
    plugins,
  };
}