import type { Meta, StoryObj } from "@storybook/react";

import AppBar, { AppBarStyles } from "@incomplete/ux.appbar";

import { faDashboard, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';


const meta: Meta<typeof AppBar> = {
  title: "Components/AppBar",
  component: AppBar,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: Object.keys(AppBarStyles.variants.color),
      control: { type: 'select' },
      defaultValue: 'indigo',
    },
  },
};

export default meta;

type Story = StoryObj<typeof AppBar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <AppBar {...props}>
      <AppBar.Nav>
        <AppBar.NavItem icon={faHouse} />
        <AppBar.NavItem icon={faDashboard} />
        <AppBar.NavItem icon={faUsers} />
      </AppBar.Nav>
    </AppBar>
  ),
  args: {
    color: 'theme',
  },
};
