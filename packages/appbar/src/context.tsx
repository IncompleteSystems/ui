import ui from '@incomplete/ui';

import { AppBarStyles } from './styles';

export const {
  useVariantContext: useAppBarContext,
  VariantProvider: AppBarStylesProvider
} = ui.context<typeof AppBarStyles>();
