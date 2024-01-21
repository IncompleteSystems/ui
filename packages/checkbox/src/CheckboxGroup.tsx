import {
  CheckboxGroup as HeadlessCheckboxGroup,
  Field as HeadlessField,
  type CheckboxGroupProps as HeadlessCheckboxGroupProps,
  type FieldProps as HeadlessFieldProps,
} from '@headlessui/react'
import { clsx } from 'clsx'
import type React from 'react'
import ui, { UIComponentVariantProps } from '@incomplete/ui';

export const CheckboxGroupStyles = ui.variants({
  base: [
    // Basic layout
  'relative isolate flex size-[1.125rem] items-center justify-center rounded-[0.3125rem] sm:size-4',

  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(0.3125rem-1px)] before:bg-white before:shadow',

  // Background color when checked
  'before:group-data-[checked]:bg-[--CheckboxGroup-checked-bg]',

  // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
  'dark:before:hidden',

  // Background color applied to control in dark mode
  'dark:bg-white/5 dark:group-data-[checked]:bg-[--CheckboxGroup-checked-bg]',

  // Border
  'border border-zinc-950/15 group-data-[checked]:border-transparent group-data-[checked]:group-data-[hover]:border-transparent group-data-[hover]:border-zinc-950/30 group-data-[checked]:bg-[--CheckboxGroup-checked-border]',
  'dark:border-white/15 dark:group-data-[checked]:border-white/5 dark:group-data-[checked]:group-data-[hover]:border-white/5 dark:group-data-[hover]:border-white/30',

  // Inner highlight shadow
  'after:absolute after:inset-0 after:rounded-[calc(0.3125rem-1px)] after:shadow-[inset_0_1px_theme(colors.white/15%)]',
  'dark:after:-inset-px dark:after:hidden dark:after:rounded-[0.3125rem] dark:group-data-[checked]:after:block',

  // Focus ring
  'group-data-[focus]:outline group-data-[focus]:outline-2 group-data-[focus]:outline-offset-2 group-data-[focus]:outline-blue-500',

  // Disabled state
  'group-data-[disabled]:opacity-50',
  'group-data-[disabled]:border-zinc-950/25 group-data-[disabled]:bg-zinc-950/5 group-data-[disabled]:[--CheckboxGroup-check:theme(colors.zinc.950/50%)] group-data-[disabled]:before:bg-transparent',
  'dark:group-data-[disabled]:border-white/20 dark:group-data-[disabled]:bg-white/[2.5%] dark:group-data-[disabled]:[--CheckboxGroup-check:theme(colors.white/50%)] dark:group-data-[disabled]:group-data-[checked]:after:hidden',

  // Forced colors mode
  'forced-colors:[--CheckboxGroup-check:HighlightText] forced-colors:[--CheckboxGroup-checked-bg:Highlight] forced-colors:group-data-[disabled]:[--CheckboxGroup-check:Highlight]',
  'dark:forced-colors:[--CheckboxGroup-check:HighlightText] dark:forced-colors:[--CheckboxGroup-checked-bg:Highlight] dark:forced-colors:group-data-[disabled]:[--CheckboxGroup-check:Highlight]',
  ],
  variants: {
    styles: {
      // solid: [
      //   // Optical border, implemented as the button background to avoid corner artifacts
      //   'border-transparent bg-[--btn-border]',

      //   // Dark mode: border is rendered on `after` so background is set to button background
      //   'dark:bg-[--btn-bg]',

      //   // Button background, implemented as foreground layer to stack on top of pseudo-border layer
      //   'before:absolute before:inset-0 before:-z-10 before:rounded-[calc(theme(borderRadius.lg)-1px)] before:bg-[--btn-bg]',

      //   // Drop shadow, applied to the inset `before` layer so it blends with the border
      //   'before:shadow',

      //   // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
      //   'dark:before:hidden',

      //   // Dark mode: Subtle white outline is applied using a border
      //   'dark:border-white/5',

      //   // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
      //   'after:absolute after:inset-0 after:-z-10 after:rounded-[calc(theme(borderRadius.lg)-1px)]',

      //   // Inner highlight shadow
      //   'after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)]',

      //   // White overlay on hover
      //   'after:data-[active]:bg-[--btn-hover-overlay] after:data-[hover]:bg-[--btn-hover-overlay]',

      //   // Dark mode: `after` layer expands to cover entire button
      //   'dark:after:-inset-px dark:after:rounded-lg',

      //   // Disabled
      //   'before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none',
      // ],
      // outline: [
      //   // Base
      //   'border-zinc-950/10 text-zinc-950 data-[active]:bg-zinc-950/[2.5%] data-[hover]:bg-zinc-950/[2.5%]',

      //   // Dark mode
      //   'dark:border-white/15 dark:text-white dark:[--btn-bg:transparent] dark:data-[active]:bg-white/5 dark:data-[hover]:bg-white/5',

      //   // Icon
      //   '[--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]',
      // ],
      // plain: [
      //   // Base
      //   'border-transparent text-zinc-950 data-[active]:bg-zinc-950/5 data-[active]:bg-zinc-950/5',

      //   // Dark mode
      //   'data-[hover]:bg-zinc-950/5 dark:text-white dark:data-[active]:bg-white/10 dark:data-[active]:bg-white/10 dark:data-[hover]:bg-white/10',

      //   // Icon
      //   '[--btn-icon:theme(colors.zinc.500)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[active]:[--btn-icon:theme(colors.zinc.700)] data-[hover]:[--btn-icon:theme(colors.zinc.700)] dark:[--btn-icon:theme(colors.zinc.500)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[active]:[--btn-icon:theme(colors.zinc.400)] dark:data-[hover]:[--btn-icon:theme(colors.zinc.400)]',
      // ],
    },
    colors: {
      'dark/zinc': [
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.zinc.900)] [--CheckboxGroup-checked-border:theme(colors.zinc.950/90%)]',
        'dark:[--CheckboxGroup-checked-bg:theme(colors.zinc.600)]',
      ],
      'dark/white': [
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.zinc.900)] [--CheckboxGroup-checked-border:theme(colors.zinc.950/90%)]',
        'dark:[--CheckboxGroup-check:theme(colors.zinc.900)] dark:[--CheckboxGroup-checked-bg:theme(colors.white)] dark:[--CheckboxGroup-checked-border:theme(colors.zinc.950/15%)]',
      ],
      white:
        '[--CheckboxGroup-check:theme(colors.zinc.900)] [--CheckboxGroup-checked-bg:theme(colors.white)] [--CheckboxGroup-checked-border:theme(colors.zinc.950/15%)]',
      dark: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.zinc.900)] [--CheckboxGroup-checked-border:theme(colors.zinc.950/90%)]',
      zinc: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.zinc.600)] [--CheckboxGroup-checked-border:theme(colors.zinc.700/90%)]',
      red: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.red.600)] [--CheckboxGroup-checked-border:theme(colors.red.700/90%)]',
      orange:
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.orange.500)] [--CheckboxGroup-checked-border:theme(colors.orange.600/90%)]',
      amber:
        '[--CheckboxGroup-check:theme(colors.amber.950)] [--CheckboxGroup-checked-bg:theme(colors.amber.400)] [--CheckboxGroup-checked-border:theme(colors.amber.500/80%)]',
      yellow:
        '[--CheckboxGroup-check:theme(colors.yellow.950)] [--CheckboxGroup-checked-bg:theme(colors.yellow.300)] [--CheckboxGroup-checked-border:theme(colors.yellow.400/80%)]',
      lime: '[--CheckboxGroup-check:theme(colors.lime.950)] [--CheckboxGroup-checked-bg:theme(colors.lime.300)] [--CheckboxGroup-checked-border:theme(colors.lime.400/80%)]',
      green:
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.green.600)] [--CheckboxGroup-checked-border:theme(colors.green.700/90%)]',
      emerald:
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.emerald.600)] [--CheckboxGroup-checked-border:theme(colors.emerald.700/90%)]',
      teal: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.teal.600)] [--CheckboxGroup-checked-border:theme(colors.teal.700/90%)]',
      cyan: '[--CheckboxGroup-check:theme(colors.cyan.950)] [--CheckboxGroup-checked-bg:theme(colors.cyan.300)] [--CheckboxGroup-checked-border:theme(colors.cyan.400/80%)]',
      sky: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.sky.500)] [--CheckboxGroup-checked-border:theme(colors.sky.600/80%)]',
      blue: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.blue.600)] [--CheckboxGroup-checked-border:theme(colors.blue.700/90%)]',
      indigo:
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.indigo.500)] [--CheckboxGroup-checked-border:theme(colors.indigo.600/90%)]',
      violet:
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.violet.500)] [--CheckboxGroup-checked-border:theme(colors.violet.600/90%)]',
      purple:
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.purple.500)] [--CheckboxGroup-checked-border:theme(colors.purple.600/90%)]',
      fuchsia:
        '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.fuchsia.500)] [--CheckboxGroup-checked-border:theme(colors.fuchsia.600/90%)]',
      pink: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.pink.500)] [--CheckboxGroup-checked-border:theme(colors.pink.600/90%)]',
      rose: '[--CheckboxGroup-check:theme(colors.white)] [--CheckboxGroup-checked-bg:theme(colors.rose.500)] [--CheckboxGroup-checked-border:theme(colors.rose.600/90%)]',
    },
  },
});

export type CheckboxGroupProps = UIComponentVariantProps<typeof CheckboxGroupStyles> 

export function CheckboxGroup({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(
        className,

        // Basic groups
        'space-y-3',

        // With descriptions
        'has-[[data-slot=description]]:space-y-6 [&_[data-slot=label]]:has-[[data-slot=description]]:font-medium'
      )}
    />
  )
}



export * from './CheckboxGroup';