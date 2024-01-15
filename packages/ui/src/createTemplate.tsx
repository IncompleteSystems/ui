import type { ComponentType } from 'react';
import type { ElementTagNames, UIComponentConfig, UILibraryConfig } from './types';

import { createComponent } from './createComponent';

export const createTemplate: <CustomProps extends {}>(
  component: ElementTagNames, config: UIComponentConfig
) => (
  ...params: any[]
) => ComponentType<CustomProps> = (
  component: ElementTagNames, config: UIComponentConfig
) => (
  ...params: unknown[]
) => {
      const options: UILibraryConfig<{}, { params: any[] }> = { ...config, params };

      return createComponent(component, options);
    }

