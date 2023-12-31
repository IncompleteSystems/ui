import type { Meta, StoryObj } from "@storybook/react";
import { Slot } from "@incomplete/ui.slots";

const meta: Meta<typeof Slot> = {
  component: Slot,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof Slot>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Main: Story = {
  render: (props) => (
    <Slot
      {...props}
    >
      <div>Hello</div>
    </Slot>
  ),
  name: "Slot",
  args: {
  },
};
