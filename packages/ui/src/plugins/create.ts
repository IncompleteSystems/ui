import { createComponent } from '../createComponent';

import { UILibraryConfig, UILibraryPlugin } from '../types';

export const createComponentPlugin = (
  config: Omit<UILibraryConfig<any, any>, 'plugins' | 'features'>
): UILibraryPlugin => (
  component: keyof React.JSX.IntrinsicElements
) => createComponent(component, config);