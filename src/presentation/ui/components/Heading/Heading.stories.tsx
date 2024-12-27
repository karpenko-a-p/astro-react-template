import { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';

type Story = StoryObj<typeof Heading>;

const meta: Meta<typeof Heading> = {
  component: Heading,
};

export default meta;

export const h1: Story = {
  args: {
    children: 'Heading 1',
  },
};

export const h2: Story = {
  args: {
    children: 'Heading 2',
    tag: 'h2',
  },
};

export const h3: Story = {
  args: {
    children: 'Heading 3',
    tag: 'h3',
  },
};

export const h4: Story = {
  args: {
    children: 'Heading 4',
    tag: 'h4',
  },
};

export const h5: Story = {
  args: {
    children: 'Heading 5',
    tag: 'h5',
  },
};

export const h6: Story = {
  args: {
    children: 'Heading 6',
    tag: 'h6',
  },
};

export const LongT: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <Heading tag="h1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolorum, eaque earum esse eveniet fuga hic nam
        nemo neque nesciunt quisquam rem veniam voluptate. Veritatis.
      </Heading>
      <Heading tag="h2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, natus, praesentium! Aspernatur assumenda,
        consequatur culpa est fuga ipsum laboriosam nihil rem repellendus repudiandae tempora vel.
      </Heading>
      <Heading tag="h3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta impedit maiores perspiciatis praesentium,
        quisquam suscipit. Ad beatae error magni minus possimus provident quaerat quis, repellat.
      </Heading>
      <Heading tag="h4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium deserunt dicta earum error ipsa laborum
        molestiae officia, quas rem temporibus tenetur ullam voluptate. Nihil, recusandae?
      </Heading>
      <Heading tag="h5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, architecto cumque dicta expedita explicabo
        iure nihil non odio perferendis possimus quibusdam rem repudiandae velit voluptatem!
      </Heading>
      <Heading tag="h6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet asperiores assumenda beatae deleniti dolores
        earum, laudantium mollitia optio quasi similique temporibus ullam veritatis. Dolorem.
      </Heading>
    </div>
  ),
};
