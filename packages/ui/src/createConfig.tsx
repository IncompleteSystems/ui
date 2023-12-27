import { UIComponentConfig, UILibraryConfig } from './types';

export const createConfig = (config: UILibraryConfig): UIComponentConfig => {
  return {
    ...config
  }
}