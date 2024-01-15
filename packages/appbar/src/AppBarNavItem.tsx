import ui from '@incomplete/ui';

export const AppBarNavItemStyles = ui.variants({
  base: 'rounded-lg p-1.5 transition-colors duration-200 hover:bg-opacity-25 focus:outline-none',
  variants: {
    color: {
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
  },
  defaultVariants: {
    color: 'indigo', // Replace with the default color variant if necessary
  },
});

export const AppBarNavItem = ui.a(AppBarNavItemStyles); // Change to ui.button if these are clickable

export default AppBarNavItem;