import ui from '@incomplete/ui';
import type React from 'react'


const AlertTitleStyles = ui.variants({
  base: 'text-balance text-center text-base/6 font-semibold text-zinc-950 sm:text-wrap sm:text-left sm:text-sm/6 dark:text-white',
})

export function AlertTitle(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <HeadlessDialogTitle
      {...props}
      className={AlertTitleStyles(props)}
    />
  )
}

// -----------------------------------------------------

const AlertDescriptionStyles = ui.variants({
  base: 'mt-2 text-pretty text-center sm:text-left',
})

export function AlertDescription(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <HeadlessDialogTitle
      {...props}
      className={AlertDescriptionStyles(props)}
    />
  )
}

// -----------------------------------------------------

const AlertBodyStyles = ui.variants({
  base: 'mt-2 text-pretty text-center sm:text-left',
})

export function AlertBody(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <HeadlessDialogTitle
      {...props}
      className={AlertBodyStyles(props)}
    />
  )
}

// -----------------------------------------------------

const AlertActionsStyles = ui.variants({
  base: 'mt-2 text-pretty text-center sm:text-left',
})

export function AlertActions(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <HeadlessDialogTitle
      {...props}
      className={AlertActionsStyles(props)}
    />
  )
}
