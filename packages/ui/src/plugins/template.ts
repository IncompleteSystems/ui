import { createTemplate } from '../createTemplate';

import { ElementTagNames, UILibraryConfig, UILibraryPlugin } from '../types';

export const componentTemplatePlugin = (
  config: Omit<UILibraryConfig<any, any>, 'plugins' | 'features'>
): UILibraryPlugin => (
  component: ElementTagNames
) => createTemplate(component, config);
