import type { Meta, StoryObj } from "@storybook/react";

import Card, { CardStyles, CardHeader, CardBody, CardFooter } from "@incomplete/ux.card";
import Icon from "@incomplete/ux.icon";

import { faHouse } from '@fortawesome/free-solid-svg-icons';


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
      <CardHeader>
        HelloWorld!
      </CardHeader>
      <CardBody>
        HelloWorld!
      </CardBody>
    </Card>
  ),
  args: {
    color: 'dark',
  },
};

export const CardWithBody: Story = {
  render: (props) => (
    <Card {...props}>
      <CardBody>
        HelloWorld!
      </CardBody>
    </Card>
  ),
  args: {
    color: 'dark',
  },
};

export const CardWithHeaderAndFooter: Story = {
  render: (props) => (
    <Card {...props}>
      <CardHeader>
        HelloWorld!
      </CardHeader>
      <CardBody>
        HelloWorld!
      </CardBody>
      <CardFooter>
        HelloWorld!
      </CardFooter>
    </Card>
  ),
  args: {
    color: 'dark',
  },
};