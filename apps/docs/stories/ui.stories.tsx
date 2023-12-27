import type { Meta, StoryObj } from "@storybook/react";
import ui from "@incomplete/ui";

const UIDiv = ui.div`test-class-base`;

const meta: Meta<typeof UIDiv> = {
  component: UIDiv,
  argTypes: {
  },
};

export default meta;

type Story = StoryObj<typeof UIDiv>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Main: Story = {
  render: (props) => (
    <UIDiv
      {...props}
      className={[
        'test-class',
        { 'test-class2': true, 'test-class3': false },
        ['test-class4', 'test-class5'],
        {
          'test-class3': true,
          'test-class5': false,
        },
      ]}
    >
      <span>Hello World!</span>
    </UIDiv>
  ),
  name: "UIDiv",
  args: {
  },
};
