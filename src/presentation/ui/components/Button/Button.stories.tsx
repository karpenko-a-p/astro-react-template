import { Meta, StoryObj } from '@storybook/react';
import { Icon12Hours, IconAxe } from '@tabler/icons-react';

import { Button } from './Button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button size="xl">Button</Button>
      <Button size="lg">Button</Button>
      <Button size="md">Button</Button>
      <Button size="sm">Button</Button>
      <Button size="xs">Button</Button>
    </div>
  ),
};

export const SecondarySizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button variant="secondary" size="xl">
        Button
      </Button>
      <Button variant="secondary" size="lg">
        Button
      </Button>
      <Button variant="secondary" size="md">
        Button
      </Button>
      <Button variant="secondary" size="sm">
        Button
      </Button>
      <Button variant="secondary" size="xs">
        Button
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <Button disabled={true}>Button</Button>
      <Button variant="secondary" disabled={true}>
        Button
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
      <Button loading={true}>Button</Button>
      <Button variant="secondary" loading={true}>
        Button
      </Button>
    </div>
  ),
};

export const Icons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexDirection: 'column' }}>
      <div>
        <p style={{ marginBottom: 20 }}>Primary</p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />}>
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />}>Button</Button>
          <Button rightIcon={<IconAxe />}>Button</Button>
          <Button rightIcon={<IconAxe />} disabled={true}>
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} loading={true}>
            Button
          </Button>
        </div>
      </div>

      <div>
        <p style={{ marginBottom: 20 }}>Secondary</p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} variant="secondary">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} variant="secondary">
            Button
          </Button>
          <Button rightIcon={<IconAxe />} variant="secondary">
            Button
          </Button>
          <Button rightIcon={<IconAxe />} disabled={true} variant="secondary">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} loading={true} variant="secondary">
            Button
          </Button>
        </div>
      </div>

      <div>
        <p style={{ marginBottom: 20 }}>Sizes</p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="xl">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="lg">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="md">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="sm">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="xs">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="xl" variant="secondary">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="lg" variant="secondary">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="md" variant="secondary">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="sm" variant="secondary">
            Button
          </Button>
          <Button leftIcon={<Icon12Hours />} rightIcon={<IconAxe />} size="xs" variant="secondary">
            Button
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const Links: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'center' }}>
      <Button href="/link" size="xs">Button</Button>
      <Button href="/link" size="sm">Button</Button>
      <Button href="/link" size="md">Button</Button>
      <Button href="/link" size="lg">Button</Button>
      <Button href="/link" size="xl">Button</Button>
      <Button href="/link" variant="secondary" size="xs">Button</Button>
      <Button href="/link" variant="secondary" size="sm">Button</Button>
      <Button href="/link" variant="secondary" size="md">Button</Button>
      <Button href="/link" variant="secondary" size="lg">Button</Button>
      <Button href="/link" variant="secondary" size="xl">Button</Button>
      <Button href="/link" disabled={true}>Button</Button>
      <Button href="/link" disabled={true} loading={true}>Button</Button>
      <Button href="/link" loading={true}>Button</Button>
      <Button href="/link" variant="secondary" disabled={true}>Button</Button>
      <Button href="/link" variant="secondary" disabled={true} loading={true}>Button</Button>
      <Button href="/link" variant="secondary" loading={true}>Button</Button>
      <Button href="/link" leftIcon={<Icon12Hours />} rightIcon={<IconAxe />}>Button</Button>
      <Button href="/link" variant="secondary" leftIcon={<Icon12Hours />} rightIcon={<IconAxe />}>Button</Button>
    </div>
  ),
};