import { type StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  addons: ['@storybook/addon-essentials'],
  stories: ['../**/*.stories.@(j|t)sx'],
};

export default config;
