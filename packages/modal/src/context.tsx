import ui from '@incomplete/ui';

import { CardStyles } from './styles';

export const {
  useVariantContext: useCardContext,
  VariantProvider: CardStylesProvider
} = ui.context<typeof CardStyles>();
