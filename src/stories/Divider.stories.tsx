import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '@mui/material';
import ThemeProvider from '../components/ThemeProvider';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Divider',
  component: Divider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story/>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Divider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Divider> = (args) => <Divider />;
Template.args = {}

export const Thin = Template.bind({});
