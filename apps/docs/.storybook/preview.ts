// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';

import { themes } from '@storybook/theming';

import '../tailwind.css'; 

const preview: Preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    options: {
      storySort: {
        order: ["Introduction", 'Internals', 'Guides', '*'],
      },
    },
  },
};

export default preview;