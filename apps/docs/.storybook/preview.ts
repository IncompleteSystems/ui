// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';

import '../src/tailwind.css'; // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: ['UI Library', '*'],
      },
    },
  },
};

export default preview;