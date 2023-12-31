import { createTemplate } from '../createTemplate';

import { UILibraryConfig, UILibraryPlugin } from '../types';

export const componentTemplatePlugin = (
  config: Omit<UILibraryConfig<any, any>, 'plugins' | 'features'>
): UILibraryPlugin => (
  component: keyof React.JSX.IntrinsicElements
) => createTemplate(component, config);