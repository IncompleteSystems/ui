import { classNames } from '@incomplete/ui.classnames';
import { isFunction } from '@incomplete/ui.utils';

import type { UIComponentFeature } from '../types';

export const featureClassName: UIComponentFeature<{ className?: any }, { params?: any[] }> = (_component, config) => {
  const [stringsOrFn, ...values] = config?.params ?? [];

  const isFn = isFunction(stringsOrFn);
  const baseClasses = !isFn && String.raw({ raw: stringsOrFn.toString() }, ...values);

  return ({ className, ...props }: any, _ref) => {
    const propClasses = isFn && stringsOrFn(props);
    return { ...props, className: classNames(baseClasses, propClasses, className) };
  };
}
