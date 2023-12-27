import { createProxy as defaultUI } from './createProxy';

const ui = defaultUI();

export * from './createComponent';
export * from './createConfig';
export * from './createProxy';
export * from './types';

export default ui;
