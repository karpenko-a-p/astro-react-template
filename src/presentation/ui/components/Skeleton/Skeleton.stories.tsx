import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

type Story = StoryObj<typeof Skeleton>;

const meta: Meta<typeof Skeleton> = {
  component: Skeleton,
};

export default meta;

export const SkeletonStory: Story = {};

export const SkeletonHeight: Story = {
  args: {
    height: 50
  }
};

export const SkeletonRound: Story = {
  args: {
    height: 100,
    width: 100,
    rounded: true
  }
};


export const SkeletonRepeat: Story = {
  args: {
    repeat: 7
  }
};
