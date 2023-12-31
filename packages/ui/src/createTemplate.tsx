import type { ComponentType, ElementType } from 'react';
import type { UIComponentConfig, UILibraryConfig } from './types';

import { createComponent } from './createComponent';

export const createTemplate: <CustomProps extends Omit<any, "ref"> & React.RefAttributes<unknown>>(
  component: string | ElementType, config: UIComponentConfig
) => (
  ...params: any[]
) => ComponentType<CustomProps> = (
  component: string | ElementType, config: UIComponentConfig
) => (
  ...params: unknown[]
) => {
      const options: UILibraryConfig<{}, { params: any[] }> = { ...config, params };

      return createComponent(component, options);
    }

