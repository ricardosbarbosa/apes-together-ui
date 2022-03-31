import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, Stack } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';

export default {
  title: 'Components/TextField',
  component: TextField,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TextField>;

export const TextFields: ComponentStory<typeof TextField> = () => {
  return (
    <Stack direction={'column'} spacing={5} alignItems='flex-start'>
      <TextField defaultValue='Input' />
      <TextField placeholder='Placeholder' />
      <TextField defaultValue='Hover' />
      <TextField defaultValue='Focus' />
      <TextField defaultValue='Disabled' disabled />
      <TextField defaultValue='Error' error />
      <TextField defaultValue='Error' error />
    </Stack>
  );
};
