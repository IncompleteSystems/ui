import { forwardRef } from 'react';

import { Button as HeadlessButton, ButtonProps as HeadlessButtonProps } from '@headlessui/react';

import ui, { UIComponentVariantProps } from '@incomplete/ui';
import { classNames as clsx } from '@incomplete/ui.classnames';

import Link from '@incomplete/ux.link';

import { TouchTarget } from './TouchTarget';

export const ButtonStyles = ui.variants({
  base: [
    'rounded-lg inline-flex justify-center items-center gap-2.5',
  ],
  slots: {
    icon: '',
    text: 'font-["Inter"] text-lg font-semibold leading-7',
  },
  variants: {
    styles: {
      primary: 'bg-violet-500 border-violet-500 text-white hover:bg-violet-700 hover:border-violet-700 focus:ring-2 focus:ring-violet-300 focus:ring-offset-2 focus:ring-offset-transparent disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400',
      secondary: 'bg-white border-purple-300 text-violet-700 hover:bg-purple-50 hover:text-violet-900 focus:ring-2 focus:ring-purple-300 focus:ring-offset-2 focus:ring-offset-transparent disabled:bg-white disabled:border-gray-200 disabled:text-gray-400',
      tertiary: 'text-violet-700 hover:bg-purple-50 hover:text-violet-900 disabled:text-gray-400',
    },
    state: {
      default: '',
      success: '',
      warning: '',
      error: '',
      info: '',
    },
    size: {
      small: 'px-3 py-2',
      medium: 'px-4 py-2',
      large: 'px-5 py-3',
    },
  },
  defaultVariants: {
    styles: 'primary',
    state: 'default',
    size: 'medium',
  },
});

export type ButtonProps = UIComponentVariantProps<typeof ButtonStyles> & React.PropsWithChildren<(HeadlessButtonProps | React.ComponentPropsWithoutRef<typeof Link>)>;

export const Button = forwardRef((
  { className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>
) => {

  const styles = ButtonStyles(props);

  return 'href' in props ? (
    <Link {...props} className={clsx(styles.base(props), className)} ref={ref as React.ForwardedRef<HTMLAnchorElement>}>
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <HeadlessButton {...props} className={clsx(styles.base(props), className)} ref={ref}>
      <TouchTarget>{children}</TouchTarget>
    </HeadlessButton>
  )
})

Button.displayName = 'Button';

export default Button;