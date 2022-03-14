import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../components/ThemeProvider';
import Switch from '../components/Switch';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Switch',
  component: Switch,
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
} as ComponentMeta<typeof Switch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Switch> = (args) => <Switch />;
