import { createElement, forwardRef } from 'react';

import type { ComponentType } from 'react';
import type { ElementTagNames, UIComponentConfig } from './types';

export const createComponent: <CustomProps extends {}>(
  component: ElementTagNames, config: UIComponentConfig
) => ComponentType<CustomProps> = (
  component: ElementTagNames, config: UIComponentConfig
) => {
    const features = config.features ?? [];

    const componentFeatures = features.map((feature) => {
      return feature(component, config);
    });

    const element = forwardRef((props: any, ref) => {
      const { component: Component = component, ...componentProps } = componentFeatures.reduce((props, useFeature) => {
        return { ...props, ...useFeature(props, ref) };
      }, props);

      return createElement(Component, { ...componentProps, ref });
    })

    return element;
  }

