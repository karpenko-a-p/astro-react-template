import { Meta, StoryObj } from '@storybook/react';
import { CSSProperties } from 'react';

import { Grid } from './Grid';
import { GridItem } from './GridItem';

type Story = StoryObj<typeof Grid>;

const meta: Meta<typeof Grid> = {
  component: Grid,
};

export default meta;

export const GridStory: Story = {
  args: {
    style: { backgroundColor: 'greenyellow' },
    children: 'Grid container',
  },
};

export const GridColumns: Story = {
  args: {
    columns: 3,
    gap: 20,
    children: (
      <>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <p>Paragraph 4</p>
      </>
    ),
  },
};

const styleGridChildColumns: CSSProperties = {
  backgroundColor: 'tomato',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
};

export const Grid12Columns: Story = {
  args: {
    children: (
      <>
        <p style={styleGridChildColumns}>Paragraph 1</p>
        <p style={styleGridChildColumns}>Paragraph 2</p>
        <p style={styleGridChildColumns}>Paragraph 3</p>
        <p style={styleGridChildColumns}>Paragraph 4</p>
        <p style={styleGridChildColumns}>Paragraph 5</p>
        <p style={styleGridChildColumns}>Paragraph 6</p>
        <p style={styleGridChildColumns}>Paragraph 7</p>
        <p style={styleGridChildColumns}>Paragraph 8</p>
        <p style={styleGridChildColumns}>Paragraph 9</p>
        <p style={styleGridChildColumns}>Paragraph 10</p>
        <p style={styleGridChildColumns}>Paragraph 11</p>
        <p style={styleGridChildColumns}>Paragraph 12</p>
      </>
    ),
  },
};

export const GridWithGridItems: Story = {
  args: {
    children: (
      <>
        <GridItem column="span 6" style={styleGridChildColumns}>
          Paragraph 1
        </GridItem>
        <GridItem column="span 6" style={styleGridChildColumns}>
          Paragraph 2
        </GridItem>
      </>
    ),
  },
};
