import { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

type Story = StoryObj<typeof Link>;

const meta: Meta<typeof Link> = {
  component: Link,
};

export default meta;

export const LinkStory: Story = {
  args: {
    href: '#',
    children: 'go to products',
  },
};

export const LinkSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Link href="#" size="xs">
        Link
      </Link>
      <Link href="#" size="md">
        Link
      </Link>
      <Link href="#" size="sm">
        Link
      </Link>
      <Link href="#" size="lg">
        Link
      </Link>
      <Link href="#" size="xl">
        Link
      </Link>
    </div>
  ),
};
