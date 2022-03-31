import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider/ThemeProvider';

export default {
  title: 'Others/inputs/Checkbox',
  component: Checkbox,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Checkbox>;

export const Template: ComponentStory<typeof Checkbox> = () => <Checkbox />;
