import { Meta, StoryObj } from '@storybook/react';
import { IconCheck } from '@tabler/icons-react';

import { Badge } from './Badge';

type Story = StoryObj<typeof Badge>;

const meta: Meta<typeof Badge> = {
  component: Badge,
};

export default meta;

export const ContainerStory: Story = {
  args: {
    children: 'I am badge',
  }
};

export const Types: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Badge type="neutral">Badge</Badge>
        <Badge type="info">Badge</Badge>
        <Badge type="success">Badge</Badge>
        <Badge type="warn">Badge</Badge>
        <Badge type="error">Badge</Badge>
      </div>
    </>
  ),
};

export const Bold: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Badge bold={true} type="neutral">
          Badge
        </Badge>
        <Badge bold={true} type="info">
          Badge
        </Badge>
        <Badge bold={true} type="success">
          Badge
        </Badge>
        <Badge bold={true} type="warn">
          Badge
        </Badge>
        <Badge bold={true} type="error">
          Badge
        </Badge>
      </div>
    </>
  ),
};

export const Icons: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
        <Badge icon={<IconCheck />} type="neutral">Badge</Badge>
        <Badge icon={<IconCheck />} type="info">Badge</Badge>
        <Badge icon={<IconCheck />} type="success">Badge</Badge>
        <Badge icon={<IconCheck />} type="warn">Badge</Badge>
        <Badge icon={<IconCheck />} type="error">Badge</Badge>
      </div>
    </>
  ),
};