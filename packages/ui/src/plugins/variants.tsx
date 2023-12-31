import { tv as variants } from 'tailwind-variants';

import { UILibraryConfig } from '../types';

export const componentVariantsPlugin = (_config: UILibraryConfig<any, any>) => (_name: string) => variants;