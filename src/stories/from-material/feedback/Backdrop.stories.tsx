import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Backdrop, Button, CircularProgress, Stack } from '@mui/material';
import ApesTogetherThemeProvider from '../../../components/ThemeProvider';

export default {
  title: 'Others/feedback/Backdrop',
  component: Backdrop,

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
} as ComponentMeta<typeof Backdrop>;



export const Template: ComponentStory<typeof Backdrop> = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Stack>
      <Button onClick={handleToggle}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </Stack>
  );
}