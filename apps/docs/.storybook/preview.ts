// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';

import { themes } from '@storybook/theming';

import { AuthContainer } from './preview-container';

import '../tailwind.css'; 


const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'default',
      values: [
        {
          name: 'default',
          value: 'url(/incomplete_systems_bg.svg) center center / cover no-repeat fixed'
        },
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#000000',
        },
      ],
    },
    layout: 'centered',
    docs: {
      theme: themes.dark,
      container: AuthContainer,
    },
    options: {
      storySort: {
        order: ["Introduction", 'Internals', 'Guides', '*'],
      },
    },
  },
};

export default preview;