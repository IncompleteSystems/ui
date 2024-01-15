import type { Meta, StoryObj } from "@storybook/react";

import Avatar, { AvatarStyles } from "@incomplete/ux.avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: Object.keys(AvatarStyles.variants.color),
      control: { type: 'select' },
      defaultValue: 'dark/zinc',
    },
    size: {
      options: Object.keys(AvatarStyles.variants.size),
      control: { type: 'radio' },
      defaultValue: 'medium',
    },
    shape: {
      options: Object.keys(AvatarStyles.variants.shape),
      control: { type: 'radio' },
      defaultValue: 'circle',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Circle: Story = {
  render: (props) => (
    <Avatar {...props} />
  ),
  args: {
    color: 'dark/zinc',
    size: 'medium',
    initials: 'JD',
    shape: 'circle',
  },
};

export const Square: Story = {
  render: (props) => (
    <Avatar {...props} />
  ),
  args: {
    color: 'dark/zinc',
    size: 'medium',
    initials: 'JD',
    shape: 'square',
  },
};

