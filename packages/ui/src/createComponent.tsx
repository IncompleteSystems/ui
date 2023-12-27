import { ComponentType, ElementType, ForwardedRef, forwardRef } from 'react';

import { featureClassName, featureElementTag, featureProperties } from './features';

import type { UIComponentConfig } from './types';

export const createComponent: <CustomProps extends Omit<any, "ref"> & React.RefAttributes<unknown>>(
  component: string | ElementType, config: UIComponentConfig
) => (
  ...params: any[]
) => ComponentType<CustomProps> = (
  component: string | ElementType, config: UIComponentConfig
) => (
  ...params: unknown[]
) => {
      const options: UIComponentConfig = { ...config, params };

      const features = [
        featureElementTag,
        featureClassName,
        featureProperties,
        ...(options.features ?? [])
      ]

      const componentFeatures = features.map((feature) => {
        return feature(component, options);
      });

      const element = forwardRef((props: any, ref: ForwardedRef<unknown>) => {

        const { component: Component = component, ...componentProps } = componentFeatures.reduce((props, useFeature) => {
          return { ...props, ...useFeature(props, ref) };
        }, props);

        const element = (<Component {...componentProps} ref={ref} />)

        return element;
      })

      return element;
    }

