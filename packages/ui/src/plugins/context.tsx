import { createVariantContext } from '@incomplete/ui.context';

import { UILibraryConfig } from '../types';

export const componentContextPlugin = (_config: UILibraryConfig<any, any>) => (_name: string) => createVariantContext;