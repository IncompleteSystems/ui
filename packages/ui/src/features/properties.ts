import type { UIComponentConfig, UIComponentFeature } from '@/types';

export type PropertyProcessor = (value: any, props?: any, ref?: React.ForwardedRef<unknown>) => any;

export type PropertyProcessors = { [key: string]: PropertyProcessor };

export const featureProperties: UIComponentFeature<{}> = (_component, config: UIComponentConfig<{ props?: PropertyProcessors }>) => {
  const { } = config;

  return (props, ref) => Object.fromEntries(
    Object.entries(props).map(([key, value]) => {
      const propProcessor = config.props?.[key];
      return [key, propProcessor ? propProcessor(value, props, ref) : value];
    })
  );
}