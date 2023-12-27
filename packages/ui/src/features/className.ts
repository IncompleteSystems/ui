import { classNames } from '@incomplete/ui.classnames';
import { isFunction } from '@incomplete/ui.utils';

import type { UIComponentFeature } from '@/types';

export const featureClassName: UIComponentFeature<{ params: any[], className?: any }> = (_component, config) => {
  const { params } = config;
  const [stringsOrFn, ...values] = params ?? [];
  
  const isFn = isFunction(stringsOrFn);
  const baseClasses = !isFn && String.raw({ raw: stringsOrFn.toString() }, ...values);

  return ({ className, ...props }, _ref) => {
    const propClasses = isFn && stringsOrFn(props);
    return { ...props, className: classNames(baseClasses, propClasses, className) };
  };
}