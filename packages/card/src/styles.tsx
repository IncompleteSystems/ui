import ui from '@incomplete/ui';

export const CardStyles = ui.variants({
  base: 'divide-y overflow-hidden rounded-lg shadow',
  variants: {
    color: {
      'dark': 'bg-gray-900 border border-slate-800 divide-slate-800',
      'light': 'bg-white border border-gray-200 divide-gray-200',
    }
  },
  slots: {
    header: 'px-4 py-5 sm:px-6',
    body: 'px-4 py-5 sm:p-6',
    footer: 'px-4 py-4 sm:px-6',
  },
})