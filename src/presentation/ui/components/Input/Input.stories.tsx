import { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';

type Story = StoryObj<typeof Input>;

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;

export const InputStory: Story = {
  args: {
    label: 'Input label',
  },
};

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Input label',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Input label',
    hasError: true,
    errorMessage: 'Something went wrong',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Input label',
    hasError: true,
    disabled: true,
    errorMessage: 'Something went wrong',
  },
};

export const Description: Story = {
  args: {
    placeholder: 'Placeholder',
    label: 'Input label',
    description: 'Some data about input',
    hasError: true,
    errorMessage: 'Something went wrong',
    star: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <Input
          label="Label"
          placeholder="placeholder"
          description="description"
          errorMessage="Error message"
          hasError={true}
          size="xs"
        />
        <Input
          label="Label"
          placeholder="placeholder"
          description="description"
          errorMessage="Error message"
          hasError={true}
          size="sm"
        />
        <Input
          label="Label"
          placeholder="placeholder"
          description="description"
          errorMessage="Error message"
          hasError={true}
          size="md"
        />
        <Input
          label="Label"
          placeholder="placeholder"
          description="description"
          errorMessage="Error message"
          hasError={true}
          size="lg"
        />
        <Input
          label="Label"
          placeholder="placeholder"
          description="description"
          errorMessage="Error message"
          hasError={true}
          size="xl"
        />
      </div>
    </>
  ),
};
