import type { Meta, StoryObj } from "@storybook/react";

import AppBar, { AppBarNav, AppBarNavItem, AppBarStyles } from "@incomplete/ux.appbar";
import Icon from "@incomplete/ux.icon";

import { faHouse } from '@fortawesome/free-solid-svg-icons';


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
      <AppBarNav>
        <AppBarNavItem href={""}>
          <Icon icon={faHouse} className='h-6 w-6' />
        </AppBarNavItem>
      </AppBarNav>
    </AppBar>
  ),
  args: {
    color: 'indigo',
  },
};
