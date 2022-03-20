import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, CircularProgress, LinearProgress, Stack } from '@mui/material';
import ApesTogetherThemeProvider from '../../../components/ThemeProvider';

export default {
  title: 'Others/feedback/CircularProgress',
  component: CircularProgress,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ApesTogetherThemeProvider>
        <Story />
      </ApesTogetherThemeProvider>
    ),
  ],
} as ComponentMeta<typeof CircularProgress>;



export const Template: ComponentStory<typeof CircularProgress> = () => {
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