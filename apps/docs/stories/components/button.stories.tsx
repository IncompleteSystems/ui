import type { Meta, StoryObj } from "@storybook/react";

import Button, { ButtonStyles } from "@incomplete/ux.button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    colors: {
      options: Object.keys(ButtonStyles.variants.colors),
      control: { type: 'select' },
      defaultValue: 'dark/zinc',
    },
    styles: {
      options: Object.keys(ButtonStyles.variants.styles),
      control: { type: 'radio' },
      defaultValue: 'solid',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Outline: Story = {
  render: (props) => (
    <Button
      {...props}
    >
      Hello World!
    </Button>
  ),
  args: {
    styles: 'outline',
  },
};

export const Plain: Story = {
  render: (props) => (
    <Button
      {...props}
    >
      Hello World!
    </Button>
  ),
  args: {
    styles: 'plain',
  },
};

export const Solid: Story = {
  render: (props) => (
    <Button
      {...props}
    >
      Hello World!
    </Button>
  ),
  args: {
    styles: 'solid',
    colors: 'dark/zinc',
  },
};
