import { Meta, StoryObj } from '@storybook/react';

import { Container } from './Container';

type Story = StoryObj<typeof Container>;

const meta: Meta<typeof Container> = {
  component: Container,
};

export default meta;

export const ContainerStory: Story = {
  args: {
    style: { backgroundColor: 'greenyellow' },
    children: <div style={{ backgroundColor: 'tomato', padding: 16 }}>
      Зеленый - границы контейнера, красный - содержимое контейнера, стили для вида
    </div>,
  }
};
