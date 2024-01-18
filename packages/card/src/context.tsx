import { createVariantContext } from '@incomplete/ui.context';

import { CardStyles } from './styles';

export const { useVariantContext: useCardContext, VariantProvider: CardStylesProvider } = createVariantContext<typeof CardStyles>();
