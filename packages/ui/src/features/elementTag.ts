import { Slot } from '@incomplete/ui.slots';

import type { UIComponentFeature } from '../types';

export const elementTagFeature: UIComponentFeature<{
  component?: string | React.ComponentType,
  as?: React.ComponentType,
  asChild?: boolean
}, {}> = (defaultComponent, _config) => (
  { as: asComponent, asChild, ...props },
  _ref
) => ({
  ...props,
  component: asComponent ?? (asChild ? Slot : defaultComponent)
});
