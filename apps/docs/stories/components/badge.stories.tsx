import type { Meta, StoryObj } from "@storybook/react";

import Badge, { BadgeStyles } from "@incomplete/ux.badge";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: Object.keys(BadgeStyles.variants.color),
      control: { type: 'select' },
      defaultValue: 'zinc',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <Badge {...props} >Badge</Badge>
  ),
  args: {
    color: 'zinc',
  },
};
