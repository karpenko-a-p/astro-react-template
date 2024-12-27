import { Meta, StoryObj } from '@storybook/react';

import { Paper } from './Paper';

type Story = StoryObj<typeof Paper>;

const meta: Meta<typeof Paper> = {
  component: Paper,
};

export default meta;

export const PaperStory: Story = {
  args: {
    children: 'Paper',
  }
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Paper size="xs">Paper</Paper>
      <Paper size="sm">Paper</Paper>
      <Paper size="md">Paper</Paper>
      <Paper size="lg">Paper</Paper>
      <Paper size="xl">Paper</Paper>
    </div>
  ),
};
