import { TV } from 'tailwind-variants';
import { featureClassName, featureElementTag, featureProperties } from './features';
import { createComponentPlugin, componentTemplatePlugin, componentVariantsPlugin } from './plugins';
import { UILibraryConfig } from './types';

export const createConfig = <
  TPlugins extends {},
  TConfig extends UILibraryConfig<TPlugins, {}>
>(config?: TConfig) => {

  const defaultPlugins = {
    createComponent: createComponentPlugin,
    createTemplate: componentTemplatePlugin,
    variants: componentVariantsPlugin,
  };

  const plugins = {
    ...defaultPlugins,
    ...(config?.plugins || {}),
  };

  const features = [
    featureElementTag,
    featureClassName,
    featureProperties,
    ...(config?.features ?? []),
  ];

  return {
    ...config,
    features,
    plugins,
  };
}