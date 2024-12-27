import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

type Story = StoryObj<typeof Text>;

const meta: Meta<typeof Text> = {
  component: Text,
};

export default meta;

export const Paragraph: Story = {
  args: {
    children: 'Lorem Ipsum',
  },
};

export const Span: Story = {
  args: {
    children: 'Lorem Ipsum',
    tag: 'span',
  },
};

export const Weights: Story = {
  render: () => (
    <div style={{ gap: 24, display: 'flex', flexDirection: 'column' }}>
      <Text bold={400}>Lorem ipsum dolor sit amet</Text>
      <Text bold={500}>Lorem ipsum dolor sit amet</Text>
      <Text bold={600}>Lorem ipsum dolor sit amet</Text>
      <Text bold={700}>Lorem ipsum dolor sit amet</Text>
      <Text bold={800}>Lorem ipsum dolor sit amet</Text>
      <Text bold={900}>Lorem ipsum dolor sit amet</Text>
      <Text bold={true}>Lorem ipsum dolor sit amet</Text>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ gap: 24, display: 'flex', flexDirection: 'column' }}>
      <Text variant="primary">Lorem ipsum dolor sit amet</Text>
      <Text variant="secondary">Lorem ipsum dolor sit amet</Text>
      <Text variant="disabled">Lorem ipsum dolor sit amet</Text>
      <Text variant="error">Lorem ipsum dolor sit amet</Text>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ gap: 24, display: 'flex', flexDirection: 'column' }}>
      <Text size="xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem doloremque eum nulla obcaecati
        quisquam repudiandae suscipit velit vitae, voluptas. Amet animi aperiam atque aut consequuntur deleniti
        dignissimos earum eius eum ex explicabo id libero minus nobis obcaecati odit pariatur possimus quae quibusdam
        quis quisquam sint sunt tenetur ullam veniam vero, voluptatibus. Ab adipisci alias aut autem beatae consequatur
        dolor dolorem doloremque eos, esse eum exercitationem expedita explicabo fugit ipsa ipsam ipsum iste labore
        laborum magnam magni nihil nobis nulla obcaecati omnis placeat quae quasi quidem quisquam quos sapiente
        temporibus unde vero voluptas voluptatem voluptates voluptatibus! Ad quia ullam veritatis.
      </Text>
      <Text size="sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem doloremque eum nulla obcaecati
        quisquam repudiandae suscipit velit vitae, voluptas. Amet animi aperiam atque aut consequuntur deleniti
        dignissimos earum eius eum ex explicabo id libero minus nobis obcaecati odit pariatur possimus quae quibusdam
        quis quisquam sint sunt tenetur ullam veniam vero, voluptatibus. Ab adipisci alias aut autem beatae consequatur
        dolor dolorem doloremque eos, esse eum exercitationem expedita explicabo fugit ipsa ipsam ipsum iste labore
        laborum magnam magni nihil nobis nulla obcaecati omnis placeat quae quasi quidem quisquam quos sapiente
        temporibus unde vero voluptas voluptatem voluptates voluptatibus! Ad quia ullam veritatis.
      </Text>
      <Text size="md">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem doloremque eum nulla obcaecati
        quisquam repudiandae suscipit velit vitae, voluptas. Amet animi aperiam atque aut consequuntur deleniti
        dignissimos earum eius eum ex explicabo id libero minus nobis obcaecati odit pariatur possimus quae quibusdam
        quis quisquam sint sunt tenetur ullam veniam vero, voluptatibus. Ab adipisci alias aut autem beatae consequatur
        dolor dolorem doloremque eos, esse eum exercitationem expedita explicabo fugit ipsa ipsam ipsum iste labore
        laborum magnam magni nihil nobis nulla obcaecati omnis placeat quae quasi quidem quisquam quos sapiente
        temporibus unde vero voluptas voluptatem voluptates voluptatibus! Ad quia ullam veritatis.
      </Text>
      <Text size="lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem doloremque eum nulla obcaecati
        quisquam repudiandae suscipit velit vitae, voluptas. Amet animi aperiam atque aut consequuntur deleniti
        dignissimos earum eius eum ex explicabo id libero minus nobis obcaecati odit pariatur possimus quae quibusdam
        quis quisquam sint sunt tenetur ullam veniam vero, voluptatibus. Ab adipisci alias aut autem beatae consequatur
        dolor dolorem doloremque eos, esse eum exercitationem expedita explicabo fugit ipsa ipsam ipsum iste labore
        laborum magnam magni nihil nobis nulla obcaecati omnis placeat quae quasi quidem quisquam quos sapiente
        temporibus unde vero voluptas voluptatem voluptates voluptatibus! Ad quia ullam veritatis.
      </Text>
      <Text size="xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto autem doloremque eum nulla obcaecati
        quisquam repudiandae suscipit velit vitae, voluptas. Amet animi aperiam atque aut consequuntur deleniti
        dignissimos earum eius eum ex explicabo id libero minus nobis obcaecati odit pariatur possimus quae quibusdam
        quis quisquam sint sunt tenetur ullam veniam vero, voluptatibus. Ab adipisci alias aut autem beatae consequatur
        dolor dolorem doloremque eos, esse eum exercitationem expedita explicabo fugit ipsa ipsam ipsum iste labore
        laborum magnam magni nihil nobis nulla obcaecati omnis placeat quae quasi quidem quisquam quos sapiente
        temporibus unde vero voluptas voluptatem voluptates voluptatibus! Ad quia ullam veritatis.
      </Text>
    </div>
  ),
};
