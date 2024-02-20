import ui from '@incomplete/ui';

export const AppBarStyles = ui.variants({
  base: 'flex h-screen w-12 flex-col items-center space-y-8 border-r py-8 sm:w-16 justify-between',
  variants: {
    color: {
      'theme': 'bg-primary border-secondary',
      'dark/zinc': 'border-slate-700 bg-slate-900',
      light: 'border-slate-300 bg-white',
      'dark/white': 'border-slate-700 bg-slate-900',
      dark: 'border-slate-700 bg-slate-900',
      white: 'border-slate-300 bg-white',
      zinc: 'border-zinc-700 bg-zinc-600',
      indigo: 'border-indigo-700 bg-indigo-500',
      cyan: 'border-cyan-300 bg-cyan-300',
      red: 'border-red-700 bg-red-600',
      orange: 'border-orange-700 bg-orange-500',
      amber: 'border-amber-400 bg-amber-400',
      yellow: 'border-yellow-300 bg-yellow-300',
      lime: 'border-lime-300 bg-lime-300',
      green: 'border-green-700 bg-green-600',
      emerald: 'border-emerald-700 bg-emerald-600',
      teal: 'border-teal-700 bg-teal-600',
      sky: 'border-sky-500 bg-sky-500',
      blue: 'border-blue-700 bg-blue-600',
      violet: 'border-violet-700 bg-violet-500',
      purple: 'border-purple-700 bg-purple-500',
      fuchsia: 'border-fuchsia-700 bg-fuchsia-500',
      pink: 'border-pink-700 bg-pink-500',
      rose: 'border-rose-700 bg-rose-500',
    },
  },
  slots: {
    nav: 'flex flex-col space-y-1',
    navItem: 'rounded-lg p-1.5 transition-colors duration-200 focus:outline-none group hover:bg-active text-quarternary',
    navItemIcon: 'h-6 w-6 group-hover:text-secondary transition-colors duration-200',
  },
  defaultVariants: {
    color: 'theme',
  },
});

export const AppBarNavItemStyles = ui.variants({
  base: 'rounded-lg p-1.5 transition-colors duration-200 focus:outline-none group',
  variants: {
    color: {
      // Incomplete UI Theme
      theme: 'hover:bg-active',
      // Color Theme
      zinc: 'text-white hover:bg-zinc-600 dark:text-zinc-400 dark:hover:bg-zinc-700',
      indigo: 'text-white hover:bg-indigo-600 dark:text-indigo-400 dark:hover:bg-indigo-700',
      cyan: 'text-cyan-950 hover:bg-cyan-600 dark:text-cyan-400 dark:hover:bg-cyan-700',
      red: 'text-white hover:bg-red-600 dark:text-red-400 dark:hover:bg-red-700',
      orange: 'text-white hover:bg-orange-600 dark:text-orange-400 dark:hover:bg-orange-700',
      amber: 'text-amber-950 hover:bg-amber-600 dark:text-amber-400 dark:hover:bg-amber-700',
      yellow: 'text-yellow-950 hover:bg-yellow-600 dark:text-yellow-400 dark:hover:bg-yellow-700',
      lime: 'text-lime-950 hover:bg-lime-600 dark:text-lime-400 dark:hover:bg-lime-700',
      green: 'text-white hover:bg-green-600 dark:text-green-400 dark:hover:bg-green-700',
      emerald: 'text-emerald-500 hover:bg-emerald-600 dark:text-emerald-400 dark:hover:bg-emerald-700',
      teal: 'text-white hover:bg-teal-600 dark:text-teal-400 dark:hover:bg-teal-700',
      sky: 'text-white hover:bg-sky-600 dark:text-sky-400 dark:hover:bg-sky-700',
      blue: 'text-white hover:bg-blue-600 dark:text-blue-400 dark:hover:bg-blue-700',
      violet: 'text-white hover:bg-violet-600 dark:text-violet-400 dark:hover:bg-violet-700',
      purple: 'text-white hover:bg-purple-600 dark:text-purple-400 dark:hover:bg-purple-700',
      fuchsia: 'text-white hover:bg-fuchsia-600 dark:text-fuchsia-400 dark:hover:bg-fuchsia-700',
      pink: 'text-white hover:bg-pink-600 dark:text-pink-400 dark:hover:bg-pink-700',
      rose: 'text-white hover:bg-rose-600 dark:text-rose-400 dark:hover:bg-rose-700',
    },
    active: {
      true: 'bg-active',
      false: '',
    },
  },
  slots: {
    icon: 'group-hover:text-secondary',
  },
  defaultVariants: {
    color: 'theme',
  },
});