import ui from '@incomplete/ui';

export const AppBarStyles = ui.variants({
  base: 'flex h-screen w-12 flex-col items-center space-y-8 border-r py-8 sm:w-16 justify-between',
  variants: {
    color: {
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
  defaultVariants: {
    color: 'indigo',
  },
});

export const AppBar = ui.aside(AppBarStyles);

export default AppBar;