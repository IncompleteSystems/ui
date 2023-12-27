import type { Meta, StoryObj } from "@storybook/react";
import ui from "@incomplete/ui";

const Card = ui.div`rounded-lg border bg-slate-100 text-white shadow-sm`;

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Main: Story = {
  render: (props) => (
    <Card {...props}>
      <span>Hello World!</span>
    </Card>
  ),
  name: "Card",
  args: {
  },
};
