import type { UIComponentFeature } from '../types';

export type PropertyProcessor = (value: any, props?: any, ref?: React.ForwardedRef<unknown>) => any;

export type PropertyProcessors = { [key: string]: PropertyProcessor };

export const featureProperties: UIComponentFeature<{}, { props?: PropertyProcessors }> = (_component, config) => {
  return (props, ref) => {
    if (!config.props) return props;

    return Object.fromEntries(
      Object.entries(props).map(([key, value]) => {
        const propProcessor = config.props?.[key];
        return [key, propProcessor ? propProcessor(value, props, ref) : value];
      })
    );
  }
}
