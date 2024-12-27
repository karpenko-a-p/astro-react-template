import { Meta, StoryObj } from '@storybook/react';

import { Flex } from './Flex';

type Story = StoryObj<typeof Flex>;

const meta: Meta<typeof Flex> = {
  component: Flex,
};

export default meta;

export const FlexStory: Story = {
  args: {
    style: { backgroundColor: 'greenyellow' },
    children: 'Flex container',
  },
};

export const FlexDirection: Story = {
  args: {
    flexDirection: 'column',
    children: (
      <>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </>
    ),
  },
};

export const FlexGap: Story = {
  args: {
    flexDirection: 'column',
    gap: 20,
    children: (
      <>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </>
    ),
  },
};

export const FlexWrap: Story = {
  args: {
    gap: '100%',
    flexWrap: 'wrap',
    children: (
      <>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
      </>
    ),
  },
};

export const FlexCenter: Story = {
  args: {
    style: { height: 100 },
    alignItems: 'center',
    justifyContent: 'center',
    children: 'Paragraph',
  },
};
