import { createElement, forwardRef } from 'react';

import type { ComponentType, ElementType, ForwardedRef } from 'react';
import type { UIComponentConfig } from './types';

export const createComponent: <CustomProps extends {}>(
  component: string | ElementType, config: UIComponentConfig
) => ComponentType<CustomProps> = (
  component: string | ElementType, config: UIComponentConfig
) => {
    const features = config.features ?? [];

    const componentFeatures = features.map((feature) => {
      return feature(component, config);
    });

    // TODO: Fix the typing on the forwardRef 
    const element = forwardRef((props: any, ref: ForwardedRef<unknown>) => {

      const { component: Component = component, ...componentProps } = componentFeatures.reduce((props, useFeature) => {
        return { ...props, ...useFeature(props, ref) };
      }, props);

      return createElement(Component, { ...componentProps, ref });
    })

    return element;
  }

