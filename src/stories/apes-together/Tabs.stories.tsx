import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';

export default {
  title: 'Components/Tabs',
  component: Tabs,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Tabs>;

export const Primary: ComponentStory<typeof Tabs> = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant='scrollable'
      scrollButtons={false}
      allowScrollButtonsMobile
      aria-label='visible arrows tabs example'
    >
      <Tab label='Item #1' />
      <Tab label='Item #2' />
      <Tab label='Item #3' />
      <Tab label='Item #4' />
      <Tab label='Item #5' />
    </Tabs>
  );
};
