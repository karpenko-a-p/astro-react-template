import { Meta, StoryObj } from '@storybook/react';
import { IconCheck } from '@tabler/icons-react';

import { Menu } from './Menu';
import { MenuItem } from './MenuItem';

type Story = StoryObj<typeof Menu>;

const meta: Meta<typeof Menu> = {
  component: Menu,
};

export default meta;

export const MenuStory: Story = {
  render: () => (
    <Menu>
      <MenuItem component="text" bold={true}>
        Section
      </MenuItem>
      <MenuItem component="button">Click me</MenuItem>
      <MenuItem component="button">Click me 2</MenuItem>
      <MenuItem component="text">Section 2</MenuItem>
      <MenuItem component="button">Click me 3</MenuItem>
      <MenuItem component="button" disabled={true}>
        Click me 4
      </MenuItem>
    </Menu>
  ),
};

export const MenuIcons: Story = {
  render: () => (
    <Menu>
      <MenuItem component="text" bold={true}>
        Section
      </MenuItem>
      <MenuItem component="button">Click me</MenuItem>
      <MenuItem component="button" leftIcon={<IconCheck />} rightIcon={<IconCheck />}>Click me 2</MenuItem>
      <MenuItem component="text">Section 2</MenuItem>
      <MenuItem component="button" leftIcon={<IconCheck />}>
        Click me 3
      </MenuItem>
      <MenuItem component="button" disabled={true} leftIcon={<IconCheck />}>
        Click me 4
      </MenuItem>
    </Menu>
  ),
};


export const Sizes: Story = {
  render: () => (
    <Menu size="lg">
      <MenuItem size="xs" component="button">Click me</MenuItem>
      <MenuItem size="sm" component="button">Click me</MenuItem>
      <MenuItem size="md" component="button">Click me</MenuItem>
      <MenuItem size="lg" component="button">Click me</MenuItem>
      <MenuItem size="xl" component="button">Click me</MenuItem>
      <MenuItem size="xs" component="text">Section</MenuItem>
      <MenuItem size="sm" component="text">Section</MenuItem>
      <MenuItem size="md" component="text">Section</MenuItem>
      <MenuItem size="lg" component="text">Section</MenuItem>
      <MenuItem size="xl" component="text">Section</MenuItem>
    </Menu>
  ),
};

export const Bolds: Story = {
  render: () => (
    <Menu>
      <MenuItem component="text" bold={400}>Section</MenuItem>
      <MenuItem component="text" bold={500}>Section</MenuItem>
      <MenuItem component="text" bold={600}>Section</MenuItem>
      <MenuItem component="text" bold={700}>Section</MenuItem>
      <MenuItem component="text" bold={800}>Section</MenuItem>
      <MenuItem component="text" bold={900}>Section</MenuItem>
      <MenuItem component="text" bold={true}>Section</MenuItem>
    </Menu>
  ),
};
