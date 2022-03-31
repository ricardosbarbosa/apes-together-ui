import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, Stack, InputAdornment } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';

export default {
  title: 'Components/TextFieldLeadingAddOn',
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

export const TextFieldLeadingAddOn: ComponentStory<typeof TextField> = () => {
  return (
    <Stack direction={'column'} spacing={5} alignItems='flex-start'>
      <TextField
        defaultValue={'Input'}
        InputProps={{
          startAdornment: <InputAdornment position='start'>https://</InputAdornment>,
        }}
      />
      <TextField
        placeholder='Placeholder'
        InputProps={{
          startAdornment: <InputAdornment position='start'>https://</InputAdornment>,
        }}
      />
      <TextField
        defaultValue={'Hover'}
        InputProps={{
          startAdornment: <InputAdornment position='start'>https://</InputAdornment>,
        }}
      />
      <TextField
        defaultValue={'Focus'}
        InputProps={{
          startAdornment: <InputAdornment position='start'>https://</InputAdornment>,
        }}
      />
    </Stack>
  );
};
