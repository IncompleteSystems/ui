import type { Meta, StoryObj } from "@storybook/react";

import Card, { CardStyles } from "@incomplete/ux.card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    color: {
      options: Object.keys(CardStyles.variants.color),
      control: { type: 'select' },
      defaultValue: 'dark',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const CardWithHeader: Story = {
  render: (props) => (
    <Card {...props}>
      <Card.Header>
        HelloWorld!
      </Card.Header>
      <Card.Body>
        HelloWorld!
      </Card.Body>
    </Card>
  ),
  args: {
    color: 'dark',
  },
};

export const CardWithBody: Story = {
  render: (props) => (
    <Card {...props}>
      <Card.Body>
        HelloWorld!
      </Card.Body>
    </Card>
  ),
  args: {
    color: 'dark',
  },
};

export const CardWithHeaderAndFooter: Story = {
  render: (props) => (
    <Card {...props}>
      <Card.Header>
        HelloWorld!
      </Card.Header>
      <Card.Body>
        HelloWorld!
      </Card.Body>
      <Card.Footer>
        HelloWorld!
      </Card.Footer>
    </Card>
  ),
  args: {
    color: 'dark',
  },
};