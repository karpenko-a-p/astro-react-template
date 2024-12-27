import { Meta, StoryObj } from '@storybook/react';

import { Informer } from './Informer';

type Story = StoryObj<typeof Informer>;

const meta: Meta<typeof Informer> = {
  component: Informer,
};

export default meta;

export const Neutral: Story = {
  args: {
    heading: 'Lorem Ipsum',
    children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci doloribus error eveniet id labore, libero repellendus totam ullam! Asperiores aut corporis, dolore enim exercitationem harum ipsam iste maxime nemo non, perferendis, recusandae ullam voluptatibus. Ab aut debitis deleniti doloribus ex facere ipsam quae quo tenetur voluptate? Aspernatur cupiditate laudantium tempore unde? Animi blanditiis dolor expedita maxime nemo neque quam sed vel veniam! Asperiores minima necessitatibus placeat vel voluptates. Aperiam asperiores debitis dignissimos dolor, dolore doloremque in laborum libero minima officiis omnis quibusdam quis soluta veritatis vitae. Assumenda, blanditiis excepturi fugit laborum laudantium, minus, nobis nostrum perspiciatis quod tempora ullam voluptatibus.',
  }
};

export const Success: Story = {
  args: {
    heading: 'Lorem Ipsum',
    type: 'success',
    children: 'consectetur adipisicing elit. Adipisci doloribus error eveniet id labore',
  }
};

export const Warn: Story = {
  args: {
    heading: 'Lorem Ipsum',
    type: 'warn',
    children: 'consectetur adipisicing elit. Adipisci doloribus error eveniet id labore',
  }
};

export const Error: Story = {
  args: {
    heading: 'Lorem Ipsum',
    type: 'error',
    children: 'consectetur adipisicing elit. Adipisci doloribus error eveniet id labore',
  }
};

export const Info: Story = {
  args: {
    heading: 'Lorem Ipsum',
    type: 'info',
    children: 'consectetur adipisicing elit. Adipisci doloribus error eveniet id labore',
  }
};

export const Heading1: Story = {
  args: {
    headingTag: 'h1',
    heading: 'Lorem Ipsum',
    children: 'consectetur adipisicing elit. Adipisci doloribus error eveniet id labore',
  }
};


export const Children: Story = {
  args: {
    heading: 'Lorem Ipsum',
    children: <>
      <p>Something Else</p>
      <p>Something Else 2</p>
      <b>Strong text</b>
      la la la
    </>,
  }
};