import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, Stack } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import { SearchTextField } from '../../components';
import { useState } from 'react';

export default {
  title: 'Components/SearchTextField',
  component: SearchTextField,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TextField>;

export const Template: ComponentStory<typeof TextField> = () => {
  const [value, setValue] = useState('controlled input search');
  return (
    <Stack direction={'column'} spacing={2}>
      <SearchTextField
        placeholder='Placeholder'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Stack>
  );
};
