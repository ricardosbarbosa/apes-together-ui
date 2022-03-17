import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, CircularProgress, LinearProgress, Stack } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Others/feedback/CircularProgress',
  component: CircularProgress,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
} as ComponentMeta<typeof CircularProgress>;


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof CircularProgress> = (args) => {
  return (
    <Stack direction={'column'} spacing={2}>
      <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" />
        <CircularProgress color="success" />
        <CircularProgress color="inherit" />
      </Stack>
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    </Stack>
  );
}